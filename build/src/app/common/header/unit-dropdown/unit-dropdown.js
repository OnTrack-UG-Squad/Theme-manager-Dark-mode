angular.module('doubtfire.common.header.unit-dropdown', []).directive('unitDropdown', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'common/header/unit-dropdown/unit-dropdown.tpl.html',
    controller: ["$scope", "unitService", "projectService", "dateService", function($scope, unitService, projectService, dateService) {
      $scope.showDate = dateService.showDate;
      $scope.isUniqueUnitRole = function(unit) {
        var units;
        units = _.filter($scope.unitRoles, {
          unit_id: unit.unit_id
        });
        return units.length === 1 || unit.role === "Tutor";
      };
      unitService.getUnitRoles(function(roles) {
        return $scope.unitRoles = roles;
      });
      return projectService.getProjects(false, function(projects) {
        return $scope.projects = projects;
      });
    }]
  };
}).directive('myRepeatDirective', function() {
  return function(scope, element, attrs) {
    var darkmode, i, item;
    darkmode = localStorage.getItem('darkmode');
    if (darkmode === 'true') {
      item = document.querySelectorAll('.dropdown-menu');
      i = 0;
      while (i < item.length) {
        if (!item[i].classList.contains('dark-mode-dropdown-menu')) {
          item[i].classList.toggle('dark-mode-dropdown-menu');
        }
        i++;
      }
    }
  };
});
