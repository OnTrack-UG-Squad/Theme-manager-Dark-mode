angular.module('doubtfire.config.routing', []).config(["$urlRouterProvider", "$httpProvider", function($urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise("/not_found");
  $urlRouterProvider.when("", "/");
  return $urlRouterProvider.when("/", "/home");
}]);
