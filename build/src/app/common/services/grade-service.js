angular.module("doubtfire.common.services.grades", []).factory("gradeService", function() {
  var gradeService;
  gradeService = {};
  gradeService.gradeValues = [0, 1, 2, 3];
  gradeService.allGradeValues = [-1, 0, 1, 2, 3];
  gradeService.grades = ['Pass', 'Credit', 'Distinction', 'High Distinction'];
  gradeService.grades[-1] = 'Fail';
  gradeService.gradeNumbers = {
    F: -1,
    P: 0,
    C: 1,
    D: 2,
    HD: 3
  };
  gradeService.gradeAcronyms = {
    'Fail': 'F',
    'Pass': 'P',
    'Credit': 'C',
    'Distinction': 'D',
    'High Distinction': 'HD',
    0: 'P',
    1: 'C',
    2: 'D',
    3: 'HD'
  };
  gradeService.gradeAcronyms[-1] = 'F';
  gradeService.gradeColors = {
    F: '#808080',
    0: '#FF0000',
    P: '#FF0000',
    1: '#FF8000',
    C: '#FF8000',
    2: '#0080FF',
    D: '#0080FF',
    3: '#80FF00',
    HD: '#80FF00'
  };
  gradeService.gradeColors[-1] = '#808080';
  gradeService.gradeFor = function(project) {
    return gradeService.gradeNumbers[project.target_grade];
  };
  return gradeService;
});
