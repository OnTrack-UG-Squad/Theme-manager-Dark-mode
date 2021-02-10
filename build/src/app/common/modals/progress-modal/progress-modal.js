angular.module("doubtfire.common.modals.progress-modal", []).factory("ProgressModal", ["$modal", "$rootScope", function($modal, $rootScope) {
  var ProgressModal;
  ProgressModal = {};
  ProgressModal.show = function(title, message, promise) {
    var modalInstance;
    modalInstance = $modal.open({
      templateUrl: 'common/modals/progress-modal/progress-modal.tpl.html',
      controller: 'ProgressModalCtrl',
      resolve: {
        title: function() {
          return title;
        },
        message: function() {
          return message;
        }
      }
    });
    return promise != null ? promise["finally"](function() {
      return modalInstance.close();
    }) : void 0;
  };
  return ProgressModal;
}]).controller('ProgressModalCtrl', ["$scope", "$modalInstance", "title", "message", function($scope, $modalInstance, title, message) {
  $scope.title = title;
  $scope.message = message;
  return $scope.close = function() {
    return $modalInstance.dismiss();
  };
}]);
