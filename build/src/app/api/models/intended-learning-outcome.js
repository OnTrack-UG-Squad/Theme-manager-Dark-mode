angular.module("doubtfire.api.models.intended-learning-outcome", []).factory("IntendedLearningOutcome", ["resourcePlus", "DoubtfireConstants", "currentUser", function(resourcePlus, DoubtfireConstants, currentUser) {
  var IntendedLearningOutcome;
  IntendedLearningOutcome = resourcePlus("/units/:unit_id/outcomes/:id", {
    id: "@id",
    unit_id: "@unit_id"
  });
  IntendedLearningOutcome.getOutcomeBatchUploadUrl = function(unit) {
    return DoubtfireConstants.API_URL + "/units/" + unit.id + "/outcomes/csv?auth_token=" + currentUser.authenticationToken;
  };
  return IntendedLearningOutcome;
}]);
