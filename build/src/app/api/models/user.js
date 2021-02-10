angular.module("doubtfire.api.models.user", []).factory("User", ["resourcePlus", "currentUser", "DoubtfireConstants", function(resourcePlus, currentUser, DoubtfireConstants) {
  var User;
  User = resourcePlus("/users/:id", {
    id: "@id"
  });
  User.csvUrl = function() {
    return DoubtfireConstants.API_URL + "/csv/users?auth_token=" + currentUser.authenticationToken;
  };
  return User;
}]);
