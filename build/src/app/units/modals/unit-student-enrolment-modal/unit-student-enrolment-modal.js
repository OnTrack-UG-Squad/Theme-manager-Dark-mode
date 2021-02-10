angular.module('doubtfire.units.modals.unit-student-enrolment-modal', []).factory('UnitStudentEnrolmentModal', ["$modal", function($modal) {
  var UnitStudentEnrolmentModal;
  UnitStudentEnrolmentModal = {};
  UnitStudentEnrolmentModal.show = function(unit) {
    return $modal.open({
      controller: 'UnitStudentEnrolmentModalCtrl',
      templateUrl: 'units/modals/unit-student-enrolment-modal/unit-student-enrolment-modal.tpl.html',
      resolve: {
        unit: function() {
          return unit;
        }
      }
    });
  };
  return UnitStudentEnrolmentModal;
}]).controller('UnitStudentEnrolmentModalCtrl', ["$scope", "$modalInstance", "Project", "unit", "alertService", "campusService", function($scope, $modalInstance, Project, unit, alertService, campusService) {
  $scope.unit = unit;
  $scope.projects = unit.students;
  $scope.campuses = [];
  $scope.data = {
    campus_id: 1
  };
  campusService.query().subscribe(function(campuses) {
    $scope.campuses = campuses;
    return $scope.data.campus_id = campuses[0].id;
  });
  return $scope.enrolStudent = function(student_id, campus_id) {
    if (campus_id == null) {
      alertService.add('danger', 'Campus missing. Please indicate student campus', 5000);
      return;
    }
    return Project.create({
      unit_id: unit.id,
      student_num: student_id,
      campus_id: campus_id
    }, function(project) {
      if (!unit.studentEnrolled(project.project_id)) {
        unit.addStudent(project);
        alertService.add("success", "Student enrolled", 2000);
        return $modalInstance.close();
      } else {
        alertService.add("danger", "Student is already enrolled", 2000);
        return $modalInstance.close();
      }
    }, function(response) {
      return alertService.add("danger", "Error enrolling student: " + response.data.error, 6000);
    });
  };
}]);
