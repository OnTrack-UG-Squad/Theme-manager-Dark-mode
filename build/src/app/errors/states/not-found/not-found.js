angular.module("doubtfire.errors.states.not-found", []).config(["headerServiceProvider", function(headerServiceProvider) {
  var stateData;
  stateData = {
    url: "/not_found",
    views: {
      main: {
        controller: "NotFoundCtrl",
        templateUrl: "errors/states/not-found/not-found.tpl.html"
      }
    },
    data: {
      pageTitle: "_Not Found_"
    }
  };
  return headerServiceProvider.state('not_found', stateData);
}]).controller("NotFoundCtrl", ["$scope", function($scope) {}]);
