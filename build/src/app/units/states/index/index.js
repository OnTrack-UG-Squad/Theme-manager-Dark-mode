angular.module('doubtfire.units.states.index', []).config(["headerServiceProvider", function(headerServiceProvider) {
  return headerServiceProvider.state('units/index', {
    url: "/units/:unitId",
    abstract: true,
    views: {
      main: {
        controller: "UnitsIndexStateCtrl",
        templateUrl: "units/states/index/index.tpl.html"
      }
    },
    data: {
      pageTitle: "_Home_",
      roleWhitelist: ['Student', 'Tutor', 'Convenor', 'Admin']
    }
  });
}]).controller("UnitsIndexStateCtrl", ["$scope", "$rootScope", "$state", "$stateParams", "UnitRole", "unitService", "projectService", "listenerService", "currentUser", function($scope, $rootScope, $state, $stateParams, UnitRole, unitService, projectService, listenerService, currentUser) {
  var unitId;
  unitId = +$stateParams.unitId;
  if (!unitId) {
    return $state.go('home');
  }
  return unitService.getUnitRoles(function(unitRoles) {
    $scope.unitRole = _.find(unitRoles, {
      unit_id: unitId
    });
    if (($scope.unitRole == null) && (currentUser.role === "Admin")) {
      $scope.unitRole = {
        role: 'Admin',
        unit_id: unitId,
        name: currentUser.Name,
        unit_name: 'Unit admin mode',
        unit_code: '---'
      };
    }
    if ($scope.unitRole == null) {
      return $state.go('home');
    }
    $rootScope.$broadcast('UnitRoleChanged', {
      context: $scope.unitRole
    });
    return unitService.getUnit(unitId, {
      loadOnlyEnrolledStudents: true
    }, function(unit) {
      return $scope.unit = unit;
    });
  });
}]);
