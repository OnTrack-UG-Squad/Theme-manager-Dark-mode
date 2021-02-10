angular.module('doubtfire.admin.modals.create-break-modal', []).factory('CreateBreakModal', ["$modal", function($modal) {
  var CreateBreakModal;
  CreateBreakModal = {};
  CreateBreakModal.show = function(teachingPeriod) {
    return $modal.open({
      templateUrl: 'admin/modals/create-break-modal/create-break-modal.tpl.html',
      controller: 'CreateBreakModal',
      resolve: {
        teachingperiod: function() {
          return teachingPeriod;
        }
      }
    });
  };
  return CreateBreakModal;
}]).controller('CreateBreakModal', ["$scope", "$modalInstance", "alertService", "analyticsService", "teachingperiod", "Break", function($scope, $modalInstance, alertService, analyticsService, teachingperiod, Break) {
  analyticsService.event('Teaching Period Admin', 'Started to Add Break');
  $scope.teachingperiod = teachingperiod;
  $scope.calOptions = {
    startOpened: false
  };
  $scope["break"] = {
    start_date: null,
    number_of_weeks: null,
    teaching_period_id: $scope.teachingperiod.id
  };
  $scope.open = function($event, pickerData) {
    $event.preventDefault();
    $event.stopPropagation();
    if (pickerData === 'start') {
      return $scope.calOptions.startOpened = !$scope.calOptions.startOpened;
    }
  };
  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };
  return $scope.addBreak = function() {
    if ($scope["break"].start_date && $scope["break"].start_date.getMonth) {
      $scope["break"].start_date = ($scope["break"].start_date.getFullYear()) + "-" + ($scope["break"].start_date.getMonth() + 1) + "-" + ($scope["break"].start_date.getDate());
    }
    return Break.create($scope["break"], function(response) {
      alertService.add("success", "Break added.", 2000);
      $modalInstance.close();
      $scope.teachingperiod.breaks.push(response);
      return analyticsService.event('Teaching Period Admin', 'Added New Break');
    }, function(response) {
      return alertService.add('danger', "Error adding break - " + response.data.error);
    });
  };
}]);
