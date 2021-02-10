angular.module('doubtfire.groups.student-group-manager', []).directive('studentGroupManager', function() {
  return {
    restrict: 'E',
    templateUrl: 'groups/student-group-manager/student-group-manager.tpl.html',
    replace: true,
    controller: ["$scope", "Group", "alertService", "GroupMember", "projectService", function($scope, Group, alertService, GroupMember, projectService) {
      $scope.selectedGroupSet = _.first($scope.unit.group_sets);
      $scope.selectedGroup = null;
      $scope.groupForSet = function(gs) {
        if (gs) {
          return _.find($scope.project.groups, function(group) {
            return group.group_set_id === gs.id;
          });
        }
      };
      $scope.updateGroup = function(data) {
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
      $scope.onSelectGroup = function(group) {
        return GroupMember.create({
          unit_id: $scope.unit.id,
          group_set_id: $scope.selectedGroupSet.id,
          group_id: group.id,
          project_id: $scope.project.project_id
        }, function(response) {
          projectService.updateGroups($scope.project);
          alertService.add("success", "Joined group", 2000);
          return $scope.refreshGroupMembers();
        }, function(error) {
          alertService.add("danger", error.data.error, 6000);
          return $scope.selectedGroup = null;
        });
      };
      $scope.$watch('project', function(newValue, oldValue) {
        $scope.selectedGroup = $scope.groupForSet($scope.selectedGroupSet);
        return $scope.$digest;
      });
      return $scope.$watch('selectedGroupSet', function(newValue, oldValue) {
        $scope.selectedGroup = $scope.groupForSet(newValue);
        return $scope.$digest;
      });
    }]
  };
});
