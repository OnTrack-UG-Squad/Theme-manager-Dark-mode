angular.module('doubtfire.tasks.modals.plagiarism-report-modal', []).factory('PlagiarismReportModal', ["$modal", "alertService", function($modal, alertService) {
  var PlagiarismReportModal;
  PlagiarismReportModal = {};
  PlagiarismReportModal.show = function(task) {
    return $modal.open({
      templateUrl: 'tasks/modals/plagiarism-report-modal/plagiarism-report-modal.tpl.html',
      controller: 'PlagiarismReportModalCtrl',
      size: 'lg',
      resolve: {
        task: function() {
          return task;
        }
      }
    });
  };
  return PlagiarismReportModal;
}]).controller('PlagiarismReportModalCtrl', ["$scope", "task", function($scope, task) {
  return $scope.task = task;
}]);
