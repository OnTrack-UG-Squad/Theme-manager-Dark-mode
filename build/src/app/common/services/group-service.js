angular.module("doubtfire.common.services.group-service", []).factory("groupService", ["Group", "GroupMember", "alertService", function(Group, GroupMember, alertService) {
  var groupService;
  groupService = {};
  groupService.groupContributionSum = function(members, member, value) {
    return _.reduce(members, function(memo, mbr) {
      if (member === mbr) {
        return memo + value;
      } else {
        return memo + mbr.rating;
      }
    }, 0);
  };
  groupService.isGroupTask = function(task) {
    return task.definition.group_set != null;
  };
  groupService.groupSetName = function(id, unit) {
    var ref;
    return ((ref = unit.findGroupSet(id)) != null ? ref.name : void 0) || "Individual Work";
  };
  groupService.mapFuncsToGroup = function(group, unit, groupSet) {
    group = unit.mapGroupToUnit(group);
    group.groupSet = function() {
      return groupSet;
    };
    group.addMember = function(member, onSuccess, onFailure) {
      return groupService.addMemberToGroup(group, member, onSuccess, onFailure);
    };
    group.removeMember = function(member, onSuccess, onFailure) {
      return groupService.removeMemberFromGroup(group, member, onSuccess, onFailure);
    };
    group.getMembers = function(onSuccess, onFailure) {
      return groupService.getGroupMembersForGroup(group, onSuccess, onFailure);
    };
    group.hasSpace = function() {
      if (groupSet.capacity == null) {
        return true;
      }
      return group.student_count < groupSet.capacity + group.capacity_adjustment;
    };
    return group;
  };
  groupService.getGroups = function(unit, groupSetId, onSuccess, onFailure) {
    var groupSet;
    if (groupSetId == null) {
      throw Error("No group set ID specified to unit.getGroups");
    }
    groupSet = unit.findGroupSet(groupSetId);
    return Group.query({
      unit_id: unit.id,
      group_set_id: groupSetId
    }, function(success) {
      groupSet.groups = _.map(success, function(group) {
        return groupService.mapFuncsToGroup(group, unit, groupSet);
      });
      return typeof onSuccess === "function" ? onSuccess(groupSet.groups) : void 0;
    }, function(failure) {
      var ref;
      alertService.add("danger", ((ref = failure.data) != null ? ref.error : void 0) || "Unknown Error", 6000);
      return typeof onFailure === "function" ? onFailure(failure) : void 0;
    });
  };
  groupService.addGroup = function(unit, groupSet, name, tutorialId, onSuccess) {
    if (!((unit != null) || (groupSet != null))) {
      throw Error("Cannot create new group without unit, groupset or tutorialID");
    }
    return Group.create({
      unit_id: unit.id,
      group_set_id: groupSet.id,
      group: {
        name: name,
        tutorial_id: tutorialId
      }
    }, function(success) {
      var newGroup;
      newGroup = groupService.mapFuncsToGroup(success, unit, groupSet);
      groupSet.groups.push(newGroup);
      alertService.add("success", newGroup.name + " was created!", 3000);
      return typeof onSuccess === "function" ? onSuccess(newGroup) : void 0;
    }, function(failure) {
      var ref;
      alertService.add("danger", ((ref = failure.data) != null ? ref.error : void 0) || "Unknown Error", 6000);
      return typeof onFailure === "function" ? onFailure(failure) : void 0;
    });
  };
  groupService.updateGroup = function(group, onSuccess, onFailure) {
    return Group.update({
      unit_id: group.unit().id,
      group_set_id: group.groupSet().id,
      id: group.id,
      group: {
        name: group.name,
        tutorial_id: group.tutorial_id,
        capacity_adjustment: group.capacity_adjustment,
        locked: group.locked
      }
    }, function(success) {
      alertService.add("info", group.name + " was updated", 3000);
      return typeof onSuccess === "function" ? onSuccess(success) : void 0;
    }, function(failure) {
      var ref;
      alertService.add("danger", ((ref = failure.data) != null ? ref.error : void 0) || "Unknown Error", 6000);
      return typeof onFailure === "function" ? onFailure(failure) : void 0;
    });
  };
  groupService.deleteGroup = function(unit, group, groupSet, onSuccess, onFailure) {
    if (group.group_set_id !== groupSet.id) {
      throw Error("Cannot delete group -- group's group_set_id does not match groupSet specified");
    }
    return Group["delete"]({
      unit_id: group.unit().id,
      group_set_id: group.groupSet().id,
      id: group.id,
      group: {
        name: group.name,
        tutorial_id: group.tutorial_id
      }
    }, function(success) {
      groupSet.groups = _.without(groupSet.groups, group);
      alertService.add("info", group.name + " was deleted", 3000);
      return typeof onSuccess === "function" ? onSuccess(unit.groups) : void 0;
    }, function(failure) {
      var ref;
      alertService.add("danger", ((ref = failure.data) != null ? ref.error : void 0) || "Unknown Error", 3000);
      return typeof onFailure === "function" ? onFailure(failure) : void 0;
    });
  };
  groupService.getGroupMembersForGroup = function(group, onSuccess, onFailure) {
    return GroupMember.query({
      unit_id: group.unit().id,
      group_set_id: group.groupSet().id,
      group_id: group.id
    }, function(success) {
      group.members = success;
      return typeof onSuccess === "function" ? onSuccess(group.members) : void 0;
    }, function(failure) {
      return typeof onFailure === "function" ? onFailure(group.members) : void 0;
    });
  };
  groupService.addMemberToGroup = function(group, member, onSuccess, onFailure) {
    if (member == null) {
      alertService.add('danger', "The student you are trying to add to the group could not be found.", 6000);
      return;
    }
    return GroupMember.create({
      unit_id: group.unit().id,
      group_set_id: group.groupSet().id,
      group_id: group.id,
      project_id: member.project_id
    }, function(success) {
      var grp;
      group.student_count += 1;
      if (member.groups != null) {
        grp = member.groupForGroupSet(group.groupSet());
        if (grp != null) {
          grp.student_count -= 1;
          _.remove(grp.members, function(mbr) {
            return mbr.project_id === member.project_id;
          });
          _.remove(member.groups, grp);
        }
        member.groups.push(group);
      }
      if (group.members != null) {
        group.members.push(success);
        alertService.add("info", success.student_name + " was added to '" + group.name + "'", 3000);
        return typeof onSuccess === "function" ? onSuccess(group.members) : void 0;
      } else {
        return group.getMembers((function() {
          alertService.add("info", success.student_name + " was added to '" + group.name + "'", 3000);
          return typeof onSuccess === "function" ? onSuccess() : void 0;
        }), onFailure);
      }
    }, function(failure) {
      var ref;
      alertService.add("danger", ((ref = failure.data) != null ? ref.error : void 0) || "Unknown Error", 6000);
      return typeof onFailure === "function" ? onFailure(failure) : void 0;
    });
  };
  groupService.removeMemberFromGroup = function(group, member, onSuccess, onFailure) {
    return GroupMember["delete"]({
      unit_id: group.unit().id,
      group_set_id: group.groupSet().id,
      group_id: group.id,
      id: member.project_id
    }, function(success) {
      group.student_count -= 1;
      if (group.members != null) {
        _.remove(group.members, member);
        _.remove(member.groups, group);
        alertService.add("info", member.student_name + " was removed from '" + group.name + "'", 3000);
        return typeof onSuccess === "function" ? onSuccess(group.members) : void 0;
      } else {
        return group.getMembers((function() {
          alertService.add("info", member.student_name + " was removed from '" + group.name + "'", 3000);
          return typeof onSuccess === "function" ? onSuccess() : void 0;
        }), onFailure);
      }
    }, function(failure) {
      var ref;
      alertService.add("danger", ((ref = failure.data) != null ? ref.error : void 0) || "Unknown Error", 6000);
      return typeof onFailure === "function" ? onFailure(failure) : void 0;
    });
  };
  return groupService;
}]);
