angular.module("doubtfire.api.models.task-similarity", []).factory("TaskSimilarity", ["$http", "DoubtfireConstants", "currentUser", function($http, DoubtfireConstants, currentUser) {
  var result;
  return result = {
    similarityUrl: function(task, match) {
      return DoubtfireConstants.API_URL + "/tasks/" + task.id + "/similarity/" + match;
    },
    get: function(task, match, callback) {
      var url;
      url = result.similarityUrl(task, match);
      return $http.get(url).success(function(data) {
        return callback(data);
      });
    },
    put: function(task, match, other, value, callback, error_callback) {
      var url;
      url = result.similarityUrl(task, match);
      return $http.put(url, {
        dismissed: value,
        other: other
      }).then(function(data) {
        return callback(data);
      }, function(response) {
        return error_callback(response);
      });
    }
  };
}]);
