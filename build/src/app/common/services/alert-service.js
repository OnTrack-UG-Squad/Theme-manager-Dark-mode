angular.module("doubtfire.common.services.alerts", []).factory("alertService", ["$rootScope", "$timeout", "$sce", function($rootScope, $timeout, $sce) {
  var alertService;
  $rootScope.alerts = [];
  alertService = {};
  alertService.add = function(type, msg, timeout) {
    var alertData, closeThisAlertFunc;
    closeThisAlertFunc = function() {
      return alertService.closeAlert(this);
    };
    alertData = {
      type: type,
      msg: $sce.trustAsHtml(msg),
      close: closeThisAlertFunc
    };
    $rootScope.alerts.unshift(alertData);
    if (_.isNumber(timeout) && timeout > 0) {
      return $timeout(closeThisAlertFunc, timeout);
    }
  };
  alertService.closeAlert = function(alert) {
    return this.closeAlertIdx($rootScope.alerts.indexOf(alert));
  };
  alertService.closeAlertIdx = function(index) {
    return $rootScope.alerts.splice(index, 1);
  };
  alertService.clearAll = function() {
    return $rootScope.alerts = [];
  };
  return alertService;
}]);
