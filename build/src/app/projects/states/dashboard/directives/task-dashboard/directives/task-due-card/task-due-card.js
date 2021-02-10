angular.module('doubtfire.projects.states.dashboard.directives.task-dashboard.directives.task-due-card', []).directive('taskDueCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'projects/states/dashboard/directives/task-dashboard/directives/task-due-card/task-due-card.tpl.html',
    scope: {
      task: '='
    },
    controller: ["$scope", "alertService", "ExtensionModal", function($scope, alertService, ExtensionModal) {}]
  };
});
