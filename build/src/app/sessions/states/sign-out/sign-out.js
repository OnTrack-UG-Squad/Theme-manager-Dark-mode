angular.module("doubtfire.sessions.states.sign-out", []).config(["$stateProvider", function($stateProvider) {
  var signOutStateData;
  signOutStateData = {
    url: "/sign_out",
    views: {
      main: {
        controller: "SignOutCtrl",
        templateUrl: "sessions/states/sign-out/sign-out.tpl.html"
      }
    },
    data: {
      pageTitle: "_Sign Out_"
    }
  };
  return $stateProvider.state("sign_out", signOutStateData);
}]).controller("SignOutCtrl", ["$state", "$timeout", "$http", "auth", "DoubtfireConstants", "currentUser", function($state, $timeout, $http, auth, DoubtfireConstants, currentUser) {
  auth.signOut();
  if (DoubtfireConstants.SignoutURL != null) {
    return window.location.assign(DoubtfireConstants.SignoutURL);
  } else {
    return $timeout((function() {
      return $state.go("sign_in");
    }), 500);
  }
}]);
