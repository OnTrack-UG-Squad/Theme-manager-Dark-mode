angular.module("doubtfire.sessions.states.sign-in", []).config(["$stateProvider", function($stateProvider) {
  var signInStateData;
  signInStateData = {
    url: "/sign_in?dest&params&authToken",
    views: {
      main: {
        controller: "SignInCtrl",
        templateUrl: "sessions/states/sign-in/sign-in.tpl.html"
      }
    },
    data: {
      pageTitle: "_Sign In_"
    }
  };
  return $stateProvider.state("sign_in", signInStateData);
}]).controller("SignInCtrl", ["$scope", "$state", "$stateParams", "DoubtfireConstants", "usernameCookie", "$timeout", "$http", "$modal", "currentUser", "auth", "alertService", "localStorageService", "rememberDoubtfireCredentialsCookie", "doubtfireLoginTimeCookie", "AboutDoubtfireModal", function($scope, $state, $stateParams, DoubtfireConstants, usernameCookie, $timeout, $http, $modal, currentUser, auth, alertService, localStorageService, rememberDoubtfireCredentialsCookie, doubtfireLoginTimeCookie, AboutDoubtfireModal) {
  var ieVersion, isIE, timeoutPromise;
  isIE = function() {
    return window.navigator.appName === "Microsoft Internet Explorer";
  };
  ieVersion = function() {
    var matches;
    matches = new RegExp(" MSIE ([0-9].[0-9]);").exec(window.navigator.userAgent);
    if ((matches != null) && matches.length > 1) {
      return parseInt(matches[1].replace(".0", ""));
    }
    return true;
  };
  $scope.isIE = isIE() && ieVersion() < 11;
  $scope.session = {
    remember_me: true
  };
  $scope.externalName = DoubtfireConstants.ExternalName;
  $scope.api = DoubtfireConstants.API_URL;
  timeoutPromise = $timeout((function() {
    return $scope.waitingAWhile = true;
  }), 1500);
  $http.get(DoubtfireConstants.API_URL + "/auth/method").then((function(response) {
    $scope.aafLogin = response.data.redirect_to || false;
    if ($scope.aafLogin) {
      if ($stateParams.authToken) {
        return $scope.signIn({
          auth_token: $stateParams.authToken
        });
      } else {
        return window.location.assign($scope.aafLogin);
      }
    } else {
      $scope.authMethodLoaded = true;
      return $timeout.cancel(timeoutPromise);
    }
  }), (function(err) {
    $scope.authMethodFailed = true;
    $scope.error = err;
    return $timeout.cancel(timeoutPromise);
  }));
  angular.element(document).ready(function() {
    var a, aprilFools, h1, lead, logo, today;
    if (DoubtfireConstants.ExternalName.value !== 'Doubtfire') {
      return;
    }
    today = new Date();
    aprilFools = today.getDate() === 1 && today.getMonth() === 3;
    if (aprilFools) {
      h1 = document.querySelector('#sign-in h1.logo');
      logo = h1 != null ? h1.querySelector('i') : void 0;
      if ((logo != null) && (h1 != null)) {
        a = document.createElement('A');
        a.href = "http://www.imdb.com/title/tt0107614/";
        a.title = "Mrs. Doubtfire (1993)";
        lead = document.createElement('P');
        lead.appendChild(document.createTextNode('Happy April Fools Day! 🎉'));
        h1.classList.add('aprilfools');
        h1.appendChild(a);
        h1.appendChild(lead);
        logo.style.backgroundImage = 'url("/assets/images/mrsdoubtfire.png")';
        return logo.style.backgroundColor = 'inherit';
      }
    }
  });
  $scope.openAboutModal = function() {
    return AboutDoubtfireModal.show();
  };
  if (auth.isAuthenticated()) {
    return $state.go("home");
  } else {
    return $scope.signIn = function(signInCredentials) {
      var signInFunc;
      $scope.signingIn = true;
      signInFunc = function() {
        if (signInCredentials == null) {
          signInCredentials = {
            username: $scope.session.username,
            password: $scope.session.password,
            remember: $scope.session.remember_me
          };
        }
        return auth.signIn(DoubtfireConstants.API_URL + "/auth", signInCredentials, function(response) {
          if ($scope.session.remember_me) {
            localStorageService.set(usernameCookie, currentUser);
            localStorageService.set(rememberDoubtfireCredentialsCookie, true);
            localStorageService.set(doubtfireLoginTimeCookie, new Date().getTime());
          } else {
            localStorageService.remove(usernameCookie);
            localStorageService.set(rememberDoubtfireCredentialsCookie, false);
            localStorageService.remove(doubtfireLoginTimeCookie);
          }
          alertService.clearAll();
          return $state.go("home", {});
        }, function(response) {
          var resetInvalidCreds;
          $scope.session.password = '';
          $scope.signingIn = false;
          if (response.error) {
            $scope.invalidCredentials = true;
            resetInvalidCreds = function() {
              return $scope.invalidCredentials = false;
            };
            $timeout(resetInvalidCreds, 300);
            return alertService.add("warning", "Login failed: " + response.error, 6000);
          } else {
            return alertService.add("danger", "Login failed: Unable to connect to server", 6000);
          }
        });
      };
      return $timeout(signInFunc, 100);
    };
  }
}]);
