angular.module('doubtfire.projects.states.dashboard.directives.task-dashboard.directives.task-submission-card', []).directive('taskSubmissionCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'projects/states/dashboard/directives/task-dashboard/directives/task-submission-card/task-submission-card.tpl.html',
    scope: {
      task: '='
    },
    controller: ["$scope", "listenerService", "TaskFeedback", "taskService", "UploadSubmissionModal", function($scope, listenerService, TaskFeedback, taskService, UploadSubmissionModal) {
      var listeners, reapplySubmissionData;
      listeners = listenerService.listenTo($scope);
      reapplySubmissionData = function() {
        return $scope.task.getSubmissionDetails(function() {
          $scope.canReuploadEvidence = $scope.task.canReuploadEvidence();
          $scope.canRegeneratePdf = _.includes(taskService.pdfRegeneratableStatuses, $scope.task.status) && $scope.task.has_pdf;
          $scope.submission = {
            isProcessing: $scope.task.processing_pdf,
            isUploaded: $scope.task.has_pdf
          };
          return $scope.urls = {
            pdf: TaskFeedback.getTaskUrl($scope.task, true),
            files: TaskFeedback.getTaskFilesUrl($scope.task)
          };
        });
      };
      listeners.push($scope.$watch('task.id', function() {
        if ($scope.task == null) {
          return;
        }
        return reapplySubmissionData();
      }));
      $scope.uploadAlternateFiles = function() {
        return taskService.presentTaskSubmissionModal($scope.task, $scope.task.status, true);
      };
      return $scope.regeneratePdf = function() {
        return $scope.task.recreateSubmissionPdf();
      };
    }]
  };
});
