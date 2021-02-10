angular.module("doubtfire.api.models.break", []).factory("Break", ["resourcePlus", function(resourcePlus) {
  var Break;
  Break = resourcePlus("/teaching_periods/:teaching_period_id/breaks", {
    teaching_period_id: "@teaching_period_id"
  });
  return Break;
}]);
