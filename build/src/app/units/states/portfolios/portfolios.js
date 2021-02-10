angular.module('doubtfire.units.states.portfolios', []).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('units/students/portfolios', {
    parent: 'units/index',
    url: '/students/portfolios',
    templateUrl: "units/states/portfolios/portfolios.tpl.html",
    controller: "UnitPortfoliosStateCtrl",
    data: {
      task: "Student Portfolios",
      pageTitle: "_Home_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin']
    }
  });
}]).controller("UnitPortfoliosStateCtrl", ["$scope", "Unit", "analyticsService", "gradeService", "projectService", "unitService", "currentUser", "Visualisation", "taskService", function($scope, Unit, analyticsService, gradeService, projectService, unitService, currentUser, Visualisation, taskService) {
  var refreshCharts;
  $scope.portfolioDownloadUrl = Unit.getPortfoliosUrl($scope.unit);
  $scope.gradeDownloadUrl = Unit.getGradesUrl($scope.unit);
  $scope.studentFilter = 'allStudents';
  $scope.portfolioFilter = 'withPortfolio';
  $scope.statusClass = taskService.statusClass;
  $scope.statusText = taskService.statusText;
  refreshCharts = Visualisation.refreshAll;
  $scope.setActiveTab = function(tab) {
    var ref;
    if (tab === $scope.activeTab) {
      return;
    }
    if ((ref = $scope.activeTab) != null) {
      ref.active = false;
    }
    $scope.activeTab = tab;
    $scope.activeTab.active = true;
    if ($scope.activeTab === $scope.tabs.viewProgress) {
      return refreshCharts();
    }
  };
  $scope.tabs = {
    selectStudent: {
      title: "Select Student",
      subtitle: "Select the student to assess",
      seq: 0
    },
    viewProgress: {
      title: "View Progress",
      subtitle: "See the progress of the student",
      seq: 1
    },
    viewPortfolio: {
      title: "View Portfolio",
      subtitle: "See the portfolio of the student",
      seq: 2
    },
    assessPortfolio: {
      title: "Assess Portfolio",
      subtitle: "Enter a grade for the student",
      seq: 3
    }
  };
  $scope.setActiveTab($scope.tabs.selectStudent);
  $scope.grades = gradeService.grades;
  $scope.unitService = unitService;
  $scope.tutorName = currentUser.profile.name;
  $scope.search = "";
  $scope.currentPage = 1;
  $scope.maxSize = 5;
  $scope.pageSize = 10;
  $scope.filterOptions = {
    selectedGrade: -1
  };
  $scope.grades = gradeService.grades;
  $scope.gradeAcronyms = gradeService.gradeAcronyms;
  $scope.selectedStudent = null;
  $scope.gradeResults = [
    {
      name: 'Fail',
      scores: [0, 10, 20, 30, 40, 44]
    }, {
      name: 'Pass',
      scores: [50, 53, 55, 57]
    }, {
      name: 'Credit',
      scores: [60, 63, 65, 67]
    }, {
      name: 'Distinction',
      scores: [70, 73, 75, 77]
    }, {
      name: 'High Distinction',
      scores: [80, 83, 85, 87]
    }, {
      name: 'High Distinction',
      scores: [90, 93, 95, 97, 100]
    }
  ];
  $scope.editingRationale = false;
  $scope.toggleEditRationale = function() {
    return $scope.editingRationale = !$scope.editingRationale;
  };
  analyticsService.watchEvent($scope, 'studentFilter', 'Teacher View - Grading Tab');
  analyticsService.watchEvent($scope, 'sortOrder', 'Teacher View - Grading Tab');
  analyticsService.watchEvent($scope, 'currentPage', 'Teacher View - Grading Tab', 'Selected Page');
  return $scope.selectStudent = function(student) {
    $scope.selectedStudent = student;
    $scope.project = null;
    projectService.getProject(student, $scope.unit, function(project) {
      return $scope.project = project;
    });
    return analyticsService.event('Teacher View - Grading Tab', 'Selected Student');
  };
}]);
