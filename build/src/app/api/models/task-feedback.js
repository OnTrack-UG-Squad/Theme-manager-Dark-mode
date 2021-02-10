angular.module("doubtfire.api.models.task-feedback", []).factory("TaskFeedback", ["DoubtfireConstants", "currentUser", "$window", "resourcePlus", function(DoubtfireConstants, currentUser, $window, resourcePlus) {
  var TaskFeedback;
  TaskFeedback = resourcePlus("/projects/:project_id/task_def_id/:task_definition_id/submission", {
    task_definition_id: "@task_definition_id",
    project_id: "@project_id"
  });
  TaskFeedback.getTaskUrl = function(task, asAttachment) {
    var url;
    if (asAttachment == null) {
      asAttachment = false;
    }
    url = DoubtfireConstants.API_URL + "/projects/" + (task.project().project_id) + "/task_def_id/" + task.definition.id + "/submission?auth_token=" + currentUser.authenticationToken;
    if (asAttachment) {
      url += "&as_attachment=true";
    }
    return url;
  };
  TaskFeedback.getTaskFilesUrl = function(task) {
    return DoubtfireConstants.API_URL + "/projects/" + (task.project().project_id) + "/task_def_id/" + task.definition.id + "/submission_files?auth_token=" + currentUser.authenticationToken;
  };
  TaskFeedback.openFeedback = function(task) {
    return $window.open(TaskFeedback.getTaskUrl(task), "_blank");
  };
  return TaskFeedback;
}]);
