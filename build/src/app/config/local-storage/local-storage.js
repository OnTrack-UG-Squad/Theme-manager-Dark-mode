angular.module('doubtfire.config.local-storage', []).config(["localStorageServiceProvider", function(localStorageServiceProvider) {
  return localStorageServiceProvider.setPrefix('doubtfire');
}]);
