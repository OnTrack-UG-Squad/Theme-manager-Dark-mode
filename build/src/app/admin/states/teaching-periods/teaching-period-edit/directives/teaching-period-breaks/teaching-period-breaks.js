angular.module('doubtfire.teaching-periods.states.edit.directives.teaching-period-breaks', []).directive('teachingPeriodBreaks', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'admin/states/teaching-periods/teaching-period-edit/directives/teaching-period-breaks/teaching-period-breaks.tpl.html',
    controller: ["$scope", "$state", "alertService", "CreateBreakModal", function($scope, $state, alertService, CreateBreakModal) {
      $scope.sortOrder = "start_date";
      $scope.reverse = true;
      return $scope.addBreak = function(teachingPeriod) {
        return CreateBreakModal.show(teachingPeriod);
      };
    }]
  };
});
