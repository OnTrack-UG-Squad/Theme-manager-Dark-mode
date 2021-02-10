angular.module('doubtfire.tasks.task-plagiarism-report-viewer', []).directive('taskPlagiarismReportViewer', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'tasks/task-plagiarism-report-viewer/task-plagiarism-report-viewer.tpl.html',
    scope: {
      task: "=",
      assessingUnitRole: "="
    },
    controller: ["$scope", "$window", "TaskSimilarity", "DoubtfireConstants", function($scope, $window, TaskSimilarity, DoubtfireConstants) {
      var ref;
      $scope.match = 1;
      $scope.similarityData = null;
      $scope.externalName = DoubtfireConstants.ExternalName;
      if ($scope.assessingUnitRole) {
        $scope.$watch('similarityData', function(newData) {
          var firstAddress, secondAddress, subject;
          if (newData != null) {
            firstAddress = $scope.similarityData.student.email;
            secondAddress = $scope.similarityData.other_student.email;
            subject = encodeURIComponent("Plagiarism Report for " + $scope.task.definition.abbreviation);
            $scope.mailtoString = "mailto:?BCC=" + firstAddress + "," + secondAddress + "&Subject=" + subject;
            return $scope.canViewOther = newData.other_student.name != null;
          }
        });
      }
      $scope.$watch('task', function() {
        return $scope.fetchSimilarity();
      });
      $scope.$watch('match', function() {
        return $scope.fetchSimilarity();
      });
      $scope.noPlagiarismDetected = function() {
        return !$scope.task.plagiarismDetected() || $scope.similarityData === null;
      };
      $scope.fetchSimilarity = function() {
        var ref;
        if (((ref = $scope.task) != null ? ref.similar_to_count : void 0) > 0) {
          return TaskSimilarity.get($scope.task, $scope.match, function(data) {
            return $scope.similarityData = data;
          });
        }
      };
      if (((ref = $scope.task) != null ? ref.similar_to_count : void 0) > 0) {
        $scope.taskId = $scope.task.id;
        return $scope.fetchSimilarity($scope.task, $scope.match - 1);
      }
    }]
  };
});
