angular.module('doubtfire.units.states.analytics.directives.unit-stats-download', []).directive('unitStatsDownload', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'units/states/analytics/directives/unit-stats-download/unit-stats-download.tpl.html',
    scope: {
      unit: "="
    },
    controller: ["$scope", "TaskCompletionCsv", "TutorAssessmentCsv", function($scope, TaskCompletionCsv, TutorAssessmentCsv) {
      $scope.fetchTaskCompletionStats = function() {
        return TaskCompletionCsv.downloadFile($scope.unit);
      };
      return $scope.fetchTutorAssessmentStats = function() {
        return TutorAssessmentCsv.downloadFile($scope.unit);
      };
    }]
  };
});
