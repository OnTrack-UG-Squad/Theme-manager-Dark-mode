angular.module('doubtfire.projects.states.dashboard.directives.student-task-list', []).directive('studentTaskList', function() {
  return {
    restrict: 'E',
    templateUrl: 'projects/states/dashboard/directives/student-task-list/student-task-list.tpl.html',
    scope: {
      project: '=',
      refreshTasks: '=?',
      taskData: '='
    },
    controller: ["$scope", "$timeout", "$filter", "gradeService", function($scope, $timeout, $filter, gradeService) {
      var applyFilters, scrollToTaskInList;
      if ($scope.taskData == null) {
        throw Error("Invalid taskData provided. Must wrap the selectedTask and selectedTaskAbbr");
      }
      $scope.filteredTasks = [];
      $scope.filters = {
        taskName: null
      };
      applyFilters = function() {
        var filteredTasks;
        filteredTasks = $filter('tasksWithName')($scope.project.activeTasks(), $scope.filters.taskName);
        $scope.filteredTasks = filteredTasks;
        return $scope.showCreatePortfolio = ($scope.filters.taskName == null) || 'create portfolio'.indexOf($scope.filters.taskName.toLowerCase()) >= 0;
      };
      applyFilters();
      $scope.project.calcTopTasks();
      $scope.refreshTasks = applyFilters;
      $scope.gradeNames = gradeService.grades;
      $scope.taskNameChanged = applyFilters;
      $scope.setSelectedTask = function(task) {
        var base;
        if ($scope.isSelectedTask(task)) {
          task = null;
        }
        $scope.taskData.selectedTask = task;
        if (typeof (base = $scope.taskData).onSelectedTaskChange === "function") {
          base.onSelectedTaskChange(task);
        }
        if (task != null) {
          return scrollToTaskInList(task);
        }
      };
      scrollToTaskInList = function(task) {
        var funcName, taskEl;
        taskEl = document.querySelector("student-task-list #" + (task.taskKeyToIdString()));
        if (taskEl == null) {
          return;
        }
        funcName = taskEl.scrollIntoViewIfNeeded != null ? 'scrollIntoViewIfNeeded' : taskEl.scrollIntoView != null ? 'scrollIntoView' : void 0;
        if (funcName == null) {
          return;
        }
        return taskEl[funcName]({
          behavior: 'smooth',
          block: 'top'
        });
      };
      $timeout(function() {
        if ($scope.taskData.selectedTask != null) {
          return scrollToTaskInList($scope.taskData.selectedTask);
        }
      });
      $scope.isSelectedTask = function(task) {
        var ref, ref1;
        return task.definition.id === ((ref = $scope.taskData) != null ? (ref1 = ref.selectedTask) != null ? ref1.definition.id : void 0 : void 0);
      };
      return $scope.nearEnd = function() {
        var lateDate;
        lateDate = new Date($scope.project.unit().end_date);
        lateDate.setDate(lateDate.getDate() - 21);
        return new Date() > lateDate;
      };
    }]
  };
});
