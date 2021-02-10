angular.module('doubtfire.groups.group-member-list', []).directive('groupMemberList', function() {
  return {
    restrict: 'E',
    templateUrl: 'groups/group-member-list/group-member-list.tpl.html',
    scope: {
      unit: '=',
      project: '=',
      unitRole: '=',
      selectedGroup: '=',
      onMembersLoaded: '=?'
    },
    controller: ["$scope", "$timeout", "GroupMember", "gradeService", "alertService", "listenerService", function($scope, $timeout, GroupMember, gradeService, alertService, listenerService) {
      var finishLoading, listeners, startLoading;
      listeners = listenerService.listenTo($scope);
      $scope.tableSort = {
        order: 'student_name',
        reverse: false
      };
      $scope.sortTableBy = function(column) {
        $scope.tableSort.order = column;
        return $scope.tableSort.reverse = !$scope.tableSort.reverse;
      };
      startLoading = function() {
        return $scope.loaded = false;
      };
      finishLoading = function() {
        return $timeout(function() {
          $scope.loaded = true;
          return typeof $scope.onMembersLoaded === "function" ? $scope.onMembersLoaded() : void 0;
        }, 500);
      };
      $scope.loaded = false;
      $scope.removeMember = function(member) {
        return $scope.selectedGroup.removeMember(member, function() {
          var ref;
          if (member.project_id === ((ref = $scope.project) != null ? ref.project_id : void 0)) {
            _.remove($scope.project.groups, $scope.selectedGroup);
            return $scope.selectedGroup = null;
          }
        });
      };
      return listeners.push($scope.$watch("selectedGroup.id", function(newGroupId) {
        if (newGroupId == null) {
          return;
        }
        startLoading();
        $scope.canRemoveMembers = $scope.unitRole || ($scope.selectedGroup.groupSet().allow_students_to_manage_groups && !$scope.selectedGroup.locked);
        return $scope.selectedGroup.getMembers(function(members) {
          return finishLoading();
        }, function(failure) {
          return $timeout((function() {
            alertService.add("danger", "Unauthorised to view members in this group", 3000);
            return $scope.selectedGroup = null;
          }), 1000);
        });
      }));
    }]
  };
});
