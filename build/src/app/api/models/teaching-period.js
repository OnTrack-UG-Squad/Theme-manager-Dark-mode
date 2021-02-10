angular.module("doubtfire.api.models.teaching-period", []).factory("TeachingPeriod", ["resourcePlus", "currentUser", "alertService", function(resourcePlus, currentUser, alertService) {
  var TeachingPeriod, data, injectFunctionalityInTeachingPeriod, resource, rollover;
  resource = resourcePlus("/teaching_periods/:id", {
    id: "@id"
  });
  rollover = resourcePlus("/teaching_periods/:existing_teaching_period_id/rollover", {
    existing_teaching_period_id: "@existing_teaching_period_id"
  });
  data = {};
  data.loadedPeriods = [];
  injectFunctionalityInTeachingPeriod = function(tp) {
    if (tp.name == null) {
      tp.name = function() {
        return tp.period + " " + tp.year;
      };
    }
    tp.active = function() {
      return moment(tp.active_until).diff(moment()) > 0;
    };
    return tp;
  };
  TeachingPeriod = {
    rollover: rollover,
    getTeachingPeriod: function(id) {
      return _.find(data.loadedPeriods, function(tp) {
        return tp.id === id;
      });
    },
    query: function(onSuccess, onFailure) {
      if (data.loadedPeriods.length === 0) {
        resource.query(function(success) {
          data.loadedPeriods = _.map(success, function(tp) {
            return injectFunctionalityInTeachingPeriod(tp);
          });
          if ((onSuccess != null) && _.isFunction(onSuccess)) {
            return onSuccess(data);
          }
        }, function(failure) {
          var ref;
          alertService.add("danger", "Failed to load teaching periods. " + (failure != null ? (ref = failure.data) != null ? ref.error : void 0 : void 0), 6000);
          if ((onFailure != null) && _.isFunction(onFailure)) {
            return onFailure(failure);
          }
        });
      }
      if ((onSuccess != null) && _.isFunction(onSuccess)) {
        onSuccess(data);
      }
      return data;
    },
    create: function(arg) {
      var teachingperiod;
      teachingperiod = arg.teaching_period;
      return resource.create({
        teaching_period: teachingperiod
      });
    },
    update: function(arg) {
      var id, teachingperiod;
      id = arg.id, teachingperiod = arg.teaching_period;
      return resource.update({
        id: id,
        teaching_period: teachingperiod
      }, function(updatedTeachingPeriod) {
        var i, indexOfTeachingPeriods, len, ref, results;
        indexOfTeachingPeriods = 0;
        ref = data.loadedPeriods;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          teachingperiod = ref[i];
          if (teachingperiod.id === updatedTeachingPeriod.id) {
            data.loadedPeriods[indexOfTeachingPeriods] = injectFunctionalityInTeachingPeriod(updatedTeachingPeriod);
          }
          results.push(indexOfTeachingPeriods++);
        }
        return results;
      });
    },
    get: function(id, onSuccess, onFailure) {
      return resource.get({
        id: id
      }, function(success) {
        var result;
        success = injectFunctionalityInTeachingPeriod(success);
        result = _.find(data.loadedPeriods, function(tp) {
          return tp.id === id;
        });
        if (result != null) {
          _.extend(result, success);
        } else {
          data.loadedPeriods << success;
          result = success;
        }
        return onSuccess(result);
      }, function(error) {
        return onFailure(error);
      });
    }
  };
  return TeachingPeriod;
}]);
