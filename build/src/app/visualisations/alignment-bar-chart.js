angular.module('doubtfire.visualisations.alignment-bar-chart', []).directive('alignmentBarChart', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'visualisations/visualisation.tpl.html',
    scope: {
      project: '=',
      unit: '=',
      source: '=',
      taskStatusFactor: '='
    },
    controller: ["$scope", "Visualisation", "projectService", "gradeService", "taskService", "outcomeService", function($scope, Visualisation, projectService, gradeService, taskService, outcomeService) {
      var ref, xFn, yFn;
      xFn = function(d) {
        return d.label;
      };
      yFn = function(d) {
        return d.value;
      };
      ref = Visualisation('multiBarChart', 'ILO Alignment Bar Chart', {
        clipEdge: true,
        stacked: false,
        height: 200,
        duration: 500,
        color: function(d) {
          return gradeService.gradeColors[gradeService.gradeAcronyms[d.key]];
        },
        x: xFn,
        y: yFn,
        forceY: 0,
        showYAxis: false
      }, {}), $scope.options = ref[0], $scope.config = ref[1];
      $scope.data = [];
      $scope.calculateAlignmentVisualisation = function(source, taskStatusFactor) {
        var unit;
        unit = $scope.unit;
        _.extend($scope.data, outcomeService.targetsByGrade($scope.unit, source));
        if ($scope.api != null) {
          return $scope.api.update();
        }
      };
      $scope.calculateAlignmentVisualisation($scope.source, $scope.taskStatusFactor);
      return $scope.$on('UpdateAlignmentChart', function() {
        return $scope.calculateAlignmentVisualisation($scope.source, $scope.taskStatusFactor);
      });
    }]
  };
});
