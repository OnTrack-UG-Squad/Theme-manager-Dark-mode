angular.module('doubtfire.visualisations', ['doubtfire.visualisations.summary-task-status-scatter', 'doubtfire.visualisations.progress-burndown-chart', 'doubtfire.visualisations.alignment-bar-chart', 'doubtfire.visualisations.alignment-bullet-chart', 'doubtfire.visualisations.student-task-status-pie-chart', 'doubtfire.visualisations.task-status-pie-chart', 'doubtfire.visualisations.target-grade-pie-chart', 'doubtfire.visualisations.task-completion-box-plot', 'doubtfire.visualisations.achievement-box-plot', 'doubtfire.visualisations.achievement-custom-bar-chart']).factory('Visualisation', ["$interval", "analyticsService", function($interval, analyticsService) {
  var Visualisation;
  Visualisation = function(type, visualisationName, opts, conf, titleOpts, subtitleOpts) {
    var DEFAULT_CONF, DEFAULT_OPTS, dirtyConf, dirtyOpts;
    DEFAULT_OPTS = {
      objectequality: true,
      interactive: true,
      showValues: true,
      showXAxis: true,
      showYAxis: true,
      showLegend: true,
      transitionDuration: 500,
      duration: 500,
      height: 600,
      color: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]
    };
    DEFAULT_CONF = {
      visible: true,
      extended: false,
      disabled: false,
      autorefresh: true,
      refreshDataOnly: true,
      deepWatchOptions: true,
      deepWatchData: false,
      deepWatchConfig: true,
      debounce: 10
    };
    dirtyOpts = angular.extend({}, DEFAULT_OPTS, opts);
    dirtyOpts.type = type;
    dirtyConf = angular.extend({}, DEFAULT_CONF, conf);
    analyticsService.event('Visualisations', 'Created Visualisation', visualisationName);
    return [
      {
        chart: dirtyOpts,
        title: titleOpts,
        subtitle: subtitleOpts
      }, dirtyConf
    ];
  };
  Visualisation.refreshAll = function() {
    return $interval((function() {
      return window.dispatchEvent(new Event('resize'));
    }), 50, 1);
  };
  return Visualisation;
}]);
