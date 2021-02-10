angular.module('doubtfire.units.states.edit.directives.unit-details-editor', []).directive('unitDetailsEditor', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'units/states/edit/directives/unit-details-editor/unit-details-editor.tpl.html',
    controller: ["$scope", "$state", "$rootScope", "DoubtfireConstants", "Unit", "alertService", "unitService", "TeachingPeriod", function($scope, $state, $rootScope, DoubtfireConstants, Unit, alertService, unitService, TeachingPeriod) {
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
      $scope.unitTypeAheadData = unitService.unitTypeAheadData;
      $scope.studentSearch = "";
      return $scope.saveUnit = function() {
        var saveData;
        if ($scope.unit.convenors) {
          delete $scope.unit.convenors;
        }
        if ($scope.unit.start_date && $scope.unit.start_date.getMonth) {
          $scope.unit.start_date = ($scope.unit.start_date.getFullYear()) + "-" + ($scope.unit.start_date.getMonth() + 1) + "-" + ($scope.unit.start_date.getDate());
        }
        if ($scope.unit.end_date && $scope.unit.end_date.getMonth) {
          $scope.unit.end_date = ($scope.unit.end_date.getFullYear()) + "-" + ($scope.unit.end_date.getMonth() + 1) + "-" + ($scope.unit.end_date.getDate());
        }
        saveData = {
          name: $scope.unit.name,
          code: $scope.unit.code,
          description: $scope.unit.description,
          active: $scope.unit.active,
          auto_apply_extension_before_deadline: $scope.unit.auto_apply_extension_before_deadline,
          send_notifications: $scope.unit.send_notifications,
          enable_sync_timetable: $scope.unit.enable_sync_timetable,
          enable_sync_enrolments: $scope.unit.enable_sync_enrolments,
          draft_task_definition_id: $scope.unit.draft_task_definition_id
        };
        if ($scope.unit.teaching_period_id) {
          saveData.teaching_period_id = $scope.unit.teaching_period_id;
        } else {
          saveData.start_date = $scope.unit.start_date;
          saveData.end_date = $scope.unit.end_date;
        }
        if ($scope.unit.id === -1) {
          return Unit.create({
            unit: saveData
          }, function(unit) {
            return $scope.saveSuccess(unit);
          }, function(response) {
            return alertService.add("danger", response.data.error, 6000);
          });
        } else {
          return Unit.update({
            id: $scope.unit.id,
            unit: saveData
          }, function(unit) {
            return alertService.add("success", "Unit updated.", 2000);
          }, function(response) {
            return alertService.add("danger", "Failed to update unit. " + response.data.error, 6000);
          });
        }
      };
    }]
  };
});
