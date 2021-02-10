var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

angular.module("doubtfire.common.services.projects", []).factory("projectService", ["$filter", "$http", "taskService", "Project", "$rootScope", "alertService", "Task", "Visualisation", "gradeService", "TeachingPeriod", "DoubtfireConstants", function($filter, $http, taskService, Project, $rootScope, alertService, Task, Visualisation, gradeService, TeachingPeriod, DoubtfireConstants) {
  var injectFunctionalityInProject, projectService, timeToDescription;
  projectService = {};
  injectFunctionalityInProject = function(project) {
    if (project.teachingPeriod == null) {
      project._teachingPeriod = null;
      project.teachingPeriod = function() {
        if ((project.teaching_period_id != null) && (project._teachingPeriod == null)) {
          project._teachingPeriod = TeachingPeriod.getTeachingPeriod(project.teaching_period_id);
        }
        return project._teachingPeriod;
      };
    }
    return project;
  };
  timeToDescription = function(earlyTime, laterTime) {
    var diff, exactDiff, i, len, t, times;
    times = ["weeks", "days", "hours", "minutes", "seconds"];
    for (i = 0, len = times.length; i < len; i++) {
      t = times[i];
      exactDiff = laterTime.diff(earlyTime, t, true).toFixed(2);
      diff = Math.floor(exactDiff);
      if (exactDiff > 2 && t === "weeks") {
        return diff + " " + (t.charAt(0).toUpperCase() + t.substr(1));
      } else if (diff > 1 && t !== "weeks") {
        return diff + " " + (t.charAt(0).toUpperCase() + t.substr(1));
      } else if (diff === 1 && t !== "weeks") {
        return "1 " + (t.charAt(0).toUpperCase() + t.substr(1, t.length - 2));
      }
    }
    return laterTime.diff(earlyTime, "seconds");
  };
  projectService.loadedProjects = null;
  $rootScope.$on('signOut', function() {
    return projectService.loadedProjects = null;
  });
  projectService.getProjects = function(inactive, callback) {
    var failure, fireCallback, success;
    fireCallback = function() {
      var projs;
      if (inactive) {
        projs = projectService.loadedProjects;
      } else {
        projs = _.filter(projectService.loadedProjects, function(p) {
          return p.active;
        });
      }
      if (_.isFunction(callback)) {
        return callback(projs);
      }
    };
    if (projectService.loadedProjects == null) {
      success = function(projects) {
        projectService.loadedProjects = _.map(projects, function(p) {
          return injectFunctionalityInProject(p);
        });
        return fireCallback();
      };
      failure = function(response) {
        var msg;
        if ((response != null ? response.status : void 0) !== 419) {
          msg = response == null ? response.error : '';
          return alertService.add("danger", "Failed to connect to Doubtfire server. " + msg, 6000);
        }
      };
      return Project.query({
        include_inactive: true
      }, success, failure);
    } else {
      return fireCallback();
    }
  };
  projectService.updateProject = function(id, data, onSuccess, onFailure) {
    data = _.extend({
      id: id
    }, data);
    return Project.update(data, function(success) {
      return typeof onSuccess === "function" ? onSuccess(success) : void 0;
    }, function(failure) {
      return typeof onFailure === "function" ? onFailure(failure) : void 0;
    });
  };
  projectService.mapTask = function(task, unit, project) {
    var projTask, td;
    td = unit.taskDef(task.task_definition_id);
    projTask = project.findTaskForDefinition(td.id);
    if (projTask != null) {
      _.extend(projTask, task);
      if (projTask.definition != null) {
        return projTask;
      } else {
        task = projTask;
      }
    }
    task.definition = td;
    task.project = function() {
      return project;
    };
    task.unit = function() {
      return unit;
    };
    task.status_txt = function() {
      return taskService.statusLabels[task.status];
    };
    task.statusSeq = function() {
      return taskService.statusSeq[task.status];
    };
    task.canReuploadEvidence = function() {
      return task.inSubmittedState();
    };
    task.requiresFileUpload = function() {
      return task.definition.upload_requirements.length > 0;
    };
    task.plagiarismDetected = function() {
      return taskService.plagiarismDetected(task);
    };
    task.isGroupTask = function() {
      return taskService.isGroupTask(task);
    };
    task.studentInAGroup = function() {
      return task.group() != null;
    };
    task.group = function() {
      return projectService.getGroupForTask(task.project(), task);
    };
    task.addComment = function(textString, success, failure) {
      return taskService.addComment(task, textString, success, failure);
    };
    task.scrollCommentsToBottom = function() {
      return taskService.scrollDown();
    };
    task.applyForExtension = function(reason, weeksRequested, onSuccess, onError) {
      return Task.applyForExtension(task, reason, weeksRequested, onSuccess, onError);
    };
    task.assessExtension = function(taskCommentID, assessment, onSuccess, onError) {
      return taskService.assessExtension(task, taskCommentID, assessment, onSuccess, onError);
    };
    task.maxWeeksCanExtend = function() {
      return Math.ceil(task.definition.localDeadlineDate().diff(task.localDueDate(), 'days') / 7);
    };
    task.minWeeksCanExtend = function() {
      var minWeeks;
      minWeeks = Math.ceil(moment().diff(task.localDueDate(), 'days') / 7);
      if (minWeeks < 0) {
        return 0;
      } else {
        return minWeeks;
      }
    };
    task.staffAlignments = function() {
      return taskService.staffAlignmentsForTask(task);
    };
    task.timeToDue = function() {
      var days;
      days = task.daysUntilDueDate();
      if (days < 0) {
        return "!";
      } else if (days < 11) {
        return days + "d";
      } else {
        return (Math.floor(days / 7)) + "w";
      }
    };
    task.localDueDate = function() {
      var due;
      if (task.due_date != null) {
        due = new Date(task.due_date);
        return moment({
          year: due.getFullYear(),
          month: due.getMonth(),
          day: due.getDate(),
          hour: 23,
          minute: 59,
          second: 59,
          millisecond: 999
        });
      } else {
        return task.definition.localDueDate();
      }
    };
    task.localDueDateString = function() {
      return task.localDueDate().format("ddd D MMM");
    };
    task.startDateString = function() {
      return task.startDate().format("ddd D MMM");
    };
    task.deadlineString = function() {
      return task.localDeadlineDate().format("ddd D MMM");
    };
    task.localDeadlineDate = function() {
      return task.definition.localDeadlineDate();
    };
    task.startDate = function() {
      if (task.start_date != null) {
        return moment(task.start_date);
      } else {
        return moment(task.definition.start_date);
      }
    };
    task.isDueSoon = function() {
      return task.daysUntilDueDate() <= 7 && task.timePastDueDate() < 0 && !task.inFinalState();
    };
    task.isPastDueDate = function() {
      return task.timePastDueDate() > 0 && !task.inSubmittedState();
    };
    task.isOverdue = function() {
      return task.daysUntilDueDate() < 0;
    };
    task.isDeadlineSoon = function() {
      return task.daysUntilDeadlineDate() <= 14 && task.timePastDeadlineDate() < 0 && !task.inFinalState();
    };
    task.isPastDeadline = function() {
      return task.timePastDeadlineDate() > 0 && !task.inSubmittedState();
    };
    task.isDueToday = function() {
      return task.daysUntilDueDate() === 0 && !task.inSubmittedState();
    };
    task.betweenDueDateAndDeadlineDate = function() {
      return (moment() > task.localDueDate()) && (moment() < task.localDeadlineDate());
    };
    task.daysPastDeadlineDate = function() {
      return moment().diff(task.localDeadlineDate(), 'days');
    };
    task.daysPastDueDate = function() {
      return moment().diff(task.localDueDate(), 'days');
    };
    task.timePastDueDate = function() {
      return moment().diff(task.localDueDate());
    };
    task.timePastDeadlineDate = function() {
      return moment().diff(task.localDeadlineDate());
    };
    task.daysUntilDeadlineDate = function() {
      return task.localDeadlineDate().diff(moment(), 'days');
    };
    task.daysUntilDueDate = function() {
      return task.localDueDate().diff(moment(), 'days');
    };
    task.wasSubmittedOnTime = function() {
      var deadline;
      deadline = task.localDeadlineDate;
      return moment(task.submission_date).diff(task.definition.finalDeadlineDate());
    };
    task.isValidTopTask = function() {
      return _.includes(taskService.validTopTask, task.status);
    };
    task.timeUntilStartDate = function() {
      return task.startDate().diff(moment());
    };
    task.daysUntilStartDate = function() {
      return task.startDate().diff(moment(), 'days');
    };
    task.isBeforeStartDate = function() {
      return task.timeUntilStartDate() > 0;
    };
    task.timeToStart = function() {
      var days;
      if (task.daysUntilStartDate() < 0) {
        return "";
      } else {
        days = task.daysUntilStartDate();
        if (days < 7) {
          return days + "d";
        } else {
          return (Math.floor(days / 7)) + "w";
        }
      }
    };
    task.timeUntilDeadlineDescription = function() {
      return timeToDescription(moment(), task.definition.localDeadlineDate());
    };
    task.timeUntilDueDateDescription = function() {
      return timeToDescription(moment(), task.localDueDate());
    };
    task.timePastDeadlineDescription = function() {
      return timeToDescription(task.definition.localDeadlineDate(), moment());
    };
    task.timePastDueDateDescription = function() {
      return timeToDescription(task.localDueDate(), moment());
    };
    task.canApplyForExtension = function() {
      return task.inStateThatAllowsExtension() && (!task.isPastDeadline() || task.wasSubmittedOnTime()) && task.maxWeeksCanExtend() > 0;
    };
    task.inFinalState = function() {
      var ref;
      return ref = task.status, indexOf.call(taskService.finalStatuses, ref) >= 0;
    };
    task.inStateThatAllowsExtension = function() {
      var ref;
      return ref = task.status, indexOf.call(taskService.stateThatAllowsExtension, ref) >= 0;
    };
    task.inSubmittedState = function() {
      var ref;
      return ref = task.status, indexOf.call(taskService.submittedStatuses, ref) >= 0;
    };
    task.inDiscussState = function() {
      var ref;
      return ref = task.status, indexOf.call(taskService.discussionStatuses, ref) >= 0;
    };
    task.inMarkedState = function() {
      var ref;
      return ref = task.status, indexOf.call(taskService.markedStatuses, ref) >= 0;
    };
    task.inAwaitingFeedbackState = function() {
      var ref;
      return ref = task.status, indexOf.call(taskService.awaitingFeedbackStatuses, ref) >= 0;
    };
    task.inCompleteState = function() {
      return task.status === 'complete';
    };
    task.inTimeExceeded = function() {
      return task.status === 'time_exceeded';
    };
    task.triggerTransition = function(status, unitRole) {
      return taskService.triggerTransition(task, status, unitRole);
    };
    task.updateTaskStatus = function(status, new_stats) {
      task.status = status;
      return task.project().updateTaskStats(new_stats);
    };
    task.needsSubmissionDetails = function() {
      return task.has_pdf === null || task.has_pdf === void 0;
    };
    task.statusClass = function() {
      return taskService.statusData(task.status)["class"];
    };
    task.statusIcon = function() {
      return taskService.statusData(task.status).icon;
    };
    task.statusLabel = function() {
      return taskService.statusData(task.status).label;
    };
    task.statusHelp = function() {
      var help;
      help = taskService.statusData(task.status).help;
      if (task.betweenDueDateAndDeadlineDate() && task.inTimeExceeded()) {
        help = taskService.statusData('awaiting_extension').help;
      }
      return help;
    };
    task.taskKey = function() {
      return taskService.taskKey(task);
    };
    task.recreateSubmissionPdf = function(onSuccess, onFailure) {
      return taskService.recreateSubmissionPdf(task, onSuccess, onFailure);
    };
    task.taskKeyToUrlString = function() {
      return taskService.taskKeyToUrlString(task);
    };
    task.taskKeyToIdString = function() {
      return taskService.taskKeyToIdString(task);
    };
    task.taskKeyFromString = function(taskKeyString) {
      return taskService.taskKeyFromString(taskKeyString);
    };
    task.hasTaskKey = function(key) {
      return taskService.hasTaskKey(task, key);
    };
    task.filterFutureStates = function(states) {
      return _.reject(states, function(s) {
        var ref;
        return ref = s.status, indexOf.call(taskService.rejectFutureStates[task.status], ref) >= 0;
      });
    };
    task.gradeDesc = function() {
      return gradeService.gradeAcronyms[task.grade];
    };
    task.hasGrade = function() {
      return task.grade != null;
    };
    task.hasQualityPoints = function() {
      var ref;
      return task.definition.max_quality_pts > 0 && (ref = task.status, indexOf.call(taskService.gradeableStatuses, ref) >= 0);
    };
    task.matches = function(matchText) {
      project = task.project();
      return taskService.statusLabels[task.status].toLowerCase().indexOf(matchText) >= 0 || task.definition.abbreviation.toLowerCase().indexOf(matchText) >= 0 || task.definition.name.toLowerCase().indexOf(matchText) >= 0 || (project != null) && project.matches(matchText);
    };
    task.getSubmissionDetails = function(onSuccess, onFailure) {
      if (!task.needsSubmissionDetails()) {
        return typeof onSuccess === "function" ? onSuccess(task) : void 0;
      }
      return Task.SubmissionDetails.get({
        id: project.project_id,
        task_definition_id: task.definition.id
      }, function(response) {
        task.has_pdf = response.has_pdf;
        task.processing_pdf = response.processing_pdf;
        task.submission_date = response.submission_date;
        return typeof onSuccess === "function" ? onSuccess(task) : void 0;
      }, function(response) {
        return typeof onFailure === "function" ? onFailure(response) : void 0;
      });
    };
    task.refresh = function() {
      return Project.refreshTasks.get({
        project_id: task.project().project_id,
        task_definition_id: task.task_definition_id
      }, function(response) {
        task.status = response['status'];
        task.extensions = response['extensions'];
        return task.due_date = response['due_date'];
      }, function(response) {
        return console.log("Failed to refresh tasks on extension " + response.data.error);
      });
    };
    task.pin = function(taskID, onSuccess, onError) {
      return $http.post(DoubtfireConstants.API_URL + "/tasks/" + taskID + "/pin").then(function(data) {
        task.pinned = true;
        return onSuccess(data);
      }, function(response) {
        return onError(response);
      });
    };
    task.unpin = function(taskID, onSuccess, onError) {
      return $http["delete"](DoubtfireConstants.API_URL + "/tasks/" + taskID + "/pin").then(function(data) {
        task.pinned = false;
        return onSuccess(data);
      }, function(response) {
        return onError(response);
      });
    };
    return task;
  };
  projectService.addTaskDetailsToProject = function(project, unit) {
    var base;
    if ((project.tasks == null) || project.tasks.length < unit.task_definitions.length) {
      base = unit.task_definitions.map(function(td) {
        return {
          id: null,
          status: "not_started",
          task_definition_id: td.id,
          include_in_portfolio: true,
          pct_similar: 0,
          similar_to_count: 0,
          similar_to_dismissed_count: 0,
          times_assessed: 0,
          num_new_comments: 0
        };
      });
      base = _.filter(base, function(task) {
        return !_.find(project.tasks, {
          task_definition_id: task.task_definition_id
        });
      });
      if (project.tasks == null) {
        project.tasks = [];
      }
      Array.prototype.push.apply(project.tasks, base);
    }
    project.tasks = project.tasks.map(function(task) {
      return projectService.mapTask(task, unit, project);
    });
    project.tasks = _.sortBy(project.tasks, function(t) {
      return t.definition.abbreviation;
    }).reverse();
    project.target_tasks = function() {
      return projectService.tasksInTargetGrade(project);
    };
    return project;
  };
  projectService.addProjectMethods = function(project) {
    if (project.updateTaskStats != null) {
      return project;
    }
    project.updateTaskStats = function(new_stats) {
      var updated_stats;
      updated_stats = project.task_stats;
      updated_stats[0].value = Math.round(100 * new_stats.red_pct);
      updated_stats[1].value = Math.round(100 * new_stats.grey_pct);
      updated_stats[2].value = Math.round(100 * new_stats.orange_pct);
      updated_stats[3].value = Math.round(100 * new_stats.blue_pct);
      updated_stats[4].value = Math.round(100 * new_stats.green_pct);
      project.orderScale = Math.round(100 * new_stats.order_scale);
      return project.task_stats = updated_stats;
    };
    project.updateBurndownChart = function() {
      return Project.get({
        id: project.project_id
      }, function(response) {
        project.burndown_chart_data = response.burndown_chart_data;
        return Visualisation.refreshAll();
      });
    };
    project.incorporateTask = function(newTask, callback) {
      var currentTask;
      if (project.tasks == null) {
        project.tasks = [];
      }
      currentTask = _.find(project.tasks, {
        task_definition_id: newTask.task_definition_id
      });
      if (currentTask != null) {
        currentTask = _.extend(currentTask, newTask);
      } else {
        project.tasks.push(projectService.mapTask(newTask, unit, project));
        currentTask = newTask;
      }
      if (currentTask.isGroupTask() && (currentTask.group() == null)) {
        projectService.updateGroups(currentTask.project(), callback, true);
      }
      if (typeof callback === "function") {
        callback();
      }
      return currentTask;
    };
    project.refresh = function(unit_obj) {
      return Project.get({
        id: project.project_id
      }, function(response) {
        _.extend(project, response);
        if (unit_obj) {
          return projectService.addTaskDetailsToProject(project, unit_obj);
        }
      });
    };
    return project;
  };
  projectService.getProject = function(project, unit, onSuccess, onFailure) {
    var projectId;
    projectId = _.isNumber(project) ? project : project != null ? project.project_id : void 0;
    if (projectId == null) {
      throw Error("No project id given to getProject");
    }
    if (project.burndown_chart_data != null) {
      return typeof onSuccess === "function" ? onSuccess(project) : void 0;
    } else {
      return Project.get({
        id: projectId
      }, function(response) {
        project = _.extend(project, response);
        projectService.addProjectMethods(project);
        if (unit != null) {
          projectService.addTaskDetailsToProject(project, unit);
        }
        return typeof onSuccess === "function" ? onSuccess(project) : void 0;
      }, function(failure) {
        alertService.add("danger", "" + (failure.data.error || "Unable to load project"), 6000);
        return typeof onFailure === "function" ? onFailure(failure) : void 0;
      });
    }
  };
  projectService.updateGroups = function(project, onSuccess, force) {
    if (force == null) {
      force = false;
    }
    if ((project.groups != null) || force) {
      return Project.get({
        id: project.project_id
      }, function(response) {
        project.groups = response.groups;
        return typeof onSuccess === "function" ? onSuccess(project) : void 0;
      });
    }
  };
  projectService.getGroupForTask = function(project, task) {
    var result;
    if (!task.definition.group_set) {
      return null;
    }
    result = _.find(project.groups, function(group) {
      return group.group_set_id === task.definition.group_set.id;
    });
    return result || _.find(project.unit().groups, function(group) {
      var ref;
      return group.group_set_id === task.definition.group_set.id && (ref = project.project_id, indexOf.call(group.projects, ref) >= 0);
    });
  };
  projectService.taskFromTaskDefId = function(project, task_definition_id) {
    return project.findTaskForDefinition(task_definition_id);
  };
  projectService.tasksInTargetGrade = function(project) {
    return $filter('byGrade')(project.tasks, project.target_grade);
  };
  projectService.tasksByStatus = function(project, statusKey) {
    var tasksToConsider;
    tasksToConsider = projectService.tasksInTargetGrade(project);
    return _.filter(tasksToConsider, {
      status: statusKey
    });
  };
  return projectService;
}]);
