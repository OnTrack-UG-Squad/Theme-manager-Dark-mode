angular.module("doubtfire.api.models.tutor", []).factory("Tutor", ["resourcePlus", function(resourcePlus) {
  return resourcePlus("/users/tutors");
}]);
