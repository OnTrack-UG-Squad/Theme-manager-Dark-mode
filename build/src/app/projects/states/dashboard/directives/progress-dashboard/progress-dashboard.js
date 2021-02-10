angular.module('doubtfire.projects.states.dashboard.directives.progress-dashboard', []).directive('progressDashboard', function() {
  return {
    restrict: 'E',
    templateUrl: 'projects/states/dashboard/directives/progress-dashboard/progress-dashboard.tpl.html',
    scope: {
      project: '=',
      onUpdateTargetGrade: '='
    },
    controller: ["$scope", "$stateParams", "projectService", "taskService", "gradeService", "analyticsService", "alertService", function($scope, $stateParams, projectService, taskService, gradeService, analyticsService, alertService) {
      var updateTaskCompletionValues;
      $scope.tutor = $stateParams.tutor;
      updateTaskCompletionValues = function() {
        var completedTasks;
        completedTasks = projectService.tasksByStatus($scope.project, taskService.acronymKey.COM).length;
        return $scope.numberOfTasks = {
          completed: completedTasks,
          remaining: projectService.tasksInTargetGrade($scope.project).length - completedTasks
        };
      };
      updateTaskCompletionValues();
      $scope.grades = {
        names: gradeService.grades,
        values: gradeService.gradeValues
      };
      return $scope.updateTargetGrade = function(newGrade) {
        return projectService.updateProject($scope.project.project_id, {
          target_grade: newGrade
        }, function(project) {
          $scope.project.burndown_chart_data = project.burndown_chart_data;
          $scope.project.updateTaskStats(project.stats);
          updateTaskCompletionValues();
          if (typeof $scope.renderTaskStatusPieChart === "function") {
            $scope.renderTaskStatusPieChart();
          }
          if (typeof $scope.onUpdateTargetGrade === "function") {
            $scope.onUpdateTargetGrade();
          }
          analyticsService.event("Student Project View - Progress Dashboard", "Grade Changed", $scope.grades.names[newGrade]);
          return alertService.add("info", "Updated target grade successfully", 2000);
        }, function(failure) {
          return alertService.add("danger", "Failed to update target grade", 4000);
        });
      };
    }]
  };
});
