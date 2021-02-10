angular.module('doubtfire.projects.states.groups', []).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('projects/groups', {
    parent: 'projects/index',
    url: '/groups',
    controller: 'ProjectsGroupsStateCtrl',
    templateUrl: 'projects/states/groups/groups.tpl.html',
    data: {
      task: "Groups List",
      pageTitle: "_Home_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin', 'Student']
    }
  });
}]).controller("ProjectsGroupsStateCtrl", ["$scope", function($scope) {}]);
