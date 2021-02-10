angular.module('doubtfire.projects.states.portfolio.directives.portfolio-tasks-step', []).directive('portfolioTasksStep', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'projects/states/portfolio/directives/portfolio-tasks-step/portfolio-tasks-step.tpl.html',
    controller: ["$scope", function($scope) {
      return $scope.noTasksSelected = function() {
        return $scope.selectedTasks().length === 0;
      };
    }]
  };
});
