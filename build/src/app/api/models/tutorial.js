angular.module("doubtfire.api.models.tutorial", []).factory("Tutorial", ["resourcePlus", function(resourcePlus) {
  var Tutorial;
  return Tutorial = resourcePlus("/tutorials/:id", {
    id: "@id"
  });
}]);
