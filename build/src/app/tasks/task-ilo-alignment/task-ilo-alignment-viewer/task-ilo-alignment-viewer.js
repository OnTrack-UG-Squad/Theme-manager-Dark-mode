angular.module('doubtfire.tasks.task-ilo-alignment.task-ilo-alignment-viewer', []).directive('taskIloAlignmentViewer', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'tasks/task-ilo-alignment/task-ilo-alignment-viewer/task-ilo-alignment-viewer.tpl.html',
    scope: {
      currentProgress: '=?',
      classStats: '=?',
      project: '=?',
      task: '=?',
      unit: '=',
      alignments: '=?',
      summaryOnly: '=?',
      hideVisualisation: '=?'
    },
    controller: ["$scope", "Visualisation", "outcomeService", "analyticsService", function($scope, Visualisation, outcomeService, analyticsService) {
      $scope.hideVisualisation = $scope.hideVisualisation != null ? $scope.hideVisualisation : false;
      $scope.targets = outcomeService.calculateTargets($scope.unit, $scope.unit, outcomeService.unitTaskStatusFactor());
      $scope.toggleExpanded = function(align) {
        align.expanded = !align.expanded;
        if (align.expanded) {
          analyticsService.event('Student Project View', "Showed ILO Details");
          return Visualisation.refreshAll();
        } else {
          return analyticsService.event('Student Project View', "Hid ILO Details");
        }
      };
      if ($scope.alignments == null) {
        $scope.alignments = $scope.unit.ilos;
      }
      if (($scope.project != null) && ($scope.task != null)) {
        $scope.classStats = outcomeService.calculateTaskPotentialContribution($scope.unit, $scope.project, $scope.task);
        return $scope.currentProgress = outcomeService.calculateTaskContribution($scope.unit, $scope.project, $scope.task);
      }
    }]
  };
});
