angular.module('doubtfire.units.states.analytics.directives.unit-target-grade-stats', []).directive('unitTargetGradeStats', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'units/states/analytics/directives/unit-target-grade-stats/unit-target-grade-stats.tpl.html',
    scope: {
      unit: "="
    },
    controller: ["$scope", "$filter", "Unit", "taskService", function($scope, $filter, Unit, taskService) {
      $scope.overviewSelectors = {
        tutorial: {
          text: 'Overview of tutorials',
          abbreviation: "ZZZ",
          id: -1
        }
      };
      $scope.tutorialsForSelector = [];
      _.each($scope.unit.tutorials, function(t) {
        return $scope.tutorialsForSelector.push({
          text: t.abbreviation + ' - ' + t.tutorName,
          id: t.id,
          meeting_time: t.meeting_time,
          tutor: t.tutor,
          abbreviation: t.abbreviation
        });
      });
      $scope.tutorialsForSelector.push($scope.overviewSelectors.tutorial);
      $scope.switchToTutorial = function(tutorial) {
        $scope.dataModel.selectedType = 'tutorial';
        $scope.dataModel.selectedTask = null;
        $scope.dataModel.selectedTutorial = tutorial;
        return $scope.depth = 0;
      };
      $scope.dataModel = {};
      if ($scope.unit.analytics.targetGradeStats == null) {
        Unit.targetGradeStats.query({
          id: $scope.unit.id
        }, function(response) {
          delete response.$promise;
          delete response.$resolved;
          $scope.unit.analytics.targetGradeStats = response;
          return $scope.dataModel.selectedType = 'unit';
        });
      } else {
        $scope.dataModel.selectedType = 'unit';
      }
      $scope.$watch('dataModel.selectedType', function(newValue) {
        $scope.dataModel.selectedTutorial = null;
        $scope.dataModel.selectedTask = null;
        $scope.depth = 0;
        if (newValue == null) {
          return;
        }
        switch (newValue) {
          case 'unit':
            return $scope.data = $scope.reduceDataToOverall();
          case 'tutorial':
            return $scope.dataModel.selectedTutorial = $scope.overviewSelectors.tutorial;
        }
      });
      $scope.$watch('dataModel.selectedTutorial', function(newValue) {
        if (newValue == null) {
          return;
        }
        if (newValue.id >= 0) {
          $scope.depth = 0;
          return $scope.data = $scope.reduceDataToTutorialWithId(newValue);
        } else {
          $scope.depth = 1;
          $scope.data = $scope.reduceDataToTutorial();
          return $scope.overviewKeys = _.map($scope.unit.tutorials, function(t) {
            return {
              subtitle: t.tutorName + " at " + ($filter('date')(t.meeting_time, 'shortTime')),
              title: t.abbreviation,
              data: $scope.data[t.id],
              show: _.keys($scope.data[t.id]).length > 0,
              tutorial: t
            };
          });
        }
      });
      $scope.resetToOverview = function() {
        switch ($scope.dataModel.selectedType) {
          case 'unit':
            return;
          case 'tutorial':
            $scope.dataModel.selectedTutorial = $scope.overviewSelectors.tutorial;
        }
        return drillDown();
      };
      $scope.drillDown = function() {
        switch ($scope.dataModel.selectedType) {
          case 'unit':
            return $scope.dataModel.selectedType = 'tutorial';
          case 'tutorial':
            return $scope.resetToOverview();
        }
      };
      $scope.reduceDataToOverall = function() {
        return _.chain($scope.unit.analytics.targetGradeStats).groupBy('grade').map(function(gradeInfo, gradeId) {
          var totalForThisGrade;
          totalForThisGrade = _.chain(gradeInfo).map(function(value) {
            return value.num;
          }).reduce((function(memo, num) {
            return num + memo;
          }), 0).value();
          return [gradeId, totalForThisGrade];
        }).fromPairs().value();
      };
      $scope.reduceDataToTutorial = function() {
        return _.chain($scope.unit.analytics.targetGradeStats).groupBy('tutorial_id').map(function(tutorialInfo, tutorialId) {
          var gradeInfo;
          gradeInfo = _.chain(tutorialInfo).map(function(gradeInfo) {
            return [gradeInfo.grade, gradeInfo.num];
          }).fromPairs().value();
          return [tutorialId, gradeInfo];
        }).fromPairs().value();
      };
      return $scope.reduceDataToTutorialWithId = function(tutorial) {
        return $scope.reduceDataToTutorial()[tutorial.id];
      };
    }]
  };
});
