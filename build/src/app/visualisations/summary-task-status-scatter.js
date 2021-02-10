angular.module('doubtfire.visualisations.summary-task-status-scatter', []).directive('summaryTaskStatusScatter', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'visualisations/visualisation.tpl.html',
    scope: {
      data: '=',
      unit: '='
    },
    controller: ["$scope", "taskService", "Visualisation", function($scope, taskService, Visualisation) {
      var ref, xAxisTickFormatFunction, yAxisTickFormatFunction;
      yAxisTickFormatFunction = function(value) {
        if ($scope.unit.task_definitions[value]) {
          return $scope.unit.task_definitions[value].abbreviation;
        } else {
          return '';
        }
      };
      xAxisTickFormatFunction = function(value) {
        var idx;
        idx = Math.floor(value);
        return taskService.statusAcronym[taskService.statusKeys[idx]];
      };
      return ref = Visualisation('scatterChart', 'Task Status Summary Scatter Chart', {
        xAxis: {
          axisLabel: 'Statuses',
          tickFormat: xAxisTickFormatFunction
        },
        yAxis: {
          axisLabel: 'Task',
          tickFormat: yAxisTickFormatFunction
        },
        showDistX: true,
        showDistY: true
      }, {}), $scope.options = ref[0], $scope.config = ref[1], ref;
    }]
  };
});
