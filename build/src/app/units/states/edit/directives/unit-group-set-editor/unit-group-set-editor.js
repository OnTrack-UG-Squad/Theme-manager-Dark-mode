angular.module('doubtfire.units.states.edit.directives.unit-group-set-editor', []).directive('unitGroupSetEditor', function() {
  return {
    restrict: 'E',
    templateUrl: 'units/states/edit/directives/unit-group-set-editor/unit-group-set-editor.tpl.html',
    replace: true,
    controller: ["$scope", "GroupSet", "Group", "GroupMember", "gradeService", "alertService", "CsvResultModal", function($scope, GroupSet, Group, GroupMember, gradeService, alertService, CsvResultModal) {
      $scope.addGroupSet = function() {
        var gsCount, name;
        gsCount = $scope.unit.group_sets.length;
        name = gsCount === 0 ? "Group Work" : "Group Work Set " + (gsCount + 1);
        return GroupSet.create({
          unit_id: $scope.unit.id,
          group_set: {
            name: name
          }
        }, function(gs) {
          $scope.unit.group_sets.push(gs);
          return alertService.add("success", "Group set created.", 2000);
        }, function(response) {
          return alertService.add("danger", "Failed to create group set. " + response.data.error, 6000);
        });
      };
      $scope.saveGroupSet = function(data, id) {
        return GroupSet.update({
          unit_id: $scope.unit.id,
          id: id,
          group_set: {
            name: data.name,
            allow_students_to_create_groups: data.allow_students_to_create_groups,
            allow_students_to_manage_groups: data.allow_students_to_manage_groups,
            keep_groups_in_same_class: data.keep_groups_in_same_class,
            capacity: data.capacity
          }
        }, function(response) {
          return alertService.add("success", "Group set updated.", 2000);
        }, function(response) {
          return alertService.add("danger", "Failed to update group set. " + response.data.error, 6000);
        });
      };
      $scope.toggleLocked = function(gs) {
        return GroupSet.update({
          unit_id: $scope.unit.id,
          id: gs.id,
          group_set: {
            locked: !gs.locked
          }
        }, function(response) {
          alertService.add("success", (response.locked ? 'Locked' : 'Unlocked') + " " + gs.name, 2000);
          return gs.locked = response.locked;
        }, function(response) {
          return alertService.add("danger", "Failed to " + (gs.locked ? 'unlock' : 'lock') + " " + gs.name, 6000);
        });
      };
      $scope.removeGroupSet = function(gs) {
        return GroupSet["delete"]({
          unit_id: $scope.unit.id,
          id: gs.id
        }, function(response) {
          var newGs;
          $scope.unit.group_sets = _.filter($scope.unit.group_sets, function(gs1) {
            return gs1.id !== gs.id;
          });
          newGs = $scope.unit.group_sets[$scope.unit.group_sets.indexOf(gs) - 1];
          if (gs === $scope.selectedGroupSet) {
            $scope.selectGroupSet(newGs);
          }
          return alertService.add("success", "Group set deleted.", 2000);
        }, function(response) {
          return alertService.add("danger", "Failed to delete group set. " + response.data.error, 6000);
        });
      };
      $scope.selectGroupSet = function(gs) {
        $scope.selectedGroupSet = gs;
        return $scope.$broadcast('UnitGroupSetEditor/SelectedGroupSetChanged', {
          id: gs != null ? gs.id : void 0
        });
      };
      $scope.studentStaffOptions = [
        {
          value: true,
          text: "Staff and Students"
        }, {
          value: false,
          text: "Staff Only"
        }
      ];
      $scope.tutorialOptions = [
        {
          value: true,
          text: "Same Tutorial"
        }, {
          value: false,
          text: "Any Tutorial"
        }
      ];
      if ($scope.unit.group_sets.length > 0) {
        $scope.selectGroupSet($scope.unit.group_sets[0]);
      }
      $scope.csvImportResponse = {};
      $scope.groupCSV = {
        file: {
          name: 'Group CSV',
          type: 'csv'
        }
      };
      $scope.groupCSVUploadUrl = function() {
        return GroupSet.groupCSVUploadUrl($scope.unit, $scope.selectedGroupSet);
      };
      $scope.groupStudentCSVUploadUrl = function() {
        return GroupSet.groupStudentCSVUploadUrl($scope.unit, $scope.selectedGroupSet);
      };
      $scope.isGroupCSVUploading = null;
      $scope.onGroupCSVSuccess = function(response) {
        CsvResultModal.show('Group CSV upload results.', response);
        return $scope.selectGroupSet($scope.selectedGroupSet);
      };
      $scope.onGroupCSVComplete = function() {
        return $scope.isGroupCSVUploading = null;
      };
      $scope.downloadGroupCSV = function() {
        return GroupSet.downloadCSV($scope.unit, $scope.selectedGroupSet);
      };
      return $scope.downloadGroupStudentCSV = function() {
        return GroupSet.downloadStudentCSV($scope.unit, $scope.selectedGroupSet);
      };
    }]
  };
});
