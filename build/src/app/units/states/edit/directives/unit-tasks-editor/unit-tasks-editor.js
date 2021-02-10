angular.module('doubtfire.units.states.edit.directives.unit-tasks-editor', []).directive('unitTasksEditor', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'units/states/edit/directives/unit-tasks-editor/unit-tasks-editor.tpl.html',
    controller: ["$scope", "$rootScope", "Task", "Unit", "gradeService", "alertService", "taskService", "groupService", "CsvResultModal", "ConfirmationModal", "ProgressModal", function($scope, $rootScope, Task, Unit, gradeService, alertService, taskService, groupService, CsvResultModal, ConfirmationModal, ProgressModal) {
      var guessTaskAbbreviation;
      $scope.grades = gradeService.grades;
      $scope.taskAdminPager = {
        currentPage: 1,
        maxSize: 5,
        pageSize: 5,
        search: '',
        sortOrder: 'seq',
        reverse: false
      };
      $scope.taskAdminData = {
        selectedTask: null,
        isNew: false
      };
      $scope.editTask = function(task) {
        $scope.taskAdminData.selectedTask = task;
        return $scope.taskAdminData.isNew = false;
      };
      guessTaskAbbreviation = function() {
        var last_abbr, match, regex, unit;
        unit = $scope.unit;
        if (unit.task_definitions.length === 0) {
          return "1.1P";
        } else {
          last_abbr = unit.task_definitions[unit.task_definitions.length - 1].abbreviation;
          regex = /(.*)(\d+)(\D*)/;
          match = regex.exec(last_abbr);
          if (match != null) {
            return "" + match[1] + (parseInt(match[2]) + 1) + match[3];
          } else {
            return last_abbr + "1";
          }
        }
      };
      $scope.deleteTask = function(task) {
        return taskService.deleteTask(task, $scope.unit, null);
      };
      $scope.createTask = function() {
        var abbr, ref, task;
        abbr = guessTaskAbbreviation();
        task = {
          name: "Task " + abbr,
          abbreviation: abbr,
          description: "New Description",
          start_date: new Date(),
          target_date: new Date(),
          upload_requirements: [],
          plagiarism_checks: [],
          weight: 4,
          target_grade: 0,
          restrict_status_updates: false,
          plagiarism_warn_pct: 80,
          is_graded: false,
          max_quality_pts: 0,
          auto_apply_extension_before_deadline: true,
          send_notifications: true,
          enable_sync_timetable: true,
          enable_sync_enrolments: true,
          tutorial_stream: (ref = $scope.unit.tutorial_streams[0]) != null ? ref.abbreviation : void 0
        };
        $scope.taskAdminData.selectedTask = task;
        return $scope.taskAdminData.isNew = true;
      };
      $scope.$watch('unit.task_definitions.length', function(newLength, oldLength) {
        if (newLength === oldLength) {
          return;
        }
        if ($scope.unit.task_definitions.length > 0) {
          if (newLength < oldLength) {
            return $scope.editTask(_.first($scope.unit.task_definitions));
          } else {
            return $scope.editTask(_.last($scope.unit.task_definitions));
          }
        } else {
          return $scope.taskAdminData.selectedTask = null;
        }
      });
      $scope.taskFiles = {
        file: {
          name: 'Task PDFs',
          type: 'zip'
        }
      };
      $scope.taskUploadUrl = Unit.taskUploadUrl($scope.unit);
      $scope.onTaskPDFSuccess = function(response) {
        CsvResultModal.show("Task File Import Results", response);
        if (response.success.length > 0) {
          return $scope.unit.refresh();
        }
      };
      $scope.batchFiles = {
        file: {
          name: 'CSV Data',
          type: 'csv'
        }
      };
      $scope.batchTaskUrl = function() {
        return Task.getTaskDefinitionBatchUploadUrl($scope.unit);
      };
      $scope.allResourceUrl = function() {
        return Unit.allResourcesDownloadUrl($scope.unit);
      };
      $scope.onBatchTaskSuccess = function(response) {
        CsvResultModal.show("Task CSV Upload Results", response);
        if (response.success.length > 0) {
          return $scope.unit.refresh();
        }
      };
      return $scope.groupSetName = function(id) {
        return groupService.groupSetName(id, $scope.unit);
      };
    }]
  };
});
