angular.module('doubtfire.projects.states.portfolio', ['doubtfire.projects.states.portfolio.directives']).config(["$stateProvider", function($stateProvider) {
  return $stateProvider.state('projects/portfolio', {
    parent: 'projects/index',
    url: '/portfolio',
    controller: 'ProjectsPortfolioStateCtrl',
    templateUrl: 'projects/states/portfolio/portfolio.tpl.html',
    data: {
      task: "Portfolio Creation",
      pageTitle: "_Home_",
      roleWhitelist: ['Tutor', 'Convenor', 'Admin', 'Student']
    }
  });
}]).controller("ProjectsPortfolioStateCtrl", ["$scope", "DoubtfireConstants", "taskService", "gradeService", "PortfolioSubmission", "analyticsService", function($scope, DoubtfireConstants, taskService, gradeService, PortfolioSubmission, analyticsService) {
  $scope.tabs = {
    welcomeStep: {
      title: "Portfolio Preparation",
      seq: 1
    },
    gradeStep: {
      title: "Select Grade",
      seq: 2
    },
    summaryStep: {
      title: "Learning Summary Report",
      seq: 3
    },
    taskStep: {
      title: "Select Tasks",
      seq: 4
    },
    otherFilesStep: {
      title: "Upload Other Files",
      seq: 5
    },
    reviewStep: {
      title: "Review Portfolio",
      seq: 6
    }
  };
  $scope.setActiveTab = function(tab) {
    $scope.activeTab = tab;
    $scope.activeTab.active = true;
    return analyticsService.event('Portfolio Wizard', 'Switched to Step', tab.title + " Step");
  };
  $scope.advanceActiveTab = function(advanceBy) {
    var newSeq, tab, tabKey;
    newSeq = $scope.activeTab.seq + advanceBy;
    return $scope.setActiveTab(((function() {
      var ref, results;
      ref = $scope.tabs;
      results = [];
      for (tabKey in ref) {
        tab = ref[tabKey];
        if (tab.seq === newSeq) {
          results.push(tab);
        }
      }
      return results;
    })())[0]);
  };
  $scope.projectHasLearningSummaryReport = function() {
    return _.filter($scope.project.portfolio_files, {
      idx: 0
    }).length > 0;
  };
  $scope.projectHasDraftLearningSummaryReport = $scope.project.uses_draft_learning_summary;
  $scope.portfolioSubmission = PortfolioSubmission($scope.project);
  $scope.addNewFilesToPortfolio = function(newFile) {
    return $scope.project.portfolio_files.push(newFile);
  };
  $scope.deleteFileFromPortfolio = function(file) {
    return $scope.portfolioSubmission.deleteFile($scope.project, file);
  };
  $scope.$watch('project.target_grade', function(newValue) {
    return $scope.targetGrade = gradeService.grades[newValue];
  });
  $scope.externalName = DoubtfireConstants.ExternalName;
  $scope.extraFiles = function() {
    return _.filter($scope.project.portfolio_files, function(f) {
      return f.idx !== 0;
    });
  };
  $scope.unitHasILOs = $scope.unit.ilos.length > 0;
  $scope.selectedTasks = function() {
    var tasks;
    if ($scope.unitHasILOs) {
      tasks = _.filter($scope.project.tasks, function(t) {
        var hasAlignmentsForTask;
        hasAlignmentsForTask = _.find($scope.project.task_outcome_alignments, {
          task_id: t.id
        }) != null;
        return t.include_in_portfolio && hasAlignmentsForTask;
      });
    } else {
      tasks = _.filter($scope.project.tasks, function(t) {
        return t.include_in_portfolio;
      });
    }
    tasks = _.filter(tasks, function(t) {
      return !_.includes(taskService.toBeWorkedOn, t.status);
    });
    return _.sortBy(tasks, function(t) {
      return t.definition.seq;
    });
  };
  if ($scope.project.portfolio_available || $scope.project.compile_portfolio) {
    $scope.setActiveTab($scope.tabs.reviewStep);
  } else if ($scope.projectHasDraftLearningSummaryReport) {
    $scope.setActiveTab($scope.tabs.summaryStep);
  } else if ($scope.projectHasLearningSummaryReport()) {
    $scope.setActiveTab($scope.tabs.taskStep);
  } else {
    $scope.setActiveTab($scope.tabs.welcomeStep);
  }
  $scope.statusText = taskService.statusText;
  $scope.statusData = taskService.statusData;
  return $scope.statusClass = taskService.statusClass;
}]);
