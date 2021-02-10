angular.module('doubtfire.visualisations.achievement-box-plot', []).directive('achievementBoxPlot', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'visualisations/visualisation.tpl.html',
    scope: {
      rawData: '=data',
      type: '=',
      unit: '=',
      pctHolder: '=',
      height: '=?',
      showLegend: '=?'
    },
    controller: ["$scope", "$timeout", "Visualisation", "outcomeService", function($scope, $timeout, Visualisation, outcomeService) {
      var iloMaxes, iloValues, rangeMax, ref, refreshData;
      $scope.showLegend = $scope.showLegend == null ? true : $scope.showLegend;
      $scope.height = $scope.height == null ? 600 : $scope.height;
      iloValues = outcomeService.calculateTargets($scope.unit, $scope.unit, outcomeService.unitTaskStatusFactor());
      iloMaxes = _.mapValues(iloValues, function(d, k) {
        return _.reduce(d, (function(memo, value) {
          return memo + value;
        }), 0);
      });
      rangeMax = _.max(_.values(iloMaxes));
      refreshData = function(newData) {
        var isPct;
        isPct = ($scope.pctHolder != null) && $scope.pctHolder.pct;
        if (isPct) {
          $scope.options.chart.yDomain = [0, 1];
        } else {
          $scope.options.chart.yDomain = [0, rangeMax];
        }
        $scope.data = _.map(newData, function(d, id) {
          var label, max;
          max = iloMaxes[id];
          if ((max == null) || max === 0 || !isPct) {
            max = 1;
          }
          label = _.find($scope.unit.ilos, {
            id: +id
          }).abbreviation;
          return {
            label: label,
            values: {
              Q1: d.lower / max,
              Q2: d.median / max,
              Q3: d.upper / max,
              whisker_low: d.min / max,
              whisker_high: d.max / max
            }
          };
        });
        return $timeout(function() {
          var ref;
          if (((ref = $scope.api) != null ? ref.refresh : void 0) != null) {
            return $scope.api.refresh();
          }
        });
      };
      ref = Visualisation('boxPlotChart', 'ILO Achievement Box Plot', {
        x: function(d) {
          return d.label;
        },
        height: $scope.height,
        showXAxis: $scope.showLegend,
        margin: {
          top: $scope.showLegend ? 20 : 20,
          right: $scope.showLegend ? 10 : 10,
          bottom: $scope.showLegend ? 60 : 20,
          left: $scope.showLegend ? 80 : 40
        },
        yAxis: {
          axisLabel: $scope.showLegend ? "ILO Achievement" : void 0
        },
        tooltip: {
          enabled: $scope.showLegend
        },
        maxBoxWidth: 75,
        yDomain: [0, 1]
      }, {}, 'Achievement Box Plot'), $scope.options = ref[0], $scope.config = ref[1];
      $scope.$watch('pctHolder.pct', function(newData, oldData) {
        if (newData !== oldData) {
          return refreshData($scope.rawData);
        }
      });
      return refreshData($scope.rawData);
    }]
  };
});
