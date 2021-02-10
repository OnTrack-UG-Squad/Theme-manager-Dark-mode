angular.module('doubtfire.tasks.task-feedback-assessor', []).directive('taskFeedbackAssessor', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'tasks/task-feedback-assessor/task-feedback-assessor.tpl.html',
    scope: {
      task: "=task",
      unit: "=unit",
      assessingUnitRole: "=assessingUnitRole",
      unitRole: "=unitRole",
      onStatusUpdate: "=onStatusUpdate",
      viewOptions: "="
    },
    controller: ["$scope", "taskService", function($scope, taskService) {
      $scope.comment = {
        text: ""
      };
      $scope.triggerTransition = function(status) {
        if ($scope.comment.text.length > 0) {
          taskService.addComment($scope.task, $scope.comment.text, function(success) {
            return $scope.comment.text = "";
          });
        }
        return taskService.updateTaskStatus($scope.unit, $scope.task.project(), $scope.task, status);
      };
      if (($scope.onStatusUpdate != null) && _.isFunction($scope.onStatusUpdate)) {
        return $scope.$on('TaskStatusUpdated', function(event, args) {
          return $scope.onStatusUpdate(args.status);
        });
      }
    }]
  };
});
