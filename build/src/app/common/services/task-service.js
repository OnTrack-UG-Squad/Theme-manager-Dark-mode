var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

angular.module("doubtfire.common.services.tasks", []).factory("taskService", ["TaskFeedback", "TaskComment", "DiscussionComment", "Task", "TaskDefinition", "alertService", "$filter", "$rootScope", "$timeout", "analyticsService", "GradeTaskModal", "gradeService", "ConfirmationModal", "ProgressModal", "UploadSubmissionModal", "currentUser", "groupService", "emojiService", function(TaskFeedback, TaskComment, DiscussionComment, Task, TaskDefinition, alertService, $filter, $rootScope, $timeout, analyticsService, GradeTaskModal, gradeService, ConfirmationModal, ProgressModal, UploadSubmissionModal, currentUser, groupService, emojiService) {
  var doDeleteTask, hoursBetween, taskService;
  taskService = {};
  taskService.statusKeys = ['not_started', 'do_not_resubmit', 'redo', 'need_help', 'working_on_it', 'fix_and_resubmit', 'ready_to_mark', 'discuss', 'demonstrate', 'complete', 'fail', 'time_exceeded'];
  taskService.validTopTask = ['not_started', 'redo', 'need_help', 'working_on_it', 'fix_and_resubmit', 'ready_to_mark', 'discuss', 'demonstrate'];
  taskService.toBeWorkedOn = ['not_started', 'redo', 'need_help', 'working_on_it'];
  taskService.statusToDiscuss = ['need_help', 'demonstrate', 'discuss'];
  taskService.submittedStatuses = ['do_not_resubmit', 'ready_to_mark', 'discuss', 'demonstrate', 'complete', 'fail', 'time_exceeded'];
  taskService.awaitingFeedbackStatuses = ['ready_to_mark'];
  taskService.overdueStates = ['not_started', 'redo', 'need_help', 'working_on_it', 'fix_and_resubmit', 'ready_to_mark'];
  taskService.finalStatuses = ['complete', 'fail', 'do_not_resubmit', 'time_exceeded'];
  taskService.gradeableStatuses = ['discuss', 'demonstrate', 'complete'];
  taskService.discussionStatuses = ['discuss', 'demonstrate'];
  taskService.stateThatAllowsExtension = ['not_started', 'redo', 'need_help', 'working_on_it', 'fix_and_resubmit', 'ready_to_mark', 'time_exceeded'];
  taskService.pdfRegeneratableStatuses = ['demonstrate', 'ready_to_mark', 'discuss', 'complete', 'time_exceeded', 'fail', 'fix_and_resubmit', 'do_not_resubmit', 'redo'];
  taskService.submittableStatuses = ['ready_to_mark', 'need_help'];
  taskService.markedStatuses = ['redo', 'fail', 'fix_and_resubmit', 'do_not_resubmit', 'discuss', 'demonstrate', 'complete'];
  taskService.acronymKey = {
    RTM: 'ready_to_mark',
    NOS: 'not_started',
    WRK: 'working_on_it',
    HLP: 'need_help',
    RDO: 'redo',
    DNR: 'do_not_resubmit',
    FIX: 'fix_and_resubmit',
    DIS: 'discuss',
    DEM: 'demonstrate',
    COM: 'complete',
    FAL: 'fail',
    TIE: 'time_exceeded'
  };
  taskService.learningWeight = {
    fail: 0.0,
    not_started: 0.0,
    working_on_it: 0.0,
    need_help: 0.0,
    redo: 0.1,
    do_not_resubmit: 0.1,
    fix_and_resubmit: 0.3,
    ready_to_mark: 0.5,
    discuss: 0.8,
    demonstrate: 0.8,
    complete: 1.0,
    time_exceeded: 0.3
  };
  taskService.statusAcronym = {
    ready_to_mark: 'RTM',
    not_started: 'NOS',
    working_on_it: 'WRK',
    need_help: 'HLP',
    redo: 'RDO',
    do_not_resubmit: "DNR",
    fix_and_resubmit: 'FIX',
    discuss: 'DIS',
    demonstrate: 'DEM',
    complete: 'COM',
    fail: 'FAL',
    time_exceeded: 'TIE'
  };
  taskService.statusLabels = {
    ready_to_mark: 'Ready for Feedback',
    not_started: 'Not Started',
    working_on_it: 'Working On It',
    need_help: 'Need Help',
    redo: 'Redo',
    do_not_resubmit: 'Feedback Exceeded',
    fix_and_resubmit: 'Resubmit',
    discuss: 'Discuss',
    demonstrate: 'Demonstrate',
    complete: 'Complete',
    fail: 'Fail',
    time_exceeded: 'Time Exceeded'
  };
  taskService.statusIcons = {
    ready_to_mark: 'fa fa-thumbs-o-up',
    not_started: 'fa fa-pause',
    working_on_it: 'fa fa-bolt',
    need_help: 'fa fa-question-circle',
    redo: 'fa fa-refresh',
    do_not_resubmit: 'fa fa-low-vision',
    fix_and_resubmit: 'fa fa-wrench',
    discuss: 'fa fa-commenting',
    demonstrate: 'fa fa-commenting',
    complete: 'fa fa-check',
    fail: 'fa fa-times',
    time_exceeded: 'fa fa-clock-o'
  };
  taskService.statusColors = {
    ready_to_mark: '#0079D8',
    not_started: '#CCCCCC',
    working_on_it: '#EB8F06',
    need_help: '#a48fce',
    fix_and_resubmit: '#f2d85c',
    do_not_resubmit: '#d46b54',
    redo: '#804000',
    discuss: '#31b0d5',
    demonstrate: '#428bca',
    complete: '#5BB75B',
    fail: '#d93713',
    time_exceeded: '#d93713'
  };
  taskService.statusSeq = {
    not_started: 1,
    fail: 2,
    do_not_resubmit: 3,
    time_exceeded: 4,
    redo: 5,
    need_help: 6,
    working_on_it: 7,
    ready_to_mark: 8,
    fix_and_resubmit: 9,
    discuss: 10,
    demonstrate: 11,
    complete: 12
  };
  taskService.helpDescriptions = {
    ready_to_mark: {
      detail: "Submitted this task for feedback",
      reason: "You have finished working on the task and have uploaded it for your tutor to assess.",
      action: "No further action is required. Your tutor will change this task status once they have assessed it."
    },
    not_started: {
      detail: "Task not started",
      reason: "You have not yet started the Task.",
      action: "Depending on when the target date is, you should start this task soon."
    },
    working_on_it: {
      detail: "Working on the task",
      reason: "You are working on the task, but it is not yet ready to assess.",
      action: "Finish working on this task and then set it to ready for feedback."
    },
    need_help: {
      detail: "Need help for the task",
      reason: "You are working on the task but would like some help to get it complete.",
      action: "Upload the task with what you have completed so far and add a comment on what you would like help on."
    },
    redo: {
      detail: "Start this task from scratch",
      reason: "You appeared to have misunderstood what is required for this task, many deliverables were missing or the marking criteria was largely not met.",
      action: "You should reconsider your approach to this task. Review the task resources and task guide instructions. Check the deliverables carefully. Consider getting help from your tutor and/or lecturer."
    },
    do_not_resubmit: {
      detail: "Feedback will no longer be given",
      reason: "This work is not complete to an acceptable standard and your tutor will not reassess it again.",
      action: "It is now your responsibility to ensure this task is at an adequate standard in your portfolio. You should fix your work according to your tutor's prior feedback and include a corrected version in your portfolio."
    },
    fix_and_resubmit: {
      detail: "Your submission requires some more work",
      reason: "It looks like your work is on the right track, but it does require some extra work to achieve the required standard.",
      action: "Review your submission and the feedback from your tutor. Fix the issues identified, and resubmit it to be reassessed. Make sure to check your submission thoroughly, and note any limit on the number of times each task can be reassessed."
    },
    discuss: {
      detail: "You're almost complete!",
      reason: "Your work looks good and your tutor believes it is complete.",
      action: "To mark as complete, attend class and discuss it with your tutor."
    },
    demonstrate: {
      detail: "You're almost complete!",
      reason: "Your work looks good and your tutor believes it is complete.",
      action: "To mark as complete, attend class and demonstrate how your submission works to your tutor."
    },
    complete: {
      detail: "You are finished with this task 🎉",
      reason: "Your tutor is happy with your work and it has been discussed with them.",
      action: "No further action required. Move onto the next task, or go party if everything is done."
    },
    fail: {
      detail: "You have failed this task",
      reason: "You have not successfully demonstrated the required learning for this task. This may be due to plagiarism detection or assessment under testing conditions.",
      action: "You should discuss this with your tutor and/or the convenor."
    },
    time_exceeded: {
      detail: "Time limit exceeded",
      reason: "This work was submitted after the deadline, having missed both the target date and deadline.",
      action: "Work submitted after the feedback deadline will not be checked by tutors prior to the portfolio assessment. You will need to ensure this task is at an adequate standard in your portfolio."
    },
    awaiting_extension: {
      detail: "Time limit exceeded, awaiting extension",
      reason: "This work was submitted after the deadline, having missed both the target date and deadline but is awaiting an extension.",
      action: "You require an extension to have this work assessed. If an extension is granted the task will be ready for feedback, and will be reviewed by your tutor."
    }
  };
  taskService.switchableStates = {
    student: ['not_started', 'working_on_it', 'need_help', 'ready_to_mark'],
    tutor: ['complete', 'discuss', 'demonstrate', 'fix_and_resubmit', 'redo', 'do_not_resubmit', 'fail']
  };
  taskService.rejectFutureStates = {
    not_started: [],
    working_on_it: [],
    need_help: [],
    ready_to_mark: [],
    complete: ['ready_to_mark', 'not_started', 'working_on_it', 'need_help'],
    discuss: ['ready_to_mark', 'not_started', 'working_on_it', 'need_help'],
    demonstrate: ['ready_to_mark', 'not_started', 'working_on_it', 'need_help'],
    fix_and_resubmit: [],
    redo: [],
    do_not_resubmit: ['ready_to_mark', 'not_started', 'working_on_it', 'need_help'],
    time_exceeded: ['ready_to_mark', 'not_started', 'working_on_it', 'need_help'],
    fail: ['ready_to_mark', 'not_started', 'working_on_it', 'need_help']
  };
  taskService.currentReplyID = {
    id: null
  };
  taskService.statusClass = function(status) {
    return _.trim(_.kebabCase(status));
  };
  taskService.statusText = function(status) {
    return taskService.statusLabels[status];
  };
  taskService.helpDescription = function(status) {
    return taskService.helpDescriptions[status];
  };
  taskService.taskDefinitionFn = function(unit) {
    return function(task) {
      return unit.taskDef(task.task_definition_id);
    };
  };
  taskService.statusData = function(data) {
    var status;
    status = data.status != null ? data.status : data;
    return {
      status: status,
      icon: taskService.statusIcons[status],
      label: taskService.statusLabels[status],
      "class": taskService.statusClass(status),
      help: taskService.helpDescription(status)
    };
  };
  taskService.isGroupTask = function(task) {
    return groupService.isGroupTask(task);
  };
  taskService.staffAlignmentsForTask = function(task) {
    return task.unit().staffAlignmentsForTaskDefinition(task.definition);
  };
  taskService.triggerTransition = function(task, status, unitRole) {
    var asUser, requiresFileUpload;
    if (!_.includes(taskService.statusKeys, status)) {
      throw Error("Not a valid status key");
    }
    if (task.status === status) {
      return;
    }
    requiresFileUpload = _.includes(['ready_to_mark', 'need_help'], status) && task.requiresFileUpload();
    if (requiresFileUpload) {
      return taskService.presentTaskSubmissionModal(task, status);
    } else {
      taskService.updateTaskStatus(task.unit(), task.project(), task, status);
      asUser = unitRole != null ? unitRole.role : 'Student';
      return analyticsService.event('Task Service', "Updated Status as " + asUser, taskService.statusLabels[status]);
    }
  };
  taskService.presentTaskSubmissionModal = function(task, status, reuploadEvidence) {
    var modal, oldStatus;
    oldStatus = task.status;
    task.status = status;
    modal = UploadSubmissionModal.show(task, reuploadEvidence);
    if (modal == null) {
      task.status = oldStatus;
      return;
    }
    return modal.result.then(function(response) {
      return null;
    }, function(dismissed) {
      task.status = oldStatus;
      return alertService.add("info", "Submission cancelled. Status was reverted.", 6000);
    });
  };
  doDeleteTask = function(task, unit, callback) {
    if (callback == null) {
      callback = null;
    }
    return TaskDefinition["delete"]({
      unit_id: unit.id,
      id: task.id
    }).$promise.then((function(response) {
      unit.task_definitions = _.without(unit.task_definitions, task);
      alertService.add("success", "Task Deleted", 2000);
      if (typeof callback === "function") {
        callback(response);
      }
      return analyticsService.event('Task Service', 'Deleted Task Definition');
    }), (function(response) {
      if (response.data.error != null) {
        alertService.add("danger", "Error: " + response.data.error, 6000);
      } else {
        alertService.add("danger", "Unexpected error connecting to Doubtfire.", 6000);
      }
      return analyticsService.event('Task Service', 'Failed to Delete Task Definition');
    }));
  };
  taskService.deleteTask = function(task, unit, callback) {
    if (callback == null) {
      callback = null;
    }
    return ConfirmationModal.show("Delete Task " + task.abbreviation, 'Are you sure you want to delete this task? This action is final and will delete student work associated with this task.', function() {
      var promise;
      promise = doDeleteTask(task, unit, null);
      return ProgressModal.show("Deleting Task " + task.abbreviation, 'Please wait while student projects are updated.', promise);
    });
  };
  taskService.plagiarismDetected = function(task) {
    return task.similar_to_count - task.similar_to_dismissed_count > 0;
  };
  taskService.indexOf = function(status) {
    return _.indexOf(taskService.statusKeys, status);
  };
  taskService.allStatusData = function() {
    var result;
    result = [];
    angular.forEach(taskService.statusKeys, function(sk) {
      return result.push({
        icon: taskService.statusIcons[sk],
        label: taskService.statusLabels[sk],
        "class": taskService.statusClass(sk)
      });
    });
    return result;
  };
  taskService.processTaskStatusChange = function(unit, project, task, status, response) {
    task.id = response.id;
    task.times_assessed = response.times_assessed;
    task.submisson_date = response.submisson_date;
    task.updateTaskStatus(response.status, response.new_stats);
    task.processing_pdf = response.processing_pdf;
    task.due_date = response.due_date;
    task.extensions = response.extensions;
    task.grade = response.grade;
    if (response.status === status) {
      if (typeof project.updateBurndownChart === "function") {
        project.updateBurndownChart();
      }
      alertService.add("success", "Status saved.", 2000);
      if (task.inTimeExceeded() && !task.isPastDeadline()) {
        alertService.add('warning', "Request an extension, or wait for your extension request to be granted, to have this task assessed.");
      }
      if (response.other_projects != null) {
        return _.each(response.other_projects, function(details) {
          var other_task, proj;
          if (unit.students != null) {
            proj = unit.findStudent(details.id);
          }
          if (proj != null) {
            task.updateTaskStatus(response.status, details.new_stats);
            other_task = proj.findTaskForDefinition(task.definition.id);
            if (other_task != null) {
              other_task.grade = response.grade;
              return other_task.status = response.status;
            }
          }
        });
      }
    } else {
      return alertService.add("info", "Status change was not changed.", 4000);
    }
  };
  taskService.updateTaskStatus = function(unit, project, task, status, success, failure) {
    var oldStatus, ref, updateFunc;
    oldStatus = task.status;
    updateFunc = function() {
      return Task.update({
        project_id: project.project_id,
        task_definition_id: task.definition.id,
        trigger: status,
        grade: task.grade,
        quality_pts: task.quality_pts
      }, function(value) {
        taskService.processTaskStatusChange(unit, project, task, status, value);
        analyticsService.event('Task Service', 'Updated Task Status', status);
        analyticsService.event('Task Service', 'Updated Task Grade', gradeService.grades[value.grade]);
        return typeof success === "function" ? success() : void 0;
      }, function(value) {
        task.status = oldStatus;
        alertService.add("danger", value.data.error, 6000);
        analyticsService.event('Task Service', 'Failed to Update Task Status', status);
        return typeof failure === "function" ? failure() : void 0;
      });
    };
    if ((task.definition.is_graded || task.definition.max_quality_pts > 0) && indexOf.call(taskService.gradeableStatuses, status) >= 0) {
      return (ref = GradeTaskModal.show(task)) != null ? ref.result.then(function(response) {
        task.grade = response.selectedGrade;
        task.quality_pts = response.qualityPts;
        return updateFunc();
      }, function() {
        task.status = oldStatus;
        return alertService.add("info", "No grade was specified to a graded task - status reverted", 6000);
      }) : void 0;
    } else {
      return updateFunc();
    }
  };
  taskService.recreateSubmissionPdf = function(task, onSuccess, onFailure) {
    return TaskFeedback.update({
      task_definition_id: task.definition.id,
      project_id: task.project().project_id
    }, function(value) {
      if (value.result === "false") {
        alertService.add("danger", "Request failed, cannot recreate PDF at this time.", 2000);
        return analyticsService.event('Task Service', 'Failed to Recreate PDF');
      } else {
        task.processing_pdf = true;
        alertService.add("info", "Task PDF will be recreated.", 2000);
        analyticsService.event('Task Service', 'Recreated PDF');
        return typeof onSuccess === "function" ? onSuccess() : void 0;
      }
    }, function(value) {
      alertService.add("danger", "Request failed, cannot recreate PDF at this time.", 2000);
      analyticsService.event('Task Service', 'Failed to Recreate PDF');
      return typeof onFailure === "function" ? onFailure() : void 0;
    });
  };
  taskService.taskIsGraded = function(task) {
    return (task != null) && task.definition.is_graded && (task.grade != null);
  };
  taskService.taskKeyFromString = function(taskKeyString) {
    var studentId, taskDefAbbr, taskKeyComponents;
    taskKeyComponents = taskKeyString != null ? taskKeyString.split('/') : void 0;
    if (taskKeyComponents) {
      studentId = _.first(taskKeyComponents);
      taskDefAbbr = _.last(taskKeyComponents);
      if (!(_.isString(studentId) && _.isString(taskDefAbbr))) {
        return;
      }
    }
    return {
      studentId: studentId,
      taskDefAbbr: taskDefAbbr
    };
  };
  taskService.taskKeyToUrlString = function(task) {
    var key;
    key = task.taskKey();
    return key.studentId + "/" + key.taskDefAbbr;
  };
  taskService.taskKeyToIdString = function(task) {
    var key;
    key = task.taskKey();
    return ("task-key-" + key.studentId + "-" + key.taskDefAbbr).replace(/[.#]/g, "-");
  };
  taskService.taskKey = function(task) {
    return {
      studentId: task.project().student_id,
      taskDefAbbr: task.definition.abbreviation
    };
  };
  taskService.hasTaskKey = function(task, key) {
    return _.isEqual(task != null ? task.taskKey() : void 0, key);
  };
  hoursBetween = function(time1, time2) {
    return Math.floor(Math.abs(new Date(time1) - new Date(time2)) / 1000 / 60 / 60);
  };
  taskService.isBubbleComment = function(commentType) {
    return ["text", "discussion", "audio", "image", "pdf"].includes(commentType);
  };
  taskService.mapComments = function(comments) {
    var authorID, i, initials, j, ref, ref1, ref2, ref3, ref4, ref5, ref6, timeOfMessage;
    if ((comments == null) || comments.length === 0) {
      return comments;
    }
    comments[0].should_show_timestamp = true;
    for (i = j = 0, ref = comments.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      comments[i].comment = emojiService.colonsToNative(comments[i].comment);
      if (comments[i].reply_to_id != null) {
        comments[i].original_comment = $filter('filter')(comments, {
          'id': comments[i].reply_to_id
        })[0];
      }
      initials = comments[i].author.name.split(" ");
      comments[i].initials = ("" + initials[0][0] + initials[1][0]).toUpperCase();
      comments[i].author_is_me = comments[i].author.id === currentUser.profile.id;
      comments[i].recipient_is_me = comments[i].recipient.id === currentUser.profile.id;
      authorID = comments[i].author.id;
      timeOfMessage = comments[i].created_at;
      if (authorID !== ((ref1 = comments[i + 1]) != null ? ref1.author.id : void 0) || hoursBetween(timeOfMessage, (ref2 = comments[i + 1]) != null ? ref2.created_at : void 0) > 3) {
        comments[i].should_show_avatar = true;
        if ((ref3 = comments[i + 1]) != null) {
          ref3.should_show_timestamp = true;
        }
      } else {
        comments[i].should_show_avatar = false;
        if ((ref4 = comments[i + 1]) != null) {
          ref4.should_show_timestamp = false;
        }
      }
      if (taskService.isBubbleComment(comments[i].type) && !taskService.isBubbleComment((ref5 = comments[i - 1]) != null ? ref5.type : void 0)) {
        comments[i].first_in_series = true;
      }
      if (taskService.isBubbleComment(comments[i].type) && !taskService.isBubbleComment((ref6 = comments[i + 1]) != null ? ref6.type : void 0)) {
        comments[i].should_show_avatar = true;
      }
    }
    comments[comments.length - 1].should_show_avatar = true;
    return comments;
  };
  taskService.addComment = function(task, textString, commentType, replyID, success, failure) {
    return TaskComment.create({
      project_id: task.project().project_id,
      task_definition_id: task.task_definition_id,
      comment: textString,
      type: commentType,
      reply_to_id: replyID
    }, function(response) {
      if (task.comments == null) {
        task.comments = [];
      }
      task.comments.push(response);
      taskService.mapComments(task.comments);
      if ((success != null) && _.isFunction(success)) {
        success(response);
      }
      return analyticsService.event("View Task Comments", "Added new comment");
    }, function(response) {
      if ((failure != null) && _.isFunction(failure)) {
        return failure(response);
      }
    });
  };
  taskService.scrollDown = function() {
    return $timeout(function() {
      var objDiv, wrappedResult;
      objDiv = document.querySelector("task-comments-viewer .comments-body");
      wrappedResult = angular.element(objDiv);
      return wrappedResult[0].scrollTop = wrappedResult[0].scrollHeight;
    });
  };
  taskService.addMediaComment = function(task, media, onSuccess, onError) {
    var form, reply_to_id;
    form = new FormData();
    form.append('attachment', media);
    if (taskService.currentReplyID.id != null) {
      reply_to_id = taskService.currentReplyID.id;
      taskService.currentReplyID.id = null;
    }
    return TaskComment.create_media({
      project_id: task.project().project_id,
      task_definition_id: task.task_definition_id,
      reply_to_id: reply_to_id
    }, form, function(response) {
      if (task.comments == null) {
        task.comments = [];
      }
      task.comments.push(response);
      taskService.mapComments(task.comments);
      return onSuccess(response);
    }, function(response) {
      return onError(response);
    });
  };
  taskService.addDiscussionComment = function(task, prompts, onSuccess, onError) {
    var form, j, len, prompt, res, temp;
    form = new FormData();
    temp = [];
    for (j = 0, len = prompts.length; j < len; j++) {
      prompt = prompts[j];
      form.append('attachments[]', prompt);
    }
    res = DiscussionComment.createDiscussion.create_media({
      project_id: task.project().project_id,
      task_definition_id: task.task_definition_id,
      type: "discussion"
    }, form, function(response) {
      if (task.comments == null) {
        task.comments = [];
      }
      task.comments.push(response);
      taskService.mapComments(task.comments);
      return onSuccess(response);
    }, function(response) {
      return onError(response);
    });
    return $timeout(function() {
      var objDiv, wrappedResult;
      objDiv = document.querySelector("task-comments-viewer .comments-body");
      wrappedResult = angular.element(objDiv);
      return wrappedResult[0].scrollTop = wrappedResult[0].scrollHeight;
    });
  };
  taskService.postDiscussionReply = function(task, commentID, replyAudio, onSuccess, onError) {
    var form;
    form = new FormData();
    form.append('attachment', replyAudio);
    return DiscussionComment.postDiscussionReply.create_media({
      project_id: task.project().project_id,
      task_definition_id: task.task_definition_id,
      task_comment_id: commentID
    }, form, function(response) {
      return onSuccess(response);
    }, function(response) {
      return onError(response);
    });
  };
  taskService.getDiscussionComment = function(task, commentID, onSuccess, onError) {
    return DiscussionComment.getDiscussion.get({
      project_id: task.project().project_id,
      task_definition_id: task.task_definition_id,
      task_comment_id: commentID
    }, function(response) {
      return onSuccess(response);
    }, function(response) {
      return onError(response);
    });
  };
  taskService.assessExtension = function(task, taskCommentID, assessment, onSuccess, onError) {
    var interceptSuccess;
    interceptSuccess = function(response) {
      task.due_date = response.data.due_date;
      task.extensions = response.data.extensions;
      task.status = response.data.task_status;
      task.project().updateBurndownChart();
      task.project().calcTopTasks();
      return onSuccess(response);
    };
    return Task.assessExtension(task, taskCommentID, assessment, interceptSuccess, onError);
  };
  return taskService;
}]);
