angular.module('doubtfire.units.modals.unit-ilo-edit-modal', []).factory('UnitILOEditModal', ["$modal", function($modal) {
  var UnitILOEditModalCtrl;
  UnitILOEditModalCtrl = {};
  UnitILOEditModalCtrl.show = function(unit, ilo) {
    return $modal.open({
      controller: 'UnitILOEditModalCtrl',
      templateUrl: 'units/modals/unit-ilo-edit-modal/unit-ilo-edit-modal.tpl.html',
      resolve: {
        ilo: function() {
          return ilo;
        },
        unit: function() {
          return unit;
        }
      }
    });
  };
  return UnitILOEditModalCtrl;
}]).controller('UnitILOEditModalCtrl', ["$scope", "$modalInstance", "ilo", "unit", "IntendedLearningOutcome", "alertService", function($scope, $modalInstance, ilo, unit, IntendedLearningOutcome, alertService) {
  var prototypeIlo;
  prototypeIlo = {
    name: null,
    description: null,
    abbreviation: null
  };
  $scope.ilo = ilo || prototypeIlo;
  $scope.isNew = ilo == null;
  return $scope.saveILO = function() {
    var save_data;
    save_data = {
      unit_id: unit.id,
      name: $scope.ilo.name,
      description: $scope.ilo.description,
      abbreviation: $scope.ilo.abbreviation
    };
    if ($scope.isNew) {
      return IntendedLearningOutcome.create(save_data, function(response) {
        $modalInstance.close(response);
        unit.ilos.push(response);
        return alertService.add("success", "Intended Learning Outcome Added", 2000);
      }, function(response) {
        if (response.data.error != null) {
          return alertService.add("danger", "Error: " + response.data.error, 6000);
        }
      });
    } else {
      save_data.id = $scope.ilo.id;
      return IntendedLearningOutcome.update(save_data).$promise.then((function(response) {
        $modalInstance.close(response);
        return alertService.add("success", "Intended Learning Outcome Updated", 2000);
      }), (function(response) {
        if (response.data.error != null) {
          return alertService.add("danger", "Error: " + response.data.error, 6000);
        }
      }));
    }
  };
}]);
