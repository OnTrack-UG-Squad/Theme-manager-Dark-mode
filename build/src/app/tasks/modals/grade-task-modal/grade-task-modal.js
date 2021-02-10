angular.module('doubtfire.tasks.modals.grade-task-modal', []).factory('GradeTaskModal', ["$modal", function($modal) {
  var GradeTaskModal;
  GradeTaskModal = {};
  GradeTaskModal.show = function(task) {
    return $modal.open({
      templateUrl: 'tasks/modals/grade-task-modal/grade-task-modal.tpl.html',
      controller: 'GradeTaskModal',
      resolve: {
        task: function() {
          return task;
        }
      }
    });
  };
  return GradeTaskModal;
}]).controller('GradeTaskModal', ["$scope", "$modalInstance", "gradeService", "task", function($scope, $modalInstance, gradeService, task) {
  $scope.task = task;
  $scope.data = {
    desiredGrade: task.grade,
    rating: task.quality_pts || 1,
    overStar: 0,
    confRating: 0
  };
  $scope.gradeValues = gradeService.allGradeValues;
  $scope.grades = gradeService.grades;
  $scope.dismiss = $modalInstance.dismiss;
  $scope.numStars = task.definition.max_quality_pts || 5;
  $scope.close = function() {
    return $modalInstance.close({
      qualityPts: $scope.data.rating,
      selectedGrade: $scope.data.desiredGrade
    });
  };
  $scope.hoveringOver = function(value) {
    return $scope.data.overStar = value;
  };
  return $scope.checkClearRating = function() {
    if ($scope.data.confRating === 1 && $scope.data.rating === 1 && $scope.data.overStar === 1) {
      $scope.data.rating = 0;
    } else if ($scope.data.confRating === 1 && $scope.data.overStar === 1 && $scope.data.rating === 0) {
      $scope.data.rating = 1;
    }
    return $scope.data.confRating = $scope.data.rating;
  };
}]);
