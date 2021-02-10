var scope;

angular.module('doubtfire.config.debug', []);

scope = function($0) {
  if ($0 == null) {
    throw new Error("Select a DOM element using 'Inspect Element' first, then call using scope($0)");
  }
  return angular.element($0).scope();
};
