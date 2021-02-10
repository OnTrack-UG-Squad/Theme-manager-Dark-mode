angular.module('doubtfire.units.states.tasks.viewer', ['doubtfire.units.states.tasks.viewer.directives']).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('units/tasks/viewer', {
    parent: 'units/tasks',
    url: '/viewer',
    templateUrl: "units/states/tasks/viewer/viewer.tpl.html",
    controller: "TaskViewerStateCtrl",
    data: {
      task: "Task List",
      pageTitle: "_Home_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin']
    }
  });
}]).controller('TaskViewerStateCtrl', ["$scope", "Unit", function($scope, Unit) {
  $scope.unitTasks = $scope.unit.task_definitions;
  return $scope.selectedTaskDef = $scope.unitTasks[0];
}]);
