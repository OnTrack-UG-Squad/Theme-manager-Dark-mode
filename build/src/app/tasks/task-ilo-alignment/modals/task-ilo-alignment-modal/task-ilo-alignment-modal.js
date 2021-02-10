angular.module('doubtfire.tasks.task-ilo-alignment.modals.task-ilo-alignment-modal', []).factory('TaskILOAlignmentModal', ["$modal", function($modal) {
  var TaskILOAlignmentModal;
  TaskILOAlignmentModal = {};
  TaskILOAlignmentModal.show = function(task, ilo, alignment, unit, project, source) {
    return $modal.open({
      controller: 'TaskILOAlignmentModalCtrl',
      templateUrl: 'tasks/task-ilo-alignment/modals/task-ilo-alignment-modal/task-ilo-alignment-modal.tpl.html',
      resolve: {
        task: function() {
          return task;
        },
        ilo: function() {
          return ilo;
        },
        alignment: function() {
          return alignment;
        },
        unit: function() {
          return unit;
        },
        project: function() {
          return project;
        },
        source: function() {
          return source;
        }
      }
    });
  };
  return TaskILOAlignmentModal;
}]).controller('TaskILOAlignmentModalCtrl', ["$scope", "$rootScope", "$modalInstance", "LearningAlignments", "alertService", "projectService", "task", "ilo", "alignment", "unit", "project", "source", function($scope, $rootScope, $modalInstance, LearningAlignments, alertService, projectService, task, ilo, alignment, unit, project, source) {
  var addAlignment, updateAlignment, updateRequest;
  $scope.source = source;
  $scope.unit = unit;
  $scope.task = task;
  $scope.ilo = ilo;
  $scope.alignment = alignment;
  $scope.project = project;
  if ($scope.project) {
    updateRequest = function(data) {
      return data.task_id = projectService.taskFromTaskDefId($scope.project, data.task_definition_id).id;
    };
  }
  $scope.editingRationale = false;
  $scope.toggleEditRationale = function() {
    if ($scope.editingRationale) {
      updateAlignment();
    }
    return $scope.editingRationale = !$scope.editingRationale;
  };
  $scope.removeAlignmentItem = function() {
    var data;
    data = _.extend({
      unit_id: $scope.unit.id
    }, $scope.alignment);
    return LearningAlignments["delete"](data, function(response) {
      var indexToDelete;
      indexToDelete = $scope.source.task_outcome_alignments.indexOf(_.find($scope.source.task_outcome_alignments, {
        id: $scope.alignment.id
      }));
      $scope.source.task_outcome_alignments.splice(indexToDelete, 1);
      $scope.alignment = void 0;
      return $rootScope.$broadcast('UpdateAlignmentChart', data, {
        remove: true
      });
    }, function(response) {
      if (response.data.error != null) {
        return alertService.add("danger", "Error: " + response.data.error, 6000);
      }
    });
  };
  updateAlignment = function() {
    var data;
    data = _.extend({
      unit_id: $scope.unit.id
    }, $scope.alignment);
    return LearningAlignments.update(data, function(response) {
      alertService.add("success", "Task - Outcome alignment rating saved", 2000);
      return $rootScope.$broadcast('UpdateAlignmentChart', response, {
        updated: true
      });
    }, function(response) {
      if (response.data.error != null) {
        return alertService.add("danger", "Error: " + response.data.error, 6000);
      }
    });
  };
  addAlignment = function() {
    var data;
    $scope.alignment = data = {
      unit_id: $scope.unit.id,
      learning_outcome_id: $scope.ilo.id,
      task_definition_id: $scope.task.definition.id,
      rating: $scope.alignment.rating,
      description: null
    };
    if ($scope.project) {
      data.project_id = $scope.project.project_id;
      updateRequest(data);
    }
    return LearningAlignments.create(data, function(response) {
      $scope.alignment.id = response.id;
      $scope.source.task_outcome_alignments.push($scope.alignment);
      return $rootScope.$broadcast('UpdateAlignmentChart', response, {
        created: true
      });
    }, function(response) {
      if (response.data.error != null) {
        return alertService.add("danger", "Error: " + response.data.error, 6000);
      }
    });
  };
  $scope.updateRating = function(alignment) {
    if ($scope.alignment.id == null) {
      return addAlignment(alignment);
    } else {
      return updateAlignment(alignment);
    }
  };
  return $scope.closeModal = function() {
    if ($scope.editingRationale) {
      $scope.updateRating($scope.alignment);
    }
    return $modalInstance.close($scope.alignment);
  };
}]);
