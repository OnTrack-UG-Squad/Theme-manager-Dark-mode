angular.module('doubtfire.tasks.task-submission-viewer', []).directive('taskSubmissionViewer', function() {
  return {
    restrict: 'E',
    templateUrl: 'tasks/task-submission-viewer/task-submission-viewer.tpl.html',
    scope: {
      project: "=project",
      task: "=task"
    },
    controller: ["$scope", "TaskFeedback", function($scope, TaskFeedback) {
      $scope.notSubmitted = function(task) {
        return !task.has_pdf && (!task.processing_pdf);
      };
      $scope.loadingDetails = function(task) {
        return task.needsSubmissionDetails();
      };
      return $scope.$watch('task', function(newTask) {
        if (newTask == null) {
          return;
        }
        newTask.getSubmissionDetails();
        $scope.taskUrl = TaskFeedback.getTaskUrl(newTask);
        return $scope.taskFilesURL = TaskFeedback.getTaskFilesUrl(newTask);
      });
    }]
  };
});
