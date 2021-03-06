angular.module('doubtfire.units.states.tasks.inbox', ['doubtfire.units.states.tasks.inbox.directives']).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('units/tasks/inbox', {
    parent: 'units/tasks',
    url: '/inbox/{taskKey:any}',
    templateUrl: "units/states/tasks/inbox/inbox.tpl.html",
    controller: "TaskInboxStateCtrl",
    params: {
      taskKey: {
        dynamic: true
      }
    },
    data: {
      task: "Task Inbox",
      pageTitle: "_Home_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin']
    }
  });
}]).controller('TaskInboxStateCtrl', ["$scope", "Unit", function($scope, Unit) {
  return $scope.taskData.source = Unit.tasksForTaskInbox;
}]);
