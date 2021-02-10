angular.module('doubtfire.visualisations.progress-burndown-chart', []).directive('progressBurndownChart', function() {
  return {
    restrict: 'E',
    templateUrl: 'visualisations/visualisation.tpl.html',
    scope: {
      project: '=',
      unit: '='
    },
    controller: ["$scope", "Visualisation", "listenerService", function($scope, Visualisation, listenerService) {
      var colorFunction, dates, listeners, ref, toUnixTimestamp, xAxisClipNegBurndown, xAxisTickFormatDateFormat, xDomain, yAxisClipNegBurndown, yAxisTickFormatPercentFormat;
      listeners = listenerService.listenTo($scope);
      $scope.data = [];
      listeners.push($scope.$watch('project.burndown_chart_data', function(newValue) {
        var now, timeSeries;
        if (newValue == null) {
          return;
        }
        now = +new Date().getTime() / 1000;
        timeSeries = {
          key: "NOW",
          values: [[now, 0], [now, 1]],
          color: '#CACACA',
          classed: 'dashed'
        };
        if (!_.find(newValue, {
          key: 'NOW'
        })) {
          newValue.push(timeSeries);
        }
        $scope.data.length = 0;
        _.extend($scope.data, newValue);
        if ($scope.api != null) {
          $scope.api.refresh();
        }
        return null;
      }));
      xAxisTickFormatDateFormat = function(d) {
        return d3.time.format('%b %d')(new Date(d * 1000));
      };
      yAxisTickFormatPercentFormat = function(d) {
        return d3.format(',%')(d);
      };
      colorFunction = function(d, i) {
        if (i === 0) {
          return '#AAAAAA';
        } else if (i === 1) {
          return '#777777';
        } else if (i === 2) {
          return '#0079d8';
        } else {
          return '#E01B5D';
        }
      };
      xAxisClipNegBurndown = function(d) {
        return d[0];
      };
      yAxisClipNegBurndown = function(d) {
        if (d[1] < 0.0) {
          return 0;
        } else {
          return d[1];
        }
      };
      dates = {
        start: moment($scope.unit.start_date),
        end: moment($scope.unit.end_date).add(2, 'weeks')
      };
      toUnixTimestamp = function(momentDate) {
        return +momentDate / 1000;
      };
      xDomain = [toUnixTimestamp(dates.start), toUnixTimestamp(dates.end)];
      return ref = Visualisation('lineChart', 'Student Progress Burndown Chart', {
        useInteractiveGuideline: true,
        interactiveLayer: {
          tooltip: {
            contentGenerator: function(data) {
              var d, date, html, series;
              date = data.value;
              series = data.series;
              html = "<table class='col-sm-6'><thead><tr><td colspan='3'><strong class='x-value'>" + date + "</strong></td></tr></thead><tbody>";
              html += ((function() {
                var j, len, results;
                results = [];
                for (j = 0, len = series.length; j < len; j++) {
                  d = series[j];
                  if (d.key !== 'NOW') {
                    results.push("<tr><td class='legend-color-guide'><div style='background-color: " + d.color + ";'></div></td><td class='key'>" + d.key + "</td><td class='value'>" + (d3.format(',%')(d.value)) + "</td></tr><tr>");
                  }
                }
                return results;
              })()).join('');
              html += "</tbody></table>";
              return html;
            }
          }
        },
        height: 440,
        margin: {
          left: 75,
          right: 50
        },
        xAxis: {
          axisLabel: "Time",
          tickFormat: xAxisTickFormatDateFormat,
          ticks: 8
        },
        yAxis: {
          axisLabel: "Tasks Remaining",
          tickFormat: yAxisTickFormatPercentFormat
        },
        color: colorFunction,
        legendColor: colorFunction,
        x: xAxisClipNegBurndown,
        y: yAxisClipNegBurndown,
        yDomain: [0, 1],
        xDomain: xDomain
      }, {}), $scope.options = ref[0], $scope.config = ref[1], ref;
    }]
  };
});
