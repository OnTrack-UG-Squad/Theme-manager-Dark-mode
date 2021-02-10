angular.module('doubtfire.units.states.tasks.offline', []).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('units/tasks/offline', {
    parent: 'units/tasks',
    url: '/offline',
    templateUrl: "units/states/tasks/offline/offline.tpl.html",
    controller: "OfflineMarkingStateCtrl",
    data: {
      task: "Mark Tasks Offline",
      pageTitle: "_Home_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin']
    }
  });
}]).controller('OfflineMarkingStateCtrl', ["$scope", "alertService", "Task", "CsvResultModal", function($scope, alertService, Task, CsvResultModal) {
  $scope.zipMarkingFiles = {
    file: {
      name: 'Zip of annotated task PDFs and marks.csv',
      type: 'zip'
    }
  };
  $scope.csvMarkingFiles = {
    file: {
      name: 'Modified marks.csv',
      type: 'csv'
    }
  };
  $scope.uploadSubmissionUrl = $scope.readyToMarkSubmissionsUrl = Task.getTaskMarkingUrl($scope.unit);
  $scope.isUploading = null;
  $scope.isReady = {
    csv: null,
    zip: null
  };
  $scope.onMarkingUploadSuccess = function(response) {
    CsvResultModal.show("Marking CSV and ZIP upload", response);
    return $scope.unit.refreshStudents();
  };
  $scope.activeTab = 'download';
  return $scope.setActiveTab = function(newTab) {
    return $scope.activeTab = newTab;
  };
}]);
