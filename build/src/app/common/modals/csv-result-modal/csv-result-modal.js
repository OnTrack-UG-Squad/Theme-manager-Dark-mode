angular.module("doubtfire.common.modals.csv-result-modal", []).factory("CsvResultModal", ["$modal", "alertService", function($modal, alertService) {
  var CsvResultModal;
  CsvResultModal = {};
  CsvResultModal.show = function(title, response) {
    if (response.errors.length === 0) {
      alertService.add("success", "Data uploaded. Success with " + response.success.length + " items.", 2000);
    } else if (response.success.length > 0) {
      alertService.add("warning", "Data uploaded, success with " + response.success.length + " items, but " + response.errors.length + " errors.", 6000);
    } else {
      alertService.add("danger", "Data uploaded but " + response.errors.length + " errors", 6000);
    }
    return $modal.open({
      templateUrl: 'common/modals/csv-result-modal/csv-result-modal.tpl.html',
      controller: 'CsvResultModalCtrl',
      resolve: {
        title: function() {
          return title;
        },
        response: function() {
          return response;
        }
      }
    });
  };
  return CsvResultModal;
}]).controller('CsvResultModalCtrl', ["$scope", "$modalInstance", "title", "response", function($scope, $modalInstance, title, response) {
  $scope.title = title;
  $scope.response = response;
  $scope.currentPage = 1;
  $scope.maxSize = 5;
  $scope.pageSize = 5;
  if (response.errors.length > 0) {
    $scope.activeCsvResponseSelection = 'errors';
  } else if (response.success.length > 0) {
    $scope.activeCsvResponseSelection = 'success';
  } else {
    $scope.activeCsvResponseSelection = 'ignored';
  }
  $scope.itemData = function(selector) {
    return $scope.response[selector];
  };
  return $scope.close = function() {
    return $modalInstance.dismiss();
  };
}]).factory("CsvUploadModal", ["$modal", "alertService", function($modal, alertService) {
  var CsvUploadModal;
  CsvUploadModal = {};
  CsvUploadModal.show = function(title, message, batchFiles, url, onSuccess) {
    return $modal.open({
      templateUrl: 'common/modals/csv-result-modal/csv-upload-modal.tpl.html',
      controller: 'CsvUploadModalCtrl',
      resolve: {
        title: function() {
          return title;
        },
        message: function() {
          return message;
        },
        batchFiles: function() {
          return batchFiles;
        },
        url: function() {
          return url;
        },
        onSuccess: function() {
          return onSuccess;
        }
      }
    });
  };
  return CsvUploadModal;
}]).controller('CsvUploadModalCtrl', ["$scope", "$modalInstance", "title", "message", "batchFiles", "url", "onSuccess", function($scope, $modalInstance, title, message, batchFiles, url, onSuccess) {
  var wrapSuccess;
  wrapSuccess = function(response) {
    $modalInstance.dismiss();
    return onSuccess(response);
  };
  $scope.title = title;
  $scope.message = message;
  $scope.batchFiles = batchFiles;
  $scope.url = url;
  $scope.onSuccess = wrapSuccess;
  return $scope.close = function() {
    return $modalInstance.dismiss();
  };
}]);
