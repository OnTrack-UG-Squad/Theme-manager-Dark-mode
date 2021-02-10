angular.module("doubtfire.common.modals.confirmation-modal", []).factory("ConfirmationModal", ["$modal", function($modal) {
  var ConfirmationModal;
  ConfirmationModal = {};
  ConfirmationModal.show = function(title, message, action) {
    var modalInstance;
    return modalInstance = $modal.open({
      templateUrl: 'common/modals/confirmation-modal/confirmation-modal.tpl.html',
      controller: 'ConfirmationModalCtrl',
      resolve: {
        title: function() {
          return title;
        },
        message: function() {
          return message;
        },
        action: function() {
          return action;
        }
      }
    });
  };
  return ConfirmationModal;
}]).controller('ConfirmationModalCtrl', ["$scope", "$modalInstance", "title", "message", "action", "alertService", function($scope, $modalInstance, title, message, action, alertService) {
  $scope.title = title;
  $scope.message = message;
  $scope.confirmAction = function() {
    action();
    return $modalInstance.dismiss();
  };
  return $scope.cancelAction = function() {
    alertService.add('info', title + " action cancelled", 3000);
    return $modalInstance.dismiss();
  };
}]);
