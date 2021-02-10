angular.module("doubtfire.common.services.units", []).factory("unitService", ["Unit", "UnitRole", "Students", "Group", "campusService", "tutorialService", "streamService", "projectService", "groupService", "gradeService", "taskService", "$filter", "$rootScope", "analyticsService", "PortfolioSubmission", "ConfirmationModal", "ProgressModal", "alertService", "Project", "$state", "TeachingPeriod", function(Unit, UnitRole, Students, Group, campusService, tutorialService, streamService, projectService, groupService, gradeService, taskService, $filter, $rootScope, analyticsService, PortfolioSubmission, ConfirmationModal, ProgressModal, alertService, Project, $state, TeachingPeriod) {
  var injectFunctionalityInUnitRole, unitService;
  unitService = {};
  unitService.loadedUnits = {};
  unitService.loadedUnitRoles = null;
  injectFunctionalityInUnitRole = function(unitRole) {
    if (unitRole.teachingPeriod == null) {
      unitRole._teachingPeriod = null;
      unitRole.teachingPeriod = function() {
        if ((unitRole.teaching_period_id != null) && (unitRole._teachingPeriod == null)) {
          unitRole._teachingPeriod = TeachingPeriod.getTeachingPeriod(unitRole.teaching_period_id);
        }
        return unitRole._teachingPeriod;
      };
    }
    return unitRole;
  };
  $rootScope.$on('signOut', function() {
    unitService.loadedUnits = {};
    return unitService.loadedUnitRoles = null;
  });
  unitService.getUnitRoles = function(callback) {
    var fireCallback;
    fireCallback = function() {
      if (_.isFunction(callback)) {
        return callback(unitService.loadedUnitRoles);
      }
    };
    if (unitService.loadedUnitRoles == null) {
      return UnitRole.query(function(roles) {
        unitService.loadedUnitRoles = _.map(roles, function(r) {
          return injectFunctionalityInUnitRole(r);
        });
        return fireCallback();
      });
    } else {
      return fireCallback();
    }
  };
  unitService.getUnit = function(unitId, options, onSuccess, onFailure) {
    var result, unit;
    if (_.isFunction(options)) {
      onSuccess = options;
      if (_.isFunction(onSuccess)) {
        onFailure = onSuccess;
      }
      options = {
        loadAllStudents: false,
        loadOnlyEnrolledStudents: false
      };
    }
    result = unitService.loadedUnits[unitId];
    if (result) {
      return typeof onSuccess === "function" ? onSuccess(result) : void 0;
    }
    if (options.loadAllStudents && options.loadOnlyEnrolledStudents) {
      throw Error("Load all and only enrolled cannot both be true");
    }
    unit = {
      analytics: {}
    };
    unit.tutorialStreamForAbbr = function(abbr) {
      if (abbr != null) {
        return _.find(unit.tutorial_streams, function(stream) {
          return stream.abbreviation === abbr;
        });
      }
    };
    unit.refresh = function(onSuccess, onFailure) {
      var failureCallback, successCallback;
      successCallback = function(newUnit) {
        _.extend(unit, newUnit);
        unit.tutorial_streams = _.map(unit.tutorial_streams, function(stream) {
          return streamService.createInstanceFrom(stream);
        });
        unit.tutorials = _.map(unit.tutorials, function(tutorial) {
          return tutorialService.createInstanceFrom(tutorial, unit);
        });
        unit.groups = _.map(unit.groups, function(grp) {
          return unitService.mapGroupToUnit(unit, grp);
        });
        unit.task_definitions = _.map(unit.task_definitions, function(taskDef, index, list) {
          taskDef.seq = index;
          if (taskDef.group_set_id) {
            taskDef.group_set = _.find(unit.group_sets, {
              id: taskDef.group_set_id
            });
          }
          taskDef.hasPlagiarismCheck = function() {
            return taskDef.plagiarism_checks.length > 0;
          };
          taskDef.targetGrade = function() {
            return gradeService.grades[taskDef.target_grade];
          };
          taskDef.localDeadlineDate = function() {
            var deadline;
            deadline = new Date(taskDef.due_date);
            return moment({
              year: deadline.getFullYear(),
              month: deadline.getMonth(),
              day: deadline.getDate(),
              hour: 23,
              minute: 59,
              second: 59
            });
          };
          taskDef.finalDeadlineDate = function() {
            var deadline;
            deadline = new Date(taskDef.due_date);
            return moment({
              year: deadline.getFullYear(),
              month: deadline.getMonth(),
              day: deadline.getDate(),
              hour: 23,
              minute: 59,
              second: 59
            }, '-12:00');
          };
          taskDef.localDueDate = function() {
            var due;
            due = new Date(taskDef.target_date);
            return moment({
              year: due.getFullYear(),
              month: due.getMonth(),
              day: due.getDate(),
              hour: 23,
              minute: 59,
              second: 59
            });
          };
          return taskDef;
        });
        if (!((options != null ? options.loadOnlyEnrolledStudents : void 0) || (options != null ? options.loadAllStudents : void 0))) {
          return typeof onSuccess === "function" ? onSuccess(unit) : void 0;
        }
        return unit.refreshStudents(onSuccess, onFailure);
      };
      failureCallback = function(response) {
        var ref;
        alertService.add("danger", "Failed to load unit. " + (response != null ? (ref = response.data) != null ? ref.error : void 0 : void 0), 8000);
        return typeof onFailure === "function" ? onFailure(response) : void 0;
      };
      return Unit.get({
        id: unitId
      }, successCallback, failureCallback);
    };
    unit.taskDef = function(taskDef) {
      var taskDefId;
      if (!(_.isObject(taskDef) || _.isNumber(taskDef))) {
        throw Error("Task def must be a number or task definition object");
      }
      taskDefId = _.isObject(taskDef) ? taskDef.task_definition_id : taskDef;
      return _.find(unit.task_definitions, {
        id: taskDefId
      });
    };
    unit.outcome = function(outcomeId) {
      return _.find(unit.ilos, {
        id: outcomeId
      });
    };
    unit.tutorialFromId = function(tuteId) {
      return _.find(unit.tutorials, {
        id: +tuteId
      });
    };
    unit.taskCount = function() {
      return unit.task_definitions.length;
    };
    unit.tutorialsForUserName = function(userName) {
      return _.filter(unit.tutorials, function(tutorial) {
        return tutorial.tutorName === userName;
      });
    };
    unit.refreshStudents = function(onSuccess, onFailure) {
      var failureCallback, requestToLoadAll, successCallback;
      successCallback = function(students) {
        unit.students = _.map(students, function(s) {
          return unitService.mapStudentToUnit(unit, s);
        });
        return typeof onSuccess === "function" ? onSuccess(unit) : void 0;
      };
      failureCallback = function(response) {
        var ref;
        alertService.add("danger", "Failed to load students. " + (response != null ? (ref = response.data) != null ? ref.error : void 0 : void 0), 8000);
        return typeof onFailure === "function" ? onFailure(response) : void 0;
      };
      requestToLoadAll = !(options != null ? options.loadOnlyEnrolledStudents : void 0) || (options != null ? options.loadAllStudents : void 0);
      return Students.query({
        unit_id: unit.id,
        all: requestToLoadAll
      }, successCallback, failureCallback);
    };
    unit.studentEnrolled = function(id) {
      var ref;
      return (ref = unit.findStudent(id)) != null ? ref.enrolled : void 0;
    };
    unit.findStudent = function(id) {
      if (unit.students == null) {
        throw Error("Students not yet mapped to unit (unit.students is undefined)");
      }
      return _.find(unit.students, {
        project_id: id
      });
    };
    unit.deleteStream = function(stream) {
      var failureCallback, successCallback;
      successCallback = function() {
        _.remove(unit.tutorials, function(tutorial) {
          return tutorial.tutorial_stream === stream;
        });
        return _.pull(unit.tutorial_streams, stream);
      };
      failureCallback = function(response) {
        var ref;
        return alertService.add("danger", "Failed to delete stream. " + (response != null ? (ref = response.data) != null ? ref.error : void 0 : void 0), 8000);
      };
      return ConfirmationModal.show("Delete Tutorial Stream " + stream.abbreviation, 'Are you sure you want to delete this tutorial stream? This action is final and will delete all associated tutorials.', function() {
        return Unit.tutorialStream["delete"]({
          id: unit.id,
          tutorial_stream_abbr: stream.abbreviation
        }, successCallback, failureCallback);
      });
    };
    unit.nextStream = function(activityTypeAbbreviation) {
      var failureCallback, successCallback;
      successCallback = function(stream) {
        return unit.tutorial_streams.push(streamService.createInstanceFrom(stream));
      };
      failureCallback = function(response) {
        var ref;
        return alertService.add("danger", "Failed to add stream. " + (response != null ? (ref = response.data) != null ? ref.error : void 0 : void 0), 8000);
      };
      return Unit.tutorialStream.create({
        id: unit.id,
        activity_type_abbr: activityTypeAbbreviation
      }, successCallback, failureCallback);
    };
    unit.addStudent = function(student) {
      var foundStudent, studentExists;
      analyticsService.event('Unit Service', 'Added Student');
      foundStudent = unit.findStudent(student.project_id);
      studentExists = foundStudent != null;
      if (!studentExists) {
        unit.students.push(student);
      } else {
        student = _.extend(foundStudent, student);
      }
      return unitService.mapStudentToUnit(unit, student);
    };
    unit.activeStudents = function() {
      return _.filter(unit.students, {
        enrolled: true
      });
    };
    unit.mapStudentToUnit = function(student) {
      return unitService.mapStudentToUnit(unit, student);
    };
    unit.findGroupSet = function(id) {
      return _.find(unit.group_sets, {
        id: +id
      });
    };
    unit.mapGroupToUnit = function(group) {
      return unitService.mapGroupToUnit(unit, group);
    };
    unit.refreshGroups = function() {};
    unit.getGroups = function(groupSetId, onSuccess, onFailure) {
      return groupService.getGroups(unit, groupSetId, onSuccess, onFailure);
    };
    unit.addGroup = function(groupSetId, name, tutorialId, onSuccess, onFailure) {
      return groupService.addGroup(unit, groupSetId, name, tutorialId, onSuccess, onFailure);
    };
    unit.updateGroup = function(group, onSuccess, onFailure) {
      if (group.unit().id !== unit.id) {
        throw Error("Cannot update group -- " + group.id + " does not exist under unit " + unit.id);
      }
      return groupService.updateGroup(group, onSuccess, onFailure);
    };
    unit.deleteGroup = function(group, groupSet, onSuccess, onFailure) {
      if (group.unit().id !== unit.id) {
        throw Error("Cannot delete group -- " + group.id + " does not exist under unit " + unit.id);
      }
      return groupService.deleteGroup(unit, group, groupSet, onSuccess, onFailure);
    };
    unit.hasGroupwork = function() {
      var ref;
      return ((ref = unit.group_sets) != null ? ref.length : void 0) > 0;
    };
    unit.hasStreams = function() {
      var ref;
      return ((ref = unit.tutorial_streams) != null ? ref.length : void 0) > 0;
    };
    unit.incorporateTasks = function(tasks, callback) {
      return _.map(tasks, function(t) {
        var project;
        project = unit.findStudent(t.project_id);
        if (project != null) {
          if (project.incorporateTask == null) {
            projectService.mapTask(t, unit, project);
            projectService.addProjectMethods(project, unit);
          }
          return project.incorporateTask(t, callback);
        }
      });
    };
    unit.fillWithUnStartedTasks = function(tasks, taskDef) {
      if (unit.students == null) {
        return;
      }
      taskDef = unit.taskDef(taskDef);
      return _.map(unit.students, function(p) {
        var t;
        t = _.find(tasks, function(t) {
          return t.project_id === p.project_id && t.task_definition_id === taskDef.id;
        });
        if (t == null) {
          t = _.find(p.tasks, function(t) {
            return t.task_definition_id === taskDef.id;
          });
        }
        if (t.isGroupTask() && (t.group() == null)) {
          projectService.updateGroups(t.project(), null, true);
        }
        return t;
      });
    };
    unit.staffAlignmentsForTaskDefinition = function(td) {
      var filteredAlignments;
      if (td == null) {
        return;
      }
      filteredAlignments = $filter('taskDefinitionFilter')(unit.task_outcome_alignments, td.id);
      return _.chain(filteredAlignments).map(function(a) {
        a.ilo = unit.outcome(a.learning_outcome_id);
        return a;
      }).sortBy(function(a) {
        return a.ilo.ilo_number;
      }).value();
    };
    unit.findGroupById = function(id) {
      return _.find(unit.groups, function(grp) {
        return grp.id === id;
      });
    };
    unit.refresh(onSuccess, onFailure);
    return unit;
  };
  unitService.unitTypeAheadData = function(unit) {
    var result;
    result = [];
    angular.forEach(unit.tutorials, function(tute) {
      result.push(tute.abbreviation);
      return result.push(tute.tutorName);
    });
    angular.forEach(unit.students, function(student) {
      result.push(student.name);
      return result.push(student.student_id);
    });
    result = _.uniq(result, function(item) {
      return item;
    });
    return result;
  };
  unitService.mapGroupToUnit = function(unit, group) {
    group.tutorial = function() {
      return unit.tutorialFromId(group.tutorial_id);
    };
    group.unit = function() {
      return unit;
    };
    group.projects = [];
    return group;
  };
  unitService.mapStudentToUnit = function(unit, student) {
    if (student.name != null) {
      return student;
    }
    student.findTaskForDefinition = function(taskDefId) {
      return _.find(student.tasks, {
        task_definition_id: taskDefId
      });
    };
    student.unit = function() {
      return unit;
    };
    student.campus = function() {
      var result;
      result = campusService.getFromCache("" + student.campus_id);
      if (result != null) {
        return result;
      }
      return {
        name: 'None',
        abbreviation: '',
        matches: function() {
          return false;
        }
      };
    };
    student.shortTutorialDescription = function() {
      var tutorials;
      tutorials = student.tutorials();
      if (tutorials.length > 0) {
        return _.chain(tutorials).map(function(tute) {
          return tute.abbreviation;
        }).join().value();
      } else {
        return 'None';
      }
    };
    student.calcTopTasks = function() {
      var closeGradeTasks, currentWeight, grade, i, len, overdueTasks, ref, sortedCompletedTasks, sortedTasks, toAdd;
      currentWeight = 0;
      sortedCompletedTasks = _.sortBy(_.sortBy(_.filter(student.tasks, function(task) {
        return task.inFinalState();
      }), 'definition.seq'), 'definition.start_date');
      _.forEach(sortedCompletedTasks, function(task) {
        task.topWeight = currentWeight;
        return currentWeight++;
      });
      sortedTasks = _.sortBy(_.sortBy(_.filter(student.tasks, function(task) {
        return task.isValidTopTask();
      }), 'definition.seq'), 'definition.start_date');
      overdueTasks = _.filter(sortedTasks, function(task) {
        return task.daysUntilDueDate() <= 7;
      });
      ref = gradeService.gradeValues;
      for (i = 0, len = ref.length; i < len; i++) {
        grade = ref[i];
        closeGradeTasks = _.filter(overdueTasks, function(task) {
          return task.definition.target_grade === grade;
        });
        closeGradeTasks = _.orderBy(closeGradeTasks, [
          function(task) {
            return task.daysPastDueDate();
          }
        ], ['desc']);
        _.forEach(closeGradeTasks, function(task) {
          task.topWeight = currentWeight;
          return currentWeight++;
        });
      }
      toAdd = _.filter(sortedTasks, function(task) {
        return task.daysUntilDueDate() > 7;
      });
      toAdd = _.sortBy(_.sortBy(toAdd, 'definition.target_grade'), 'definition.start_date');
      return _.forEach(toAdd, function(task) {
        task.topWeight = currentWeight;
        return currentWeight++;
      });
    };
    student.isEnrolledIn = function(tutorialId) {
      return _.find(student.tutorial_enrolments, function(enrolment) {
        return enrolment.tutorial_id === tutorialId;
      }) != null;
    };
    student.updateUnitEnrolment = function() {
      var newEnrollment;
      newEnrollment = !student.enrolled;
      return Project.update({
        id: student.project_id,
        enrolled: !student.enrolled
      }, function(project) {
        if (newEnrollment === project.enrolled) {
          return alertService.add('success', 'Enrolment changed.', 2000);
        } else {
          return alertService.add('danger', 'Enrolment change failed.', 5000);
        }
      }, function(response) {
        return alertService.add('danger', response.data.error, 5000);
      });
    };
    student.switchToCampus = function(campus, oldId, success) {
      var newId;
      newId = campus != null ? (_.isString(campus) || _.isNumber(campus) ? +campus : campus != null ? campus.id : void 0) : -1;
      return Project.update({
        id: student.project_id,
        campus_id: newId
      }, function(response) {
        student.campus_id = newId === -1 ? null : newId;
        alertService.add('success', "Campus changed for " + student.name, 2000);
        if ((success != null) && _.isFunction(success)) {
          return success();
        }
      }, function(response) {
        student.campus_id = oldId;
        return alertService.add('danger', response.data.error, 5000);
      });
    };
    student.switchToTutorial = function(tutorial) {
      var fn, newId;
      newId = tutorial != null ? (_.isString(tutorial) || _.isNumber(tutorial) ? +tutorial : tutorial != null ? tutorial.id : void 0) : -1;
      if (student.isEnrolledIn(newId)) {
        fn = Project.tutorialEnrolment["delete"];
      } else {
        fn = Project.tutorialEnrolment.create;
      }
      return fn({
        id: student.unit().id,
        project_id: student.project_id,
        tutorial_abbreviation: tutorial.abbreviation
      }, function(successResponse) {
        student.tutorial_enrolments = successResponse.enrolments;
        return alertService.add("success", "Tutorial enrolment updated for " + student.name, 3000);
      }, function(response) {
        var ref;
        return alertService.add("danger", "Failed to update tutorial enrolment. " + (response != null ? (ref = response.data) != null ? ref.error : void 0 : void 0), 8000);
      });
    };
    student.name = student.first_name + " " + student.last_name;
    if (student.has_portfolio) {
      student.portfolio_status = 1;
    } else if (student.compile_portfolio) {
      student.portfolio_status = 0.5;
    } else {
      student.portfolio_status = 0;
    }
    student.activeTasks = function() {
      return _.filter(student.tasks, function(task) {
        return task.definition.target_grade <= student.target_grade;
      });
    };
    student.tutorNames = function() {
      return _.chain(student.tutorials()).map(function(tute) {
        return tute.tutorName.split(' ')[0];
      }).uniq().join().value() || 'None';
    };
    student.hasTutor = function(tutorName) {
      return _.find(student.tutorials(), function(tute) {
        return tute.tutorName === tutorName;
      }) != null;
    };
    student.task_stats = [
      {
        value: 0,
        key: taskService.statusKeys[10]
      }, {
        value: 0,
        key: taskService.statusKeys[0]
      }, {
        value: 0,
        key: taskService.statusKeys[4]
      }, {
        value: 0,
        key: taskService.statusKeys[6]
      }, {
        value: 0,
        key: taskService.statusKeys[9]
      }
    ];
    student.viewProject = function(as_tutor) {
      return $state.go("projects/dashboard", {
        projectId: student.project_id,
        tutor: as_tutor,
        taskAbbr: ''
      });
    };
    student.portfolioUrl = function() {
      return PortfolioSubmission.getPortfolioUrl(student);
    };
    student.portfolioUrlAsAttachment = function() {
      return PortfolioSubmission.getPortfolioUrl(student, true);
    };
    student.assignGrade = function(score, rationale) {
      return Project.update({
        id: student.project_id,
        grade: score,
        old_grade: student.grade,
        grade_rationale: rationale
      }, function(project) {
        student.grade = project.grade;
        student.grade_rationale = project.grade_rationale;
        return alertService.add("success", "Grade updated.", 2000);
      }, function(response) {
        return alertService.add("danger", "Grade was not updated: " + response.data.error, 8000);
      });
    };
    student.groupForGroupSet = function(gs) {
      return _.find(student.groups, function(grp) {
        return gs.id === grp.group_set_id;
      });
    };
    student.inGroup = function(grp) {
      return (grp != null) && (_.find(student.groups, {
        id: grp.id
      }) != null);
    };
    if (student.groups != null) {
      student.groups = _.map(student.groups, function(grp) {
        return groupService.mapFuncsToGroup(grp, unit, unit.findGroupSet(grp.group_set_id));
      });
    } else {
      student.groups = _.chain(unit.group_memberships).filter(function(gm) {
        return gm.project_id === student.project_id;
      }).map(function(gm) {
        return unit.findGroupById(gm.group_id);
      }).value();
    }
    student.tutorials = function() {
      return _.chain(student.tutorial_enrolments).map(function(enrolment) {
        return unit.tutorialFromId(enrolment.tutorial_id);
      }).uniq().filter(function(tutorial) {
        return tutorial != null;
      }).value();
    };
    student.tutorialForStream = function(ts) {
      return _.find(student.tutorials(), function(tute) {
        return tute.tutorial_stream === ts || !tute.tutorial_stream;
      });
    };
    student.matchesTutorialEnrolments = function(matchText) {
      return _.filter(student.tutorials(), function(enrol) {
        return enrol.abbreviation.toLowerCase().indexOf(matchText) >= 0 || enrol.tutorName.toLowerCase().indexOf(matchText) >= 0;
      }).length > 0;
    };
    student.matchesGroup = function(matchText) {
      return _.find(student.groups, function(grp) {
        return grp.name.toLowerCase().indexOf(matchText) >= 0;
      });
    };
    student.matches = function(matchText) {
      return student.student_id.indexOf(matchText) >= 0 || student.name.toLowerCase().indexOf(matchText) >= 0 || student.campus().matches(matchText) || student.matchesTutorialEnrolments(matchText) || student.matchesGroup(matchText);
    };
    student.portfolioTaskStatus = function() {
      if (student.portfolio_available) {
        return 'complete';
      } else if (student.compile_portfolio) {
        return 'working_on_it';
      } else {
        return 'not_started';
      }
    };
    student.portfolioTaskStatusClass = function() {
      return taskService.statusClass(student.portfolioTaskStatus());
    };
    projectService.addProjectMethods(student);
    if (student.stats != null) {
      student.updateTaskStats(student.stats);
    }
    projectService.addTaskDetailsToProject(student, unit);
    return student;
  };
  return unitService;
}]);
