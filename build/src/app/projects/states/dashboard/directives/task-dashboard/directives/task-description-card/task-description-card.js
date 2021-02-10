angular.module('doubtfire.projects.states.dashboard.directives.task-dashboard.directives.task-description-card', []).directive('taskDescriptionCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'projects/states/dashboard/directives/task-dashboard/directives/task-description-card/task-description-card.tpl.html',
    scope: {
      task: '=',
      taskDef: '=',
      unit: '='
    },
    controller: ["$scope", "Task", "ExtensionModal", "listenerService", "analyticsService", "gradeService", "alertService", function($scope, Task, ExtensionModal, listenerService, analyticsService, gradeService, alertService) {
      var listeners;
      listeners = listenerService.listenTo($scope);
      listeners.push($scope.$watch('taskDef.id', function() {
        if ($scope.taskDef == null) {
          return;
        }
        return $scope.urls = {
          taskSheet: (Task.getTaskPDFUrl($scope.unit, $scope.taskDef)) + "&as_attachment=true",
          resources: Task.getTaskResourcesUrl($scope.unit, $scope.taskDef)
        };
      }));
      $scope.downloadEvent = function(type) {
        return analyticsService.event('Task Sheet', "Downloaded Task " + type);
      };
      $scope.grades = {
        names: gradeService.grades,
        acronyms: gradeService.gradeAcronyms
      };
      $scope.dueDate = function() {
        if ($scope.task != null) {
          return $scope.task.localDueDateString();
        } else if ($scope.taskDef != null) {
          return $scope.taskDef.target_date;
        } else {
          return "";
        }
      };
      $scope.startDate = function() {
        if ($scope.taskDef != null) {
          return $scope.taskDef.start_date;
        } else {
          return "";
        }
      };
      return $scope.shouldShowDeadline = function() {
        var ref;
        return ((ref = $scope.task) != null ? ref.daysUntilDeadlineDate() : void 0) <= 14 || false;
      };
    }]
  };
});
