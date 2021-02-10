angular.module("doubtfire.errors.states.unauthorised", []).config(["headerServiceProvider", function(headerServiceProvider) {
  var stateData;
  stateData = {
    url: "/unauthorised",
    views: {
      main: {
        controller: "UnauthorisedCtrl",
        templateUrl: "errors/states/unauthorised/unauthorised.tpl.html"
      }
    },
    data: {
      pageTitle: "_Unauthorised_"
    }
  };
  return headerServiceProvider.state("unauthorised", stateData);
}]).controller("UnauthorisedCtrl", ["$scope", function($scope) {}]);
