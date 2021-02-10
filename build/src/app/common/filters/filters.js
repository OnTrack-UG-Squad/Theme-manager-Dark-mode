angular.module("doubtfire.common.filters", []).filter('startFrom', function() {
  return function(input, start) {
    return input != null ? input.slice(+start) : void 0;
  };
}).filter('showStudents', function() {
  return function(input, kind, tutorName) {
    if (input) {
      if (kind === "mine" || kind === "myStudents") {
        return _.filter(input, function(project) {
          return project.hasTutor(tutorName);
        });
      } else {
        return input;
      }
    } else {
      return input;
    }
  };
}).filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered;
    filtered = [];
    angular.forEach(items, function(item) {
      return filtered.push(item);
    });
    filtered.sort(function(a, b) {
      var ref;
      return (ref = a[field] > b[field]) != null ? ref : {
        1: -1
      };
    });
    if (reverse) {
      filtered.reverse();
    }
    return filtered;
  };
}).filter('byGrade', function() {
  return function(input, grade) {
    if (input) {
      return _.filter(input, function(task) {
        return (task != null) && task.definition.target_grade <= grade;
      });
    } else {
      return input;
    }
  };
}).filter('studentsWithPlagiarism', function() {
  return function(input) {
    if (input) {
      return _.filter(input, function(student) {
        return (student != null) && student.max_pct_copy > 0;
      });
    } else {
      return input;
    }
  };
}).filter('studentsWithPortfolio', function() {
  return function(input, option) {
    if (input) {
      return _.filter(input, function(student) {
        return option === 'allStudents' || ((student != null) && student.has_portfolio > 0);
      });
    } else {
      return input;
    }
  };
}).filter('studentsWithSubmittedGrade', function() {
  return function(input, grade) {
    if (input && grade > -1) {
      return _.filter(input, function(student) {
        return (student != null) && student.submitted_grade === grade;
      });
    } else {
      return input;
    }
  };
}).filter('taskWithPlagiarism', function() {
  return function(input) {
    if (input) {
      return _.filter(input, function(task) {
        return (task != null) && task.pct_similar > 0;
      });
    } else {
      return input;
    }
  };
}).filter('studentsForGroup', function() {
  return function(input, gs, group, members) {
    if (input) {
      if (gs.keep_groups_in_same_class) {
        return _.filter(input, function(student) {
          return (student != null) && (student.isEnrolledIn(group.tutorial_id)) && (!_.find(members, function(mbr) {
            return student.project_id === mbr.project_id;
          }));
        });
      } else {
        return _.filter(input, function(student) {
          return (student != null) && !_.find(members, function(mbr) {
            return student.project_id === mbr.project_id;
          });
        });
      }
    } else {
      return input;
    }
  };
}).filter('outcomeFilter', function() {
  return function(input, outcomeId) {
    if (input && outcomeId) {
      return _.filter(input, function(item) {
        return item.learning_outcome_id === outcomeId;
      });
    } else {
      return input;
    }
  };
}).filter('taskDefinitionFilter', function() {
  return function(input, taskDefId) {
    if (input && taskDefId) {
      return _.filter(input, function(item) {
        return item.task_definition_id === taskDefId;
      });
    } else {
      return input;
    }
  };
}).filter('truncatedMarkdown', ["$filter", function($filter) {
  return function(input, truncateTo) {
    truncateTo = truncateTo || 128;
    input = $filter('markdown')(input);
    input = $filter('stripTags')(input);
    return $filter('truncate')(input, truncateTo, '...');
  };
}]).filter('statusFilter', function() {
  return function(input, statusKind) {
    if (input && statusKind) {
      return _.filter(input, function(task) {
        if (statusKind === 'discuss') {
          return task.status === statusKind || task.status === 'demonstrate';
        } else {
          return task.status === statusKind;
        }
      });
    } else {
      return input;
    }
  };
}).filter('projectFilter', function() {
  return function(input, text) {
    var matchText;
    if (_.isString(text) && text.length > 0 && input) {
      matchText = text.toLowerCase();
      return _.filter(input, function(project) {
        return (project != null) && project.matches(matchText);
      });
    } else {
      return input;
    }
  };
}).filter('taskForPortfolio', ["taskService", function(taskService) {
  return function(input, apply) {
    if ((!apply) || (!input)) {
      return input;
    } else {
      return _.filter(input, function(task) {
        if (task != null) {
          return !_.includes(taskService.toBeWorkedOn, task.status);
        } else {
          return false;
        }
      });
    }
  };
}]).filter('tasksOfTaskDefinition', function() {
  return function(tasks, taskDefinition) {
    if (!((taskDefinition != null) && (tasks != null))) {
      return tasks;
    }
    return tasks = _.filter(tasks, {
      task_definition_id: taskDefinition.id
    });
  };
}).filter('tasksWithStatuses', function() {
  return function(tasks, statusKeys) {
    if (tasks == null) {
      return tasks;
    }
    if (_.isEmpty(statusKeys)) {
      return [];
    }
    return _.filter(tasks, function(task) {
      return _.includes(statusKeys, task.status);
    });
  };
}).filter('tasksInTutorials', function() {
  return function(tasks, tutorialIds) {
    if (tasks == null) {
      return tasks;
    }
    if (_.isEmpty(tutorialIds)) {
      return [];
    }
    return _.filter(tasks, function(task) {
      if (task.isGroupTask()) {
        if (task.group() != null) {
          return _.includes(tutorialIds, task.group().tutorial_id);
        }
      } else {
        return _.filter(task.project().tutorial_enrolments, function(enrolment) {
          return _.includes(tutorialIds, enrolment.tutorial_id);
        }).length > 0;
      }
    });
  };
}).filter('tasksWithSearchText', function() {
  return function(tasks, searchText) {
    if (!((searchText != null) && (tasks != null))) {
      return tasks;
    }
    searchText = searchText.toLowerCase();
    return _.filter(tasks, function(task) {
      var p;
      p = task.project();
      return p.matches(searchText);
    });
  };
}).filter('tutorialCampusFilter', function() {
  return function(tutorials, project) {
    if (project == null) {
      return tutorials;
    }
    return _.filter(tutorials, function(tute) {
      return (project.campus_id == null) || (tute.campus == null) || tute.campus.id === project.campus_id;
    });
  };
}).filter('groupsInTutorials', function() {
  return function(input, unitRole, kind) {
    if (!((input != null) && (unitRole != null) && (kind != null))) {
      return;
    }
    if (kind === 'mine') {
      return _.filter(input, function(group) {
        return group.tutorial().tutor.id === unitRole.user_id;
      });
    }
    return input;
  };
}).filter('groupsForStudent', function() {
  return function(input, project, groupSet) {
    var grp;
    if (!((input != null) && (groupSet != null) && (project != null))) {
      return input;
    }
    grp = project.groupForGroupSet(groupSet);
    if (grp) {
      return [grp];
    }
    if (!groupSet.keep_groups_in_same_class) {
      return input;
    }
    return _.filter(input, function(group) {
      return project.isEnrolledIn(group.tutorial_id);
    });
  };
}).filter('paginateAndSort', ["$filter", function($filter) {
  return function(input, pagination, tableSort) {
    if (!((input != null) && (tableSort != null) && (pagination != null))) {
      return;
    }
    if (input.length === 0) {
      return input;
    }
    pagination.show = input.length > pagination.pageSize;
    pagination.totalSize = input.length;
    input = $filter('orderBy')(input, tableSort.order, tableSort.reverse);
    input = $filter('startFrom')(input, (pagination.currentPage - 1) * pagination.pageSize);
    input = $filter('limitTo')(input, pagination.pageSize);
    return input;
  };
}]).filter('tasksWithName', function() {
  return function(tasks, searchName) {
    if (!((searchName != null) && (tasks != null))) {
      return tasks;
    }
    searchName = searchName.toLowerCase();
    return _.filter(tasks, function(task) {
      return task.definition.name.toLowerCase().indexOf(searchName) >= 0 || task.definition.abbreviation.toLowerCase().indexOf(searchName) >= 0;
    });
  };
}).filter('taskDefinitionName', function() {
  return function(taskDefinitions, searchName) {
    if (!((searchName != null) && (taskDefinitions != null))) {
      return taskDefinitions;
    }
    searchName = searchName.toLowerCase();
    return _.filter(taskDefinitions, function(td) {
      return td.name.toLowerCase().indexOf(searchName) >= 0 || td.abbreviation.toLowerCase().indexOf(searchName) >= 0 || td.targetGrade().toLowerCase().indexOf(searchName) >= 0;
    });
  };
}).filter('humanizedDate', ["$filter", function($filter) {
  return function(input) {
    if (input == null) {
      return;
    }
    return moment(input).calendar(null, {
      sameDay: '',
      nextDay: '[tomorrow]',
      nextWeek: '[this] dddd',
      lastDay: '[yesterday]',
      lastWeek: '[last] dddd',
      sameElse: 'DD/MM/YYYY'
    });
  };
}]).filter('lcfirst', function() {
  return function(input) {
    if ((input == null) || input.length === 0) {
      return;
    }
    return input[0].toLowerCase() + input.substring(1);
  };
}).filter('isActiveUnitRole', function() {
  return function(unitRoles) {
    return _.filter(unitRoles, function(ur) {
      return ur.active;
    });
  };
});
