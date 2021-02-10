angular.module('doubtfire.projects.project-progress-dashboard', []).directive('projectProgressDashboard', function() {
  return {
    restrict: 'E',
    templateUrl: 'projects/project-progress-dashboard/project-progress-dashboard.tpl.html',
    controller: ["$scope", "$state", "$rootScope", "$stateParams", "Project", "Unit", "UnitRole", "alertService", "gradeService", "taskService", "projectService", "analyticsService", "listenerService", function($scope, $state, $rootScope, $stateParams, Project, Unit, UnitRole, alertService, gradeService, taskService, projectService, analyticsService, listenerService) {
      var updateTaskCompletionStats;
      if ($stateParams.projectId != null) {
        $scope.studentProjectId = $stateParams.projectId;
      } else if ($scope.project != null) {
        $scope.studentProjectId = $scope.project.project_id;
      }
      $scope.grades = gradeService.grades;
      $scope.gradeAcronyms = gradeService.gradeAcronyms;
      $scope.currentVisualisation = 'burndown';
      $scope.chooseGrade = function(idx) {
        return Project.update({
          id: $scope.project.project_id,
          target_grade: idx
        }, function(project) {
          $scope.project.target_grade = project.target_grade;
          $scope.project.burndown_chart_data = project.burndown_chart_data;
          $scope.project.updateTaskStats(project.stats);
          analyticsService.event("Student Project View - Progress Tab", "Grade Changed", $scope.grades[idx]);
          return $rootScope.$broadcast("TargetGradeUpdated");
        });
      };
      $scope.taskCount = function() {
        return $scope.unit.task_definitions.length;
      };
      $scope.taskStats = {};
      updateTaskCompletionStats = function() {
        $scope.taskStats.numberOfTasksCompleted = projectService.tasksByStatus($scope.project, taskService.acronymKey.COM).length;
        return $scope.taskStats.numberOfTasksRemaining = projectService.tasksInTargetGrade($scope.project).length - $scope.taskStats.numberOfTasksCompleted;
      };
      $scope.$on('TaskStatusUpdated', function() {
        return updateTaskCompletionStats();
      });
      $scope.$on('TargetGradeUpdated', function() {
        return updateTaskCompletionStats();
      });
      return updateTaskCompletionStats();
    }]
  };
});
