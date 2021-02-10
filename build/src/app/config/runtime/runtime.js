angular.module('doubtfire.config.runtime', []).run(["$rootScope", "$state", "$filter", "$location", "auth", "editableOptions", "editableThemes", function($rootScope, $state, $filter, $location, auth, editableOptions, editableThemes) {
  var handleTokenTimeout, handleUnauthorised, handleUnauthorisedDest, serialize;
  editableOptions.theme = 'bs3';
  editableThemes.bs3.inputClass = 'input-sm';
  editableThemes.bs3.buttonsClass = 'btn-sm';
  serialize = function(obj, prefix) {
    var k, p, str, v;
    str = [];
    for (p in obj) {
      v = obj[p];
      k = prefix ? prefix + "[" + p + "]" : p;
      if (typeof v === "object") {
        str.push(serialize(v, k));
      } else {
        str.push(encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
    }
    return str.join("&");
  };
  handleUnauthorisedDest = function(toState, toParams) {
    if (auth.isAuthenticated()) {
      return $state.go("unauthorised");
    } else if ($state.current.name !== "sign_in") {
      return $state.go("sign_in", {
        dest: toState.name,
        params: serialize(toParams)
      });
    }
  };
  handleTokenTimeout = function() {
    if ($state.current.name !== "timeout") {
      return $state.go("timeout", {
        dest: $state.current.name,
        params: serialize($state.params)
      });
    }
  };
  handleUnauthorised = function() {
    return handleUnauthorisedDest($state.current, $state.params);
  };
  $rootScope.$on("$stateChangeStart", function(evt, toState, toParams) {
    if (!auth.isAuthorised(toState.data.roleWhitelist)) {
      evt.preventDefault();
      return handleUnauthorisedDest(toState, toParams);
    }
  });
  $rootScope.$on("unauthorisedRequestIntercepted", handleUnauthorised);
  return $rootScope.$on("tokenTimeout", handleTokenTimeout);
}]);
