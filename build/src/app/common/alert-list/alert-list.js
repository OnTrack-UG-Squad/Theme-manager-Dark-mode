angular.module("doubtfire.common.alert-list", []).directive('alertList', function() {
  return {
    restrict: 'E',
    templateUrl: 'common/alert-list/alert-list.tpl.html',
    replace: true,
    controller: ["$scope", function($scope) {}]
  };
});
