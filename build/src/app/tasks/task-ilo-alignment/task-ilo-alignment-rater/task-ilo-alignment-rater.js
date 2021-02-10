angular.module('doubtfire.tasks.task-ilo-alignment.task-ilo-alignment-rater', []).directive('taskIloAlignmentRater', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'tasks/task-ilo-alignment/task-ilo-alignment-rater/task-ilo-alignment-rater.tpl.html',
    scope: {
      readonly: '=?',
      ngModel: '=',
      unit: '=',
      onRatingChanged: '=?',
      tooltips: '=?',
      colorful: '=?',
      selectedTooltip: '=?',
      showTooltips: '=?',
      hideLabels: '=?',
      compact: '=?',
      label: '=?',
      showZeroRating: '=?'
    },
    controller: ["$scope", "outcomeService", function($scope, outcomeService) {
      var i, len, property, ref;
      $scope.max = 5;
      if ($scope.hideLabels == null) {
        $scope.hideLabels = false;
      }
      if ($scope.showZeroRating == null) {
        $scope.showZeroRating = false;
      }
      if ($scope.compact) {
        $scope.readonly = true;
      }
      $scope.tooltips = outcomeService.alignmentLabels;
      $scope.setHoverValue = function(value) {
        if ($scope.readonly && !$scope.showTooltips) {
          return $scope.ngModel;
        }
        $scope.hoveringOver = value;
        return $scope.label = $scope.tooltips[value];
      };
      ref = ['tooltips', 'colorful', 'selectedTooltip'];
      for (i = 0, len = ref.length; i < len; i++) {
        property = ref[i];
        $scope[property] = $scope[property] != null ? $scope[property] : true;
      }
      $scope.showTooltips = $scope.showTooltips != null ? $scope.showTooltips : false;
      if ($scope.onRatingChanged != null) {
        return $scope.$watch('ngModel.rating', function(newValue, oldValue) {
          if ((newValue != null) && newValue !== oldValue) {
            return $scope.onRatingChanged($scope.ngModel);
          }
        });
      }
    }]
  };
});
