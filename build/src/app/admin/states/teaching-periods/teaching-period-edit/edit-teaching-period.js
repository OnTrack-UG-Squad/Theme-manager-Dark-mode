angular.module('doubtfire.admin.states.teachingperiods.edit', ['doubtfire.teaching-periods.states.edit.directives']).config(["$stateProvider", "headerServiceProvider", function($stateProvider, headerServiceProvider) {
  var teachingPeriodsAdminViewStateData;
  teachingPeriodsAdminViewStateData = {
    url: '/admin/teaching-periods/:teachingPeriodId',
    views: {
      main: {
        controller: 'EditTeachingPeriodStateCtrl',
        templateUrl: 'admin/states/teaching-periods/teaching-period-edit/edit-teaching-period.tpl.html'
      }
    },
    data: {
      pageTitle: "_Teaching-Period Administration_",
      roleWhitelist: ['Admin']
    }
  };
  return headerServiceProvider.state("admin/teachingperiods/edit", teachingPeriodsAdminViewStateData);
}]).controller("EditTeachingPeriodStateCtrl", ["$scope", "$state", "TeachingPeriod", "alertService", "analyticsService", function($scope, $state, TeachingPeriod, alertService, analyticsService) {
  analyticsService.event('Edit Teaching Period View', "Started Edit Teaching Period View");
  TeachingPeriod.get(Number($state.params.teachingPeriodId), function(success) {
    $scope.teachingPeriod = success;
    return $scope.newTeachingPeriod = $scope.teachingPeriod.id === -1;
  }, function(failure) {
    var ref;
    return alertService.add("danger", "Failed to load teaching period. " + (failure != null ? (ref = failure.data) != null ? ref.error : void 0 : void 0), 6000);
  });
  $scope.tabs = {
    editorTab: {
      title: "Teaching Period Details Editor",
      seq: 0
    },
    breaksTab: {
      title: "Teaching Period Breaks",
      seq: 1
    },
    unitsTab: {
      title: "Rollover Teaching Period",
      seq: 2
    }
  };
  $scope.setActiveTab = function(tab) {
    var base, ref;
    if (tab === $scope.activeTab) {
      return;
    }
    if ((ref = $scope.activeTab) != null) {
      ref.active = false;
    }
    if (typeof (base = $scope.activeTab).deselect === "function") {
      base.deselect();
    }
    $scope.activeTab = tab;
    return $scope.activeTab.active = true;
  };
  return $scope.activeTab = $scope.tabs.editorTab;
}]);
