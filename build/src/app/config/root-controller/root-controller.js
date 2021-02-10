angular.module('doubtfire.config.root-controller', []).controller("AppCtrl", ["TeachingPeriod", "campusService", function(TeachingPeriod, campusService) {
  campusService.query().subscribe();
  return TeachingPeriod.query();
}]);
