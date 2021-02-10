angular.module('doubtfire.tasks.task-ilo-alignment.task-ilo-alignment-editor', []).directive('taskIloAlignmentEditor', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'tasks/task-ilo-alignment/task-ilo-alignment-editor/task-ilo-alignment-editor.tpl.html',
    scope: {
      unit: "=",
      project: "=?",
      showCsv: "=",
      hidePanel: '=?',
      showIncludeTasks: '=?'
    },
    controller: ["$scope", "$modal", "$rootScope", "$filter", "currentUser", "unitService", "alertService", "gradeService", "LearningAlignments", "projectService", "taskService", "Visualisation", "TaskAlignment", "Task", "CsvResultModal", "outcomeService", "TaskILOAlignmentModal", function($scope, $modal, $rootScope, $filter, currentUser, unitService, alertService, gradeService, LearningAlignments, projectService, taskService, Visualisation, TaskAlignment, Task, CsvResultModal, outcomeService, TaskILOAlignmentModal) {
      var alignments;
      $scope.showTaskName = $scope.unit.ilos.length < 5;
      $scope.showGraph = false;
      $scope.closeGraph = function() {
        return $scope.showGraph = false;
      };
      if ($scope.project != null) {
        $scope.source = $scope.project;
        $scope.tasks = $scope.project.tasks;
        $scope.taskStatusFactor = outcomeService.projectTaskStatusFactor($scope.project);
      } else {
        $scope.source = $scope.unit;
        $scope.tasks = _.map($scope.unit.task_definitions, function(td) {
          return {
            definition: td
          };
        });
        $scope.taskStatusFactor = outcomeService.unitTaskStatusFactor();
      }
      alignments = [];
      $scope.$watch('source.task_outcome_alignments.length', function() {
        if ($scope.source.task_outcome_alignments == null) {
          return;
        }
        alignments = _.chain($scope.source.task_outcome_alignments).filter(function(d) {
          return d.rating > 0;
        }).groupBy('task_definition_id').map(function(d, i) {
          d = _.chain(d).groupBy('learning_outcome_id').map(function(d, i) {
            return [i, d[0]];
          }).fromPairs().value();
          return [i, d];
        }).fromPairs().value();
        return alignments;
      });
      $scope.showAlignmentModal = function(task, ilo, alignment) {
        return TaskILOAlignmentModal.show(task, ilo, alignment, $scope.unit, $scope.project, $scope.source);
      };
      $scope.alignmentForTaskAndIlo = function(task, ilo) {
        var ref;
        return (ref = alignments[task.definition.id]) != null ? ref[ilo.id] : void 0;
      };
      $scope.disableInclude = function(task) {
        if ($scope.unit.ilos.length > 0) {
          return alignments[task.definition.id] === void 0;
        } else {
          return false;
        }
      };
      $scope.includeTaskInPorfolio = function(task) {
        task.include_in_portfolio = !task.include_in_portfolio;
        return Task.update({
          project_id: $scope.project.project_id,
          task_definition_id: task.definition.id,
          include_in_portfolio: task.include_in_portfolio
        }, function(success) {
          return task.include_in_portfolio = success.include_in_portfolio;
        });
      };
      $scope.csvImportResponse = {};
      $scope.taskAlignmentCSV = {
        file: {
          name: 'Task Outcome Link CSV',
          type: 'csv'
        }
      };
      $scope.taskAlignmentCSVUploadUrl = function() {
        if ($scope.project != null) {
          return TaskAlignment.taskAlignmentCSVUploadUrl($scope.unit, $scope.project.project_id);
        } else {
          return TaskAlignment.taskAlignmentCSVUploadUrl($scope.unit, null);
        }
      };
      $scope.isTaskCSVUploading = null;
      $scope.onTaskAlignmentCSVSuccess = function(response) {
        CsvResultModal.show('Task CSV upload results.', response);
        $rootScope.$broadcast('UpdateAlignmentChart', response, {
          batch: true
        });
        if ($scope.project != null) {
          return $scope.project.refresh($scope.unit);
        } else {
          return $scope.unit.refresh();
        }
      };
      $scope.onTaskAlignmentCSVComplete = function() {
        return $scope.isTaskCSVUploading = null;
      };
      return $scope.downloadTaskAlignmentCSV = function() {
        if ($scope.project != null) {
          return TaskAlignment.downloadCSV($scope.unit, $scope.project.project_id);
        } else {
          return TaskAlignment.downloadCSV($scope.unit, null);
        }
      };
    }]
  };
});
