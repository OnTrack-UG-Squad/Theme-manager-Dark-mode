angular.module("doubtfire.api.models.students", []).factory("Students", ["resourcePlus", function(resourcePlus) {
  return resourcePlus("/students");
}]);
