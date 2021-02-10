var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

angular.module('doubtfire.tasks.task-submission-wizard', []).directive('taskSubmissionWizard', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      task: '=',
      project: '=',
      unit: '=',
      assessingUnitRole: '=?'
    },
    templateUrl: 'tasks/task-submission-wizard/task-submission-wizard.tpl.html',
    controller: ["$scope", "$timeout", "Task", "taskService", "alertService", "projectService", "groupService", "analyticsService", function($scope, $timeout, Task, taskService, alertService, projectService, groupService, analyticsService) {
      var UPLOAD_STATUS_TYPES, UPLOAD_TYPES, ref, ref1, ref2, ref3, revertChanges;
      UPLOAD_STATUS_TYPES = ['ready_to_mark', 'need_help'];
      UPLOAD_TYPES = ['ready_to_mark', 'need_help', 'reupload_evidence'];
      $scope.states = {
        initial: 'initial',
        uploadFiles: 'uploadFiles',
        groupMemberContribution: 'groupMemberContribution'
      };
      revertChanges = function(task) {
        var ref;
        if (task.definition.upload_requirements.length > 0 && ($scope.uploadType != null) && (ref = $scope.uploadType, indexOf.call(UPLOAD_STATUS_TYPES, ref) >= 0) && ($scope.oldStatus != null) && $scope.oldStatus !== task.status) {
          if ($scope.oldStatus != null) {
            task.status = $scope.oldStatus;
          }
          return alertService.add("info", "No file(s) uploaded. Status reverted.", 4000);
        }
      };
      $scope.$watch('task', function(task, oldTask) {
        var i, len, ref, ref1, upload;
        $scope.state = $scope.states.initial;
        revertChanges(oldTask);
        $scope.oldStatus = angular.copy($scope.task.status);
        $scope.uploadType = (ref = task.status, indexOf.call(UPLOAD_STATUS_TYPES, ref) >= 0) ? task.status : void 0;
        $scope.files = {};
        ref1 = task.definition.upload_requirements;
        for (i = 0, len = ref1.length; i < len; i++) {
          upload = ref1[i];
          $scope.files[upload.key] = {
            name: upload.name,
            type: upload.type
          };
        }
        $scope.url = Task.generateSubmissionUrl($scope.project, $scope.task);
        $scope.numberOfFiles = task.definition.upload_requirements.length;
        $scope.isGroupTask = groupService.isGroupTask($scope.task);
        return $scope.inGroupForTask = projectService.getGroupForTask($scope.project, $scope.task) != null;
      });
      $scope.$watch('task.status', function(newStatus) {
        var uploadType;
        if (newStatus === $scope.uploadType) {
          return;
        }
        uploadType = indexOf.call(UPLOAD_STATUS_TYPES, newStatus) >= 0 ? newStatus : void 0;
        return $scope.setUploadType(uploadType);
      });
      $scope.isUploading = null;
      $scope.helpLabel = '';
      $scope.setHelpLabel = function(text) {
        if (text == null) {
          text = '';
        }
        return $scope.helpLabel = text;
      };
      $scope.uploadTypes = {
        ready_to_mark: {
          icon: taskService.statusIcons['ready_to_mark'],
          text: taskService.statusLabels['ready_to_mark'],
          "class": 'ready-to-mark',
          hide: (ref = $scope.task.status) === 'demonstrate' || ref === 'discuss' || ref === 'do_not_resubmit' || ref === 'complete' || ref === 'fail'
        },
        need_help: {
          icon: taskService.statusIcons['need_help'],
          text: taskService.statusLabels['need_help'],
          "class": 'need-help',
          hide: (ref1 = $scope.task.status) === 'demonstrate' || ref1 === 'discuss' || ref1 === 'do_not_resubmit' || ref1 === 'complete' || ref1 === 'fail'
        },
        reupload_evidence: {
          icon: 'fa fa-recycle',
          text: "new evidence for portfolio",
          "class": 'btn-info',
          hide: (ref2 = $scope.task.status) !== 'demonstrate' && ref2 !== 'discuss' && ref2 !== 'do_not_resubmit' && ref2 !== 'complete' && ref2 !== 'fail'
        }
      };
      $scope.setUploadType = function(type) {
        $scope.uploadType = type;
        if (indexOf.call(UPLOAD_STATUS_TYPES, type) >= 0) {
          $scope.task.status = type;
        }
        if (indexOf.call(UPLOAD_TYPES, type) >= 0) {
          return $scope.state = $scope.isGroupTask && $scope.state !== $scope.states.uploadFiles ? $scope.states.groupMemberContribution : $scope.states.uploadFiles;
        }
      };
      $scope.onSuccess = function(response) {
        var asUser, updateTaskStatusFunc;
        updateTaskStatusFunc = function() {
          taskService.processTaskStatusChange($scope.unit, $scope.project, $scope.task, response.status, response);
          return $scope.oldStatus = angular.copy($scope.task.status);
        };
        $timeout(updateTaskStatusFunc, 1500);
        asUser = $scope.assessingUnitRole != null ? $scope.assessingUnitRole.role : 'Student';
        analyticsService.event('Task Submit Form', "Updated Status as " + asUser, taskService.statusLabels[$scope.task.status]);
        return analyticsService.event('Task Submit Form', "Files Uploaded", void 0, $scope.numberOfFiles);
      };
      $scope.onComplete = function() {
        return $scope.state = $scope.states.initial;
      };
      $scope.$on('$destroy', function() {
        return revertChanges($scope.task);
      });
      $scope.recreateTask = function() {
        return taskService.recreatePDF($scope.task, null);
      };
      $scope.allowRegeneratePdf = ((ref3 = $scope.task.status) === 'demonstrate' || ref3 === 'ready_to_mark' || ref3 === 'discuss' || ref3 === 'complete') && $scope.task.has_pdf;
      $scope.team = {
        members: []
      };
      $scope.payload = {};
      $scope.mapTeamToPayload = function() {
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
      $scope.onBeforeUpload = function() {
        if (groupService.isGroupTask($scope.task)) {
          $scope.payload.contributions = $scope.mapTeamToPayload();
        } else {
          $scope.payload.contributions = {};
        }
        if ($scope.uploadType === 'need_help') {
          return $scope.payload.trigger = 'need_help';
        }
      };
      return $scope.setState = function(newState) {
        return $scope.state = newState;
      };
    }]
  };
});
