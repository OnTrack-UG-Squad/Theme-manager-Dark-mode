angular.module("doubtfire.common.modals.comments-modal", []).factory("CommentsModal", ["$modal", function($modal) {
  var CommentsModal;
  CommentsModal = {};
  CommentsModal.show = function(commentResourceUrl, commentType) {
    return $modal.open({
      templateUrl: 'common/modals/comments-modal/comments-modal.tpl.html',
      controller: 'CommentsModalCtrl',
      size: 'lg',
      resolve: {
        commentResourceUrl: function() {
          return commentResourceUrl;
        },
        commentType: function() {
          return commentType;
        }
      }
    });
  };
  return CommentsModal;
}]).controller("CommentsModalCtrl", ["$scope", "$modalInstance", "commentResourceUrl", "commentType", function($scope, $modalInstance, commentResourceUrl, commentType) {
  $scope.commentResourceUrl = commentResourceUrl;
  $scope.commentType = commentType;
  return $scope.close = function() {
    return $modalInstance.dismiss();
  };
}]);
