angular.module("doubtfire.config.privacy-policy", []).factory('PrivacyPolicy', ["$http", "DoubtfireConstants", function($http, DoubtfireConstants) {
  var privacyPolicy;
  privacyPolicy = {
    privacy: '',
    plagiarism: '',
    loaded: false
  };
  $http.get(DoubtfireConstants.API_URL + "/settings/privacy").then((function(response) {
    privacyPolicy.privacy = response.data.privacy;
    privacyPolicy.plagiarism = response.data.plagiarism;
    return privacyPolicy.loaded = true;
  }));
  return privacyPolicy;
}]);
