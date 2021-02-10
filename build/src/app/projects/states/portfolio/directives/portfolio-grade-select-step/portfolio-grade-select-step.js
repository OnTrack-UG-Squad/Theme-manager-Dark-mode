angular.module('doubtfire.projects.states.portfolio.directives.portfolio-grade-select-step', []).directive('portfolioGradeSelectStep', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'projects/states/portfolio/directives/portfolio-grade-select-step/portfolio-grade-select-step.tpl.html',
    controller: ["$scope", "Project", "projectService", "gradeService", function($scope, Project, projectService, gradeService) {
      $scope.grades = gradeService.grades;
      $scope.agreedToAssessmentCriteria = $scope.projectHasLearningSummaryReport();
      return $scope.chooseGrade = function(idx) {
        return Project.update({
          id: $scope.project.project_id,
          submitted_grade: idx
        }, function(project) {
          $scope.project.submitted_grade = project.submitted_grade;
          return $scope.project.burndown_chart_data = project.burndown_chart_data;
        });
      };
    }]
  };
});
