angular.module('doubtfire.home.states.new-user-wizard', []).config(["$stateProvider", function($stateProvider) {
  var newUserWizardStateData;
  newUserWizardStateData = {
    url: "/home#new-user-wizard?optInOnly",
    views: {
      main: {
        controller: "NewUserWizardCtrl",
        templateUrl: "home/states/new-user-wizard/new-user-wizard.tpl.html"
      }
    },
    data: {
      pageTitle: "_Welcome to Doubtfire_",
      roleWhitelist: ['Student', 'Tutor', 'Convenor', 'Admin']
    }
  };
  return $stateProvider.state('new-user-wizard', newUserWizardStateData);
}]).controller('NewUserWizardCtrl', ["$scope", "$state", "$stateParams", "$q", "DoubtfireConstants", "User", "Project", "projectService", "gradeService", "currentUser", "alertService", "analyticsService", "auth", function($scope, $state, $stateParams, $q, DoubtfireConstants, User, Project, projectService, gradeService, currentUser, alertService, analyticsService, auth) {
  var email, firstName, lastName, studentId;
  $scope.steps = {
    nameStep: {
      title: "What's your name?",
      subtitle: "We will need a name to help identify you on Doubtfire.",
      seq: 0
    },
    nicknameStep: {
      title: "Do you have a preferred name or nickname?",
      subtitle: "If you'll find it easier for your tutor to call you another name please let us know!",
      seq: 1
    },
    studentIdStep: {
      title: "What is your Student ID?",
      subtitle: "Please enter your Student ID number that is allocated by your institution.",
      seq: 2
    },
    avatarStep: {
      title: "Give yourself an avatar",
      subtitle: "Set your avatar using Gravatar to help you be identified on Doubtfire.",
      seq: 3
    },
    emailStep: {
      title: "How would you like us to email you?",
      subtitle: "Based on your preferences, we will email you as frequently as you'd like us to.",
      seq: 4
    },
    targetGradeStep: {
      title: "What grades are you aiming for?",
      subtitle: "We noticed you are enrolled in the following subject(s).",
      seq: 5
    },
    optInToResearchStep: {
      title: "Would you like to help us make Doubtfire better?",
      subtitle: "We would like to anonymously use your Doubtfire usage for research in making Doubtfire better.",
      seq: 6
    }
  };
  $scope.firstStep = _.find($scope.steps, {
    seq: 0
  });
  $scope.lastStep = _.find($scope.steps, {
    seq: _.keys($scope.steps).length - 1
  });
  $scope.currentStep = $scope.optInOnly ? $scope.steps.optInToResearchStep : $scope.firstStep;
  if ($scope.optInOnly) {
    $scope.user = currentUser.profile;
    $scope.user.opt_in_to_research = null;
  } else {
    firstName = null;
    lastName = null;
    email = null;
    studentId = "";
    if (!(currentUser.profile.first_name.toLowerCase() === 'first name' || currentUser.profile.last_name.toLowerCase() === 'last name')) {
      firstName = currentUser.profile.first_name;
      lastName = currentUser.profile.last_name;
      email = currentUser.profile.email;
    }
    $scope.user = {
      first_name: firstName,
      last_name: lastName,
      nickname: null,
      email: email,
      student_id: studentId,
      receive_feedback_notifications: true,
      receive_portfolio_notifications: true,
      receive_task_notifications: true,
      opt_in_to_research: true,
      has_run_first_time_setup: true
    };
  }
  $scope.moveStep = function(skip) {
    var stepAfterTargetStep, stepBeforeTargetStep;
    if ($scope.projects.length === 0) {
      stepBeforeTargetStep = _.find($scope.steps, {
        seq: $scope.steps.targetGradeStep.seq - 1
      });
      stepAfterTargetStep = _.find($scope.steps, {
        seq: $scope.steps.targetGradeStep.seq + 1
      });
      if (skip === 1 && $scope.currentStep === stepBeforeTargetStep) {
        skip += 1;
      } else if (skip === -1 && $scope.currentStep === stepAfterTargetStep) {
        skip -= 1;
      }
    }
    return $scope.currentStep = _.find($scope.steps, {
      seq: $scope.currentStep.seq + skip
    });
  };
  $scope.gradeAcronyms = gradeService.gradeAcronyms;
  $scope.grades = gradeService.grades;
  $scope.determineDisabledForCurrentStep = function() {
    var ref, ref1, ref2, ref3, state;
    switch ($scope.currentStep) {
      case $scope.steps.nameStep:
        state = ((ref = $scope.user.first_name) != null ? ref.trim().length : void 0) > 0 && ((ref1 = $scope.user.last_name) != null ? ref1.trim().length : void 0) > 0;
        break;
      case $scope.steps.nicknameStep:
      case $scope.steps.targetGradeStep:
      case $scope.steps.avatarStep:
        state = true;
        break;
      case $scope.steps.studentIdStep:
        state = ((ref2 = $scope.user.student_id) != null ? ref2.trim().length : void 0) > 0;
        break;
      case $scope.steps.emailStep:
        state = ((ref3 = $scope.user.email) != null ? ref3.trim().length : void 0) > 0;
        state = state && _.isBoolean($scope.user.receive_feedback_notifications) && _.isBoolean($scope.user.receive_portfolio_notifications) && _.isBoolean($scope.user.receive_task_notifications);
        break;
      case $scope.steps.optInToResearchStep:
        state = _.isBoolean($scope.user.opt_in_to_research);
    }
    return !state;
  };
  $scope.done = function(user) {
    var errorFn, i, len, project, promises, ref;
    user = user != null ? user : $scope.user;
    promises = [];
    errorFn = function(response) {
      return alertService.add("danger", "Error: " + response.data.error, 6000);
    };
    ref = $scope.projects;
    for (i = 0, len = ref.length; i < len; i++) {
      project = ref[i];
      promises.push(Project.update(null, {
        id: project.project_id,
        target_grade: project.target_grade
      }, null, errorFn).$promise);
    }
    promises.push(User.update(null, {
      id: currentUser.id,
      user: $scope.user
    }, (function(user) {
      return currentUser.profile = user;
    }), errorFn).$promise);
    return $q.all(promises).then(function() {
      if ($scope.user.opt_in_to_research) {
        analyticsService.event("Doubtfire Analytics", "User opted in research");
      }
      auth.saveCurrentUser();
      return $state.go('home');
    });
  };
  $scope.userFirstName = currentUser.profile.first_name;
  $scope.externalName = DoubtfireConstants.ExternalName;
  return projectService.getProjects(false, function(projects) {
    var i, len, ref, step;
    $scope.projects = projects;
    if (projects.length === 0 && currentUser.role !== 'Student') {
      $scope.isStaff = true;
      $scope.user.student_id = null;
      delete $scope.steps.studentIdStep;
      ref = ['emailStep', 'targetGradeStep', 'avatarStep', 'optInToResearchStep'];
      for (i = 0, len = ref.length; i < len; i++) {
        step = ref[i];
        $scope.steps[step].seq -= 1;
      }
      return $scope.steps.nicknameStep.subtitle = $scope.steps.nicknameStep.subtitle.replace('tutor', 'students');
    }
  });
}]);
