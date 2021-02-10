angular.module('doubtfire.projects.states.tutorials', []).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('projects/tutorials', {
    parent: 'projects/index',
    url: '/tutorials',
    controller: 'ProjectsTutorialsStateCtrl',
    templateUrl: 'projects/states/tutorials/tutorials.tpl.html',
    data: {
      task: "Tutorial List",
      pageTitle: "_Home_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin', 'Student']
    }
  });
}]).controller("ProjectsTutorialsStateCtrl", ["$scope", "$modal", "User", "Project", "alertService", "projectService", "analyticsService", function($scope, $modal, User, Project, alertService, projectService, analyticsService) {
  if ($scope.unit.tutorial_streams.length > 0) {
    return $scope.sortOrder = 'tutorial_stream.name';
  } else {
    return $scope.sortOrder = 'abbreviation';
  }
}]);
