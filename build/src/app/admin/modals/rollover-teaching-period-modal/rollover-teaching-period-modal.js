angular.module('doubtfire.admin.modals.rollover-teaching-period-modal', []).factory('RolloverTeachingPeriodModal', ["$modal", function($modal) {
  var RolloverTeachingPeriodModal;
  RolloverTeachingPeriodModal = {};
  RolloverTeachingPeriodModal.show = function(teachingPeriod) {
    return $modal.open({
      templateUrl: 'admin/modals/rollover-teaching-period-modal/rollover-teaching-period-modal.tpl.html',
      controller: 'RolloverTeachingPeriodModal',
      resolve: {
        teachingperiod: function() {
          return teachingPeriod;
        }
      }
    });
  };
  return RolloverTeachingPeriodModal;
}]).controller('RolloverTeachingPeriodModal', ["$scope", "$modalInstance", "alertService", "analyticsService", "currentUser", "TeachingPeriod", "teachingperiod", "auth", function($scope, $modalInstance, alertService, analyticsService, currentUser, TeachingPeriod, teachingperiod, auth) {
  $scope.teachingperiod = teachingperiod;
  $scope.teachingPeriods = TeachingPeriod.query();
  $scope.rolloverTo = {};
  return $scope.rollover = function() {
    return TeachingPeriod.rollover.create({
      existing_teaching_period_id: $scope.teachingperiod.id,
      new_teaching_period_id: $scope.rolloverTo
    }, function(createdTeachingPeriod) {
      $scope.teachingPeriods.loadedPeriods.push(createdTeachingPeriod);
      return alertService.add("success", "Teaching Period created.", 2000);
    }, function(response) {
      return alertService.add("danger", response.data.error, 6000);
    });
  };
}]);
