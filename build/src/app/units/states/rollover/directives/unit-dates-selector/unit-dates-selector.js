angular.module('doubtfire.units.states.rollover.directives.unit-dates-selector', []).directive('unitDatesSelector', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'units/states/rollover/directives/unit-dates-selector/unit-dates-selector.tpl.html',
    controller: ["$scope", "$state", "$rootScope", "DoubtfireConstants", "Unit", "RolloverUnit", "alertService", "analyticsService", "unitService", "TeachingPeriod", function($scope, $state, $rootScope, DoubtfireConstants, Unit, RolloverUnit, alertService, analyticsService, unitService, TeachingPeriod) {
      $scope.calOptions = {
        startOpened: false,
        endOpened: false
      };
      $scope.externalName = DoubtfireConstants.ExternalName;
      $scope.teachingPeriods = TeachingPeriod.query();
      $scope.open = function($event, pickerData) {
        $event.preventDefault();
        $event.stopPropagation();
        if (pickerData === 'start') {
          $scope.calOptions.startOpened = !$scope.calOptions.startOpened;
          return $scope.calOptions.endOpened = false;
        } else {
          $scope.calOptions.startOpened = false;
          return $scope.calOptions.endOpened = !$scope.calOptions.endOpened;
        }
      };
      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };
      return $scope.saveUnit = function() {
        var saveData;
        if ($scope.unit.convenors) {
          delete $scope.unit.convenors;
        }
        unitService.loadedUnitRoles = null;
        if ($scope.unit.start_date && $scope.unit.start_date.getMonth) {
          $scope.unit.start_date = ($scope.unit.start_date.getFullYear()) + "-" + ($scope.unit.start_date.getMonth() + 1) + "-" + ($scope.unit.start_date.getDate());
        }
        if ($scope.unit.end_date && $scope.unit.end_date.getMonth) {
          $scope.unit.end_date = ($scope.unit.end_date.getFullYear()) + "-" + ($scope.unit.end_date.getMonth() + 1) + "-" + ($scope.unit.end_date.getDate());
        }
        if ($scope.unit.teaching_period_id) {
          saveData = {
            id: $scope.unit.id,
            teaching_period_id: $scope.unit.teaching_period_id
          };
        } else {
          saveData = {
            id: $scope.unit.id,
            start_date: $scope.unit.start_date,
            end_date: $scope.unit.end_date
          };
        }
        return RolloverUnit.create(saveData, function(response) {
          alertService.add("success", "Unit created.", 2000);
          analyticsService.event('Unit Admin', 'Saved New Unit');
          return $state.go("admin/units");
        }, function(response) {
          return alertService.add('danger', "Error creating unit - " + response.data.error);
        });
      };
    }]
  };
});
