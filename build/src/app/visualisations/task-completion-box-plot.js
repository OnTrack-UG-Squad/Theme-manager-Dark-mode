angular.module('doubtfire.visualisations.task-completion-box-plot', []).directive('taskCompletionBoxPlot', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'visualisations/visualisation.tpl.html',
    scope: {
      rawData: '=data',
      unit: '=',
      type: '=',
      height: '=?',
      showLegend: '=?'
    },
    controller: ["$scope", "$filter", "$timeout", "gradeService", "Visualisation", function($scope, $filter, $timeout, gradeService, Visualisation) {
      var ref, refreshData;
      $scope.showLegend = $scope.showLegend == null ? true : $scope.showLegend;
      $scope.height = $scope.height == null ? 600 : $scope.height;
      refreshData = function(newData) {
        if ($scope.type !== 'grade') {
          $scope.data = [
            {
              label: $filter('ucfirst')($scope.type),
              values: {
                Q1: newData.lower,
                Q2: newData.median,
                Q3: newData.upper,
                whisker_low: newData.min,
                whisker_high: newData.max
              }
            }
          ];
        } else {
          $scope.data = _.map(newData, function(d, id) {
            var label;
            label = gradeService.grades[id];
            return {
              label: label,
              values: {
                Q1: d.lower,
                Q2: d.median,
                Q3: d.upper,
                whisker_low: d.min,
                whisker_high: d.max
              }
            };
          });
        }
        return $timeout(function() {
          var ref;
          if (((ref = $scope.api) != null ? ref.refresh : void 0) != null) {
            return $scope.api.refresh();
          }
        });
      };
      $scope.$watch('rawData', refreshData);
      refreshData($scope.rawData);
      return ref = Visualisation('boxPlotChart', 'Task Completion Summary Box Plot', {
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
          axisLabel: $scope.showLegend ? "Number of tasks completed" : void 0
        },
        tooltip: {
          enabled: $scope.showLegend
        },
        maxBoxWidth: 75,
        yDomain: [0, Math.ceil($scope.unit.task_definitions.length / 2) * 2]
      }, {}), $scope.options = ref[0], $scope.config = ref[1], ref;
    }]
  };
});
