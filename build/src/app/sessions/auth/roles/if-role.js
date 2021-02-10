angular.module("doubtfire.sessions.auth.roles.if-role", []).directive("ifRole", ["auth", function(auth) {
  return {
    restrict: "A",
    link: function(scope, element, attrs) {
      var roleWhitelist;
      roleWhitelist = _.words(attrs.ifRole);
      if (!auth.isAuthorised(roleWhitelist)) {
        return element.remove();
      }
    }
  };
}]);
