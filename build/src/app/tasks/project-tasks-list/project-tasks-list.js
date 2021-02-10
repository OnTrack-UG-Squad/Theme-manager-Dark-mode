angular.module('doubtfire.tasks.project-tasks-list', []).directive('projectTasksList', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'tasks/project-tasks-list/project-tasks-list.tpl.html',
    scope: {
      unit: "=",
      project: "=",
      onSelect: "=",
      inMenu: '@'
    },
    controller: ["$scope", "$modal", "taskService", "groupService", "analyticsService", "gradeService", function($scope, $modal, taskService, groupService, analyticsService, gradeService) {
      analyticsService.event('Student Project View', "Showed Task Button List");
      $scope.statusClass = taskService.statusClass;
      $scope.statusText = taskService.statusText;
      $scope.taskDefinition = taskService.taskDefinitionFn($scope.unit);
      $scope.taskDisabled = function(task) {
        return $scope.taskDefinition(task).target_grade > $scope.project.target_grade;
      };
      $scope.groupSetName = function(id) {
        return groupService.groupSetName(id, $scope.unit);
      };
      $scope.hideGroupSetName = $scope.unit.group_sets.length === 0;
      return $scope.taskText = function(task) {
        var result;
        result = task.definition.abbreviation;
        if (task.definition.is_graded) {
          if (task.grade != null) {
            result += " (" + gradeService.gradeAcronyms[task.grade] + ")";
          } else {
            result += " (?)";
          }
        }
        if (task.definition.max_quality_pts > 0) {
          if (task.quality_pts != null) {
            result += " (" + task.quality_pts + "/" + task.definition.max_quality_pts + ")";
          } else {
            result += " (?/" + task.definition.max_quality_pts + ")";
          }
        }
        return result;
      };
    }]
  };
});
