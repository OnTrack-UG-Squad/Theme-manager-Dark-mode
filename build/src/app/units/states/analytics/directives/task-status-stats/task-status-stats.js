angular.module('doubtfire.units.states.analytics.directives.task-status-stats', []).directive('taskStatusStats', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'units/states/analytics/directives/task-status-stats/task-status-stats.tpl.html',
    scope: {
      unit: "="
    },
    controller: ["$scope", "$filter", "Unit", "taskService", function($scope, $filter, Unit, taskService) {
      var userChange, userChangeType;
      $scope.dataModel = {};
      $scope.depth = 0;
      $scope.overviewSelectors = {
        task: {
          text: 'Overview of tasks',
          seq: -1,
          id: -1
        },
        tutorial: {
          text: 'Overview of tutorials',
          abbreviation: "ZZZ",
          id: -1
        }
      };
      $scope.tasksForSelector = [$scope.overviewSelectors.task];
      _.each($scope.unit.task_definitions, function(td) {
        return $scope.tasksForSelector.push({
          text: td.abbreviation + ' - ' + td.name,
          id: td.id,
          seq: td.seq,
          abbreviation: td.abbreviation,
          name: td.name
        });
      });
      $scope.tutorialsForSelector = [];
      _.each($scope.unit.tutorials, function(t) {
        return $scope.tutorialsForSelector.push({
          text: t.abbreviation + ' - ' + t.tutorName,
          id: t.id,
          meeting_time: t.meeting_time,
          tutor_name: t.tutorName,
          abbreviation: t.abbreviation
        });
      });
      $scope.tutorialsForSelector.push($scope.overviewSelectors.tutorial);
      if ($scope.unit.analytics.taskStatusCountByTutorial == null) {
        Unit.taskStatusCountByTutorial.get({
          id: $scope.unit.id
        }, function(response) {
          var test;
          delete response.$promise;
          delete response.$resolved;
          $scope.unit.analytics.taskStatusCountByTutorial = response;
          $scope.dataModel.selectedType = 'unit';
          return test = $scope.switchToTasksForTutorial();
        });
      } else {
        $scope.dataModel.selectedType = 'unit';
      }
      userChange = true;
      userChangeType = true;
      $scope.$watch('dataModel.selectedType', function(newValue) {
        if (!userChangeType) {
          userChangeType = true;
          return;
        }
        $scope.dataModel.selectedTutorial = null;
        $scope.dataModel.selectedTask = null;
        $scope.depth = 0;
        if (newValue == null) {
          return;
        }
        switch (newValue) {
          case 'unit':
            return $scope.data = $scope.reduceDataToOverall();
          case 'tutorial':
            return $scope.dataModel.selectedTutorial = $scope.overviewSelectors.tutorial;
          case 'task':
            return $scope.dataModel.selectedTask = $scope.overviewSelectors.task;
        }
      });
      $scope.$watch('dataModel.selectedTutorial', function(newValue) {
        if (newValue == null) {
          return;
        }
        if (!userChange) {
          userChange = true;
          return;
        }
        if (newValue.id >= 0) {
          $scope.depth = 0;
          return $scope.data = $scope.reduceDataToTutorialWithId(newValue);
        } else {
          $scope.depth = 1;
          $scope.data = $scope.reduceDataToTutorial();
          return $scope.overviewKeys = _.map($scope.unit.tutorials, function(t) {
            return {
              subtitle: t.tutorName + " at " + ($filter('date')(t.meeting_time, 'shortTime')),
              title: t.abbreviation,
              data: $scope.data[t.id],
              show: _.keys($scope.data[t.id]).length > 0,
              tutorial: t
            };
          });
        }
      });
      $scope.$watch('dataModel.selectedTask', function(newValue) {
        if (newValue == null) {
          return;
        }
        if (!userChange) {
          userChange = true;
          return;
        }
        if (newValue.id >= 0) {
          $scope.depth = 0;
          return $scope.data = $scope.reduceDataToTaskDefWithId(newValue);
        } else {
          $scope.depth = 1;
          $scope.data = $scope.reduceDataToTaskDef();
          return $scope.overviewKeys = _.map($scope.unit.task_definitions, function(td) {
            return {
              title: td.abbreviation,
              subtitle: td.name,
              data: $scope.data[td.id],
              show: _.keys($scope.data[td.id]).length > 0,
              task: td
            };
          });
        }
      });
      $scope.$watch('data', function(newValue) {
        var completedPct, total;
        if (newValue == null) {
          return;
        }
        total = _.chain(newValue).values().reduce((function(memo, num) {
          return memo + num;
        }), 0).value();
        completedPct = newValue[taskService.acronymKey.COM] / total;
        if ((completedPct != null) && !isNaN(completedPct)) {
          return $scope.completeStats = {
            completed: Math.round(completedPct * 100),
            left: Math.round((1 - completedPct) * 100)
          };
        } else {
          return $scope.completeStats = {
            completed: 0,
            left: 100
          };
        }
      });
      $scope.drillToTask = function(task) {
        if ($scope.depth === 0 || $scope.depth === 2) {
          userChangeType = false;
          userChange = $scope.depth === 2;
          $scope.dataModel.selectedType = 'task';
          $scope.dataModel.selectedTutorial = null;
          return $scope.dataModel.selectedTask = task;
        } else {
          userChangeType = userChange = false;
          return $scope.drillDown(task);
        }
      };
      $scope.drillToTutorial = function(tutorial) {
        if ($scope.depth === 0 || $scope.depth === 2) {
          userChangeType = false;
          userChange = $scope.depth === 2;
          $scope.dataModel.selectedType = 'tutorial';
          $scope.dataModel.selectedTask = null;
          return $scope.dataModel.selectedTutorial = tutorial;
        } else {
          userChangeType = userChange = false;
          return $scope.drillDown(tutorial);
        }
      };
      $scope.drillDown = function(focus) {
        var target;
        switch ($scope.dataModel.selectedType) {
          case 'unit':
            return $scope.dataModel.selectedType = 'tutorial';
          case 'tutorial':
            $scope.depth = 2;
            if (focus != null) {
              $scope.dataModel.selectedTutorial = focus;
              target = focus;
            } else {
              target = $scope.dataModel.selectedTutorial;
            }
            $scope.data = $scope.switchToTasksForTutorial()[target.id];
            return $scope.overviewKeys = _.map($scope.unit.task_definitions, function(td) {
              return {
                data: $scope.data[td.id],
                show: _.keys($scope.data[td.id]).length > 0,
                task: td,
                title: td.abbreviation,
                subtitle: td.name
              };
            });
          case 'task':
            $scope.depth = 2;
            if (focus != null) {
              $scope.dataModel.selectedTask = focus;
              target = focus;
            } else {
              target = $scope.dataModel.selectedTask;
            }
            $scope.data = $scope.switchToTutorialsForTask()[target.id];
            return $scope.overviewKeys = _.map($scope.unit.tutorials, function(t) {
              return {
                data: $scope.data[t.id],
                show: _.keys($scope.data[t.id]).length > 0,
                tutorial: t,
                title: t.abbreviation,
                subtitle: t.tutorName + " at " + ($filter('date')(t.meeting_time, 'shortTime'))
              };
            });
        }
      };
      $scope.resetToOverview = function() {
        switch ($scope.dataModel.selectedType) {
          case 'unit':
            return;
          case 'tutorial':
            $scope.dataModel.selectedTutorial = $scope.overviewSelectors.tutorial;
            break;
          case 'task':
            $scope.dataModel.selectedTask = $scope.overviewSelectors.task;
        }
        return drillDown();
      };
      $scope.switchToTasksForTutorial = function() {
        var result;
        result = {};
        result[''] = {};
        _.each($scope.unit.task_definitions, function(td) {
          return result[''][td.id] = {};
        });
        _.each($scope.unit.tutorials, function(tutorial) {
          result[tutorial.id] = {};
          return _.each($scope.unit.task_definitions, function(td) {
            return result[tutorial.id][td.id] = {};
          });
        });
        _.each($scope.unit.analytics.taskStatusCountByTutorial, function(taskDef, taskDefId) {
          return _.each(taskDef, function(stats, tutorialId) {
            return _.each(stats, function(value) {
              return result[tutorialId][taskDefId][value.status] = value.num;
            });
          });
        });
        return result;
      };
      $scope.switchToTutorialsForTask = function() {
        var result;
        result = {};
        _.each($scope.unit.task_definitions, function(td) {
          result[td.id] = {};
          _.each($scope.unit.tutorials, function(tutorial) {
            return result[td.id][tutorial.id] = {};
          });
          return result[td.id][''] = {};
        });
        _.each($scope.unit.analytics.taskStatusCountByTutorial, function(taskDef, taskDefId) {
          return _.each(taskDef, function(stats, tutorialId) {
            return _.each(stats, function(value, key) {
              return result[taskDefId][tutorialId][value.status] = value.num;
            });
          });
        });
        return result;
      };
      $scope.reduceDataToTaskDef = function() {
        return _.chain($scope.unit.analytics.taskStatusCountByTutorial).map(function(taskDef, taskDefId) {
          var statusesForThisTaskDefId;
          statusesForThisTaskDefId = _.chain(taskDef).values().flatten().groupBy('status').map(function(value, status) {
            var sumOfStatuses;
            sumOfStatuses = _.chain(value).map(function(value) {
              return value.num;
            }).reduce((function(memo, num) {
              return memo + num;
            }), 0).value();
            return [status, sumOfStatuses];
          }).fromPairs().value();
          return [taskDefId, statusesForThisTaskDefId];
        }).fromPairs().value();
      };
      $scope.reduceDataToTaskDefWithId = function(taskDef) {
        return $scope.reduceDataToTaskDef()[taskDef.id];
      };
      $scope.reduceDataToOverall = function() {
        var taskDefValues;
        taskDefValues = _.values($scope.reduceDataToTaskDef());
        return _.reduce(taskDefValues, (function(memo, taskDef) {
          var status;
          for (status in taskDef) {
            memo[status] = (status in memo ? memo[status] : 0) + taskDef[status];
          }
          return memo;
        }), {});
      };
      $scope.reduceDataToTutorial = function() {
        var data, i, len, ref, statuses, taskDef, tutorialData, tutorialId, tutorialStatuses;
        data = {};
        ref = $scope.unit.analytics.taskStatusCountByTutorial;
        for (taskDef in ref) {
          tutorialData = ref[taskDef];
          for (tutorialId in tutorialData) {
            tutorialStatuses = tutorialData[tutorialId];
            if (data[tutorialId] == null) {
              data[tutorialId] = {};
            }
            for (i = 0, len = tutorialStatuses.length; i < len; i++) {
              statuses = tutorialStatuses[i];
              if (data[tutorialId][statuses.status] == null) {
                data[tutorialId][statuses.status] = 0;
              }
              data[tutorialId][statuses.status] += statuses.num;
            }
          }
        }
        return data;
      };
      return $scope.reduceDataToTutorialWithId = function(tutorial) {
        return $scope.reduceDataToTutorial()[tutorial.id];
      };
    }]
  };
});
