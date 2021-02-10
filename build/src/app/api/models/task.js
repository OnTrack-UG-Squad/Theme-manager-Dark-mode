angular.module("doubtfire.api.models.task", []).factory("Task", ["resourcePlus", "DoubtfireConstants", "currentUser", "$http", function(resourcePlus, DoubtfireConstants, currentUser, $http) {
  var Task;
  Task = resourcePlus("/projects/:project_id/task_def_id/:task_definition_id", {
    project_id: "@project_id",
    task_definition_id: "@task_definition_id"
  });
  Task.SubmissionDetails = resourcePlus("/projects/:id/task_def_id/:task_definition_id/submission_details");
  Task.summaryData = resourcePlus("/tasks/:id", {
    id: "@id"
  });
  Task.applyForExtension = function(task, reason, weeksRequested, onSuccess, onError) {
    return $http.post(DoubtfireConstants.API_URL + "/projects/" + (task.project().project_id) + "/task_def_id/" + task.task_definition_id + "/request_extension", {
      comment: reason,
      weeks_requested: weeksRequested
    }).then(function(data) {
      return onSuccess(data);
    }, function(response) {
      return onError(response);
    });
  };
  Task.assessExtension = function(task, taskCommentID, assessment, onSuccess, onError) {
    return $http.put(DoubtfireConstants.API_URL + "/projects/" + (task.project().project_id) + "/task_def_id/" + task.task_definition_id + "/assess_extension/" + taskCommentID, {
      granted: assessment
    }).then(function(data) {
      return onSuccess(data);
    }, function(response) {
      return onError(response);
    });
  };
  Task.generateCommentsUrl = function(task) {
    return DoubtfireConstants.API_URL + "/projects/" + (task.project().project_id) + "/task_def_id/" + task.task_definition_id + "/comments?auth_token=" + currentUser.authenticationToken;
  };
  Task.generateCommentsAttachmentUrl = function(project, task, comment) {
    return DoubtfireConstants.API_URL + "/projects/" + project.project_id + "/task_def_id/" + task.task_definition_id + "/comments/" + comment.id + "?as_attachment=false&auth_token=" + currentUser.authenticationToken;
  };
  Task.generateDiscussionPromptUrl = function(task, commentID, number) {
    return DoubtfireConstants.API_URL + "/projects/" + (task.project().project_id) + "/task_def_id/" + task.task_definition_id + "/comments/" + commentID + "/discussion_comment/prompt_number/" + number + "?as_attachment=false&auth_token=" + currentUser.authenticationToken;
  };
  Task.generateDiscussionResponseUrl = function(task, commentID) {
    return DoubtfireConstants.API_URL + "/projects/" + (task.project().project_id) + "/task_def_id/" + task.task_definition_id + "/comments/" + commentID + "/discussion_comment/response?as_attachment=false&auth_token=" + currentUser.authenticationToken;
  };
  Task.generateSubmissionUrl = function(project, task) {
    return DoubtfireConstants.API_URL + "/projects/" + project.project_id + "/task_def_id/" + task.definition.id + "/submission?auth_token=" + currentUser.authenticationToken;
  };
  Task.getTaskPDFUrl = function(unit, task_def) {
    return DoubtfireConstants.API_URL + "/units/" + unit.id + "/task_definitions/" + task_def.id + "/task_pdf.json?auth_token=" + currentUser.authenticationToken;
  };
  Task.getTaskResourcesUrl = function(unit, task_def) {
    return DoubtfireConstants.API_URL + "/units/" + unit.id + "/task_definitions/" + task_def.id + "/task_resources.json?auth_token=" + currentUser.authenticationToken;
  };
  Task.getTaskDefinitionBatchUploadUrl = function(unit) {
    return DoubtfireConstants.API_URL + "/csv/task_definitions?auth_token=" + currentUser.authenticationToken + "&unit_id=" + unit.id;
  };
  Task.getTaskMarkingUrl = function(unit) {
    return DoubtfireConstants.API_URL + "/submission/assess.json?unit_id=" + unit.id + "&auth_token=" + currentUser.authenticationToken;
  };
  Task.generateMarkingSubmissionUrl = function() {};
  return Task;
}]);
