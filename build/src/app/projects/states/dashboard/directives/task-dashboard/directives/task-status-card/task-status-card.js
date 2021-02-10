angular.module('doubtfire.projects.states.dashboard.directives.task-dashboard.directives.task-status-card', []).directive('taskStatusCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'projects/states/dashboard/directives/task-dashboard/directives/task-status-card/task-status-card.tpl.html',
    scope: {
      task: '='
    },
    controller: ["$scope", "$stateParams", "alertService", "taskService", "listenerService", "ConfirmationModal", "ExtensionModal", "Project", function($scope, $stateParams, alertService, taskService, listenerService, ConfirmationModal, ExtensionModal, Project) {
      var listeners, reapplyTriggers;
      listeners = listenerService.listenTo($scope);
      reapplyTriggers = function() {
        var filteredStudentTriggers, studentTriggers;
        if ($stateParams.tutor != null) {
          return $scope.triggers = _.map(taskService.statusKeys, taskService.statusData);
        } else {
          studentTriggers = _.map(taskService.switchableStates.student, taskService.statusData);
          filteredStudentTriggers = $scope.task.filterFutureStates(studentTriggers);
          return $scope.triggers = filteredStudentTriggers;
        }
      };
      listeners.push($scope.$watch('task.id', function() {
        if ($scope.task == null) {
          return;
        }
        return reapplyTriggers();
      }));
      $scope.triggerTransition = function(trigger) {
        return $scope.task.triggerTransition(trigger, $scope.unitRole);
      };
      $scope.updateFilesInSubmission = function() {
        return taskService.presentTaskSubmissionModal($scope.task, $scope.task.status, true);
      };
      return $scope.applyForExtension = function() {
        return ExtensionModal.show($scope.task, function() {
          return $scope.task.refresh();
        });
      };
    }]
  };
});
