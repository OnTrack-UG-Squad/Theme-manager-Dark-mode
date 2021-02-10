angular.module('doubtfire.common.header', ['doubtfire.common.header.unit-dropdown']).controller("BasicHeaderCtrl", ["$scope", "$state", "$rootScope", "UserNotificationSettingsModal", "CalendarModal", "UserSettingsModal", "currentUser", "AboutDoubtfireModal", "$transitions", "$document", "$filter", function($scope, $state, $rootScope, UserNotificationSettingsModal, CalendarModal, UserSettingsModal, currentUser, AboutDoubtfireModal, $transitions, $document, $filter) {
  var ref, updateSelectedUnit;
  $scope.currentUser = currentUser.profile;
  $scope.tutor = ((ref = $state.params) != null ? ref.tutor : void 0) != null;
  $scope.darkMode = function() {
    var darkmode;
    darkmode = localStorage.getItem('darkmode');
    if (darkmode === 'true') {
      localStorage.setItem('darkmode', 'false');
    } else {
      localStorage.setItem('darkmode', 'true');
    }
    location.reload();
  };
  $scope.$on('$viewContentLoaded', function() {
    var body, darkmode, navbar;
    darkmode = localStorage.getItem('darkmode');
    if (darkmode === 'true') {
      body = document.body;
      navbar = document.querySelectorAll('.navbar-default')[0];
      if (!body.classList.contains('dark-mode-body')) {
        body.classList.toggle('dark-mode-body');
      }
      if (!navbar.classList.contains('dark-mode-navbar')) {
        navbar.classList.toggle('dark-mode-navbar');
      }
    }
  });
  $scope.openUserSettings = function() {
    return UserSettingsModal.show($scope.currentUser);
  };
  $scope.openNotificationSettings = function() {
    return UserNotificationSettingsModal.show($scope.currentUser);
  };
  $scope.openCalendar = function() {
    return CalendarModal.show();
  };
  $scope.openAboutModal = function() {
    return AboutDoubtfireModal.show();
  };
  updateSelectedUnit = function(event, data) {
    var context;
    context = data.context;
    if (context == null) {
      return;
    }
    $scope.unit = {
      code: context.unit_code || context.unit().code,
      name: context.unit_name || context.unit().name
    };
    return $scope[context.role != null ? "unitRole" : "project"] = context;
  };
  $scope.task = $state.current.data.task;
  $transitions.onSuccess({
    to: '**'
  }, function(trans) {
    var ref1;
    return $scope.task = (ref1 = trans.to().data) != null ? ref1.task : void 0;
  });
  $rootScope.$on('UnitRoleChanged', updateSelectedUnit);
  return $rootScope.$on('ProjectChanged', updateSelectedUnit);
}]);
