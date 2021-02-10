angular.module("doubtfire.api.models.portfolio-submission", ["ngFileUpload"]).factory("PortfolioSubmission", ["DoubtfireConstants", "$window", "FileUploader", "currentUser", "alertService", "resourcePlus", function(DoubtfireConstants, $window, FileUploader, currentUser, alertService, resourcePlus) {
  var PortfolioSubmission;
  PortfolioSubmission = function(project) {
    var resource;
    resource = resourcePlus("/submission/project/:id/portfolio", {
      id: "@id"
    });
    resource.portfolioUrl = DoubtfireConstants.API_URL + "/submission/project/" + project.project_id + "/portfolio?auth_token=" + currentUser.authenticationToken;
    resource.portfolioUrlAsAttachment = resource.portfolioUrl + "&as_attachment=true";
    resource.learningSummaryReportFileUploadData = {
      type: {
        file0: {
          name: "Learning Summary Report",
          type: "document"
        }
      },
      payload: {
        name: "LearningSummaryReport",
        kind: "document"
      }
    };
    resource.otherFileFileUploadData = function(type) {
      return {
        type: {
          file0: {
            name: "Other",
            type: type
          }
        },
        payload: {
          name: "Other",
          kind: type
        }
      };
    };
    resource.deleteFile = function(project, file) {
      var data, successFn;
      data = angular.extend(file, {
        id: project.project_id
      });
      successFn = function() {
        return project.portfolio_files = _.without(project.portfolio_files, file);
      };
      return resource["delete"](data, successFn);
    };
    return resource;
  };
  PortfolioSubmission.getPortfolioUrl = function(project, asAttachment) {
    var url;
    if (asAttachment == null) {
      asAttachment = false;
    }
    url = DoubtfireConstants.API_URL + "/submission/project/" + project.project_id + "/portfolio?auth_token=" + currentUser.authenticationToken;
    if (asAttachment) {
      url += "&as_attachment=true";
    }
    return url;
  };
  return PortfolioSubmission;
}]);
