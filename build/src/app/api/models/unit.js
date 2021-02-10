angular.module("doubtfire.api.models.unit", []).factory("Unit", ["resourcePlus", "currentUser", "$window", "DoubtfireConstants", function(resourcePlus, currentUser, $window, DoubtfireConstants) {
  var Unit;
  Unit = resourcePlus("/units/:id", {
    id: "@id"
  });
  Unit.getGradesUrl = function(unit) {
    return DoubtfireConstants.API_URL + "/units/" + (unit != null ? unit.id : void 0) + "/grades?auth_token=" + currentUser.authenticationToken;
  };
  Unit.getPortfoliosUrl = function(unit) {
    return DoubtfireConstants.API_URL + "/submission/unit/" + (unit != null ? unit.id : void 0) + "/portfolio?auth_token=" + currentUser.authenticationToken;
  };
  Unit.getAllTaskSubmissionsUrl = function(unit, td) {
    return DoubtfireConstants.API_URL + "/submission/unit/" + (unit != null ? unit.id : void 0) + "/task_definitions/" + (td != null ? td.id : void 0) + "/download_submissions?auth_token=" + currentUser.authenticationToken;
  };
  Unit.taskUploadUrl = function(unit) {
    return DoubtfireConstants.API_URL + "/units/" + unit.id + "/task_definitions/task_pdfs?auth_token=" + currentUser.authenticationToken;
  };
  Unit.taskSheetUploadUrl = function(unit, taskDefinition) {
    return DoubtfireConstants.API_URL + "/units/" + unit.id + "/task_definitions/" + taskDefinition.id + "/task_sheet?auth_token=" + currentUser.authenticationToken;
  };
  Unit.taskResourcesUploadUrl = function(unit, taskDefinition) {
    return DoubtfireConstants.API_URL + "/units/" + unit.id + "/task_definitions/" + taskDefinition.id + "/task_resources?auth_token=" + currentUser.authenticationToken;
  };
  Unit.allResourcesDownloadUrl = function(unit) {
    return DoubtfireConstants.API_URL + "/units/" + unit.id + "/all_resources?auth_token=" + currentUser.authenticationToken;
  };
  Unit.enrolStudentsCSVUrl = function(unit) {
    return DoubtfireConstants.API_URL + "/csv/units/" + unit.id + "?auth_token=" + currentUser.authenticationToken;
  };
  Unit.withdrawStudentsCSVUrl = function(unit) {
    return DoubtfireConstants.API_URL + "/csv/units/" + unit.id + "/withdraw?auth_token=" + currentUser.authenticationToken;
  };
  Unit.learningProgressClassStats = resourcePlus("/units/:id/learning_alignments/class_stats", {
    id: "@id"
  });
  Unit.learningProgressClassDetails = resourcePlus("/units/:id/learning_alignments/class_details", {
    id: "@id"
  });
  Unit.tasksRequiringFeedback = resourcePlus("/units/:id/feedback", {
    id: "@id"
  });
  Unit.tasksForTaskInbox = resourcePlus("/units/:id/tasks/inbox", {
    id: "@id"
  });
  Unit.tasksForDefinition = resourcePlus("/units/:id/task_definitions/:task_def_id/tasks", {
    id: "@id",
    task_def_id: "@task_def_id"
  });
  Unit.taskStatusCountByTutorial = resourcePlus("/units/:id/stats/task_status_pct", {
    id: "@id"
  });
  Unit.targetGradeStats = resourcePlus("/units/:id/stats/student_target_grade", {
    id: "@id"
  });
  Unit.taskCompletionStats = resourcePlus("/units/:id/stats/task_completion_stats", {
    id: "@id"
  });
  Unit.tutorialStream = resourcePlus("/units/:id/tutorial_streams/:tutorial_stream_abbr", {
    id: "@id",
    tutorial_stream_abbr: "@abbr"
  });
  Unit.groups = resourcePlus("/units/:id/groups", {
    id: "@id"
  });
  return Unit;
}]);
