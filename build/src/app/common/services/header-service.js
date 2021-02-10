angular.module("doubtfire.common.services.header", []).provider('headerService', ["$stateProvider", function($stateProvider) {
  var headerServiceProvider;
  headerServiceProvider = {};
  headerServiceProvider.$get = function($rootScope) {
    var headerService;
    $rootScope.headerMenuData = [];
    $rootScope.showHeader = true;
    headerService = {};
    headerService.showHeader = function() {
      return $rootScope.showHeader = true;
    };
    headerService.hideHeader = function() {
      return $rootScope.showHeader = false;
    };
    return headerService;
  };
  headerServiceProvider.state = function(stateName, stateData, controller) {
    var state;
    if (controller == null) {
      controller = 'BasicHeaderCtrl';
    }
    if (!((stateData.views != null) || (stateData.parent != null))) {
      throw new Error("stateData must have at least one view or have a parent");
    }
    stateData.views.header = {
      controller: controller,
      templateUrl: 'common/header/header.tpl.html'
    };
    return state = $stateProvider.state(stateName, stateData);
  };
  return headerServiceProvider;
}]);
