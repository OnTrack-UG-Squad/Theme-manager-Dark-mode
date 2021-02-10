angular.module('doubtfire.units.states.students', []).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('units/students/list', {
    parent: 'units/index',
    url: '/students',
    templateUrl: "units/states/students-list/students-list.tpl.html",
    controller: "UnitStudentsStateCtrl",
    data: {
      task: "Student List",
      pageTitle: "_Home_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin']
    }
  });
}]).controller("UnitStudentsStateCtrl", ["$scope", "$state", "$filter", "$timeout", "Project", "UnitStudentEnrolmentModal", "currentUser", "unitService", "alertService", "taskService", "gradeService", "analyticsService", "projectService", function($scope, $state, $filter, $timeout, Project, UnitStudentEnrolmentModal, currentUser, unitService, alertService, taskService, gradeService, analyticsService, projectService) {
  var applyFilters;
  applyFilters = function() {
    var allStudentsLength, filteredStudents, ref;
    filteredStudents = $filter('showStudents')($scope.unit.students, $scope.staffFilter, $scope.tutorName);
    allStudentsLength = filteredStudents.length;
    if (((ref = $scope.searchText) != null ? ref.trim().length : void 0) > 0) {
      filteredStudents = $filter('projectFilter')(filteredStudents, $scope.searchText);
    }
    return $scope.filteredStudents = $filter('paginateAndSort')(filteredStudents, $scope.pagination, $scope.tableSort);
  };
  $scope.pagination = {
    currentPage: 1,
    maxSize: 15,
    pageSize: 15,
    totalSize: null,
    show: false,
    onChange: applyFilters
  };
  $scope.tableSort = {
    order: 'name',
    reverse: false
  };
  $scope.staffFilter = {
    Convenor: 'all',
    Tutor: 'mine'
  }[$scope.unitRole.role];
  $scope.tutorName = currentUser.profile.name;
  applyFilters();
  $scope.sortTableBy = function(column) {
    if (column === 'flags') {
      $scope.showSearchOptions = true;
      $timeout(function() {
        return document.querySelector('#students-list .panel-body.search-options .form-group.flag-sort button:first-child').focus();
      }, 500);
      if ($scope.tableSort.order === column) {
        $scope.tableSort.reverse = !$scope.tableSort.reverse;
      }
      return;
    }
    $scope.tableSort.order = column;
    $scope.tableSort.reverse = !$scope.tableSort.reverse;
    return applyFilters();
  };
  $scope.staffFilterChanged = function(newFilter) {
    $scope.staffFilter = newFilter;
    return applyFilters();
  };
  $scope.searchTextChanged = applyFilters;
  $scope.unitTypeAheadData = unitService.unitTypeAheadData;
  $scope.switchToTutorial = function(student, tutorial) {
    return student.switchToTutorial(tutorial);
  };
  $scope.getCSVHeader = function() {
    var result;
    result = ['student_code', 'name', 'email', 'portfolio'];
    if ($scope.unit.tutorial_streams.length > 0) {
      _.each($scope.unit.tutorial_streams, function(ts) {
        return result.push(ts.abbreviation);
      });
    } else {
      result.push('tutorial');
    }
    return result;
  };
  $scope.getCSVData = function() {
    var filteredStudents, result;
    analyticsService.event('Teacher View - Students Tab', 'Export CSV data');
    filteredStudents = $filter('filter')($filter('showStudents')($scope.unit.students, $scope.staffFilter, $scope.tutorName), $scope.searchText);
    result = [];
    angular.forEach(filteredStudents, function(student) {
      var ref, row;
      row = {};
      row['student_code'] = student.student_id;
      row['name'] = student.name;
      row['email'] = student.student_email;
      row['portfolio'] = student.portfolio_status;
      if ($scope.unit.tutorial_streams.length > 0) {
        _.each($scope.unit.tutorial_streams, function(ts) {
          var ref;
          return row[ts.abbreviation] = ((ref = student.tutorialForStream(ts)) != null ? ref.abbreviation : void 0) || '';
        });
      } else {
        row['tutorial'] = ((ref = student.tutorials()[0]) != null ? ref.abbreviation : void 0) || '';
      }
      return result.push(row);
    });
    return result;
  };
  $scope.statusClass = taskService.statusClass;
  $scope.statusText = taskService.statusText;
  $scope.viewStudent = function(student) {
    analyticsService.event('Teacher View - Students Tab', 'Viewed Student');
    return student.viewProject(true);
  };
  $scope.sortTableByFlag = function(flag) {
    if ($scope.tableSort.order === flag) {
      return $scope.tableSort.reverse = !$scope.tableSort.reverse;
    } else {
      return $scope.tableSort.order = flag;
    }
  };
  return $scope.showEnrolModal = function() {
    analyticsService.event('Teacher View - Students Tab', 'Enrol Student');
    return UnitStudentEnrolmentModal.show($scope.unit);
  };
}]);
