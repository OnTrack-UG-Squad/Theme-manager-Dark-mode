angular.module('doubtfire.tasks.task-plagiarism-file-viewer', []).directive('taskPlagiarismFileViewer', ["TaskSimilarity", "alertService", function(TaskSimilarity, alertService) {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'tasks/task-plagiarism-file-viewer/task-plagiarism-file-viewer.tpl.html',
    scope: {
      task: "=task",
      match: "=match",
      matchIdx: "=matchIdx",
      other: "=other",
      assessingUnitRole: "="
    },
    controller: ["$scope", function($scope) {
      var ref;
      if (_.isString((ref = $scope.assessingUnitRole) != null ? ref.role : void 0)) {
        $scope.canDismiss = _.includes(["Tutor", "Convenor"], $scope.assessingUnitRole.role);
      } else {
        $scope.canDismiss = false;
      }
      return $scope.dismiss_similarity = function(value) {
        return TaskSimilarity.put($scope.task, $scope.matchIdx, $scope.other, value, (function(data) {
          alertService.add("success", "Similarity dismiss status changed.", 4000);
          return $scope.match.dismissed = value;
        }), function(response) {
          var message;
          message = response.data || response.statusText;
          return alertService.add("danger", "Failed to change status. " + message);
        });
      };
    }]
  };
}]);
