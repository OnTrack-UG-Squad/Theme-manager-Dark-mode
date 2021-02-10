angular.module("doubtfire.common.services.analytics", []).factory("analyticsService", ["$analytics", "currentUser", function($analytics, currentUser) {
  var analyticsService;
  analyticsService = {};
  analyticsService.event = function(category, eventName, label, value) {
    if (!currentUser.profile.opt_in_to_research) {
      return;
    }
    if ((value != null) && typeof value !== 'Number' && value < 0) {
      throw new Error("Value needs to be a positive number");
    }
    return $analytics.eventTrack(eventName, {
      category: category,
      label: label,
      value: value
    });
  };
  analyticsService.watchEvent = function(scope, toWatch, category, label) {
    return scope.$watch(toWatch, function(newVal, oldVal) {
      if ((newVal != null) && newVal !== oldVal) {
        if (_.isFunction(label)) {
          return analyticsService.event(category, "Changed " + toWatch, label(newVal));
        } else if (_.isInteger(newVal)) {
          return analyticsService.event(category, "Changed " + toWatch, label, newVal);
        } else {
          return analyticsService.event(category, "Changed " + toWatch, newVal);
        }
      }
    });
  };
  return analyticsService;
}]);
