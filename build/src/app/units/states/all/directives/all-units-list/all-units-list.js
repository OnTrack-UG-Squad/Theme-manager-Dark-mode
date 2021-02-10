angular.module('doubtfire.units.states.all.directives.all-units-list', []).config(["headerServiceProvider", function(headerServiceProvider) {
  var allUnitsStateData;
  allUnitsStateData = {
    url: "/view-all-units",
    views: {
      main: {
        controller: "AllUnitsList",
        templateUrl: "units/states/all/directives/all-units-list/all-units-list.tpl.html"
      }
    },
    data: {
      pageTitle: "_All-Units_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin']
    }
  };
  return headerServiceProvider.state('view-all-units', allUnitsStateData);
}]).controller("AllUnitsList", ["$scope", "$state", "$timeout", "User", "Unit", "DoubtfireConstants", "currentUser", "unitService", "analyticsService", "dateService", function($scope, $state, $timeout, User, Unit, DoubtfireConstants, currentUser, unitService, analyticsService, dateService) {
  var checkEnrolled, hasRoles, timeoutPromise;
  analyticsService.event('view-all-units', 'viewed all-units list');
  $scope.externalName = DoubtfireConstants.ExternalName;
  $scope.sortOrder = "start_date";
  $scope.reverse = true;
  $scope.currentPage = 1;
  $scope.maxSize = 5;
  $scope.pageSize = 15;
  hasRoles = false;
  timeoutPromise = $timeout((function() {
    return $scope.showSpinner = true;
  }), 2000);
  unitService.getUnitRoles(function(roles) {
    $scope.unitRoles = roles;
    $scope.showSpinner = false;
    $scope.dataLoaded = true;
    hasRoles = true;
    return $timeout.cancel(timeoutPromise);
  });
  checkEnrolled = function() {
    if ($scope.unitRoles == null) {
      return;
    }
    return $scope.notEnrolled = function() {
      return $scope.unitRoles.length === 0 && currentUser.role === 'Tutor';
    };
  };
  $scope.$watch('unitRoles', checkEnrolled);
  if (currentUser.role !== 'Student') {
    Unit.query(function(units) {
      return $scope.units = units;
    });
  }
  $scope.unit = function(unitId) {
    return _.find($scope.units, {
      id: unitId
    });
  };
  return $scope.currentUser = currentUser;
}]);
