angular.module('doubtfire.home.states.home', []).config(["headerServiceProvider", function(headerServiceProvider) {
  var homeStateData;
  homeStateData = {
    url: "/home?notifications",
    views: {
      main: {
        controller: "HomeCtrl",
        templateUrl: "home/states/home/home.tpl.html"
      }
    },
    data: {
      pageTitle: "_Home_",
      roleWhitelist: ['Student', 'Tutor', 'Convenor', 'Admin']
    }
  };
  return headerServiceProvider.state('home', homeStateData);
}]).controller("HomeCtrl", ["$scope", "$state", "$timeout", "User", "Unit", "DoubtfireConstants", "currentUser", "unitService", "projectService", "$rootScope", "analyticsService", "dateService", "UserNotificationSettingsModal", function($scope, $state, $timeout, User, Unit, DoubtfireConstants, currentUser, unitService, projectService, $rootScope, analyticsService, dateService, UserNotificationSettingsModal) {
  var checkEnrolled, hasProjects, hasRoles, ref, ref1, testForNewUserWizard, testForStateChanges, timeoutPromise;
  analyticsService.event('Home', 'Viewed Home page');
  $scope.externalName = DoubtfireConstants.ExternalName;
  $scope.userFirstName = currentUser.profile.nickname || currentUser.profile.first_name;
  $scope.showDate = dateService.showDate;
  hasRoles = false;
  hasProjects = false;
  testForNewUserWizard = function() {
    var firstTimeUser, showNewUserWizard, userHasNotOptedIn;
    firstTimeUser = currentUser.profile.has_run_first_time_setup === false;
    userHasNotOptedIn = currentUser.profile.opt_in_to_research === null;
    showNewUserWizard = firstTimeUser || userHasNotOptedIn;
    userHasNotOptedIn = userHasNotOptedIn && !firstTimeUser;
    if (showNewUserWizard) {
      $state.go('new-user-wizard', {
        optInOnly: userHasNotOptedIn
      });
    }
    return showNewUserWizard;
  };
  testForStateChanges = function() {
    var showingWizard;
    return showingWizard = testForNewUserWizard();
  };
  timeoutPromise = $timeout((function() {
    return $scope.showSpinner = true;
  }), 2000);
  unitService.getUnitRoles(function(roles) {
    $scope.unitRoles = roles;
    hasRoles = true;
    return projectService.getProjects(false, function(projects) {
      $scope.projects = projects;
      $scope.showSpinner = false;
      $scope.dataLoaded = true;
      hasProjects = true;
      testForStateChanges();
      return $timeout.cancel(timeoutPromise);
    });
  });
  checkEnrolled = function() {
    if (($scope.unitRoles == null) || ($scope.projects == null)) {
      return;
    }
    return $scope.notEnrolled = function() {
      return ($scope.unitRoles.length === 0 && currentUser.role === 'Tutor') || ($scope.projects.length === 0 && currentUser.role === 'Student');
    };
  };
  $scope.$watch('projects', checkEnrolled);
  $scope.$watch('unitRoles', checkEnrolled);
  if (currentUser.role !== 'Student') {
    Unit.query(function(units) {
      return $scope.units = units;
    });
  }
  $scope.unit = function(unitId) {
    return _.find($scope.units, {
      id: unitId
    });
  };
  $scope.currentUser = currentUser;
  if ((((ref = $state.params) != null ? ref.notifications : void 0) != null) && ((ref1 = $state.params) != null ? ref1.notifications : void 0) === "true") {
    UserNotificationSettingsModal.show(currentUser != null ? currentUser.profile : void 0);
  }
  return $scope.$on('$viewContentLoaded', function() {
    var body, cardheading, darkmode, i, item, navbar, x;
    darkmode = localStorage.getItem('darkmode');
    if (darkmode === 'true') {
      body = document.body;
      item = document.querySelectorAll('.list-group-item');
      cardheading = document.querySelectorAll('.card-heading');
      navbar = document.querySelectorAll('.navbar-default')[0];
      if (!body.classList.contains('dark-mode-body')) {
        body.classList.toggle('dark-mode-body');
      }
      if (!navbar.classList.contains('dark-mode-navbar')) {
        navbar.classList.toggle('dark-mode-navbar');
      }
      i = 0;
      while (i < item.length) {
        if (!item[i].classList.contains('dark-mode-item')) {
          item[i].classList.toggle('dark-mode-item');
        }
        i++;
      }
      x = 0;
      while (x < cardheading.length) {
        if (!cardheading[x].classList.contains('dark-mode-card-heading')) {
          cardheading[x].classList.toggle('dark-mode-card-heading');
        }
        x++;
      }
    }
  });
}]).directive('myRepeatDirective', function() {
  return function(scope, element, attrs) {
    var darkmode, i, item;
    darkmode = localStorage.getItem('darkmode');
    if (darkmode === 'true') {
      item = document.querySelectorAll('.list-group-item');
      i = 0;
      while (i < item.length) {
        if (!item[i].classList.contains('dark-mode-item')) {
          item[i].classList.toggle('dark-mode-item');
        }
        i++;
      }
    }
  };
});
