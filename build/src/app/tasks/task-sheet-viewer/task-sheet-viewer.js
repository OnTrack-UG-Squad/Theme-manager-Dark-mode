var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

angular.module('doubtfire.tasks.task-sheet-viewer', []).directive('taskSheetViewer', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'tasks/task-sheet-viewer/task-sheet-viewer.tpl.html',
    scope: {
      task: '=',
      unit: '=',
      project: '='
    },
    controller: ["$scope", "$filter", "$timeout", "currentUser", "Task", "taskService", "gradeService", "analyticsService", function($scope, $filter, $timeout, currentUser, Task, taskService, gradeService, analyticsService) {
      var evaluateAssessmentPanels, evaluateQualityPoints;
      $scope.showTaskSheet = false;
      $scope.gradeName = gradeService.grades;
      evaluateAssessmentPanels = function() {
        var ref, ref1;
        $scope.assessmentPanels = {
          feedback: {
            show: (ref = $scope.task.status, indexOf.call(taskService.switchableStates.tutor, ref) >= 0),
            active: true
          },
          graded: {
            show: $scope.task.definition.is_graded,
            active: _.isNumber($scope.task.grade)
          },
          quality: {
            show: ($scope.qualityPoints.max != null) && $scope.qualityPoints.max > 0,
            active: $scope.qualityPoints.assigned > 0 || (ref1 = $scope.task.status, indexOf.call(taskService.markedStatuses, ref1) >= 0)
          }
        };
        return $scope.showAssessmentPanel = _.chain($scope.assessmentPanels).map('show').compact().value().length > 0;
      };
      evaluateQualityPoints = function() {
        return $scope.qualityPoints = {
          max: $scope.task.definition.max_quality_pts,
          assigned: $scope.task.quality_pts
        };
      };
      $scope.$watch('task', function(task) {
        if (task == null) {
          return;
        }
        evaluateQualityPoints();
        evaluateAssessmentPanels();
        $scope.hasPDF = task.definition.has_task_sheet;
        $scope.hasResources = task.definition.has_task_resources;
        $scope.taskPDFUrl = Task.getTaskPDFUrl($scope.unit, task.definition);
        return $scope.resourceUrl = Task.getTaskResourcesUrl($scope.unit, task.definition);
      });
      $scope.$watch('task.status', function(newStatus) {
        $scope.activeStatusData = taskService.statusData(newStatus);
        return evaluateAssessmentPanels();
      });
      $scope.$watch('task.grade', function(grade) {
        return evaluateAssessmentPanels();
      });
      $scope.$watch('task.quality_pts', function() {
        evaluateQualityPoints();
        return evaluateAssessmentPanels();
      });
      $scope.$watch('task.definition.max_quality_pts', function(newPts, oldPts) {
        if (newPts !== oldPts) {
          $scope.assessmentPanels.quality.show = false;
          return $timeout(function() {
            return $scope.assessmentPanels.quality.show = true;
          });
        }
      });
      $scope.$watch('task.task_definition_id', function(newTaskDefId) {
        return $scope.alignments = $filter('taskDefinitionFilter')($scope.unit.task_outcome_alignments, newTaskDefId);
      });
      $scope.downloadEvent = function(type) {
        return analyticsService.event('Task Sheet', "Downloaded Task " + type);
      };
      return $scope.toggleTaskSheet = function() {
        analyticsService.event('Task Sheet', ($scope.showTaskSheet ? 'Hid' : 'Showed') + " Task Sheet PDF Viewer");
        return $scope.showTaskSheet = !$scope.showTaskSheet;
      };
    }]
  };
});
