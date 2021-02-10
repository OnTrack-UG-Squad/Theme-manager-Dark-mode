angular.module("doubtfire.api.models.group-set", []).factory("GroupSet", ["resourcePlus", "DoubtfireConstants", "currentUser", "$window", function(resourcePlus, DoubtfireConstants, currentUser, $window) {
  var GroupSet;
  GroupSet = resourcePlus("/units/:unit_id/group_sets/:id", {
    id: "@id",
    unit_id: "@unit_id"
  });
  GroupSet.groupCSVUploadUrl = function(unit, group_set) {
    return DoubtfireConstants.API_URL + "/units/" + unit.id + "/group_sets/" + group_set.id + "/groups/csv.json?auth_token=" + currentUser.authenticationToken;
  };
  GroupSet.groupStudentCSVUploadUrl = function(unit, group_set) {
    return DoubtfireConstants.API_URL + "/units/" + unit.id + "/group_sets/" + group_set.id + "/groups/student_csv.json?auth_token=" + currentUser.authenticationToken;
  };
  GroupSet.downloadCSV = function(unit, group_set) {
    return $window.open(DoubtfireConstants.API_URL + "/units/" + unit.id + "/group_sets/" + group_set.id + "/groups/csv.json?auth_token=" + currentUser.authenticationToken, "_blank");
  };
  GroupSet.downloadStudentCSV = function(unit, group_set) {
    return $window.open(DoubtfireConstants.API_URL + "/units/" + unit.id + "/group_sets/" + group_set.id + "/groups/student_csv.json?auth_token=" + currentUser.authenticationToken, "_blank");
  };
  return GroupSet;
}]);
