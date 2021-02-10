angular.module("doubtfire.common.services.recorder-service", []).factory("recorderService", ["$rootScope", "$timeout", "$sce", function($rootScope, $timeout, $sce) {
  var RecorderService;
  return RecorderService = (function() {
    function RecorderService() {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this.em = document.createDocumentFragment();
      this.state = 'inactive';
      this.audioCtx = {};
      this.chunks = [];
      this.chunkType = '';
      this.usingMediaRecorder = window.MediaRecorder || false;
      this.encoderMimeType = 'audio/wav';
      this.config = {
        broadcastAudioProcessEvents: false,
        createAnalyserNode: true,
        createDynamicsCompressorNode: false,
        forceScriptProcessor: false,
        manualEncoderId: 'wav',
        micGain: 1.0,
        processorBufferSize: 2048,
        stopTracksAndCloseCtxWhenFinished: true,
        userMediaConstraints: {
          audio: true
        }
      };
      return;
    }

    RecorderService.prototype.startRecording = function() {
      var that;
      if (this.state !== 'inactive') {
        return;
      }
      if (!navigator || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.error('Missing support for navigator.mediaDevices.getUserMedia');
        return;
      }
      this.audioCtx = new AudioContext();
      this.micGainNode = this.audioCtx.createGain();
      this.outputGainNode = this.audioCtx.createGain();
      if (this.config.createDynamicsCompressorNode) {
        this.dynamicsCompressorNode = audioCtx.createDynamicsCompressor();
      }
      if (this.config.createAnalyserNode) {
        this.analyserNode = this.audioCtx.createAnalyser();
      }
      if (this.config.forceScriptProcessor || this.config.broadcastAudioProcessEvents || !this.usingMediaRecorder) {
        this.processorNode = this.audioCtx.createScriptProcessor(this.config.processorBufferSize, 1, 1);
      }
      if (this.audioCtx.createMediaStreamDestination) {
        this.destinationNode = this.audioCtx.createMediaStreamDestination();
      } else {
        this.destinationNode = this.audioCtx.destination;
      }
      if (!this.usingMediaRecorder) {
        this.encoderWorker = new Worker('/assets/wav-worker.js');
        this.encoderMimeType = 'audio/wav';
        that = this;
        this.encoderWorker.addEventListener('message', function(e) {
          var event;
          event = new Event('dataavailable');
          if (that.config.manualEncoderId === 'ogg') {
            event.data = e.data;
          } else {
            event.data = new Blob(e.data, {
              type: that.encoderMimeType
            });
          }
          return that._onDataAvailable(event);
        });
      }
      that = this;
      return navigator.mediaDevices.getUserMedia(this.config.userMediaConstraints).then(function(stream) {
        return that._startRecordingWithStream(stream);
      })["catch"](function(error) {});
    };

    RecorderService.prototype.setMicGain = function(newGain) {
      this.config.micGain = newGain;
      if (this.audioCtx && this.micGainNode) {
        this.micGainNode.gain.setValueAtTime(newGain, this.audioCtx.currentTime);
      }
    };

    RecorderService.prototype._startRecordingWithStream = function(stream) {
      var nextNode, that;
      this.micAudioStream = stream;
      this.inputStreamNode = this.audioCtx.createMediaStreamSource(this.micAudioStream);
      this.audioCtx = this.inputStreamNode.context;
      if (this.onGraphSetupWithInputStream) {
        this.onGraphSetupWithInputStream(this.inputStreamNode);
      }
      this.inputStreamNode.connect(this.micGainNode);
      this.micGainNode.gain.setValueAtTime(this.config.micGain, this.audioCtx.currentTime);
      nextNode = this.micGainNode;
      if (this.dynamicsCompressorNode) {
        this.micGainNode.connect(this.dynamicsCompressorNode);
        nextNode = this.dynamicsCompressorNode;
      }
      this.state = 'recording';
      if (this.processorNode) {
        nextNode.connect(this.processorNode);
        this.processorNode.connect(this.outputGainNode);
        that = this;
        this.processorNode.onaudioprocess = function(e) {
          return that._onAudioProcess(e);
        };
      } else {
        nextNode.connect(this.outputGainNode);
      }
      if (this.analyserNode) {
        nextNode.connect(this.analyserNode);
      }
      this.outputGainNode.connect(this.destinationNode);
      if (this.usingMediaRecorder) {
        this.mediaRecorder = new MediaRecorder(this.destinationNode.stream);
        that = this;
        this.mediaRecorder.addEventListener('dataavailable', function(evt) {
          return that._onDataAvailable(evt);
        });
        this.mediaRecorder.addEventListener('error', function(evt) {
          return this._onError(evt);
        });
        this.mediaRecorder.start();
      } else {
        this.outputGainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
      }
    };

    RecorderService.prototype._onAudioProcess = function(e) {
      if (this.config.broadcastAudioProcessEvents) {
        this.em.dispatchEvent(new CustomEvent('onaudioprocess', {
          detail: {
            inputBuffer: e.inputBuffer,
            outputBuffer: e.outputBuffer
          }
        }));
      }
      if (!this.usingMediaRecorder) {
        if (this.state === 'recording') {
          if (this.config.broadcastAudioProcessEvents) {
            this.encoderWorker.postMessage(['encode', e.outputBuffer.getChannelData(0)]);
          } else {
            this.encoderWorker.postMessage(['encode', e.inputBuffer.getChannelData(0)]);
          }
        }
      }
    };

    RecorderService.prototype.processChunks = function() {
      if (this.state === 'inactive') {
        return;
      }
      this._dumpChunks();
    };

    RecorderService.prototype._dumpChunks = function() {
      if (this.usingMediaRecorder) {
        this.mediaRecorder.requestData();
      }
      if (!this.usingMediaRecorder) {
        this.encoderWorker.postMessage(['dump', this.audioCtx.sampleRate]);
        return clearInterval(this.slicing);
      }
    };

    RecorderService.prototype.stopRecording = function() {
      if (this.state === 'inactive') {
        return;
      }
      if (this.usingMediaRecorder) {
        this.state = 'inactive';
        this.mediaRecorder.stop();
      } else {
        this.state = 'inactive';
        this.encoderWorker.postMessage(['dump', this.audioCtx.sampleRate]);
        clearInterval(this.slicing);
      }
    };

    RecorderService.prototype._onDataAvailable = function(evt) {
      var blob, blobUrl, recording;
      this.chunks.push(evt.data);
      this.chunkType = evt.data.type;
      blob = new Blob(this.chunks, {
        'type': this.chunkType
      });
      blobUrl = URL.createObjectURL(blob);
      recording = {
        ts: new Date().getTime(),
        blobUrl: blobUrl,
        mimeType: blob.type,
        size: blob.size,
        blob: blob
      };
      this.em.dispatchEvent(new CustomEvent('recording', {
        detail: {
          recording: recording
        }
      }));
      this.chunks = [];
      if (this.state !== 'inactive') {
        return;
      }
      this._cleanup();
    };

    RecorderService.prototype._cleanup = function() {
      this.chunkType = null;
      if (this.destinationNode) {
        this.destinationNode.disconnect();
        this.destinationNode = null;
      }
      if (this.outputGainNode) {
        this.outputGainNode.disconnect();
        this.outputGainNode = null;
      }
      if (this.analyserNode) {
        this.analyserNode.disconnect();
        this.analyserNode = null;
      }
      if (this.processorNode) {
        this.processorNode.disconnect();
        this.processorNode = null;
      }
      if (this.encoderWorker) {
        this.encoderWorker.postMessage(['close']);
        this.encoderWorker = null;
      }
      if (this.dynamicsCompressorNode) {
        this.dynamicsCompressorNode.disconnect();
        this.dynamicsCompressorNode = null;
      }
      if (this.micGainNode) {
        this.micGainNode.disconnect();
        this.micGainNode = null;
      }
      if (this.inputStreamNode) {
        this.inputStreamNode.disconnect();
        this.inputStreamNode = null;
      }
      if (this.config.stopTracksAndCloseCtxWhenFinished) {
        this.micAudioStream.getTracks().forEach(function(track) {
          return track.stop();
        });
        this.micAudioStream = null;
        this.audioCtx.close();
        this.audioCtx = null;
      }
    };

    RecorderService.prototype._onError = function(evt) {
      this.em.dispatchEvent(new Event('error'));
    };

    return RecorderService;

  })();
}]);
