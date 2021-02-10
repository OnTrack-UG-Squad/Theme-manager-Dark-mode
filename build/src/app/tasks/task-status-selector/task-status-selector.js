angular.module('doubtfire.tasks.task-status-selector', []).directive('taskStatusSelector', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'tasks/task-status-selector/task-status-selector.tpl.html',
    scope: {
      task: "=task",
      assessingUnitRole: "=assessingUnitRole",
      inMenu: "=inMenu",
      triggerTransition: "=triggerTransition"
    },
    controller: ["$scope", "taskService", function($scope, taskService) {
      $scope.taskService = taskService;
      $scope.studentStatuses = taskService.switchableStates.student;
      $scope.tutorStatuses = taskService.switchableStates.tutor;
      return $scope.taskEngagementConfig = {
        studentTriggers: $scope.studentStatuses.map(taskService.statusData),
        tutorTriggers: $scope.tutorStatuses.map(taskService.statusData)
      };
    }]
  };
});
