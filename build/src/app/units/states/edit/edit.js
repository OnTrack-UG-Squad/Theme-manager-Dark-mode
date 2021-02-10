angular.module('doubtfire.units.states.edit', ['doubtfire.units.states.edit.directives']).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('units/admin', {
    parent: 'units/index',
    url: '/admin',
    controller: 'EditUnitStateCtrl',
    templateUrl: 'units/states/edit/edit.tpl.html',
    data: {
      task: 'Unit Administration',
      pageTitle: "_Unit Administration_",
      roleWhitelist: ['Convenor', 'Admin']
    }
  });
}]).controller('EditUnitStateCtrl', ["$scope", "$state", "$stateParams", "Convenor", "Tutor", "UnitRole", "unitService", "alertService", "analyticsService", function($scope, $state, $stateParams, Convenor, Tutor, UnitRole, unitService, alertService, analyticsService) {
  analyticsService.event('Edit Unit View', "Started Edit Unit View", 'Unit Tab');
  unitService.getUnit($state.params.unitId, {
    loadAllStudents: true
  }, function(unit) {
    $scope.unit = unit;
    $scope.newUnit = $scope.unit.id === -1;
    $scope.currentStaff = $scope.unit.staff;
    return UnitRole.query(function(roles) {
      $scope.unitRoles = _.filter(roles, function(role) {
        return role.unit_id === unit.id;
      });
      if ($scope.unitRoles) {
        return $scope.assessingUnitRole = $scope.unitRoles[0];
      }
    });
  });
  $scope.tabs = {
    unitTab: {
      title: "Unit Details",
      seq: 0
    },
    learningOutcomesTab: {
      title: "Learning Outcomes",
      seq: 1
    },
    staffTab: {
      title: "Staff",
      seq: 2
    },
    tutorialsTab: {
      title: "Tutorials",
      seq: 3
    },
    studentsTab: {
      title: "Students",
      seq: 4
    },
    tasksTab: {
      title: "Tasks",
      seq: 5
    },
    taskAlignmentTab: {
      title: "Task Alignment",
      seq: 5
    },
    groupsTab: {
      title: "Groups",
      seq: 6
    }
  };
  $scope.setActiveTab = function(tab) {
    var base, ref;
    if (tab === $scope.activeTab) {
      return;
    }
    if ((ref = $scope.activeTab) != null) {
      ref.active = false;
    }
    if (typeof (base = $scope.activeTab).deselect === "function") {
      base.deselect();
    }
    $scope.activeTab = tab;
    $scope.activeTab.active = true;
    if ($scope.assessingUnitRole != null) {
      return analyticsService.event(($scope.newUnit ? 'Edit' : 'Create') + " Unit View", "Switched Tab as " + $scope.assessingUnitRole.role, tab.title + " Tab");
    } else {
      return analyticsService.event(($scope.newUnit ? 'Edit' : 'Create') + " Unit View", "Switched Tab as Administrator", tab.title + " Tab");
    }
  };
  $scope.activeTab = $scope.tabs.unitTab;
  return Tutor.query(function(tutors) {
    return $scope.staff = _.map(tutors, function(tutor) {
      return {
        id: tutor.id,
        full_name: tutor.first_name + ' ' + tutor.last_name
      };
    });
  });
}]);
