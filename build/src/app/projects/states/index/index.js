angular.module('doubtfire.projects.states.index', []).config(["headerServiceProvider", function(headerServiceProvider) {
  return headerServiceProvider.state('projects/index', {
    url: "/projects/:projectId",
    abstract: true,
    views: {
      main: {
        controller: "ProjectsIndexStateCtrl",
        templateUrl: "units/states/index/index.tpl.html"
      }
    },
    data: {
      pageTitle: "_Home_",
      roleWhitelist: ['Student', 'Tutor', 'Convenor', 'Admin']
    }
  });
}]).controller("ProjectsIndexStateCtrl", ["$scope", "$rootScope", "$state", "$stateParams", "UnitRole", "unitService", "projectService", "listenerService", function($scope, $rootScope, $state, $stateParams, UnitRole, unitService, projectService, listenerService) {
  var projectId;
  projectId = +$stateParams.projectId;
  if (!projectId) {
    return $state.go('home');
  }
  return projectService.getProject(projectId, null, function(project) {
    if (project == null) {
      return $state.go('home');
    }
    return unitService.getUnit(project.unit_id, function(unit) {
      $scope.unit = unit;
      $scope.project = $scope.unit.mapStudentToUnit(project);
      return $rootScope.$broadcast('ProjectChanged', {
        context: $scope.project
      });
    });
  }, function(failure) {
    return $state.go('home');
  });
}]);
