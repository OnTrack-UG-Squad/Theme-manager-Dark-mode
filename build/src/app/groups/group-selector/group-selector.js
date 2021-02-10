angular.module('doubtfire.groups.group-selector', []).directive('groupSelector', function() {
  return {
    restrict: 'E',
    templateUrl: 'groups/group-selector/group-selector.tpl.html',
    scope: {
      unit: "=",
      project: "=?",
      unitRole: "=?",
      selectedGroupSet: '=',
      selectedGroup: '=?',
      showGroupSetSelector: '=?',
      onSelect: '=?'
    },
    controller: ["$scope", "$filter", "$timeout", "alertService", "Group", "currentUser", "listenerService", function($scope, $filter, $timeout, alertService, Group, currentUser, listenerService) {
      var applyFilters, finishLoading, listeners, resetNewGroupForm, startLoading;
      listeners = listenerService.listenTo($scope);
      if (($scope.unitRole == null) && ($scope.project == null) || ($scope.unitRole != null) && ($scope.project != null)) {
        throw Error("Group selector must have exactly one unit role or one project");
      }
      applyFilters = function() {
        var filteredGroups;
        if ($scope.unitRole != null) {
          filteredGroups = $filter('groupsInTutorials')($scope.selectedGroupSet.groups, $scope.unitRole, $scope.staffFilter);
        } else {
          filteredGroups = $scope.selectedGroupSet.groups;
        }
        return $scope.filteredGroups = $filter('paginateAndSort')(filteredGroups, $scope.pagination, $scope.tableSort);
      };
      $scope.setStaffFilter = function(scope) {
        $scope.staffFilter = scope;
        return applyFilters();
      };
      $scope.pagination = {
        currentPage: 1,
        maxSize: 10,
        pageSize: 10,
        totalSize: null,
        show: false,
        onChange: applyFilters
      };
      $scope.tableSort = {
        order: 'name',
        reverse: false
      };
      $scope.sortTableBy = function(column) {
        $scope.tableSort.order = column;
        $scope.tableSort.reverse = !$scope.tableSort.reverse;
        return applyFilters();
      };
      startLoading = function() {
        return $scope.loaded = false;
      };
      finishLoading = function() {
        return $timeout((function() {
          $scope.loaded = true;
          if ($scope.project != null) {
            return $scope.selectGroup($scope.project.groupForGroupSet($scope.selectedGroupSet));
          }
        }), 500);
      };
      $scope.selectGroup = function(group) {
        if (($scope.project != null) && !$scope.project.inGroup(group)) {
          return;
        }
        $scope.selectedGroup = group;
        return typeof $scope.onSelect === "function" ? $scope.onSelect(group) : void 0;
      };
      resetNewGroupForm = function() {
        var ref;
        return (ref = this.newGroupForm) != null ? ref.reset() : void 0;
      };
      if ($scope.selectedGroupSet == null) {
        $scope.selectedGroupSet = _.first($scope.unit.group_sets);
      }
      if ($scope.showGroupSetSelector == null) {
        $scope.showGroupSetSelector = $scope.unit.group_sets.length > 1;
      }
      $scope.selectGroupSet = function(groupSet) {
        if (groupSet == null) {
          return;
        }
        startLoading();
        $scope.selectGroup(null);
        $scope.canCreateGroups = ($scope.unitRole != null) || (groupSet != null ? groupSet.allow_students_to_create_groups : void 0);
        return $scope.unit.getGroups(groupSet.id, function(groups) {
          $scope.selectedGroupSet = groupSet;
          groupSet.groups = groups;
          finishLoading();
          resetNewGroupForm();
          return applyFilters();
        }, finishLoading);
      };
      $scope.selectGroupSet($scope.selectedGroupSet);
      if ($scope.unitRole != null) {
        $scope.staffFilter = {
          Convenor: 'all',
          Tutor: 'mine'
        }[$scope.unitRole.role];
      }
      $scope.onChangeStaffFilter = applyFilters;
      $scope.searchTextChanged = applyFilters;
      $scope.addGroup = function(name) {
        var ref, ref1, tutorName, tutorialId;
        if ($scope.unit.tutorials.length === 0) {
          alertService.add("danger", "Please ensure there is at least one tutorial before groups are created", 6000);
        }
        if ($scope.project) {
          tutorialId = $scope.project.tutorials()[0].id || $scope.unit.tutorials[0].id;
        } else {
          tutorName = ((ref = $scope.unitRole) != null ? ref.name : void 0) || currentUser.profile.name;
          tutorialId = (ref1 = _.find($scope.unit.tutorials, function(tute) {
            return tute.tutorName === tutorName;
          })) != null ? ref1.id : void 0;
          if (tutorialId == null) {
            tutorialId = _.first($scope.unit.tutorials).id;
          }
        }
        return $scope.unit.addGroup($scope.selectedGroupSet, name, tutorialId, function(newGroup) {
          resetNewGroupForm();
          applyFilters();
          return $scope.selectedGroup = newGroup;
        });
      };
      $scope.projectInGroup = function(group) {
        var ref;
        return (ref = $scope.project) != null ? ref.inGroup(group) : void 0;
      };
      $scope.joinGroup = function(group) {
        var partOfGroup;
        if ($scope.project == null) {
          return;
        }
        partOfGroup = $scope.projectInGroup(group);
        if (partOfGroup) {
          return alertService.add("danger", "You are already member of this group");
        }
        return group.addMember($scope.project, function() {
          return $scope.selectedGroup = group;
        }, function() {});
      };
      $scope.updateGroup = function(data, groupId) {
        var group;
        group = _.find($scope.selectedGroupSet.groups, {
          id: groupId
        });
        group = _.extend(group, data);
        return $scope.unit.updateGroup(group, applyFilters);
      };
      $scope.deleteGroup = function(group) {
        return $scope.unit.deleteGroup(group, $scope.selectedGroupSet, function(success) {
          var ref;
          if (group.id === ((ref = $scope.selectedGroup) != null ? ref.id : void 0)) {
            $scope.selectedGroup = null;
          }
          resetNewGroupForm();
          return applyFilters();
        });
      };
      $scope.toggleLocked = function(group) {
        var newGroup;
        newGroup = _.clone(group);
        newGroup.locked = !newGroup.locked;
        return $scope.unit.updateGroup(newGroup, function(success) {
          return group.locked = success.locked;
        });
      };
      return listeners.push($scope.$on('UnitGroupSetEditor/SelectedGroupSetChanged', function(evt, args) {
        var newGroupSet;
        newGroupSet = $scope.unit.findGroupSet(args.id);
        return $scope.selectGroupSet(newGroupSet);
      }));
    }]
  };
});
