angular.module('doubtfire.units.states.analytics.directives.unit-achievement-stats', []).directive('unitAchievementStats', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'units/states/analytics/directives/unit-achievement-stats/unit-achievement-stats.tpl.html',
    scope: {
      unit: "="
    },
    controller: ["$scope", "Unit", function($scope, Unit) {
      var overviewTutorial, ref;
      if (((ref = $scope.unit.analytics) != null ? ref.learningProgressClassDetails : void 0) == null) {
        Unit.learningProgressClassDetails.get({
          id: $scope.unit.id
        }, function(response) {
          $scope.unit.analytics.learningProgressClassDetails = response;
          return $scope.data = response.all;
        });
      } else {
        $scope.data = $scope.unit.analytics.learningProgressClassDetails.all;
      }
      $scope.depth = 0;
      $scope.switchToTutorial = function(tutorial) {
        var rawData, ref1;
        if (((ref1 = $scope.unit.analytics) != null ? ref1.learningProgressClassDetails : void 0) == null) {
          return;
        }
        $scope.dataModel.selectedTutorial = tutorial;
        if (tutorial === overviewTutorial) {
          rawData = _.clone($scope.unit.analytics.learningProgressClassDetails);
          delete rawData.all;
          delete rawData.$promise;
          delete rawData.$resolved;
          $scope.data = rawData;
          $scope.depth = 1;
        } else {
          $scope.data = $scope.unit.analytics.learningProgressClassDetails[tutorial.id];
          $scope.depth = 0;
        }
        return $scope.data = _.chain($scope.data).map(function(d, id) {
          delete d.students;
          return [id, d];
        }).fromPairs().value();
      };
      $scope.drillDown = function() {
        $scope.dataModel.selectedType = 'tutorial';
        return $scope.switchToTutorial(overviewTutorial);
      };
      $scope.dataModel = {
        selectedType: 'unit',
        selectedTutorial: overviewTutorial,
        pct: true
      };
      overviewTutorial = {
        id: -1,
        abbreviation: 'Overview',
        tutor_name: 'All Tutorials'
      };
      $scope.tutorialsForSelector = [overviewTutorial].concat($scope.unit.tutorials);
      $scope.$watch('dataModel.selectedType', function(newValue) {
        var ref1;
        if (((ref1 = $scope.unit.analytics) != null ? ref1.learningProgressClassDetails : void 0) == null) {
          return;
        }
        if (newValue === 'tutorial') {
          return $scope.switchToTutorial(overviewTutorial);
        } else {
          $scope.depth = 0;
          return $scope.data = $scope.unit.analytics.learningProgressClassDetails.all;
        }
      });
      return $scope.$watch('dataModel.selectedTutorial', $scope.switchToTutorial);
    }]
  };
});
