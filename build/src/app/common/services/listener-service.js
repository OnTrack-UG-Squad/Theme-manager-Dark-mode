angular.module("doubtfire.common.services.listener", []).factory("listenerService", function() {
  var listenerService, listeners;
  listeners = {};
  listenerService = {};
  listenerService.listenTo = function(scope) {
    var name;
    if (listeners[name = scope.$id] == null) {
      listeners[name] = [];
    }
    scope.$on('$destroy', function() {
      return _.each(listeners[scope.$id], function(l) {
        return l();
      });
    });
    return listeners[scope.$id];
  };
  return listenerService;
});
