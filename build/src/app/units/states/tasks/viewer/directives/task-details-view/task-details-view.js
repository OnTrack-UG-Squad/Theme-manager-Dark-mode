angular.module('doubtfire.units.states.tasks.viewer.directives.task-details-view', []).directive('taskDetailsView', function() {
  return {
    restrict: 'E',
    templateUrl: 'units/states/tasks/viewer/directives/task-details-view/task-details-view.tpl.html',
    scope: {
      taskDef: '=',
      unit: '='
    },
    controller: ["$scope", "Task", "listenerService", function($scope, Task, listenerService) {}]
  };
});
