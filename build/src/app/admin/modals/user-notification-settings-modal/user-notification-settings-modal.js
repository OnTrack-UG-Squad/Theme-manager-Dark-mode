angular.module("doubtfire.admin.modals.user-notification-settings-modal", []).factory('UserNotificationSettingsModal', ["$modal", function($modal) {
  var UserNotificationSettingsModal;
  UserNotificationSettingsModal = {};
  UserNotificationSettingsModal.show = function(user) {
    return $modal.open({
      templateUrl: 'admin/modals/user-notification-settings-modal/user-notification-settings-modal.tpl.html',
      controller: 'UserNotificationSettingsModalCtrl',
      resolve: {
        user: function() {
          return user;
        }
      }
    });
  };
  return UserNotificationSettingsModal;
}]).controller('UserNotificationSettingsModalCtrl', ["$scope", "$modalInstance", "alertService", "currentUser", "User", "user", "auth", function($scope, $modalInstance, alertService, currentUser, User, user, auth) {
  $scope.user = user;
  $scope.currentUser = currentUser;
  $scope.modalState = {};
  return $scope.saveNotifications = function() {
    return User.update({
      id: $scope.user.id,
      user: $scope.user
    }).$promise.then((function(response) {
      $modalInstance.close(response);
      user.name = user.first_name + " " + user.last_name;
      if (user === currentUser.profile) {
        return auth.saveCurrentUser();
      }
    }), (function(response) {
      if (response.data.error != null) {
        return alertService.add("danger", "Error: " + response.data.error, 6000);
      }
    }));
  };
}]);
