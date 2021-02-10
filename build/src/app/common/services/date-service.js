angular.module("doubtfire.common.services.dates", []).factory("dateService", function() {
  var dateService, monthNames;
  dateService = {};
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  dateService.showDate = function(dateValue) {
    var date;
    if ((dateValue != null)) {
      date = new Date(dateValue);
      return monthNames[date.getMonth()] + " " + (date.getFullYear());
    } else {
      return "-";
    }
  };
  dateService.showFullDate = function(dateValue) {
    var date;
    if ((dateValue != null)) {
      date = new Date(dateValue);
      return (date.getDate()) + " " + monthNames[date.getMonth()] + " " + (date.getFullYear());
    } else {
      return "-";
    }
  };
  return dateService;
});
