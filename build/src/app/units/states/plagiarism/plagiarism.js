angular.module('doubtfire.units.states.plagiarism', ['doubtfire.units.states.plagiarism.directives']).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('units/students/plagiarism', {
    parent: 'units/index',
    url: '/students/plagiarism',
    templateUrl: "units/states/plagiarism/plagiarism.tpl.html",
    controller: "UnitPlagiarismStateCtrl",
    data: {
      task: "Student Plagiarism",
      pageTitle: "_Home_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin']
    }
  });
}]).controller("UnitPlagiarismStateCtrl", ["$scope", function($scope) {}]);
