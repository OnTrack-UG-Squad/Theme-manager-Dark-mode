angular.module('doubtfire.admin.modals.create-unit-modal', []).factory('CreateUnitModal', ["$modal", function($modal) {
  var CreateUnitModal;
  CreateUnitModal = {};
  CreateUnitModal.show = function(units) {
    return $modal.open({
      controller: 'CreateUnitModalCtrl',
      templateUrl: 'admin/modals/create-unit-modal/create-unit-modal.tpl.html',
      resolve: {
        units: function() {
          return units;
        }
      }
    });
  };
  return CreateUnitModal;
}]).controller('CreateUnitModalCtrl', ["$scope", "$modalInstance", "DoubtfireConstants", "alertService", "units", "Unit", "analyticsService", function($scope, $modalInstance, DoubtfireConstants, alertService, units, Unit, analyticsService) {
  analyticsService.event('Unit Admin', 'Started to Create Unit');
  $scope.units = units;
  $scope.unit = {
    code: null,
    name: null
  };
  $scope.saveUnit = function() {
    return Unit.create({
      unit: $scope.unit
    }, function(response) {
      alertService.add("success", "Unit created.", 2000);
      $modalInstance.close();
      $scope.units.push(response);
      return analyticsService.event('Unit Admin', 'Saved New Unit');
    }, function(response) {
      return alertService.add('danger', "Error creating unit - " + response.data.error);
    });
  };
  return $scope.externalName = DoubtfireConstants.ExternalName;
}]);
