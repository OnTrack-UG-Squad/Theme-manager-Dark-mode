angular.module("doubtfire.api.models.unit-role", []).factory("UnitRole", ["resourcePlus", function(resourcePlus) {
  return resourcePlus("/unit_roles/:id", {
    id: "@id"
  });
}]);
