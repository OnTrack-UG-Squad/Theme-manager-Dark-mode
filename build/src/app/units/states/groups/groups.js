angular.module('doubtfire.units.states.groups', []).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('units/students/groups', {
    parent: 'units/index',
    url: '/students/groups',
    templateUrl: "units/states/groups/groups.tpl.html",
    controller: "UnitGroupsStateCtrl",
    data: {
      task: "Student Groups",
      pageTitle: "_Home_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin']
    }
  });
}]).controller("UnitGroupsStateCtrl", ["$scope", function($scope) {
  if (!$scope.unit.hasGroupwork()) {

  }
}]);
