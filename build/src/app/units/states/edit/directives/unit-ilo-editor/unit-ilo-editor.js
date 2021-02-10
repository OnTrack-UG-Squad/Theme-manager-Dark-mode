angular.module('doubtfire.units.states.edit.directives.unit-ilo-editor', []).directive('unitIloEditor', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'units/states/edit/directives/unit-ilo-editor/unit-ilo-editor.tpl.html',
    controller: ["$scope", "$modal", "$rootScope", "IntendedLearningOutcome", "alertService", "CsvResultModal", "UnitILOEditModal", function($scope, $modal, $rootScope, IntendedLearningOutcome, alertService, CsvResultModal, UnitILOEditModal) {
      $scope.batchFiles = {
        file: {
          name: 'CSV Data',
          type: 'csv'
        }
      };
      $scope.batchOutcomeUrl = function() {
        return IntendedLearningOutcome.getOutcomeBatchUploadUrl($scope.unit);
      };
      $scope.onBatchOutcomeSuccess = function(response) {
        CsvResultModal.show("Outcome CSV Upload Results", response);
        if (response.success.length > 0) {
          return $scope.unit.refresh();
        }
      };
      $scope.editILO = function(ilo) {
        return UnitILOEditModal.show($scope.unit, ilo);
      };
      $scope.createILO = function() {
        return $scope.editILO();
      };
      return $scope.deleteILO = function(ilo) {
        return IntendedLearningOutcome["delete"]({
          id: ilo.id,
          unit_id: $scope.unit.id
        }, function(response) {
          $scope.unit.ilos = _.without($scope.unit.ilos, ilo);
          return alertService.add("info", "ILO " + ilo.id + " was deleted successfully", 2000);
        }, function(response) {
          return alertService.add("danger", "Error: " + response.data.error, 6000);
        });
      };
    }]
  };
});
