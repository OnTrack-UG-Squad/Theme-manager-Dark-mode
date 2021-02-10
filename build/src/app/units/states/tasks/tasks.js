angular.module('doubtfire.units.states.tasks', ['doubtfire.units.states.tasks.inbox', 'doubtfire.units.states.tasks.definition', 'doubtfire.units.states.tasks.offline', 'doubtfire.units.states.tasks.viewer']).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('units/tasks', {
    abstract: true,
    parent: 'units/index',
    url: '/tasks',
    controller: 'UnitsTasksStateCtrl',
    template: '<ui-view/>',
    data: {
      pageTitle: "_Home_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin']
    }
  });
}]).controller('UnitsTasksStateCtrl', ["$scope", "$state", "taskService", "listenerService", "$transition$", function($scope, $state, taskService, listenerService, $transition$) {
  var listeners, setTaskKeyAsUrlParams, setTaskKeyFromUrlParams, taskKey;
  listeners = listenerService.listenTo($scope);
  $scope.taskData = {
    taskKey: null,
    source: null,
    selectedTask: null,
    onSelectedTaskChange: function(task) {
      var taskKey;
      taskKey = task != null ? task.taskKey() : void 0;
      $scope.taskData.taskKey = taskKey;
      return setTaskKeyAsUrlParams(task);
    }
  };
  setTaskKeyAsUrlParams = function(task) {
    return $state.go($state.$current, {
      taskKey: task != null ? task.taskKeyToUrlString() : void 0
    }, {
      notify: false
    });
  };
  setTaskKeyFromUrlParams = function(taskKeyString) {
    return $scope.taskData.taskKey = taskService.taskKeyFromString(taskKeyString);
  };
  taskKey = $transition$.params().taskKey;
  setTaskKeyFromUrlParams(taskKey);
  return listeners.push($scope.$on('$stateChangeStart', function($event, toState, toParams, fromState, fromParams) {
    setTaskKeyFromUrlParams(toParams.taskKey);
    if (fromState === toState && fromParams.unitId === toParams.unitId) {
      return $event.preventDefault();
    }
  }));
}]);
