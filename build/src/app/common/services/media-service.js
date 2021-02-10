angular.module("doubtfire.common.services.media-service", []).factory("mediaService", ["$rootScope", "$timeout", "$sce", function($rootScope, $timeout, $sce) {
  var mediaService;
  mediaService = {};
  mediaService.audioCtx = (mediaService.audioCtx != null) || (new (window.AudioContext || webkitAudioContext)());
  mediaService.getMimeType = function() {
    var mimeType;
    mimeType = 'audio/webm';
    if (!MediaRecorder.isTypeSupported(mimeType)) {
      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        mimeType = 'audio/ogg';
      } else {
        mimeType = '';
      }
    }
    return mimeType;
  };
  return mediaService;
}]);
