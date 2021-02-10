angular.module("doubtfire.api.models.rollover-unit", []).factory("RolloverUnit", ["resourcePlus", function(resourcePlus) {
  var DuplicatedUnit;
  DuplicatedUnit = resourcePlus("/units/:id/rollover", {
    id: "@id"
  });
  return DuplicatedUnit;
}]);
