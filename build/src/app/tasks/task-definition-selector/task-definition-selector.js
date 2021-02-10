angular.module('doubtfire.tasks.task-definition-selector', []).directive('taskDefinitionSelector', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'tasks/task-definition-selector/task-definition-selector.tpl.html',
    scope: {
      unit: "=",
      onSelectDefinition: "=",
      ngModel: '=?',
      buttonStyle: '@',
      showClear: '=?'
    },
    controller: ["$scope", "groupService", function($scope, groupService) {
      var ref;
      if ($scope.buttonStyle == null) {
        $scope.buttonStyle = 'default';
      }
      $scope.groupSetName = function(id) {
        return groupService.groupSetName(id, $scope.unit);
      };
      $scope.hideGroupSetName = ((ref = $scope.unit.group_sets) != null ? ref.length : void 0) === 0;
      $scope.selectedDefinition = null;
      return $scope.setSelectedDefinition = function(taskDef) {
        $scope.selectedDefinition = taskDef;
        $scope.ngModel = taskDef;
        if (($scope.onSelectDefinition != null) && _.isFunction($scope.onSelectDefinition)) {
          return $scope.onSelectDefinition(taskDef);
        }
      };
    }]
  };
});
