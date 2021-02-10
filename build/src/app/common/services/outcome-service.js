angular.module("doubtfire.common.services.outcome-service", []).factory("outcomeService", ["gradeService", "projectService", "taskService", function(gradeService, projectService, taskService) {
  var outcomeService;
  outcomeService = {};
  outcomeService.unitTaskStatusFactor = function() {
    return function(task_definition_id) {
      return 1;
    };
  };
  outcomeService.projectTaskStatusFactor = function(project) {
    return function(task_definition_id) {
      var task;
      task = projectService.taskFromTaskDefId(project, task_definition_id);
      if (task != null) {
        return taskService.learningWeight[task.status];
      } else {
        return 0;
      }
    };
  };
  outcomeService.alignmentLabels = ["The task is not related to this outcome at all", "The task is slightly related to this outcome", "The task is related to this outcome", "The task is a reasonable example for this outcome", "The task is a strong example of this outcome", "The task is the best example of this outcome"];
  outcomeService.individualTaskStatusFactor = function(project, task) {
    return function(task_definition_id) {
      if (task.definition.id === task_definition_id) {
        return taskService.learningWeight[projectService.taskFromTaskDefId(project, task_definition_id).status];
      } else {
        return 0;
      }
    };
  };
  outcomeService.individualTaskPotentialFactor = function(project, task) {
    return function(task_definition_id) {
      if (task.definition.id === task_definition_id) {
        return 1;
      } else {
        return 0;
      }
    };
  };
  outcomeService.calculateTargets = function(unit, source, taskStatusFactor) {
    var outcomes;
    outcomes = {};
    _.each(unit.ilos, function(outcome) {
      return outcomes[outcome.id] = {
        0: [],
        1: [],
        2: [],
        3: []
      };
    });
    _.each(source.task_outcome_alignments, function(align) {
      var td;
      td = unit.taskDef(align.task_definition_id);
      return outcomes[align.learning_outcome_id][td.target_grade].push(align.rating * taskStatusFactor(td.id));
    });
    _.each(outcomes, function(outcome, key) {
      return _.each(outcome, function(tmp, key1) {
        var scale;
        scale = Math.pow(2, parseInt(key1, 10));
        return outcome[key1] = _.reduce(tmp, (function(memo, num) {
          return memo + num;
        }), 0) * scale;
      });
    });
    return outcomes;
  };
  outcomeService.calculateTaskContribution = function(unit, project, task) {
    var outcome_set;
    outcome_set = [];
    outcome_set[0] = outcomeService.calculateTargets(unit, unit, outcomeService.individualTaskStatusFactor(project, task));
    _.each(outcome_set[0], function(outcome, key) {
      return outcome_set[0][key] = _.reduce(outcome, (function(memo, num) {
        return memo + num;
      }), 0);
    });
    outcome_set[0].title = 'Current Task Contribution';
    return outcome_set;
  };
  outcomeService.calculateTaskPotentialContribution = function(unit, project, task) {
    var outcomes;
    outcomes = outcomeService.calculateTargets(unit, unit, outcomeService.individualTaskPotentialFactor(project, task));
    _.each(outcomes, function(outcome, key) {
      return outcomes[key] = _.reduce(outcome, (function(memo, num) {
        return memo + num;
      }), 0);
    });
    outcomes['title'] = 'Potential Task Contribution';
    return outcomes;
  };
  outcomeService.calculateProgress = function(unit, project) {
    var outcome_set;
    outcome_set = [];
    outcome_set[0] = outcomeService.calculateTargets(unit, unit, outcomeService.projectTaskStatusFactor(project));
    _.each(outcome_set, function(outcomes, key) {
      return _.each(outcomes, function(outcome, key) {
        return outcomes[key] = _.reduce(outcome, (function(memo, num) {
          return memo + num;
        }), 0);
      });
    });
    outcome_set[0].title = "Your Progress";
    return outcome_set;
  };
  outcomeService.targetsByGrade = function(unit, source) {
    var outcomes, result, values;
    result = [];
    outcomes = outcomeService.calculateTargets(unit, source, outcomeService.unitTaskStatusFactor());
    values = {
      '0': [],
      '1': [],
      '2': [],
      '3': []
    };
    _.each(outcomes, function(outcome, key) {
      return _.each(outcome, function(tmp, key1) {
        return values[key1].push({
          label: unit.outcome(parseInt(key, 10)).abbreviation,
          value: tmp
        });
      });
    });
    _.each(values, function(vals, idx) {
      return result.push({
        key: gradeService.grades[idx],
        values: vals
      });
    });
    return result;
  };
  return outcomeService;
}]);
