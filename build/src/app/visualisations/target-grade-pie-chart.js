angular.module('doubtfire.visualisations.target-grade-pie-chart', []).directive('targetGradePieChart', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'visualisations/visualisation.tpl.html',
    scope: {
      rawData: '=data',
      showLegend: '=?',
      height: '=?'
    },
    controller: ["$scope", "$timeout", "gradeService", "projectService", "Visualisation", function($scope, $timeout, gradeService, projectService, Visualisation) {
      var colors, ref, updateData, zeroMargin;
      colors = gradeService.gradeColors;
      updateData = function(rawData) {
        $scope.data = _.map(rawData, function(value, grade) {
          $scope.total = _.chain(rawData).values().reduce((function(memo, num) {
            return memo + num;
          }), 0).value();
          return {
            key: gradeService.grades[grade],
            y: value,
            status_key: grade
          };
        });
        return $timeout(function() {
          var ref;
          if (((ref = $scope.api) != null ? ref.refresh : void 0) != null) {
            return $scope.api.refresh();
          }
        });
      };
      updateData($scope.rawData);
      $scope.$watch('rawData', updateData);
      zeroMargin = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
      return ref = Visualisation('pieChart', 'Target Grade Summary Chart', {
        color: function(d, i) {
          return colors[d.status_key];
        },
        x: function(d) {
          return d.key;
        },
        y: function(d) {
          return d.y;
        },
        showLabels: false,
        margin: zeroMargin,
        legend: {
          padding: 64,
          margin: zeroMargin
        },
        height: $scope.height,
        showLegend: $scope.showLegend,
        tooltip: {
          valueFormatter: function(d) {
            var pct;
            pct = Math.round((d / $scope.total) * 100);
            return pct + "%";
          },
          keyFormatter: function(d) {
            return d;
          }
        }
      }, {}), $scope.options = ref[0], $scope.config = ref[1], ref;
    }]
  };
});
