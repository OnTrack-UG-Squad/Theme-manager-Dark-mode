angular.module('doubtfire.config.analytics', []).config(["$analyticsProvider", function($analyticsProvider) {
  return $analyticsProvider.virtualPageviews(false);
}]);
