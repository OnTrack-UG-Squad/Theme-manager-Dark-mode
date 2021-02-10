angular.module('doubtfire.groups.group-member-contribution-assigner', []).directive('groupMemberContributionAssigner', function() {
  return {
    restrict: 'E',
    templateUrl: 'groups/group-member-contribution-assigner/group-member-contribution-assigner.tpl.html',
    replace: true,
    scope: {
      task: '=',
      project: '=',
      team: '='
    },
    controller: ["$scope", "gradeService", "projectService", "groupService", "GroupMember", function($scope, gradeService, projectService, groupService, GroupMember) {
      var memberPercentage;
      $scope.selectedGroupSet = $scope.task.definition.group_set;
      $scope.selectedGroup = projectService.getGroupForTask($scope.project, $scope.task);
      $scope.memberSortOrder = 'student_name';
      $scope.numStars = 5;
      $scope.initialStars = 3;
      $scope.percentages = {
        danger: 0,
        warning: 25,
        info: 50,
        success: 100
      };
      $scope.checkClearRating = function(member) {
        if (member.confRating === 1 && member.overStar === 1 && member.rating === 0) {
          member.rating = member.percent = 0;
        } else if (member.confRating === 1 && member.overStar === 1 && member.rating === 0) {
          member.rating = 1;
        }
        return member.confRating = member.rating;
      };
      memberPercentage = function(member, rating) {
        return (100 * (rating / groupService.groupContributionSum($scope.team.members, member, rating))).toFixed();
      };
      $scope.hoveringOver = function(member, value) {
        member.overStar = value;
        return member.percent = memberPercentage(member, value);
      };
      $scope.gradeFor = gradeService.gradeFor;
      if ($scope.selectedGroup && $scope.selectedGroupSet) {
        GroupMember.query({
          unit_id: $scope.project.unit_id,
          group_set_id: $scope.selectedGroupSet.id,
          group_id: $scope.selectedGroup.id
        }, function(members) {
          $scope.team.members = _.map(members, function(member) {
            member.rating = member.confRating = $scope.initialStars;
            member.percent = memberPercentage(member, member.rating);
            return member;
          });
          $scope.percentages.warning = +(25 / members.length).toFixed();
          $scope.percentages.info = +(50 / members.length).toFixed();
          return $scope.percentages.success = +(95 / members.length).toFixed();
        });
      } else {
        $scope.team.members = [];
      }
      return $scope.percentClass = function(pct) {
        if (pct >= $scope.percentages.success) {
          return 'label-success';
        }
        if (($scope.percentages.info <= pct && pct < $scope.percentages.success)) {
          return 'label-info';
        }
        if (($scope.percentages.warning <= pct && pct < $scope.percentages.info)) {
          return 'label-warning';
        }
        if (($scope.percentages.danger <= pct && pct < $scope.percentages.warning)) {
          return 'label-danger';
        }
      };
    }]
  };
});
