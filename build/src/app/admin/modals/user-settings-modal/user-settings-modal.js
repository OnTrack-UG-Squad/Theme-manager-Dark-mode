angular.module('doubtfire.admin.modals.user-settings-modal', []).factory('UserSettingsModal', ["$modal", function($modal) {
  var UserSettingsModal;
  UserSettingsModal = {};
  UserSettingsModal.show = function(user) {
    return $modal.open({
      templateUrl: 'admin/modals/user-settings-modal/user-settings-modal.tpl.html',
      controller: 'UserSettingsModalCtrl',
      resolve: {
        user: function() {
          return user;
        }
      }
    });
  };
  return UserSettingsModal;
}]).controller('UserSettingsModalCtrl', ["$scope", "$modalInstance", "DoubtfireConstants", "alertService", "analyticsService", "currentUser", "User", "user", "auth", function($scope, $modalInstance, DoubtfireConstants, alertService, analyticsService, currentUser, User, user, auth) {
  var createNewUser, updateExistingUser;
  $scope.user = user || new User({});
  $scope.isNew = (user != null ? user.id : void 0) === void 0;
  $scope.externalName = DoubtfireConstants.ExternalName;
  if ($scope.isNew) {
    $scope.users = User.query();
  }
  $scope.currentUser = currentUser;
  $scope.modalState = {};
  createNewUser = function() {
    return User.create({
      user: $scope.user
    }).$promise.then((function(response) {
      $modalInstance.close(response);
      if ($scope.users) {
        return $scope.users.push(response);
      }
    }), (function(response) {
      if (response.data.error != null) {
        return alertService.add("danger", "Error: " + response.data.error, 6000);
      }
    }));
  };
  updateExistingUser = function() {
    return User.update({
      id: $scope.user.id,
      user: $scope.user
    }).$promise.then((function(response) {
      $modalInstance.close(response);
      user.name = user.first_name + " " + user.last_name;
      if (user === currentUser.profile) {
        auth.saveCurrentUser();
        if ($scope.user.opt_in_to_research) {
          return analyticsService.event("Doubtfire Analytics", "User opted in research");
        }
      }
    }), (function(response) {
      if (response.data.error != null) {
        return alertService.add("danger", "Error: " + response.data.error, 6000);
      }
    }));
  };
  return $scope.saveUser = function() {
    if ($scope.isNew) {
      return createNewUser();
    } else {
      return updateExistingUser();
    }
  };
}]);
