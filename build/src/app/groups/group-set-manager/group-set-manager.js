angular.module('doubtfire.groups.group-set-manager', []).directive('groupSetManager', function() {
  return {
    restrict: 'E',
    templateUrl: 'groups/group-set-manager/group-set-manager.tpl.html',
    scope: {
      unit: '=',
      unitRole: '=',
      project: '=',
      selectedGroupSet: '=',
      showGroupSetSelector: '=?'
    },
    controller: ["$scope", "GroupSet", "Group", "GroupMember", "gradeService", "alertService", "projectService", function($scope, GroupSet, Group, GroupMember, gradeService, alertService, projectService) {
      var resetAddMemberForm;
      if (($scope.unitRole == null) && ($scope.project == null)) {
        throw Error("Group set group manager must have exactly one unit role or project");
      }
      $scope.newGroupSelected = function() {
        if ($scope.unitRole != null) {
          return $scope.showMemberPanelToolbar = false;
        }
      };
      $scope.groupMembersLoaded = function() {
        if ($scope.unitRole != null) {
          return $scope.showMemberPanelToolbar = true;
        }
      };
      resetAddMemberForm = function() {
        this.addMemberForm.reset();
        return this.addMemberForm.querySelector('input[type="search"]').focus();
      };
      $scope.addMember = function(member) {
        return $scope.selectedGroup.addMember(member, resetAddMemberForm);
      };
      return $scope.updateGroup = function(data) {
        return Group.update({
          unit_id: $scope.unit.id,
          group_set_id: $scope.selectedGroupSet.id,
          id: $scope.selectedGroup.id,
          group: {
            name: data
          }
        }, function(response) {
          return alertService.add("success", "Group name changed", 2000);
        }, function(response) {
          return alertService.add("danger", response.data.error, 6000);
        });
      };
    }]
  };
});
