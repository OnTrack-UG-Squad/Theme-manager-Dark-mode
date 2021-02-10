angular.module('doubtfire.projects.states.dashboard.directives.task-dashboard.directives.task-assessment-card', []).directive('taskAssessmentCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'projects/states/dashboard/directives/task-dashboard/directives/task-assessment-card/task-assessment-card.tpl.html',
    scope: {
      task: '='
    },
    controller: ["$scope", "taskService", "gradeService", function($scope, taskService, gradeService) {
      $scope.gradeNames = gradeService.grades;
      $scope.hasBeenGivenStars = function(t) {
        return (t != null) && (t.quality_pts > 0 || _.includes(taskService.gradeableStatuses, t.status));
      };
      return $scope.hasBeenGraded = function(t) {
        return (t != null) && (_.isNumber(t.grade));
      };
    }]
  };
});
