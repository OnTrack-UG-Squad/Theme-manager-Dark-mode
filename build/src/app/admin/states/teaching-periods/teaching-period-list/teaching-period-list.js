angular.module('doubtfire.admin.states.teachingperiods', ['doubtfire.admin.states.teachingperiods.edit']).config(["headerServiceProvider", function(headerServiceProvider) {
  var teachingPeriodsAdminViewStateData;
  teachingPeriodsAdminViewStateData = {
    url: "/admin/teaching-periods",
    views: {
      main: {
        controller: "AdministerTeachingPeriodsState",
        templateUrl: "admin/states/teaching-periods/teaching-period-list/teaching-period-list.tpl.html"
      }
    },
    data: {
      pageTitle: "_Teaching-Period Administration_",
      roleWhitelist: ['Admin']
    }
  };
  return headerServiceProvider.state("admin/teachingperiods", teachingPeriodsAdminViewStateData);
}]).controller("AdministerTeachingPeriodsState", ["$scope", "$state", "$modal", "DoubtfireConstants", "currentUser", "alertService", "TeachingPeriod", "TeachingPeriodSettingsModal", function($scope, $state, $modal, DoubtfireConstants, currentUser, alertService, TeachingPeriod, TeachingPeriodSettingsModal) {
  $scope.teachingPeriods = TeachingPeriod.query();
  $scope.sortOrder = "start_date";
  $scope.reverse = true;
  $scope.currentPage = 1;
  $scope.maxSize = 5;
  $scope.pageSize = 15;
  $scope.externalName = DoubtfireConstants.ExternalName;
  return $scope.showTeachingPeriodModal = function(teachingPeriod) {
    var teachingPeriodToShow;
    teachingPeriodToShow = teachingPeriod != null ? teachingPeriod : {};
    return TeachingPeriodSettingsModal.show(teachingPeriodToShow);
  };
}]);
