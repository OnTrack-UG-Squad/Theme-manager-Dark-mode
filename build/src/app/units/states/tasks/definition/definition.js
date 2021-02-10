angular.module('doubtfire.units.states.tasks.definition', ['doubtfire.units.states.tasks.inbox.directives']).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('units/tasks/definition', {
    parent: 'units/tasks',
    url: '/definition/{taskKey:any}',
    templateUrl: "units/states/tasks/inbox/inbox.tpl.html",
    controller: "TaskDefinitionStateCtrl",
    params: {
      taskKey: {
        dynamic: true
      }
    },
    data: {
      task: "Mark by Task Definition",
      pageTitle: "_Home_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin']
    }
  });
}]).controller('TaskDefinitionStateCtrl', ["$scope", "Unit", function($scope, Unit) {
  var ref;
  $scope.taskData.source = Unit.tasksForDefinition;
  $scope.showSearchOptions = true;
  return $scope.filters = {
    taskDefinitionIdSelected: (ref = _.first($scope.unit.task_definitions)) != null ? ref.id : void 0
  };
}]);
