var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

angular.module('doubtfire.projects.states.dashboard.directives.task-dashboard', ['doubtfire.projects.states.dashboard.directives.task-dashboard.directives']).directive('taskDashboard', function() {
  return {
    restrict: 'E',
    templateUrl: 'projects/states/dashboard/directives/task-dashboard/task-dashboard.tpl.html',
    scope: {
      task: '=',
      showFooter: '@?',
      showSubmission: '@?'
    },
    controller: ["$scope", "$stateParams", "Task", "TaskFeedback", "listenerService", "projectService", "taskService", function($scope, $stateParams, Task, TaskFeedback, listenerService, projectService, taskService) {
      var listeners, updateCurrentView;
      $scope.tutor = $stateParams.tutor;
      $scope.dashboardViews = ["details", "submission", "task"];
      updateCurrentView = function() {
        if ($scope.showSubmission) {
          return $scope.currentView = $scope.dashboardViews[1];
        } else {
          return $scope.currentView = $scope.dashboardViews[0];
        }
      };
      updateCurrentView();
      listeners = listenerService.listenTo($scope);
      listeners.push($scope.$watch('task.id', function() {
        if ($scope.task == null) {
          return;
        }
        $scope.urls = {
          taskSheetPdfUrl: Task.getTaskPDFUrl($scope.task.unit(), $scope.task.definition),
          taskSubmissionPdfUrl: TaskFeedback.getTaskUrl($scope.task),
          taskSubmissionPdfAttachmentUrl: TaskFeedback.getTaskUrl($scope.task, true),
          taskFilesUrl: TaskFeedback.getTaskFilesUrl($scope.task)
        };
        return updateCurrentView();
      }));
      $scope.setSelectedDashboardView = function(view) {
        if (indexOf.call($scope.dashboardViews, view) >= 0) {
          return $scope.currentView = view;
        }
      };
      $scope.isCurrentView = function(view) {
        return $scope.currentView === view;
      };
      if ($scope.showFooter) {
        $scope.taskStatusData = {
          keys: _.sortBy(taskService.markedStatuses, function(s) {
            return taskService.statusSeq[s];
          }),
          help: taskService.helpDescriptions,
          icons: taskService.statusIcons,
          labels: taskService.statusLabels,
          "class": taskService.statusClass
        };
        return $scope.triggerTransition = function(status) {
          return taskService.updateTaskStatus($scope.task.project().unit(), $scope.task.project(), $scope.task, status);
        };
      }
    }]
  };
});
