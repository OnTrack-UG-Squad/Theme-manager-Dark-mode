angular.module('doubtfire.visualisations.task-status-pie-chart', []).directive('taskStatusPieChart', function() {
  return {
    restrict: 'E',
    templateUrl: 'visualisations/visualisation.tpl.html',
    scope: {
      rawData: '=data',
      showLegend: '=?',
      height: '=?'
    },
    controller: ["$scope", "$timeout", "taskService", "projectService", "Visualisation", function($scope, $timeout, taskService, projectService, Visualisation) {
      var colors, ref, updateData, zeroMargin;
      colors = taskService.statusColors;
      updateData = function(rawData) {
        $scope.total = _.chain(rawData).values().reduce((function(memo, num) {
          return memo + num;
        }), 0).value();
        $scope.data = _.map(rawData, function(value, status) {
          return {
            key: taskService.statusLabels[status],
            y: value,
            status_key: status
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
      return ref = Visualisation('pieChart', 'Task Status Summary Pie Chart', {
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
        height: $scope.height,
        legend: {
          padding: 64,
          margin: zeroMargin
        },
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
