angular.module("doubtfire.api.resource-plus", ["ngResource"]).factory("resourcePlus", ["$resource", "DoubtfireConstants", "currentUser", function($resource, DoubtfireConstants, currentUser) {
  return function(url, paramDefaults, actions) {
    var resource;
    url = DoubtfireConstants.API_URL + url;
    actions = angular.extend({}, actions, {
      "create": {
        method: "POST"
      },
      "update": {
        method: "PUT"
      }
    });
    resource = $resource(url, paramDefaults, actions);
    delete resource["save"];
    angular.extend(resource.prototype, {
      $save: function() {
        return this[this.id != null ? "$update" : "$create"].apply(this, arguments);
      }
    });
    return resource;
  };
}]);
