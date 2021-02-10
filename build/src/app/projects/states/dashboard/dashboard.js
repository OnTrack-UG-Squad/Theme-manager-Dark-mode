angular.module('doubtfire.projects.states.dashboard', ['doubtfire.projects.states.dashboard.directives']).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('projects/dashboard', {
    parent: 'projects/index',
    url: '/dashboard/:taskAbbr?tutor',
    controller: 'ProjectsDashboardStateCtrl',
    templateUrl: 'projects/states/dashboard/dashboard.tpl.html',
    params: {
      taskAbbr: {
        dynamic: true
      }
    },
    data: {
      task: "Dashboard",
      pageTitle: "_Home_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin', 'Student']
    }
  });
}]).controller("ProjectsDashboardStateCtrl", ["$scope", "$rootScope", "$urlRouter", "$state", "$stateParams", "UnitRole", "unitService", "projectService", "listenerService", function($scope, $rootScope, $urlRouter, $state, $stateParams, UnitRole, unitService, projectService, listenerService) {
  var listeners, setSelectedTaskFromUrlParams, setTaskAbbrAsUrlParams;
  listeners = listenerService.listenTo($scope);
  $scope.taskData = {
    selectedTask: null,
    onSelectedTaskChange: function(task) {
      return setTaskAbbrAsUrlParams(task);
    }
  };
  setTaskAbbrAsUrlParams = function(task) {
    var taskAbbr;
    taskAbbr = _.isString(task) ? task : task != null ? task.definition.abbreviation : void 0;
    taskAbbr = taskAbbr ? taskAbbr : '';
    return $state.go($state.$current, {
      taskAbbr: taskAbbr
    }, {
      notify: false
    });
  };
  setSelectedTaskFromUrlParams = function(taskAbbr) {
    if (taskAbbr == null) {
      $scope.taskData.selectedTask = null;
    }
    return $scope.taskData.selectedTask = _.find($scope.project.activeTasks(), function(t) {
      return t.definition.abbreviation.toLowerCase() === (taskAbbr != null ? taskAbbr.toLowerCase() : void 0);
    });
  };
  if (setSelectedTaskFromUrlParams($stateParams.taskAbbr) == null) {
    setTaskAbbrAsUrlParams(null);
  }
  listeners.push($scope.$on('$stateChangeStart', function($event, toState, toParams, fromState, fromParams) {
    var ref, taskAbbr;
    taskAbbr = (ref = setSelectedTaskFromUrlParams(toParams.taskAbbr)) != null ? ref.definition.abbreviation : void 0;
    if (fromState === toState && fromParams.projectId === toParams.projectId) {
      $event.preventDefault();
      return setTaskAbbrAsUrlParams(taskAbbr);
    }
  }));
  return listeners.push($scope.$on('TaskSubmissionUploadComplete', function($event) {
    return $scope.taskData.selectedTask = null;
  }));
}]);
