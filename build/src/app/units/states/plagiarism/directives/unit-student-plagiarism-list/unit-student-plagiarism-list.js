angular.module('doubtfire.units.states.plagiarism.directives.unit-student-plagiarism-list', []).directive('unitStudentPlagiarismList', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'units/states/plagiarism/directives/unit-student-plagiarism-list/unit-student-plagiarism-list.tpl.html',
    scope: {
      unit: '=',
      unitRole: '='
    },
    controller: ["$scope", "$filter", "currentUser", "gradeService", "projectService", function($scope, $filter, currentUser, gradeService, projectService) {
      var studentFilter;
      $scope.grades = gradeService.grades;
      $scope.view = "students";
      studentFilter = "allStudents";
      $scope.tutorName = currentUser.profile.name;
      $scope.search = "";
      $scope.reverse = false;
      $scope.currentPage = 1;
      $scope.maxSize = 5;
      $scope.pageSize = 5;
      $scope.assessingUnitRole = $scope.unitRole;
      $scope.studentFilter = 'allStudents';
      $scope.$watch('unit.students', function(newUnit) {
        var filteredStudents;
        filteredStudents = $filter('showStudents')($scope.unit.students, 'myStudents', $scope.tutorName);
        if ((filteredStudents != null) && filteredStudents.length === 0) {
          return $scope.studentFilter = 'allStudents';
        }
      });
      $scope.activeStudent = null;
      $scope.activeTask = null;
      $scope.loadingStudent = true;
      $scope.selectStudent = function(student) {
        $scope.activeStudent = student;
        $scope.loadingStudent = true;
        if (student) {
          return projectService.getProject(student, $scope.unit, function(project) {
            $scope.activeTask = $filter('taskWithPlagiarism')(student.tasks)[0];
            return $scope.loadingStudent = false;
          });
        }
      };
      return $scope.selectTask = function(task) {
        return $scope.activeTask = task;
      };
    }]
  };
});
