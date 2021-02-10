angular.module('doubtfire.projects.states.portfolio.directives.portfolio-add-extra-files-step', []).directive('portfolioAddExtraFilesStep', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'projects/states/portfolio/directives/portfolio-add-extra-files-step/portfolio-add-extra-files-step.tpl.html',
    controller: ["$scope", "PortfolioSubmission", function($scope, PortfolioSubmission) {
      $scope.uploadType = 'document';
      return $scope.$watch('uploadType', function(newType) {
        if (newType == null) {
          return;
        }
        return $scope.uploadFileData = $scope.portfolioSubmission.otherFileFileUploadData(newType);
      });
    }]
  };
});
