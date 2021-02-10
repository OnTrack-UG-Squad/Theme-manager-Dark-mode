angular.module('doubtfire.units.states.tasks.viewer.directives.unit-task-list', []).directive('unitTaskList', function() {
  return {
    restrict: 'E',
    templateUrl: 'units/states/tasks/viewer/directives/unit-task-list/unit-task-list.tpl.html',
    scope: {
      unit: '=',
      refreshTasks: '=?',
      unitTasks: '=',
      selectedTaskDef: '='
    },
    controller: ["$scope", "$timeout", "$filter", "gradeService", "taskService", "listenerService", function($scope, $timeout, $filter, gradeService, taskService, listenerService) {
      var applyFilters, listeners;
      listeners = listenerService.listenTo($scope);
      $scope.filteredTasks = [];
      $scope.filters = {
        taskSearch: null
      };
      applyFilters = function() {
        var filteredTasks;
        filteredTasks = $filter('taskDefinitionName')($scope.unitTasks, $scope.filters.taskSearch);
        filteredTasks = $filter('orderBy')(filteredTasks, 'task.seq');
        return $scope.filteredTasks = filteredTasks;
      };
      applyFilters();
      $scope.refreshTasks = applyFilters;
      $scope.gradeNames = gradeService.grades;
      $scope.taskNameChanged = applyFilters;
      $scope.setSelectedTask = function(task) {
        return $scope.selectedTaskDef = task;
      };
      return $scope.isSelectedTask = function(task) {
        var ref;
        return task.id === ((ref = $scope.selectedTaskDef) != null ? ref.id : void 0);
      };
    }]
  };
});
