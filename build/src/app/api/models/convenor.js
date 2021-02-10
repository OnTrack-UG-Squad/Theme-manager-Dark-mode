angular.module("doubtfire.api.models.convenor", []).factory("Convenor", ["resourcePlus", function(resourcePlus) {
  return resourcePlus("/users/convenors");
}]);
