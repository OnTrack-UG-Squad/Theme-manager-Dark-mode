angular.module('doubtfire.teaching-periods.states.edit.directives.teaching-period-details-editor', []).directive('teachingPeriodDetailsEditor', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'admin/states/teaching-periods/teaching-period-edit/directives/teaching-period-details-editor/teaching-period-details-editor.tpl.html',
    controller: ["$scope", "$state", "DoubtfireConstants", "alertService", "TeachingPeriod", function($scope, $state, DoubtfireConstants, alertService, TeachingPeriod) {
      $scope.calOptions = {
        startOpened: false,
        endOpened: false,
        activeUntilOpened: false
      };
      TeachingPeriod.query();
      $scope.externalName = DoubtfireConstants.ExternalName;
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
      return $scope.saveTeachingPeriod = function() {
        var saveData;
        if ($scope.teachingPeriod.start_date && $scope.teachingPeriod.start_date.getMonth) {
          $scope.teachingPeriod.start_date = ($scope.teachingPeriod.start_date.getFullYear()) + "-" + ($scope.teachingPeriod.start_date.getMonth() + 1) + "-" + ($scope.teachingPeriod.start_date.getDate());
        }
        if ($scope.teachingPeriod.end_date && $scope.teachingPeriod.end_date.getMonth) {
          $scope.teachingPeriod.end_date = ($scope.teachingPeriod.end_date.getFullYear()) + "-" + ($scope.teachingPeriod.end_date.getMonth() + 1) + "-" + ($scope.teachingPeriod.end_date.getDate());
        }
        if ($scope.teachingPeriod.active_until && $scope.teachingPeriod.active_until.getMonth) {
          $scope.teachingPeriod.active_until = ($scope.teachingPeriod.active_until.getFullYear()) + "-" + ($scope.teachingPeriod.active_until.getMonth() + 1) + "-" + ($scope.teachingPeriod.active_until.getDate());
        }
        saveData = {
          period: $scope.teachingPeriod.period,
          year: $scope.teachingPeriod.year,
          start_date: $scope.teachingPeriod.start_date,
          end_date: $scope.teachingPeriod.end_date,
          active_until: $scope.teachingPeriod.active_until
        };
        if ($scope.teachingPeriod.id === -1) {
          return TeachingPeriod.create({
            teaching_period: saveData
          }, function(createdTeachingPeriod) {
            $scope.teachingperiods.loadedPeriods.push(createdTeachingPeriod);
            return alertService.add("success", "Teaching Period created.", 2000);
          }, function(response) {
            return alertService.add("danger", response.data.error, 6000);
          });
        } else {
          return TeachingPeriod.update({
            id: $scope.teachingPeriod.id,
            teaching_period: saveData
          }).$promise.then((function(updatedTeachingPeriod) {
            return alertService.add("success", "Teaching Period updated.", 2000);
          }), function(response) {
            return alertService.add("danger", "Failed to update teaching period. " + response.data.error, 6000);
          });
        }
      };
    }]
  };
});
