angular.module('doubtfire.projects.states.dashboard.directives.task-dashboard.directives.task-outcomes-card', []).directive('taskOutcomesCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'projects/states/dashboard/directives/task-dashboard/directives/task-outcomes-card/task-outcomes-card.tpl.html',
    scope: {
      taskDef: '=',
      unit: '='
    },
    controller: ["$scope", "$filter", "listenerService", "outcomeService", function($scope, $filter, listenerService, outcomeService) {
      var listeners;
      if ($scope.unit == null) {
        return;
      }
      listeners = listenerService.listenTo($scope);
      return listeners.push($scope.$watch('taskDef.id', function() {
        return $scope.alignments = $scope.unit.staffAlignmentsForTaskDefinition($scope.taskDef);
      }));
    }]
  };
});
