angular.module("doubtfire.errors.states.timeout", []).config(["$stateProvider", function($stateProvider) {
  var stateData;
  stateData = {
    url: "/timeout?dest&params",
    views: {
      main: {
        controller: "TimeoutCtrl",
        templateUrl: "errors/states/timeout/timeout.tpl.html"
      }
    },
    data: {
      pageTitle: "_Timeout_"
    }
  };
  return $stateProvider.state("timeout", stateData, 'TimeoutCtrl');
}]).controller("TimeoutCtrl", ["$state", "$timeout", "auth", "currentUser", "DoubtfireConstants", function($state, $timeout, auth, currentUser, DoubtfireConstants) {
  auth.signOut();
  return $timeout((function() {
    return $state.go("sign_in");
  }), 500);
}]);
