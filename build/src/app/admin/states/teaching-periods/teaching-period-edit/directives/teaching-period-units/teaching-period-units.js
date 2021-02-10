angular.module('doubtfire.teaching-periods.states.edit.directives.teaching-period-units', []).directive('teachingPeriodUnits', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'admin/states/teaching-periods/teaching-period-edit/directives/teaching-period-units/teaching-period-units.tpl.html',
    controller: ["$scope", "$state", "alertService", "RolloverTeachingPeriodModal", function($scope, $state, alertService, RolloverTeachingPeriodModal) {
      $scope.sortOrder = "start_date";
      $scope.reverse = true;
      $scope.currentPage = 1;
      $scope.maxSize = 5;
      $scope.pageSize = 15;
      return $scope.rolloverTeachingPeriodModal = function(teachingPeriod) {
        var teachingPeriodToRollover;
        teachingPeriodToRollover = teachingPeriod != null ? teachingPeriod : {};
        return RolloverTeachingPeriodModal.show(teachingPeriodToRollover);
      };
    }]
  };
});
