angular.module('doubtfire.projects.states.outcomes', []).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('projects/outcomes', {
    parent: 'projects/index',
    url: '/outcomes',
    controller: 'LearningOutcomesStateCtrl',
    templateUrl: 'projects/states/outcomes/outcomes.tpl.html',
    data: {
      task: "Learning Outcomes",
      pageTitle: "_Home_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin', 'Student']
    }
  });
}]).controller("LearningOutcomesStateCtrl", ["$scope", "$rootScope", "$timeout", "outcomeService", "Unit", "alertService", "analyticsService", "Visualisation", function($scope, $rootScope, $timeout, outcomeService, Unit, alertService, analyticsService, Visualisation) {
  var refreshAlignmentData;
  $scope.poaView = {
    activeTab: 'list'
  };
  $scope.targets = outcomeService.calculateTargets($scope.unit, $scope.unit, outcomeService.unitTaskStatusFactor());
  $scope.currentProgress = outcomeService.calculateProgress($scope.unit, $scope.project);
  $scope.refreshCharts = Visualisation.refreshAll;
  refreshAlignmentData = function() {
    $scope.currentProgress.length = 0;
    return $scope.currentProgress = _.extend($scope.currentProgress, outcomeService.calculateProgress($scope.unit, $scope.project));
  };
  $scope.$watch('project', function() {
    refreshAlignmentData();
    return $rootScope.$broadcast('ProgressUpdated');
  });
  $scope.$watch('project.tasks', function() {
    refreshAlignmentData();
    return $rootScope.$broadcast('ProgressUpdated');
  });
  $scope.selectTab = function(tab) {
    var eventName;
    if (tab === 'progress') {
      if ($scope.classStats == null) {
        Unit.learningProgressClassStats.get({
          id: $scope.unit.id
        }, function(response) {
          return $scope.classStats = response;
        }, function(response) {
          if (response.data.error != null) {
            alertService.add("danger", "Error: " + response.data.error, 6000);
          } else {
            alertService.add("danger", "Failed to get unit progress class statistics", 6000);
          }
          return $scope.classStats = {};
        });
      }
    }
    $scope.poaView.activeTab = tab;
    eventName = tab === 'progress' ? "View Learning Progress Tab" : "Reflect on Learning Tab";
    analyticsService.event("Stuent Feedback View - Learning Outcomes Tab", "Switched Tab", eventName);
    return $scope.refreshCharts();
  };
  $scope.selectTab('progress');
  return $scope.$on('UpdateAlignmentChart', function() {
    refreshAlignmentData();
    return $rootScope.$broadcast('ProgressUpdated');
  });
}]);
