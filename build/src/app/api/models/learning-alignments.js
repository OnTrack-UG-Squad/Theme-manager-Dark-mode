angular.module("doubtfire.api.models.learning-alignments", []).factory("LearningAlignments", ["resourcePlus", function(resourcePlus) {
  return resourcePlus("/units/:unit_id/learning_alignments/:id", {
    id: "@id",
    unit_id: "@unit_id"
  });
}]);
