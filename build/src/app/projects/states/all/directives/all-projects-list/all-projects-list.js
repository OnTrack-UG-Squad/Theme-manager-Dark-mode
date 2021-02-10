angular.module('doubtfire.projects.states.all.directives.all-projects-list', []).config(["headerServiceProvider", function(headerServiceProvider) {
  var homeStateData;
  homeStateData = {
    url: "/view-all-projects",
    views: {
      main: {
        controller: "AllProjectsList",
        templateUrl: "projects/states/all/directives/all-projects-list/all-projects-list.tpl.html"
      }
    },
    data: {
      pageTitle: "_All-Projects_",
      roleWhitelist: ['Student', 'Tutor', 'Convenor', 'Admin']
    }
  };
  return headerServiceProvider.state('view-all-projects', homeStateData);
}]).controller("AllProjectsList", ["$scope", "$state", "$timeout", "User", "DoubtfireConstants", "currentUser", "projectService", "analyticsService", "dateService", function($scope, $state, $timeout, User, DoubtfireConstants, currentUser, projectService, analyticsService, dateService) {
  var checkEnrolled, hasProjects, timeoutPromise;
  analyticsService.event('view-all-projects', 'viewed all-projects list');
  $scope.externalName = DoubtfireConstants.ExternalName;
  $scope.sortOrder = "start_date";
  $scope.reverse = true;
  $scope.currentPage = 1;
  $scope.maxSize = 5;
  $scope.pageSize = 15;
  hasProjects = false;
  timeoutPromise = $timeout((function() {
    return $scope.showSpinner = true;
  }), 2000);
  projectService.getProjects(true, function(projects) {
    $scope.projects = projects;
    $scope.showSpinner = false;
    $scope.dataLoaded = true;
    hasProjects = true;
    return $timeout.cancel(timeoutPromise);
  });
  checkEnrolled = function() {
    if ($scope.projects == null) {
      return;
    }
    return $scope.notEnrolled = function() {
      return $scope.projects.length === 0 && currentUser.role === 'Student';
    };
  };
  $scope.$watch('projects', checkEnrolled);
  return $scope.currentUser = currentUser;
}]);
