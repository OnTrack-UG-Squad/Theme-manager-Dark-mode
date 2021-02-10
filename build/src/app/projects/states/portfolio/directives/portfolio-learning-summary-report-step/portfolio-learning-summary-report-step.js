angular.module('doubtfire.projects.states.portfolio.directives.portfolio-learning-summary-report-step', []).directive('portfolioLearningSummaryReportStep', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'projects/states/portfolio/directives/portfolio-learning-summary-report-step/portfolio-learning-summary-report-step.tpl.html',
    controller: ["$scope", function($scope) {
      $scope.forceLSRSubmit = false;
      $scope.acceptUploadNewLearningSummary = false;
      return $scope.addNewFile = function(newFile) {
        $scope.addNewFilesToPortfolio(newFile);
        $scope.projectHasDraftLearningSummaryReport = false;
        $scope.acceptUploadNewLearningSummary = false;
        return $scope.forceLSRSubmit = false;
      };
    }]
  };
});
