angular.module('doubtfire.units.states.analytics.directives.task-completion-stats', []).directive('taskCompletionStats', function() {
  return {
    restrict: 'E',
    templateUrl: 'units/states/analytics/directives/task-completion-stats/task-completion-stats.tpl.html',
    scope: {
      unit: "="
    },
    controller: ["$scope", "Unit", function($scope, Unit) {
      var overviewTutorial, ref;
      if (((ref = $scope.unit.analytics) != null ? ref.taskCompletionStats : void 0) == null) {
        Unit.taskCompletionStats.get({
          id: $scope.unit.id
        }, function(response) {
          $scope.unit.analytics.taskCompletionStats = response;
          return $scope.data = response.unit;
        });
      } else {
        $scope.data = $scope.unit.analytics.taskCompletionStats.unit;
      }
      overviewTutorial = {
        id: -1,
        abbreviation: 'Overview',
        tutor_name: 'All Tutorials'
      };
      $scope.tutorialsForSelector = [overviewTutorial].concat($scope.unit.tutorials);
      $scope.switchToTutorial = function(tutorial) {
        var ref1;
        if (((ref1 = $scope.unit.analytics) != null ? ref1.taskCompletionStats : void 0) == null) {
          return;
        }
        $scope.dataModel.selectedTutorial = tutorial;
        if (tutorial === overviewTutorial) {
          $scope.data = $scope.unit.analytics.taskCompletionStats.tutorial;
          return $scope.depth = 1;
        } else {
          $scope.data = $scope.unit.analytics.taskCompletionStats.tutorial[tutorial.id];
          return $scope.depth = 0;
        }
      };
      $scope.drillDown = function() {
        $scope.dataModel.selectedType = 'tutorial';
        return $scope.switchToTutorial(overviewTutorial);
      };
      $scope.dataModel = {
        selectedType: 'unit',
        selectedTutorial: overviewTutorial
      };
      $scope.depth = 0;
      $scope.$watch('dataModel.selectedType', function(newValue) {
        var ref1;
        if (((ref1 = $scope.unit.analytics) != null ? ref1.taskCompletionStats : void 0) != null) {
          $scope.data = $scope.unit.analytics.taskCompletionStats[newValue];
        }
        if (newValue === 'tutorial') {
          return $scope.switchToTutorial(overviewTutorial);
        } else {
          return $scope.depth = 0;
        }
      });
      return $scope.$watch('dataModel.selectedTutorial', $scope.switchToTutorial);
    }]
  };
});
