angular.module("doubtfire.api.models.user-role", []).factory("UserRole", ["resourcePlus", function(resourcePlus) {
  return resourcePlus("/user_roles/:id", {
    id: "@id"
  });
}]);
