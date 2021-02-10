angular.module('doubtfire.tasks.modals.upload-submission-modal', []).factory('UploadSubmissionModal', ["$modal", "alertService", function($modal, alertService) {
  var UploadSubmissionModal;
  UploadSubmissionModal = {};
  UploadSubmissionModal.show = function(task, reuploadEvidence) {
    if (task.isGroupTask() && !task.studentInAGroup()) {
      alertService.add('danger', "This is a group assignment. Join a " + task.definition.group_set.name + " group set to submit this task.", 8000);
      return null;
    }
    return $modal.open({
      templateUrl: 'tasks/modals/upload-submission-modal/upload-submission-modal.tpl.html',
      controller: 'UploadSubmissionModalCtrl',
      size: 'lg',
      keyboard: false,
      backdrop: 'static',
      resolve: {
        task: function() {
          return task;
        },
        reuploadEvidence: function() {
          return reuploadEvidence;
        }
      }
    });
  };
  return UploadSubmissionModal;
}]).controller('UploadSubmissionModalCtrl', ["$scope", "$rootScope", "$timeout", "$modalInstance", "Task", "taskService", "task", "reuploadEvidence", "groupService", "projectService", "alertService", "outcomeService", "PrivacyPolicy", function($scope, $rootScope, $timeout, $modalInstance, Task, taskService, task, reuploadEvidence, groupService, projectService, alertService, outcomeService, PrivacyPolicy) {
  var initialAlignments, mapAlignmentDataToPayload, mapTeamToPayload, staffAlignments, states, submissionTypes;
  $scope.privacyPolicy = PrivacyPolicy;
  $scope.task = task;
  submissionTypes = _.chain(taskService.submittableStatuses).map(function(status) {
    return [status, taskService.statusLabels[status]];
  }).fromPairs().value();
  if ($scope.task.canReuploadEvidence()) {
    submissionTypes['reupload_evidence'] = 'New Evidence';
  }
  $scope.submissionTypes = submissionTypes;
  $scope.submissionType = reuploadEvidence ? 'reupload_evidence' : $scope.task.status;
  $scope.uploader = {
    url: Task.generateSubmissionUrl($scope.task.project(), $scope.task),
    files: _.chain(task.definition.upload_requirements).map(function(file) {
      return [
        file.key, {
          name: file.name,
          type: file.type
        }
      ];
    }).fromPairs().value(),
    payload: {},
    isUploading: null,
    isReady: null,
    start: null,
    onBeforeUpload: function() {
      if (_.includes(states.shown, 'group')) {
        $scope.uploader.payload.contributions = mapTeamToPayload();
      }
      if (_.includes(states.shown, 'alignment')) {
        $scope.uploader.payload.alignment_data = mapAlignmentDataToPayload();
      }
      if ($scope.submissionType === 'need_help') {
        return $scope.uploader.payload.trigger = 'need_help';
      }
    },
    onSuccess: function(response) {
      return $scope.uploader.response = response;
    },
    onFailureCancel: $modalInstance.dismiss,
    onComplete: function() {
      $modalInstance.close(task);
      if ($scope.comment.trim().length > 0) {
        task.addComment($scope.comment);
      }
      $rootScope.$broadcast('TaskSubmissionUploadComplete', task);
      return $timeout((function() {
        var response;
        response = $scope.uploader.response;
        return taskService.processTaskStatusChange(task.unit(), task.project(), task, response.status, response);
      }), 1500);
    }
  };
  states = {
    all: ['group', 'files', 'alignment', 'comments', 'uploading'],
    shown: [],
    active: null,
    activeIdx: function() {
      return states.shown.indexOf(states.active);
    },
    setActive: function(state) {
      return states.active = state;
    },
    next: function() {
      return states.setActive(states.shown[states.activeIdx() + 1]);
    },
    previous: function() {
      return states.setActive(states.shown[states.activeIdx() - 1]);
    },
    isHidden: function(state) {
      return {
        left: states.shown.indexOf(state) < states.activeIdx(),
        right: states.shown.indexOf(state) > states.activeIdx()
      };
    },
    removed: function() {
      var isRtm, removed;
      isRtm = $scope.submissionType === 'ready_to_mark';
      removed = [];
      if (!isRtm || !task.isGroupTask()) {
        removed.push('group');
      }
      if (!isRtm || !task.unit().ilos.length > 0) {
        removed.push('alignment');
      }
      return removed;
    },
    initialise: function() {
      states.shown = _.difference(states.all, states.removed());
      return states.setActive(_.first(states.shown));
    }
  };
  states.initialise();
  $scope.onSelectNewSubmissionType = function(newType) {
    if (newType !== 'reupload_evidence') {
      $scope.task.status = newType;
    }
    $scope.submissionType = newType;
    return states.initialise();
  };
  $scope.isHidden = states.isHidden;
  $scope.goToState = {
    next: states.next,
    previous: states.previous
  };
  $scope.shouldDisableBtn = {
    next: function() {
      var name, shouldDisableByState;
      shouldDisableByState = {
        group: function() {
          return _.chain($scope.team.members).map('confRating').compact().value().length === 0;
        },
        alignment: function() {
          return _.chain($scope.alignments).map('rating').compact().value().length === 0 || $scope.alignmentsRationale.trim().length === 0;
        },
        files: function() {
          return !$scope.uploader.isReady;
        }
      };
      return (typeof shouldDisableByState[name = states.active] === "function" ? shouldDisableByState[name]() : void 0) || false;
    },
    back: function() {
      return false;
    },
    submit: function() {
      return $scope.comment.trim().length === 0 && $scope.submissionType === 'need_help';
    },
    cancel: function() {
      return $scope.uploader.isUploading;
    }
  };
  $scope.shouldShowBtn = {
    cancel: function() {
      return !$scope.uploader.isUploading;
    },
    next: function() {
      var nextState;
      nextState = states.shown[states.activeIdx() + 1];
      return (nextState != null) && nextState !== 'uploading';
    },
    back: function() {
      var prevState;
      prevState = states.shown[states.activeIdx() - 1];
      return (prevState != null) && prevState !== 'uploading';
    },
    submit: function() {
      return states.activeIdx() === states.shown.indexOf('uploading') - 1;
    }
  };
  $scope.uploadButtonClicked = function() {
    states.shown = _.without(states.shown, 'files');
    states.shown.push('files');
    return $timeout((function() {
      states.setActive('files');
      return $scope.uploader.start();
    }), 251);
  };
  $scope.team = {
    members: []
  };
  mapTeamToPayload = function() {
    var total;
    total = groupService.groupContributionSum($scope.team.members);
    return _.map($scope.team.members, function(member) {
      return {
        project_id: member.project_id,
        pct: (100 * member.rating / total).toFixed(0),
        pts: member.rating
      };
    });
  };
  $scope.comment = "";
  mapAlignmentDataToPayload = function() {
    return _.chain($scope.alignments).map(function(alignment, key) {
      alignment.rationale = $scope.alignmentsRationale;
      alignment.ilo_id = +key;
      return alignment;
    }).filter(function(alignment) {
      return alignment.rating > 0;
    }).value();
  };
  initialAlignments = task.project().task_outcome_alignments.filter(function(a) {
    return a.task_definition_id === task.definition.id;
  });
  $scope.alignmentsRationale = initialAlignments.length > 0 ? initialAlignments[0].description : "";
  staffAlignments = $scope.task.staffAlignments();
  $scope.ilos = _.map(task.unit().ilos, function(ilo) {
    var staffAlignment;
    staffAlignment = _.find(staffAlignments, {
      learning_outcome_id: ilo.id
    });
    if (staffAlignment == null) {
      staffAlignment = {};
    }
    if (staffAlignment.rating == null) {
      staffAlignment.rating = 0;
    }
    staffAlignment.label = outcomeService.alignmentLabels[staffAlignment.rating];
    ilo.staffAlignment = staffAlignment;
    return ilo;
  });
  return $scope.alignments = _.chain(task.unit().ilos).map(function(ilo) {
    var ref, ref1, value;
    value = (ref = initialAlignments.filter(function(a) {
      return a.learning_outcome_id === ilo.id;
    })) != null ? (ref1 = ref[0]) != null ? ref1.rating : void 0 : void 0;
    if (value == null) {
      value = 0;
    }
    return [
      ilo.id, {
        rating: value
      }
    ];
  }).fromPairs().value();
}]);
