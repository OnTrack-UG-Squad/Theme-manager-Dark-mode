angular.module('doubtfire.admin.states.users', []).config(["headerServiceProvider", function(headerServiceProvider) {
  var usersAdminViewStateData;
  usersAdminViewStateData = {
    url: "/admin/users",
    views: {
      main: {
        controller: "AdministerUsersCtrl",
        templateUrl: "admin/states/users/users.tpl.html"
      }
    },
    data: {
      pageTitle: "_Users Administration_",
      roleWhitelist: ['Admin', 'Convenor']
    }
  };
  return headerServiceProvider.state("admin/users", usersAdminViewStateData);
}]).controller("AdministerUsersCtrl", ["$scope", "$modal", "User", "DoubtfireConstants", "alertService", "CsvResultModal", "UserSettingsModal", function($scope, $modal, User, DoubtfireConstants, alertService, CsvResultModal, UserSettingsModal) {
  $scope.file_data = {
    onBatchUserSuccess: function(response) {
      CsvResultModal.show("User CSV import results", response);
      return $scope.users = User.query();
    },
    batchUserUrl: User.csvUrl(),
    batchUserFiles: {
      file: {
        name: 'CSV File',
        type: 'csv'
      }
    }
  };
  $scope.users = User.query();
  $scope.sortOrder = "id";
  $scope.currentPage = 1;
  $scope.maxSize = 5;
  $scope.pageSize = 15;
  $scope.externalName = DoubtfireConstants.ExternalName;
  return $scope.showUserModal = function(user) {
    var userToShow;
    userToShow = user != null ? user : new User({});
    return UserSettingsModal.show(userToShow);
  };
}]);
