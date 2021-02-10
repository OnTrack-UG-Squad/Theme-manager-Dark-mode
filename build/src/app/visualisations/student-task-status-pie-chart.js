angular.module('doubtfire.visualisations.student-task-status-pie-chart', []).directive('studentTaskStatusPieChart', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'visualisations/visualisation.tpl.html',
    scope: {
      project: '=',
      updateData: '=?'
    },
    controller: ["$scope", "taskService", "projectService", "Visualisation", function($scope, taskService, projectService, Visualisation) {
      var colors, ref;
      colors = taskService.statusColors;
      $scope.data = [];
      $scope.updateData = function() {
        $scope.data.length = 0;
        _.each(taskService.statusLabels, function(label, key) {
          var count;
          count = projectService.tasksByStatus($scope.project, key).length;
          return $scope.data.push({
            key: label,
            y: count,
            status_key: key
          });
        });
        if ($scope.api) {
          return $scope.api.update();
        }
      };
      $scope.$on('TaskStatusUpdated', $scope.updateData);
      $scope.updateData();
      return ref = Visualisation('pieChart', 'Student Task Status Pie Chart', {
        color: function(d, i) {
          return colors[d.status_key];
        },
        x: function(d) {
          return d.key;
        },
        y: function(d) {
          return d.y;
        },
        showLabels: false,
        tooltip: {
          valueFormatter: function(d) {
            var fixed, pct, task;
            fixed = d.toFixed();
            pct = Math.round((d / $scope.project.target_tasks().length) * 100);
            task = fixed === "1" ? "task" : "tasks";
            return fixed + " " + task + " (" + pct + "%)";
          },
          keyFormatter: function(d) {
            return d;
          }
        }
      }, {}), $scope.options = ref[0], $scope.config = ref[1], ref;
    }]
  };
});
