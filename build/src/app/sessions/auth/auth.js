var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

angular.module("doubtfire.sessions.auth", ["doubtfire.sessions.auth.http-auth-injector", "doubtfire.sessions.auth.roles"]).factory("auth", ["$http", "$cookieStore", "$timeout", "usernameCookie", "currentUser", "authRoles", "localStorageService", "doubtfireLoginTimeCookie", "rememberDoubtfireCredentialsCookie", "DoubtfireConstants", "$rootScope", function($http, $cookieStore, $timeout, usernameCookie, currentUser, authRoles, localStorageService, doubtfireLoginTimeCookie, rememberDoubtfireCredentialsCookie, DoubtfireConstants, $rootScope) {
  var auth, checkAuth, defaultAnonymousUser, delayTime, endTime, isValidRoleWhitelist, nowTime, saveCurrentUser, tryChangeUser, updateAuth;
  defaultAnonymousUser = _.clone(currentUser);
  checkAuth = function() {
    return !_.isEqual(currentUser, defaultAnonymousUser);
  };
  saveCurrentUser = function() {
    localStorageService.set(usernameCookie, currentUser);
    return $cookieStore.put(usernameCookie, currentUser);
  };
  updateAuth = function(authenticationUrl) {
    var remember;
    if (!checkAuth()) {
      return;
    }
    remember = localStorageService.get(rememberDoubtfireCredentialsCookie);
    localStorageService.set(doubtfireLoginTimeCookie, new Date().getTime());
    return $http.put(authenticationUrl, {
      username: currentUser.profile.username,
      remember: remember
    }).success(function(response) {
      currentUser.authenticationToken = response.auth_token;
      saveCurrentUser();
      return $timeout((function() {
        return updateAuth(DoubtfireConstants.API_URL + "/auth/" + currentUser.authenticationToken + ".json");
      }), 1000 * 60 * 60);
    });
  };
  tryChangeUser = function(user) {
    var prop, ref;
    if ((user != null) && (ref = user.role, indexOf.call(authRoles, ref) >= 0)) {
      for (prop in currentUser) {
        delete currentUser[prop];
      }
      _.extend(currentUser, user);
      if (checkAuth()) {
        saveCurrentUser();
      } else {
        $cookieStore.remove(usernameCookie);
        localStorageService.remove(usernameCookie);
      }
      return true;
    } else {
      return false;
    }
  };
  isValidRoleWhitelist = function(roleWhitelist) {
    return _.difference(roleWhitelist, authRoles).length === 0;
  };
  if (!tryChangeUser($cookieStore.get(usernameCookie))) {
    tryChangeUser(localStorageService.get(usernameCookie));
  }
  auth = {};
  auth.saveCurrentUser = saveCurrentUser;
  auth.isAuthenticated = checkAuth;
  auth.isAuthorised = function(roleWhitelist, role) {
    if (role == null) {
      role = currentUser.role;
    }
    return (roleWhitelist == null) || (isValidRoleWhitelist(roleWhitelist) && indexOf.call(roleWhitelist, role) >= 0);
  };
  auth.signIn = function(authenticationUrl, userCredentials, success, error) {
    if (success == null) {
      success = function() {};
    }
    if (error == null) {
      error = function() {};
    }
    return $http.post(authenticationUrl, userCredentials).success(function(response) {
      var user;
      user = {
        id: response.user.id,
        authenticationToken: response.auth_token,
        role: response.user.system_role,
        profile: response.user
      };
      $timeout((function() {
        return updateAuth(DoubtfireConstants.API_URL + "/auth/" + currentUser.authenticationToken + ".json");
      }), 1000 * 60 * 60);
      if (tryChangeUser(user)) {
        return success();
      } else {
        return error();
      }
    }).error(error);
  };
  auth.signOut = function() {
    if ((currentUser != null ? currentUser.authenticationToken : void 0) != null) {
      $http["delete"](DoubtfireConstants.API_URL + "/auth/" + currentUser.authenticationToken + ".json");
    }
    tryChangeUser(defaultAnonymousUser);
    $rootScope.$broadcast("signOut");
    localStorageService.remove(usernameCookie);
    localStorageService.set(rememberDoubtfireCredentialsCookie, false);
    return localStorageService.remove(doubtfireLoginTimeCookie);
  };
  if (checkAuth()) {
    nowTime = new Date().getTime();
    endTime = parseInt(localStorageService.get(doubtfireLoginTimeCookie), 10) + 1000 * 60 * 60;
    delayTime = endTime - nowTime;
    if (delayTime < 100) {
      delayTime = 100;
    }
    $timeout((function() {
      return updateAuth(DoubtfireConstants.API_URL + "/auth/" + currentUser.authenticationToken + ".json");
    }), delayTime);
  }
  return auth;
}]);
