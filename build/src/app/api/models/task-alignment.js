angular.module("doubtfire.api.models.task-alignment", []).factory("TaskAlignment", ["resourcePlus", "DoubtfireConstants", "currentUser", "$window", function(resourcePlus, DoubtfireConstants, currentUser, $window) {
  var TaskAlignment;
  TaskAlignment = {};
  TaskAlignment.taskAlignmentCSVUploadUrl = function(unit, project_id) {
    if (project_id != null) {
      return DoubtfireConstants.API_URL + "/units/" + unit.id + "/learning_alignments/csv.json?project_id=" + project_id + "&auth_token=" + currentUser.authenticationToken;
    } else {
      return DoubtfireConstants.API_URL + "/units/" + unit.id + "/learning_alignments/csv.json?auth_token=" + currentUser.authenticationToken;
    }
  };
  TaskAlignment.downloadCSV = function(unit, project_id) {
    if (project_id != null) {
      return $window.open(DoubtfireConstants.API_URL + "/units/" + unit.id + "/learning_alignments/csv.json?project_id=" + project_id + "&auth_token=" + currentUser.authenticationToken, "_blank");
    } else {
      return $window.open(DoubtfireConstants.API_URL + "/units/" + unit.id + "/learning_alignments/csv.json?auth_token=" + currentUser.authenticationToken, "_blank");
    }
  };
  return TaskAlignment;
}]);
