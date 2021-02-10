angular.module('doubtfire.groups.group-set-selector', []).directive('groupSetSelector', function() {
  return {
    restrict: 'E',
    templateUrl: 'groups/group-set-selector/group-set-selector.tpl.html',
    scope: {
      unit: '=',
      selectedGroupSet: '=ngModel',
      onSelectGroupSet: '=onChange'
    },
    controller: ["$scope", function($scope) {
      if ($scope.unit == null) {
        throw Error("Unit not supplied to group set selector");
      }
      return $scope.selectGroupSet = function() {
        return typeof $scope.onSelectGroupSet === "function" ? $scope.onSelectGroupSet($scope.selectedGroupSet) : void 0;
      };
    }]
  };
});
