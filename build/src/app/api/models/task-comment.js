angular.module("doubtfire.api.models.task-comment", []).factory("TaskComment", ["resourcePlus", function(resourcePlus) {
  return resourcePlus("/projects/:project_id/task_def_id/:task_definition_id/comments/:id", {
    id: "@id",
    project_id: "@project_id",
    task_definition_id: "@task_definition_id"
  }, {
    create_media: {
      method: "POST",
      headers: {
        'Content-Type': void 0
      }
    }
  });
}]);

angular.module("doubtfire.api.models.discussion-comment", []).factory("DiscussionComment", ["resourcePlus", function(resourcePlus) {
  var result;
  result = {
    postDiscussionReply: resourcePlus("/projects/:project_id/task_def_id/:task_definition_id/comments/:task_comment_id/discussion_comment/reply", {
      project_id: "@project_id",
      task_definition_id: "@task_definition_id",
      task_comment_id: "@task_comment_id"
    }, {
      create_media: {
        method: "POST",
        headers: {
          'Content-Type': void 0
        }
      }
    }),
    getDiscussionPrompt: resourcePlus("/projects/:project_id/task_def_id/:task_definition_id/comments/:task_comment_id/discussion_comment/prompt_number/:prompt_number", {
      project_id: "@project_id",
      task_definition_id: "@task_definition_id",
      task_comment_id: "@task_comment_id",
      prompt_number: "@prompt_number"
    }),
    getDiscussion: resourcePlus("/projects/:project_id/task_def_id/:task_definition_id/comments/:task_comment_id/discussion_comment", {
      project_id: "@project_id",
      task_definition_id: "@task_definition_id",
      task_comment_id: "@task_comment_id"
    }),
    createDiscussion: resourcePlus("/projects/:project_id/task_def_id/:task_definition_id/discussion_comments", {
      project_id: "@project_id",
      task_definition_id: "@task_definition_id"
    }, {
      create_media: {
        method: "POST",
        headers: {
          'Content-Type': void 0
        }
      }
    })
  };
  return result;
}]);
