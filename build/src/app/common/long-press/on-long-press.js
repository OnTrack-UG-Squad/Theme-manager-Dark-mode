angular.module('doubtfire.common.on-long-press', []).directive('onLongPress', ["$timeout", function($timeout) {
  return {
    restrict: 'A',
    link: function($scope, $elm, $attrs) {
      $elm.bind('touchstart', function(evt) {});
      $scope.longPress = true;
      $timeout((function() {
        if ($scope.longPress) {
          $scope.$apply(function() {
            $scope.$eval($attrs.onLongPress);
          });
        }
      }), 600);
      return $elm.bin('touchend', function(evt) {
        $scope.longPress = false;
        if ($attrs.onTouchEnd) {
          $scope.$apply(function() {
            $scope.$eval($attrs.onTouchEnd);
          });
        }
      });
    }
  };
}]);
