angular.module("doubtfire.sessions.auth.http-auth-injector", []).config(["$httpProvider", function($httpProvider) {
  return $httpProvider.interceptors.push(["$q", "$rootScope", "DoubtfireConstants", "currentUser", function($q, $rootScope, DoubtfireConstants, currentUser) {
    var injectAuthForRequest, injectAuthForResponseWithError;
    injectAuthForRequest = function(request) {
      if (_.startsWith(request.url, DoubtfireConstants.API_URL) && (currentUser.authenticationToken != null)) {
        if (!_.has(request, "params")) {
          request.params = {};
        }
        request.params.auth_token = currentUser.authenticationToken;
      }
      return request || $q.when(request);
    };
    injectAuthForResponseWithError = function(response) {
      if (response.config && response.config.url && _.startsWith(response.config.url, DoubtfireConstants.API_URL)) {
        if (response.status === 419) {
          $rootScope.$broadcast("tokenTimeout");
        } else if (response.status === 401) {
          $rootScope.$broadcast("unauthorisedRequestIntercepted");
        }
      }
      return $q.reject(response);
    };
    return {
      request: injectAuthForRequest,
      responseError: injectAuthForResponseWithError
    };
  }]);
}]);
