angular.module('doubtfire.common.content-editable', []).directive('contenteditable', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      var read;
      read = function() {
        ngModel.$setViewValue(element[0].innerText);
      };
      ngModel.$render = function() {
        element.html(ngModel.$viewValue || '');
      };
      element.bind('blur keyup change', function() {
        scope.$apply(read);
      });
    }
  };
});
