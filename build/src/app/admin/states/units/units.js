angular.module('doubtfire.admin.states.units', []).config(["headerServiceProvider", function(headerServiceProvider) {
  var unitsAdminViewStateData;
  unitsAdminViewStateData = {
    url: "/admin/units",
    views: {
      main: {
        controller: "AdministerUnitsState",
        templateUrl: "admin/states/units/units.tpl.html"
      }
    },
    data: {
      pageTitle: "_Unit Administration_",
      roleWhitelist: ['Admin', 'Convenor']
    }
  };
  return headerServiceProvider.state("admin/units", unitsAdminViewStateData);
}]).controller("AdministerUnitsState", ["$scope", "$state", "$modal", "DoubtfireConstants", "Unit", "TeachingPeriod", "CreateUnitModal", "currentUser", "unitService", "alertService", "analyticsService", function($scope, $state, $modal, DoubtfireConstants, Unit, TeachingPeriod, CreateUnitModal, currentUser, unitService, alertService, analyticsService) {
  analyticsService.event("Unit Admin", "Listed Units to Manage");
  unitService.getUnitRoles(function(unitRoles) {
    return Unit.query({
      include_in_active: true
    }, function(success) {
      return $scope.units = _.map(success, function(unit) {
        unit.unitRole = _.find(unitRoles, {
          unit_id: unit.id
        });
        if (unit.teaching_period_id) {
          unit.teachingPeriod = TeachingPeriod.getTeachingPeriod(unit.teaching_period_id);
        }
        return unit;
      });
    }, function(failure) {
      return $scope.error = true;
    });
  });
  $scope.sortOrder = "start_date";
  $scope.reverse = true;
  $scope.currentPage = 1;
  $scope.maxSize = 5;
  $scope.pageSize = 15;
  $scope.externalName = DoubtfireConstants.ExternalName;
  return $scope.createUnit = function() {
    return CreateUnitModal.show($scope.units);
  };
}]);
