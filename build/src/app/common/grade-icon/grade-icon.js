angular.module('doubtfire.common.grade-icon', []).directive('gradeIcon', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'common/grade-icon/grade-icon.tpl.html',
    scope: {
      inputGrade: '=?grade',
      colorful: '=?'
    },
    controller: ["$scope", "gradeService", function($scope, gradeService) {
      return $scope.$watch('inputGrade', function(newGrade) {
        $scope.grade = _.isString($scope.inputGrade) ? gradeService.grades.indexOf($scope.inputGrade) : $scope.inputGrade;
        $scope.gradeText = function(grade) {
          if ($scope.grade != null) {
            return gradeService.grades[$scope.grade] || "Grade";
          }
        };
        return $scope.gradeLetter = function(grade) {
          return gradeService.gradeAcronyms[$scope.gradeText(grade)] || 'G';
        };
      });
    }]
  };
});
