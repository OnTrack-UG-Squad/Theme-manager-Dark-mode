angular.module("doubtfire.api.models.task-definition", []).factory("TaskDefinition", ["resourcePlus", "DoubtfireConstants", "currentUser", function(resourcePlus, DoubtfireConstants, currentUser) {
  var TaskDefinition;
  TaskDefinition = resourcePlus("/units/:unit_id/task_definitions/:id", {
    id: "@id",
    unit_id: "@unit_id"
  });
  TaskDefinition.taskSheet = resourcePlus("/units/:unit_id/task_definitions/:task_def_id/task_sheet", {
    unit_id: "@unit_id",
    task_def_id: "@task_def_id"
  });
  TaskDefinition.taskResources = resourcePlus("/units/:unit_id/task_definitions/:task_def_id/task_resources", {
    unit_id: "@unit_id",
    task_def_id: "@task_def_id"
  });
  TaskDefinition.getSubmissionsUrl = function(unit_id, task_def_id) {
    return DoubtfireConstants.API_URL + "/submission/unit/" + unit_id + "/task_definitions/" + task_def_id + "/download_submissions?auth_token=" + currentUser.authenticationToken;
  };
  TaskDefinition.getSubmissionsPdfsUrl = function(unit_id, task_def_id) {
    return DoubtfireConstants.API_URL + "/submission/unit/" + unit_id + "/task_definitions/" + task_def_id + "/student_pdfs?auth_token=" + currentUser.authenticationToken;
  };
  return TaskDefinition;
}]);
