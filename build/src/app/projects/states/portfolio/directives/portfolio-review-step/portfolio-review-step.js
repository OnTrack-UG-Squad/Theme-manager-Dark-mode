angular.module('doubtfire.projects.states.portfolio.directives.portfolio-review-step', []).directive('portfolioReviewStep', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'projects/states/portfolio/directives/portfolio-review-step/portfolio-review-step.tpl.html',
    controller: ["$scope", "alertService", "Project", "DoubtfireConstants", "ConfirmationModal", function($scope, alertService, Project, DoubtfireConstants, ConfirmationModal) {
      $scope.externalName = DoubtfireConstants.ExternalName;
      $scope.$watch('project.portfolio_available', function() {
        $scope.hasLSR = $scope.projectHasLearningSummaryReport();
        $scope.hasTasksSelected = $scope.selectedTasks().length > 0;
        $scope.portfolioIsCompiling = $scope.project.compile_portfolio;
        return $scope.canCompilePortfolio = (!$scope.portfolioIsCompiling) && $scope.hasTasksSelected && $scope.hasLSR && !$scope.project.portfolio_available;
      });
      $scope.toggleCompileProject = function() {
        $scope.project.compile_portfolio = !$scope.project.compile_portfolio;
        return Project.update({
          id: $scope.project.project_id,
          compile_portfolio: $scope.project.compile_portfolio
        }, function(response) {
          $scope.portfolioIsCompiling = true;
          $scope.canCompilePortfolio = false;
          return $scope.project.portfolio_status = 0.5;
        });
      };
      return $scope.deletePortfolio = function() {
        var doDelete;
        doDelete = function() {
          return $scope.portfolioSubmission["delete"]({
            id: $scope.project.project_id
          }, function(response) {
            $scope.project.portfolio_available = false;
            $scope.project.portfolio_status = 0;
            return alertService.add('info', "Portfolio has been deleted!", 5000);
          });
        };
        return ConfirmationModal.show("Delete Portfolio?", 'Are you sure you want to delete your portfolio? You will need to recreate your porfolio again if you do so.', doDelete);
      };
    }]
  };
});
