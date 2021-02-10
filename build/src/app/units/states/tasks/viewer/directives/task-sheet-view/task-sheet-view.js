angular.module('doubtfire.units.states.tasks.viewer.directives.task-sheet-view', []).directive('taskSheetView', function() {
  return {
    restrict: 'E',
    templateUrl: 'units/states/tasks/viewer/directives/task-sheet-view/task-sheet-view.tpl.html',
    scope: {
      taskDef: '=',
      unit: '='
    },
    controller: ["$scope", "$timeout", "TaskFeedback", "taskService", "alertService", "listenerService", "Task", "Unit", function($scope, $timeout, TaskFeedback, taskService, alertService, listenerService, Task, Unit) {
      var listeners;
      listeners = listenerService.listenTo($scope);
      $scope.clearSelectedTask = function() {
        return $scope.taskDef = null;
      };
      $scope.urls = {
        taskPdfUrl: ""
      };
      return listeners.push($scope.$watch('taskDef', function(newTask) {
        var setDetails;
        setDetails = function() {
          if (newTask != null) {
            $scope.hasPdf = newTask.has_task_sheet;
            return $scope.urls.taskPdfUrl = Task.getTaskPDFUrl($scope.unit, $scope.taskDef);
          }
        };
        return setDetails();
      }));
    }]
  };
});
