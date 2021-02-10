angular.module("doubtfire.api.models.group", []).factory("Group", ["resourcePlus", function(resourcePlus) {
  return resourcePlus("/units/:unit_id/group_sets/:group_set_id/groups/:id", {
    id: "@id",
    group_set_id: "@group_set_id",
    unit_id: "@unit_id"
  });
}]);
