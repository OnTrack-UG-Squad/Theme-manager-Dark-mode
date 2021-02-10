angular.module('doubtfire.units.states.edit.directives.unit-staff-editor', []).directive('unitStaffEditor', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'units/states/edit/directives/unit-staff-editor/unit-staff-editor.tpl.html',
    controller: ["$scope", "$rootScope", "Unit", "UnitRole", "alertService", "groupService", function($scope, $rootScope, Unit, UnitRole, alertService, groupService) {
      var temp, users;
      temp = [];
      users = [];
      $scope.changeRole = function(unitRole, role_id) {
        unitRole.role_id = role_id;
        unitRole.unit_id = $scope.unit.id;
        return UnitRole.update({
          id: unitRole.id,
          unit_role: unitRole
        }, function(response) {
          return alertService.add("success", "Role changed", 2000);
        }, function(response) {
          return alertService.add("danger", response.data.error, 6000);
        });
      };
      $scope.changeMainConvenor = function(staff) {
        return Unit.update({
          id: $scope.unit.id,
          unit: {
            main_convenor_id: staff.id
          }
        }, function(response) {
          alertService.add("success", "Main convenor changed", 2000);
          return $scope.unit.main_convenor_id = staff.id;
        }, function(response) {
          return alertService.add("danger", response.data.error, 6000);
        });
      };
      $scope.addSelectedStaff = function() {
        var staff, tutorRole;
        staff = $scope.selectedStaff;
        $scope.selectedStaff = null;
        if (!$scope.unit.staff) {
          $scope.unit.staff = [];
        }
        if (staff.id != null) {
          return tutorRole = UnitRole.create({
            unit_id: $scope.unit.id,
            user_id: staff.id,
            role: 'Tutor'
          }, function(response) {
            return $scope.unit.staff.push(tutorRole);
          }, function(response) {
            return alertService.add('danger', "Unable to add staff member. " + response.data.error, 6000);
          });
        } else {
          return alertService.add('danger', "Unable to add staff member. Ensure they have a tutor or convenor account in User admin first.", 6000);
        }
      };
      $scope.findStaffUser = function(id) {
        var i, len, ref, staff;
        ref = $scope.staff;
        for (i = 0, len = ref.length; i < len; i++) {
          staff = ref[i];
          if (staff.id === id) {
            return staff;
          }
        }
      };
      $scope.filterStaff = function(staff) {
        return !_.find($scope.unit.staff, function(listStaff) {
          return staff.id === listStaff.user_id;
        });
      };
      $scope.removeStaff = function(staff) {
        var staffUser;
        $scope.unit.staff = _.without($scope.unit.staff, staff);
        UnitRole["delete"]({
          id: staff.id
        });
        return staffUser = $scope.findStaffUser(staff.user_id);
      };
      return $scope.groupSetName = function(id) {
        return groupService.groupSetName(id, $scope.unit);
      };
    }]
  };
});
