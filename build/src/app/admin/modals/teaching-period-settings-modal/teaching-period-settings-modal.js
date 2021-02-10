angular.module('doubtfire.admin.modals.teaching-period-settings-modal', []).factory('TeachingPeriodSettingsModal', ["$modal", function($modal) {
  var TeachingPeriodSettingsModal;
  TeachingPeriodSettingsModal = {};
  TeachingPeriodSettingsModal.show = function(teachingPeriod) {
    return $modal.open({
      templateUrl: 'admin/modals/teaching-period-settings-modal/teaching-period-settings-modal.tpl.html',
      controller: 'TeachingPeriodSettingsModal',
      resolve: {
        teachingperiod: function() {
          return teachingPeriod;
        }
      }
    });
  };
  return TeachingPeriodSettingsModal;
}]).controller('TeachingPeriodSettingsModal', ["$scope", "$modalInstance", "DoubtfireConstants", "alertService", "analyticsService", "currentUser", "TeachingPeriod", "teachingperiod", "auth", function($scope, $modalInstance, DoubtfireConstants, alertService, analyticsService, currentUser, TeachingPeriod, teachingperiod, auth) {
  var createNewTeachingPeriod, updateExistingTeachingPeriod;
  $scope.teachingperiod = teachingperiod || {};
  $scope.isNew = (teachingperiod != null ? teachingperiod.id : void 0) === void 0;
  $scope.calOptions = {
    startOpened: false,
    endOpened: false,
    activeUntilOpened: false
  };
  $scope.externalName = DoubtfireConstants.ExternalName;
  if ($scope.isNew) {
    $scope.teachingperiods = TeachingPeriod.query();
  }
  $scope.currentUser = currentUser;
  $scope.modalState = {};
  $scope.open = function($event, pickerData) {
    $event.preventDefault();
    $event.stopPropagation();
    if (pickerData === 'start') {
      $scope.calOptions.startOpened = !$scope.calOptions.startOpened;
      $scope.calOptions.endOpened = false;
      return $scope.calOptions.activeUntilOpened = false;
    } else if (pickerData === 'end') {
      $scope.calOptions.startOpened = false;
      $scope.calOptions.endOpened = !$scope.calOptions.endOpened;
      return $scope.calOptions.activeUntilOpened = false;
    } else {
      $scope.calOptions.startOpened = false;
      $scope.calOptions.endOpened = false;
      return $scope.calOptions.activeUntilOpened = !$scope.calOptions.activeUntilOpened;
    }
  };
  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };
  createNewTeachingPeriod = function() {
    return TeachingPeriod.create({
      teaching_period: $scope.teachingperiod
    }).$promise.then((function(createdTeachingPeriod) {
      $modalInstance.close(createdTeachingPeriod);
      if ($scope.teachingperiods) {
        $scope.teachingperiods.loadedPeriods.push(createdTeachingPeriod);
        return alertService.add("success", "Teaching Period created.", 2000);
      }
    }), (function(response) {
      if (response.data.error != null) {
        return alertService.add("danger", "Error: " + response.data.error, 6000);
      }
    }));
  };
  updateExistingTeachingPeriod = function() {
    return TeachingPeriod.update({
      id: $scope.teachingperiod.id,
      teaching_period: $scope.teachingperiod
    }).$promise.then((function(updatedTeachingPeriod) {
      $modalInstance.close(updatedTeachingPeriod);
      return alertService.add("success", "Teaching Period updated.", 2000);
    }), (function(response) {
      if (response.data.error != null) {
        return alertService.add("danger", "Error: " + response.data.error, 6000);
      }
    }));
  };
  return $scope.saveTeachingPeriod = function() {
    if ($scope.teachingperiod.start_date && $scope.teachingperiod.start_date.getMonth) {
      $scope.teachingperiod.start_date = ($scope.teachingperiod.start_date.getFullYear()) + "-" + ($scope.teachingperiod.start_date.getMonth() + 1) + "-" + ($scope.teachingperiod.start_date.getDate());
    }
    if ($scope.teachingperiod.end_date && $scope.teachingperiod.end_date.getMonth) {
      $scope.teachingperiod.end_date = ($scope.teachingperiod.end_date.getFullYear()) + "-" + ($scope.teachingperiod.end_date.getMonth() + 1) + "-" + ($scope.teachingperiod.end_date.getDate());
    }
    if ($scope.teachingperiod.active_until && $scope.teachingperiod.active_until.getMonth) {
      $scope.teachingperiod.active_until = ($scope.teachingperiod.active_until.getFullYear()) + "-" + ($scope.teachingperiod.active_until.getMonth() + 1) + "-" + ($scope.teachingperiod.active_until.getDate());
    }
    if ($scope.isNew) {
      return createNewTeachingPeriod();
    } else {
      return updateExistingTeachingPeriod();
    }
  };
}]);
