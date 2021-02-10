angular.module("templates-app", ["admin/modals/create-break-modal/create-break-modal.tpl.html", "admin/modals/create-unit-modal/create-unit-modal.tpl.html", "admin/modals/rollover-teaching-period-modal/rollover-teaching-period-modal.tpl.html", "admin/modals/teaching-period-settings-modal/teaching-period-settings-modal.tpl.html", "admin/modals/user-notification-settings-modal/user-notification-settings-modal.tpl.html", "admin/modals/user-settings-modal/user-settings-modal.tpl.html", "admin/states/teaching-periods/teaching-period-edit/directives/teaching-period-breaks/teaching-period-breaks.tpl.html", "admin/states/teaching-periods/teaching-period-edit/directives/teaching-period-details-editor/teaching-period-details-editor.tpl.html", "admin/states/teaching-periods/teaching-period-edit/directives/teaching-period-units/teaching-period-units.tpl.html", "admin/states/teaching-periods/teaching-period-edit/edit-teaching-period.tpl.html", "admin/states/teaching-periods/teaching-period-list/teaching-period-list.tpl.html", "admin/states/units/units.tpl.html", "admin/states/users/users.tpl.html", "common/alert-list/alert-list.tpl.html", "common/file-uploader/file-uploader.tpl.html", "common/grade-icon/grade-icon.tpl.html", "common/header/header.tpl.html", "common/header/unit-dropdown/unit-dropdown.tpl.html", "common/modals/about-doubtfire-modal/about-doubtfire-modal-content.tpl.html", "common/modals/comments-modal/comments-modal.tpl.html", "common/modals/confirmation-modal/confirmation-modal.tpl.html", "common/modals/csv-result-modal/csv-result-modal.tpl.html", "common/modals/csv-result-modal/csv-upload-modal.tpl.html", "common/modals/progress-modal/progress-modal.tpl.html", "errors/states/not-found/not-found.tpl.html", "errors/states/timeout/timeout.tpl.html", "errors/states/unauthorised/unauthorised.tpl.html", "groups/group-member-contribution-assigner/group-member-contribution-assigner.tpl.html", "groups/group-member-list/group-member-list.tpl.html", "groups/group-selector/group-selector.tpl.html", "groups/group-set-manager/group-set-manager.tpl.html", "groups/group-set-selector/group-set-selector.tpl.html", "groups/student-group-manager/student-group-manager.tpl.html", "groups/tutor-group-manager/tutor-group-manager.tpl.html", "home/states/home/home.tpl.html", "home/states/new-user-wizard/new-user-wizard.tpl.html", "projects/project-outcome-alignment/project-outcome-alignment.tpl.html", "projects/project-progress-dashboard/project-progress-dashboard.tpl.html", "projects/states/all/directives/all-projects-list/all-projects-list.tpl.html", "projects/states/dashboard/dashboard.tpl.html", "projects/states/dashboard/directives/progress-dashboard/progress-dashboard.tpl.html", "projects/states/dashboard/directives/student-task-list/student-task-list.tpl.html", "projects/states/dashboard/directives/task-dashboard/directives/task-assessment-card/task-assessment-card.tpl.html", "projects/states/dashboard/directives/task-dashboard/directives/task-description-card/task-description-card.tpl.html", "projects/states/dashboard/directives/task-dashboard/directives/task-due-card/task-due-card.tpl.html", "projects/states/dashboard/directives/task-dashboard/directives/task-outcomes-card/task-outcomes-card.tpl.html", "projects/states/dashboard/directives/task-dashboard/directives/task-status-card/task-status-card.tpl.html", "projects/states/dashboard/directives/task-dashboard/directives/task-submission-card/task-submission-card.tpl.html", "projects/states/dashboard/directives/task-dashboard/task-dashboard.tpl.html", "projects/states/groups/groups.tpl.html", "projects/states/outcomes/outcomes.tpl.html", "projects/states/portfolio/directives/portfolio-add-extra-files-step/portfolio-add-extra-files-step.tpl.html", "projects/states/portfolio/directives/portfolio-grade-select-step/portfolio-grade-select-step.tpl.html", "projects/states/portfolio/directives/portfolio-learning-summary-report-step/portfolio-learning-summary-report-step.tpl.html", "projects/states/portfolio/directives/portfolio-review-step/portfolio-review-step.tpl.html", "projects/states/portfolio/directives/portfolio-tasks-step/portfolio-tasks-step.tpl.html", "projects/states/portfolio/directives/portfolio-welcome-step/portfolio-welcome-step.tpl.html", "projects/states/portfolio/portfolio.tpl.html", "projects/states/tutorials/tutorials.tpl.html", "sessions/states/sign-in/sign-in.tpl.html", "sessions/states/sign-out/sign-out.tpl.html", "tasks/modals/grade-task-modal/grade-task-modal.tpl.html", "tasks/modals/plagiarism-report-modal/plagiarism-report-modal.tpl.html", "tasks/modals/upload-submission-modal/upload-submission-modal.tpl.html", "tasks/project-tasks-list/project-tasks-list.tpl.html", "tasks/task-definition-editor/task-definition-editor.tpl.html", "tasks/task-definition-selector/task-definition-selector.tpl.html", "tasks/task-feedback-assessor/task-feedback-assessor.tpl.html", "tasks/task-ilo-alignment/modals/task-ilo-alignment-modal/task-ilo-alignment-modal.tpl.html", "tasks/task-ilo-alignment/task-ilo-alignment-editor/task-ilo-alignment-editor.tpl.html", "tasks/task-ilo-alignment/task-ilo-alignment-rater/task-ilo-alignment-rater.tpl.html", "tasks/task-ilo-alignment/task-ilo-alignment-viewer/task-ilo-alignment-viewer.tpl.html", "tasks/task-plagiarism-file-viewer/task-plagiarism-file-viewer.tpl.html", "tasks/task-plagiarism-report-viewer/task-plagiarism-report-viewer.tpl.html", "tasks/task-sheet-viewer/task-sheet-viewer.tpl.html", "tasks/task-status-selector/task-status-selector.tpl.html", "tasks/task-submission-viewer/task-submission-viewer.tpl.html", "tasks/task-submission-wizard/task-submission-wizard.tpl.html", "units/modals/unit-ilo-edit-modal/unit-ilo-edit-modal.tpl.html", "units/modals/unit-student-enrolment-modal/unit-student-enrolment-modal.tpl.html", "units/states/all/directives/all-units-list/all-units-list.tpl.html", "units/states/analytics/analytics.tpl.html", "units/states/analytics/directives/task-completion-stats/task-completion-stats.tpl.html", "units/states/analytics/directives/task-status-stats/task-status-stats.tpl.html", "units/states/analytics/directives/unit-achievement-stats/unit-achievement-stats.tpl.html", "units/states/analytics/directives/unit-stats-download/unit-stats-download.tpl.html", "units/states/analytics/directives/unit-target-grade-stats/unit-target-grade-stats.tpl.html", "units/states/edit/directives/unit-details-editor/unit-details-editor.tpl.html", "units/states/edit/directives/unit-group-set-editor/unit-group-set-editor.tpl.html", "units/states/edit/directives/unit-ilo-editor/unit-ilo-editor.tpl.html", "units/states/edit/directives/unit-staff-editor/unit-staff-editor.tpl.html", "units/states/edit/directives/unit-tasks-editor/unit-tasks-editor.tpl.html", "units/states/edit/edit.tpl.html", "units/states/groups/groups.tpl.html", "units/states/index/index.tpl.html", "units/states/plagiarism/directives/unit-student-plagiarism-list/unit-student-plagiarism-list.tpl.html", "units/states/plagiarism/plagiarism.tpl.html", "units/states/portfolios/portfolios.tpl.html", "units/states/rollover/directives/unit-dates-selector/unit-dates-selector.tpl.html", "units/states/rollover/rollover.tpl.html", "units/states/students-list/students-list.tpl.html", "units/states/tasks/inbox/inbox.tpl.html", "units/states/tasks/offline/offline.tpl.html", "units/states/tasks/viewer/directives/task-details-view/task-details-view.tpl.html", "units/states/tasks/viewer/directives/task-sheet-view/task-sheet-view.tpl.html", "units/states/tasks/viewer/directives/unit-task-list/unit-task-list.tpl.html", "units/states/tasks/viewer/viewer.tpl.html", "visualisations/visualisation.tpl.html"]);

angular.module("admin/modals/create-break-modal/create-break-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/modals/create-break-modal/create-break-modal.tpl.html",
    "<div class=\"create-break-modal\">\n" +
    "  <form class=\"form-horizontal\" ng-submit=\"addBreak()\" role=\"form\">\n" +
    "    <div class=\"modal-header\">\n" +
    "      <h3>Add Break</h3>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <label tooltip=\"Date for the start of break in the teaching period.\" class=\"col-sm-3 control-label\" for=\"startdate\">Start Date</label>\n" +
    "        <div class=\"col-sm-9\">\n" +
    "          <div class=\"col-sm-4 input-group\">\n" +
    "            <input datepicker-popup=\"yyyy-MM-dd\" is-open=\"calOptions.startOpened\" type=\"text\" class=\"form-control\" id=\"startdate\" ng-model=\"break.start_date\" ng-required=\"true\" placeholder=\"yyyy-mm-dd\" close-text=\"Close\" />\n" +
    "            <span class=\"input-group-btn\">\n" +
    "              <button class=\"btn btn-default\" type=\"button\" ng-click=\"open($event,'start')\">\n" +
    "                <i class=\"fa fa-calendar\"></i>\n" +
    "              </button>\n" +
    "            </span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" required>\n" +
    "        <label class=\"col-sm-3 control-label\">Number of Weeks</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <input type=\"text\" class=\"form-control\" ng-model=\"break.number_of_weeks\"/>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer text-right\">\n" +
    "      <input type=\"submit\" class=\"btn btn-primary\" value=\"Add Break\"/>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/modals/create-unit-modal/create-unit-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/modals/create-unit-modal/create-unit-modal.tpl.html",
    "<div class=\"create-unit-modal\">\n" +
    "  <form class=\"form-horizontal\" ng-submit=\"saveUnit()\" role=\"form\">\n" +
    "    <div class=\"modal-header\">\n" +
    "      <h3>Create Unit</h3>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "      <div class=\"form-group\" required>\n" +
    "        <label class=\"col-sm-3 control-label\">Name</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <input type=\"text\" class=\"form-control\" ng-model=\"unit.name\" placeholder=\"Introduction to {{externalName.value}}\"/>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" required>\n" +
    "        <label class=\"col-sm-3 control-label\">Code</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <input type=\"text\" class=\"form-control\" ng-model=\"unit.code\" placeholder=\"COS123456\"/>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer text-right\">\n" +
    "      <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" ng-disabled=\"unit.name == null || unit.code == null\"/>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/modals/rollover-teaching-period-modal/rollover-teaching-period-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/modals/rollover-teaching-period-modal/rollover-teaching-period-modal.tpl.html",
    "<div>\n" +
    "  <form class=\"form-horizontal\" ng-submit=\"rollover()\" role=\"form\">\n" +
    "    <div class=\"modal-header\">\n" +
    "      <h3>Rollover Teaching Period</h3>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Rollover From: </label>\n" +
    "      <div class=\"col-sm-7\">\n" +
    "        <input type=\"input\" class=\"form-control\" placeholder=\"Name\" value=\"{{teachingperiod.name()}}\" ng-disabled=\"true\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\" for=\"teachingperiod\">Rollover To:</label>\n" +
    "      <div class=\"col-sm-7\">\n" +
    "        <select class=\"form-control\" ng-model=\"rolloverTo\" ng-required=\"true\">\n" +
    "          <option ng-value=\"tp.id\" value=\"{{tp.id}}\" ng-repeat=\"tp in teachingPeriods.loadedPeriods\">{{tp.period}}-{{tp.year}} </option>\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer text-right\">\n" +
    "      <input type=\"submit\" class=\"btn btn-primary\" value=\"Rollover\" />\n" +
    "    </div>\n" +
    "  </form>>\n" +
    "</div>");
}]);

angular.module("admin/modals/teaching-period-settings-modal/teaching-period-settings-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/modals/teaching-period-settings-modal/teaching-period-settings-modal.tpl.html",
    "<div>\n" +
    "    <form class=\"form-horizontal\" ng-submit=\"saveTeachingPeriod()\" role=\"form\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <h3>{{isNew ? \"Create Teaching Period\" : \"Edit Teaching Period\"}}</h3>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "        <label class=\"col-sm-3 control-label\">Name</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <input type=\"input\" class=\"form-control\" placeholder=\"Name\" ng-model=\"teachingperiod.period\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "        <label class=\"col-sm-3 control-label\">Year</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <input type=\"input\" class=\"form-control\" placeholder=\"Year\" ng-model=\"teachingperiod.year\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group\">\n" +
    "        <label tooltip=\"Date for the start of teaching in the unit.\" class=\"col-sm-3 control-label\" for=\"startdate\">Start Date</label>\n" +
    "        <div class=\"col-sm-9\">\n" +
    "          <div class=\"col-sm-4 input-group\">\n" +
    "            <input datepicker-popup=\"yyyy-MM-dd\" is-open=\"calOptions.startOpened\" type=\"text\" class=\"form-control\" id=\"startdate\" ng-model=\"teachingperiod.start_date\" ng-required=\"true\" placeholder=\"yyyy-MM-dd\" close-text=\"Close\" />\n" +
    "            <span class=\"input-group-btn\">\n" +
    "              <button class=\"btn btn-default\" type=\"button\" ng-click=\"open($event,'start')\">\n" +
    "                <i class=\"fa fa-calendar\"></i>\n" +
    "              </button>\n" +
    "            </span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div><!--/start-date-->\n" +
    "\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-3 control-label\" for=\"enddate\">End Date</label>\n" +
    "        <div class=\"col-sm-9\">\n" +
    "          <div class=\"col-sm-4 input-group\">\n" +
    "            <input datepicker-popup=\"{{format}}\" id=\"enddate\" type=\"text\" class=\"form-control\" ng-model=\"teachingperiod.end_date\" is-open=\"calOptions.endOpened\" ng-required=\"true\" close-text=\"Close\" />\n" +
    "            <span class=\"input-group-btn\">\n" +
    "              <button class=\"btn btn-default\" type=\"button\" ng-click=\"open($event,'end')\">\n" +
    "                <i class=\"fa fa-calendar\"></i>\n" +
    "              </button>\n" +
    "            </span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div><!--/end-date-->\n" +
    "\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-3 control-label\" for=\"activeuntil\">Active Until</label>\n" +
    "        <div class=\"col-sm-9\">\n" +
    "          <div class=\"col-sm-4 input-group\">\n" +
    "            <input datepicker-popup=\"{{format}}\" id=\"activeuntil\" type=\"text\" class=\"form-control\" ng-model=\"teachingperiod.active_until\" is-open=\"calOptions.activeUntilOpened\" ng-required=\"true\" close-text=\"Close\" />\n" +
    "            <span class=\"input-group-btn\">\n" +
    "              <button class=\"btn btn-default\" type=\"button\" ng-click=\"open($event,'active')\">\n" +
    "                <i class=\"fa fa-calendar\"></i>\n" +
    "              </button>\n" +
    "            </span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div><!--/active-until-date-->\n" +
    "\n" +
    "      <div class=\"modal-footer text-right\">\n" +
    "        <input type=\"submit\" class=\"btn btn-primary\" value=\"{{isNew ? 'Add' : 'Save'}}\" />\n" +
    "      </div>\n" +
    "    </form>>\n" +
    "</div>");
}]);

angular.module("admin/modals/user-notification-settings-modal/user-notification-settings-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/modals/user-notification-settings-modal/user-notification-settings-modal.tpl.html",
    "<div>\n" +
    "  <form class=\"form-horizontal\" ng-submit=\"saveNotifications()\" role=\"form\">\n" +
    "    <div class=\"modal-header\">\n" +
    "      <h3>Notification Settings</h3>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-6 control-label\">Task Notifications</label>\n" +
    "        <div class=\"btn-group\">\n" +
    "          <label class=\"btn btn-default\" ng-model=\"user.receive_task_notifications\" btn-radio=\"true\">\n" +
    "            <i class=\"glyphicon glyphicon-ok\"></i>\n" +
    "          </label>\n" +
    "          <label class=\"btn btn-default\" ng-model=\"user.receive_task_notifications\" btn-radio=\"false\">\n" +
    "            <i class=\"glyphicon glyphicon-remove\"></i>\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-6 control-label\">Feedback Notifications</label>\n" +
    "        <div class=\"btn-group\">\n" +
    "          <label class=\"btn btn-default\" ng-model=\"user.receive_feedback_notifications\" btn-radio=\"true\">\n" +
    "            <i class=\"glyphicon glyphicon-ok\"></i>\n" +
    "          </label>\n" +
    "          <label class=\"btn btn-default\" ng-model=\"user.receive_feedback_notifications\" btn-radio=\"false\">\n" +
    "            <i class=\"glyphicon glyphicon-remove\"></i>\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-6 control-label\">Portfolio Notifications</label>\n" +
    "        <div class=\"btn-group\">\n" +
    "          <label class=\"btn btn-default\" ng-model=\"user.receive_portfolio_notifications\" btn-radio=\"true\">\n" +
    "            <i class=\"glyphicon glyphicon-ok\"></i>\n" +
    "          </label>\n" +
    "          <label class=\"btn btn-default\" ng-model=\"user.receive_portfolio_notifications\" btn-radio=\"false\">\n" +
    "            <i class=\"glyphicon glyphicon-remove\"></i>\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer text-right\">\n" +
    "      <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" />\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/modals/user-settings-modal/user-settings-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/modals/user-settings-modal/user-settings-modal.tpl.html",
    "<div>\n" +
    "  <form class=\"form-horizontal\" ng-submit=\"saveUser()\" role=\"form\">\n" +
    "    <div class=\"modal-header\">\n" +
    "      <h3>{{isNew ? \"Create User\" : \"Edit User\"}}</h3>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "      <div class=\"form-group\" ng-if=\"!isNew\">\n" +
    "        <label class=\"col-sm-3 control-label\">Username</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <p class=\"form-control-static\">{{user.username}}</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-if=\"isNew\">\n" +
    "        <label class=\"col-sm-3 control-label\" ng-required=\"isNew\">Username</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <input type=\"input\" class=\"form-control\" placeholder=\"1744070\" ng-model=\"user.username\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "        <label class=\"col-sm-3 control-label\">First Name</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <input type=\"input\" class=\"form-control\" placeholder=\"Name\" ng-model=\"user.first_name\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "        <label class=\"col-sm-3 control-label\">Last Name</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <input type=\"input\" class=\"form-control\" placeholder=\"Surname\" ng-model=\"user.last_name\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "        <label class=\"col-sm-3 control-label\">Preferred Name</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <input type=\"input\" class=\"form-control\" placeholder=\"Name\" ng-model=\"user.nickname\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "        <label class=\"col-sm-3 control-label\">Email</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <input type=\"email\" class=\"form-control\" placeholder=\"name@university.edu\" ng-model=\"user.email\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <hr>\n" +
    "      <div class=\"form-group\" ng-show=\"user.system_role == 'Student'\">\n" +
    "        <label class=\"col-sm-3 control-label\">Student ID</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <input type=\"input\" class=\"form-control\" placeholder=\"1744070\" ng-model=\"user.student_id\">\n" +
    "          <p class=\"help-block\">\n" +
    "            Please ensure your institution's student identification number matches this value\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-3 control-label\">Avatar</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <user-icon [size]=\"50\" [user]=\"user\" style=\"max-width: 50px; max-height: 50px; font-size: 18px;\"></user-icon>\n" +
    "          <a href=\"http://en.gravatar.com/support/activating-your-account/\" target=\"_blank\" class=\"btn btn-sm btn-default pull-right\"> Change Avatar </a>\n" +
    "          <p class=\"help-block\">\n" +
    "            Sign up to <a href=\"http://en.gravatar.com/support/activating-your-account/\" target=\"_blank\">Gravatar</a> and associate your email above to your account to give yourself an avatar\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" if-role=\"Admin Convenor\" ng-required=\"isNew\">\n" +
    "        <label class=\"col-sm-3 control-label\">System Role</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <label class=\"radio-inline\" if-role=\"Admin\">\n" +
    "            <input type=\"radio\" ng-disabled=\"user.id == currentUser.id\" name=\"sysRole\" if-role=\"Admin\" ng-model=\"user.system_role\" value=\"Admin\">Administrator\n" +
    "          </label>\n" +
    "          <label class=\"radio-inline\">\n" +
    "            <input type=\"radio\" ng-disabled=\"user.id == currentUser.id\" name=\"sysRole\" if-role=\"Admin Convenor\" ng-model=\"user.system_role\" value=\"Convenor\">Convenor\n" +
    "          </label>\n" +
    "          <label class=\"radio-inline\">\n" +
    "            <input type=\"radio\" ng-disabled=\"user.id == currentUser.id\" name=\"sysRole\" if-role=\"Admin Convenor\" ng-model=\"user.system_role\" value=\"Tutor\">Tutor\n" +
    "          </label>\n" +
    "          <label class=\"radio-inline\">\n" +
    "            <input type=\"radio\" ng-disabled=\"user.id == currentUser.id\" name=\"sysRole\" if-role=\"Admin Convenor\" ng-model=\"user.system_role\" value=\"Student\">Student\n" +
    "          </label>\n" +
    "          <p ng-show=\"user.id == currentUser.id\" class=\"help-block text-center\">You cannot modify your own permissions</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div ng-if=\"!isNew && user.id == currentUser.id\">\n" +
    "        <hr>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-3 control-label\">Allow Analytics</label>\n" +
    "          <div class=\"col-sm-7\">\n" +
    "            <div class=\"btn-group\">\n" +
    "              <label class=\"btn btn-default\" ng-model=\"user.opt_in_to_research\" btn-radio=\"true\">\n" +
    "                <i class=\"fa fa-check\"></i>\n" +
    "              </label>\n" +
    "              <label class=\"btn btn-default\" ng-model=\"user.opt_in_to_research\" btn-radio=\"false\">\n" +
    "                <i class=\"fa fa-close\"></i>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "            <p class=\"help-block\">Allow us to anonymously gather your usage to improve {{externalName.value}}</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer text-right\">\n" +
    "      <input type=\"submit\" class=\"btn btn-primary\" value=\"{{isNew ? 'Add' : 'Save'}}\" />\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/states/teaching-periods/teaching-period-edit/directives/teaching-period-breaks/teaching-period-breaks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/states/teaching-periods/teaching-period-edit/directives/teaching-period-breaks/teaching-period-breaks.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading clearfix\">\n" +
    "      <div class=\"pull-left\">\n" +
    "        <h4 class=\"panel-title\">Breaks</h4>\n" +
    "        Breaks in {{teachingPeriod.name()}}\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <div class=\"callout callout-info\" ng-hide=\"teachingPeriod.breaks.length > 0\">No breaks have been registered with {{teachingPeriod.name()}} yet</div>\n" +
    "      <table ng-show=\"teachingPeriod.breaks.length > 0\" class=\"table table-hover table-pointer\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th><a ng-click=\"sortOrder='start_date'; reverse=!reverse\">Start Date <i ng-show=\"sortOrder=='start_date'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "            <th><a ng-click=\"sortOrder='duration'; reverse=!reverse\">Duration <i ng-show=\"sortOrder=='duration'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr ng-repeat=\"break in teachingPeriod.breaks | orderBy:sortOrder:reverse\">\n" +
    "            <td>{{break.start_date | date: 'EEE d MMM' : '+0000'}}</td>\n" +
    "            <td>{{break.number_of_weeks}} week</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div class=\"panel-footer clearfix\">\n" +
    "      <button class=\"btn btn-success pull-right\" ng-click=\"addBreak(teachingPeriod)\">\n" +
    "        <i class=\"fa fa-university\"></i>\n" +
    "        <i class=\"fa fa-plus\"></i>\n" +
    "        Add Break\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/states/teaching-periods/teaching-period-edit/directives/teaching-period-details-editor/teaching-period-details-editor.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/states/teaching-periods/teaching-period-edit/directives/teaching-period-details-editor/teaching-period-details-editor.tpl.html",
    "<div class=\"teaching-period-details-editor\">\n" +
    "  <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading\" ng-if=\"teachingPeriod.id == -1\">\n" +
    "      <h3 class=\"panel-title\">Create Teaching Period</h3>\n" +
    "      Create a new teaching period with all overview teaching period details here.\n" +
    "    </div>\n" +
    "    <div class=\"panel-heading\" ng-if=\"teachingPeriod.id != -1\">\n" +
    "      <h3 class=\"panel-title\">Update Teaching Period</h3>\n" +
    "      Update overview details of the teaching period below.\n" +
    "    </div>\n" +
    "    <form class=\"form-horizontal\" role=\"form\" name=\"teachingPeriodForm\" ng-submit=\"saveTeachingPeriod()\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"name\">Name</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <input id=\"teachingPeriod\" type=\"text\" class=\"form-control\" ng-model=\"teachingPeriod.period\">\n" +
    "          </div>\n" +
    "        </div><!--/name-date-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"name\">Year</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <input id=\"teachingYear\" type=\"text\" class=\"form-control\" ng-model=\"teachingPeriod.year\">\n" +
    "          </div>\n" +
    "        </div><!--/year-date-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label tooltip=\"Date for the start of teaching in the unit.\" class=\"col-sm-2 control-label\" for=\"startdate\">Start Date</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"col-sm-4 input-group\">\n" +
    "              <input datepicker-popup=\"yyyy-MM-dd\" is-open=\"calOptions.startOpened\" type=\"text\" class=\"form-control\" id=\"startdate\" ng-model=\"teachingPeriod.start_date\" ng-required=\"true\" placeholder=\"yyyy-MM-dd\" close-text=\"Close\" />\n" +
    "              <span class=\"input-group-btn\">\n" +
    "                <button class=\"btn btn-default\" type=\"button\" ng-click=\"open($event,'start')\">\n" +
    "                  <i class=\"fa fa-calendar\"></i>\n" +
    "                </button>\n" +
    "              </span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div><!--/start-date-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"enddate\">End Date</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"col-sm-4 input-group\">\n" +
    "              <input datepicker-popup=\"{{format}}\" id=\"enddate\" type=\"text\" class=\"form-control\" ng-model=\"teachingPeriod.end_date\" is-open=\"calOptions.endOpened\" ng-required=\"true\" close-text=\"Close\" />\n" +
    "              <span class=\"input-group-btn\">\n" +
    "                <button class=\"btn btn-default\" type=\"button\" ng-click=\"open($event,'end')\">\n" +
    "                  <i class=\"fa fa-calendar\"></i>\n" +
    "                </button>\n" +
    "              </span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div><!--/end-date-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"activeuntil\">Active Until</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"col-sm-4 input-group\">\n" +
    "              <input datepicker-popup=\"{{format}}\" id=\"activeuntil\" type=\"text\" class=\"form-control\" ng-model=\"teachingPeriod.active_until\" is-open=\"calOptions.activeUntilOpened\" ng-required=\"true\" close-text=\"Close\" />\n" +
    "              <span class=\"input-group-btn\">\n" +
    "                <button class=\"btn btn-default\" type=\"button\" ng-click=\"open($event,'active')\">\n" +
    "                  <i class=\"fa fa-calendar\"></i>\n" +
    "                </button>\n" +
    "              </span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div><!--/active-until-date-->\n" +
    "      </div>\n" +
    "      <div class=\"panel-footer text-right\">\n" +
    "        <input type=\"submit\" value=\"{{ teachingPeriod.id == -1 ? 'Create' : 'Update' }}\" class=\"btn btn-success\" ng-disabled=\"teachingPeriodForm.$pristine\" />\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/states/teaching-periods/teaching-period-edit/directives/teaching-period-units/teaching-period-units.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/states/teaching-periods/teaching-period-edit/directives/teaching-period-units/teaching-period-units.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading clearfix\">\n" +
    "      <div class=\"pull-left\">\n" +
    "        <h4 class=\"panel-title\">Units</h4>\n" +
    "        Units registered with {{teachingPeriod.name()}}\n" +
    "      </div>\n" +
    "      <form role=\"search\" class=\"pull-right form-horizontal\">\n" +
    "        <input id=\"searchbar\" class=\"input-md form-control\" placeholder=\"Search for units...\" type=\"search\" ng-model=\"search\" autocomplete=\"off\" typeahead=\"unit.name for unit in teachingPeriod.units | filter:$viewValue | limitTo:8\" />\n" +
    "      </form>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <div class=\"callout callout-info\" ng-hide=\"teachingPeriod.units.length > 0\">No units have been registered with {{teachingPeriod.name()}} yet</div>\n" +
    "      <table ng-show=\"teachingPeriod.units.length > 0\" class=\"table table-hover table-pointer\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th><a ng-click=\"sortOrder='code'; reverse=!reverse\">Unit Code <i ng-show=\"sortOrder=='code'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "            <th><a ng-click=\"sortOrder='name'; reverse=!reverse\">Name <i ng-show=\"sortOrder=='name'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "            <th><a ng-click=\"sortOrder='teachingPeriodName'; reverse=!reverse\">Teaching Period <i ng-show=\"sortOrder=='teachingPeriodName'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "            <th><a ng-click=\"sortOrder='active'; reverse=!reverse\">Active <i ng-show=\"sortOrder=='active'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr ng-repeat=\"unit in filteredUnits = (teachingPeriod.units | filter:search) | orderBy:sortOrder:reverse | startFrom:(currentPage - 1) * pageSize | limitTo: pageSize\" ui-sref=\"units/admin({unitId: unit.id})\" >\n" +
    "            <td>\n" +
    "              <label class=\"label label-info\">\n" +
    "                {{unit.code}}\n" +
    "              </label>\n" +
    "            </td>\n" +
    "            <td>{{unit.name}}</td>\n" +
    "            <td>{{teachingPeriod.name()}}</td>\n" +
    "            <td>\n" +
    "              <i ng-if=\"teachingPeriod.active && unit.active\" class=\"fa fa-check\"></i>\n" +
    "              <i ng-if=\"!teachingPeriod.active || !unit.active\" class=\"fa fa-times\"></i>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div class=\"panel-footer clearfix\">\n" +
    "      <pagination ng-show=\"filteredUnits.length > pageSize\" total-items=\"filteredUnits.length\" ng-model=\"currentPage\" items-per-page=\"pageSize\" max-size=\"maxSize\" class=\"pagination-sm pull-left\" boundary-links=\"true\" rotate=\"false\"></pagination>\n" +
    "      <button class=\"btn btn-success pull-right\" ng-click=\"rolloverTeachingPeriodModal(teachingPeriod)\">\n" +
    "        <i class=\"fa fa-university\"></i>\n" +
    "        <i class=\"fa fa-plus\"></i>\n" +
    "        Rollover Teaching Period\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/states/teaching-periods/teaching-period-edit/edit-teaching-period.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/states/teaching-periods/teaching-period-edit/edit-teaching-period.tpl.html",
    "<div class=\"container\">\n" +
    "  <tabset class=\"tabset-icon\">\n" +
    "    <tab ng-repeat=\"tab in tabs | toArray | orderBy: 'seq'\" active=\"tab.active\" ng-click=\"setActiveTab(tab)\">\n" +
    "      <tab-heading>{{tab.title}}</tab-heading>\n" +
    "    </tab>\n" +
    "  </tabset><!--/tabs-->\n" +
    "  <teaching-period-details-editor teachingperiod=\"teachingPeriod\" ng-if=\"activeTab === tabs.editorTab\"></teaching-period-details-editor>\n" +
    "  <teaching-period-breaks teachingperiod=\"teachingPeriod\" ng-if=\"activeTab === tabs.breaksTab\"></teaching-period-breaks>\n" +
    "  <teaching-period-units teachingperiod=\"teachingPeriod\" ng-if=\"activeTab === tabs.unitsTab\"></teaching-period-units>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/states/teaching-periods/teaching-period-list/teaching-period-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/states/teaching-periods/teaching-period-list/teaching-period-list.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading clearfix\">\n" +
    "      <div class=\"pull-left\">\n" +
    "        <h4 class=\"panel-title\">Teaching Periods</h4>\n" +
    "        Modify Teaching Periods registered with {{externalName.value}}\n" +
    "      </div>\n" +
    "      <form role=\"search\" class=\"pull-right form-horizontal\">\n" +
    "        <input id=\"searchbar\" class=\"input-md form-control\" placeholder=\"Search for teaching periods...\" type=\"search\" ng-model=\"search.$\" typeahead=\"teachingperiod.period for teachingperiod in teachingPeriods.loadedPeriods | filter:$viewValue | limitTo:8\" />\n" +
    "      </form>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <div class=\"callout callout-info\" ng-hide=\"teachingPeriods.loadedPeriods.length > 0\">No teaching periods have been registered with {{externalName.value}} yet</div>\n" +
    "        <table ng-show=\"teachingPeriods.loadedPeriods.length > 0\" class=\"table table-hover table-pointer\">\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <th><a ng-click=\"sortOrder='teachingperiod.name()'; reverse=!reverse\">Name <i ng-show=\"sortOrder=='period'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='start_date'; reverse=!reverse\">Start Date <i ng-show=\"sortOrder=='start_date'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='end_date'; reverse=!reverse\">End Date <i ng-show=\"sortOrder=='end_date'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='active_until'; reverse=!reverse\">Active Until <i ng-show=\"sortOrder=='active_until'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr ng-repeat=\"teachingperiod in filteredTeachingPeriods = (teachingPeriods.loadedPeriods | filter:search) | orderBy:sortOrder:reverse | startFrom:(currentPage - 1) * pageSize | limitTo: pageSize\" ui-sref=\"admin/teachingperiods/edit({teachingPeriodId: teachingperiod.id})\" >\n" +
    "              <td>{{teachingperiod.name()}}</td>\n" +
    "              <td>{{teachingperiod.start_date | date: 'EEE d MMM' : '+0000'}}</td>\n" +
    "              <td>{{teachingperiod.end_date | date: 'EEE d MMM' : '+0000'}}</td>\n" +
    "              <td>{{teachingperiod.active_until | date: 'EEE d MMM' : '+0000'}}</td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "      <div class=\"panel-footer clearfix\">\n" +
    "        <a href class=\"btn btn-success pull-right\" ng-click=\"showTeachingPeriodModal()\">\n" +
    "          <i class=\"fa fa-calendar\"></i>\n" +
    "          <i class=\"fa fa-plus\"></i>\n" +
    "          Add New Teaching Period\n" +
    "        </a>\n" +
    "        <pagination ng-show=\"filteredTeachingPeriods.length > pageSize\" total-items=\"filteredTeachingPeriods.length\" ng-model=\"currentPage\" items-per-page=\"pageSize\" max-size=\"maxSize\" class=\"pagination-sm pull-left\" boundary-links=\"true\" rotate=\"false\"></pagination>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/states/units/units.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/states/units/units.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading clearfix\">\n" +
    "      <div class=\"pull-left\">\n" +
    "        <h4 class=\"panel-title\">Units</h4>\n" +
    "        Modify units registered with {{externalName.value}}\n" +
    "      </div>\n" +
    "      <form role=\"search\" class=\"pull-right form-horizontal\">\n" +
    "        <input id=\"searchbar\" class=\"input-md form-control\" placeholder=\"Search for units...\" type=\"search\" ng-model=\"search\" autocomplete=\"off\" typeahead=\"unit.name for unit in units | filter:$viewValue | limitTo:8\" />\n" +
    "        <p ng-show=\"filteredUnits.length < students.length && filteredUnits.length != 0\">Showing {{filteredUnits.length}} of {{users.length}} users.</p>\n" +
    "        <p ng-show=\"filteredUnits.length < students.length && filteredUnits.length == 0\">No students found.</p>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <div class=\"callout callout-info\" ng-hide=\"units.length > 0\">No units have been registered with {{externalName.value}} yet</div>\n" +
    "       <div style=\"overflow: auto;\n" +
    "                   position: relative\">\n" +
    "        <table ng-show=\"units.length > 0\" class=\"table table-hover table-pointer\" style =\"min-width: 720px;\">\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <th><a ng-click=\"sortOrder='code'; reverse=!reverse\">Unit Code <i ng-show=\"sortOrder=='code'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='name'; reverse=!reverse\">Name <i ng-show=\"sortOrder=='name'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='unitRole'; reverse=!reverse\">Unit Role <i ng-show=\"sortOrder=='unitRole'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='teachingPeriod.name()'; reverse=!reverse\">Teaching Period<i ng-show=\"sortOrder=='teachingPeriod.name()'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='start_date'; reverse=!reverse\">Start Date <i ng-show=\"sortOrder=='start_date'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='end_date'; reverse=!reverse\">End Date <i ng-show=\"sortOrder=='end_date'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='active'; reverse=!reverse\">Active <i ng-show=\"sortOrder=='active'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr ng-repeat=\"unit in filteredUnits = (units | filter:search) | orderBy:sortOrder:reverse | startFrom:(currentPage - 1) * pageSize | limitTo: pageSize\" ui-sref=\"units/admin({unitId: unit.id})\" >\n" +
    "              <td>\n" +
    "                <label class=\"label label-info\">\n" +
    "                  {{unit.code}}\n" +
    "                </label>\n" +
    "              </td>\n" +
    "              <td>{{unit.name}}</td>\n" +
    "              <td>{{(unit.unitRole.role | ucfirst) || \"N/A\"}}</td>\n" +
    "              <td ng-if=\"unit.teachingPeriod\">{{unit.teachingPeriod.name()}}</td>\n" +
    "              <td ng-if=\"!unit.teachingPeriod\">Custom</td>\n" +
    "              <td>{{unit.start_date | date : 'EEE d MMM y' : '+0000'}}</td>\n" +
    "              <td>{{unit.end_date | date : 'EEE d MMM y' : '+0000'}}</td>\n" +
    "              <td ng-if=\"unit.teachingPeriod\">\n" +
    "                <i ng-if=\"unit.teachingPeriod.active() && unit.active\" class=\"fa fa-check\"></i>\n" +
    "                <i ng-if=\"!unit.teachingPeriod.active() || !unit.active\" class=\"fa fa-times\"></i>\n" +
    "              </td>\n" +
    "              <td ng-if=\"!unit.teachingPeriod\">\n" +
    "                <i ng-if=\"unit.active\" class=\"fa fa-check\"></i>\n" +
    "                <i ng-if=\"!unit.active\" class=\"fa fa-times\"></i>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "       </div>\n" +
    "    </div>\n" +
    "    <div class=\"panel-footer clearfix\">\n" +
    "      <pagination ng-show=\"filteredUnits.length > pageSize\" total-items=\"filteredUnits.length\" ng-model=\"currentPage\" items-per-page=\"pageSize\" max-size=\"maxSize\" class=\"pagination-sm pull-left\" boundary-links=\"true\" rotate=\"false\"></pagination>\n" +
    "      <button class=\"btn btn-success pull-right\" ng-click=\"createUnit()\">\n" +
    "        <i class=\"fa fa-university\"></i>\n" +
    "        <i class=\"fa fa-plus\"></i>\n" +
    "        Create Unit\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/states/users/users.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/states/users/users.tpl.html",
    "<div ng-show=\"users == null\" class=\"large-notice-block\">\n" +
    "  <i class=\"fa fa-2x fa-spinner fa-pulse\"></i>\n" +
    "  <p>Loading...</p>\n" +
    "</div>\n" +
    "<!--/loading-->\n" +
    "<div ng-if=\"users != null\">\n" +
    "  <h2>\n" +
    "    {{externalName.value}} Users\n" +
    "    <p class=\"lead\">Users Administration View</p>\n" +
    "  </h2>\n" +
    "  <div class=\"col-sm-9\">\n" +
    "    <div class=\"panel panel-primary\">\n" +
    "      <div class=\"panel-heading clearfix\">\n" +
    "        <div class=\"pull-left\">\n" +
    "          <h4 class=\"panel-title\">\n" +
    "            {{externalName.value}} Users\n" +
    "          </h4>\n" +
    "          Modify users registered with {{externalName.value}}\n" +
    "        </div>\n" +
    "        <form role=\"search\" class=\"pull-right form-horizontal\">\n" +
    "          <input id=\"searchbar\" class=\"input-md form-control\" placeholder=\"Search for users...\" type=\"search\"\n" +
    "            ng-model=\"search\" autocomplete=\"off\"\n" +
    "            typeahead=\"user.name for user in users | filter:$viewValue | limitTo:8\" />\n" +
    "          <p ng-show=\"filteredUsers.length < students.length && filteredUsers.length != 0\">Showing\n" +
    "            {{filteredUsers.length}} of {{users.length}} users.</p>\n" +
    "          <p ng-show=\"filteredUsers.length < students.length && filteredUsers.length == 0\">No students found.</p>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <div class=\"callout callout-info\" ng-hide=\"users.length > 0\">No users have been registered with\n" +
    "          {{externalName.value}} yet</div>\n" +
    "\n" +
    "        <div style=\"position: relative; overflow: auto;\">\n" +
    "          <table class=\"table table-condensed table-hover\" style=\"min-width: 720px;\">\n" +
    "            <thead>\n" +
    "              <tr>\n" +
    "                <th>Avatar</th>\n" +
    "                <th><a ng-click=\"sortOrder='id'; reverse=!reverse\">User ID</a></th>\n" +
    "                <th><a ng-click=\"sortOrder='first_name'; reverse=!reverse\">First Name</a></th>\n" +
    "                <th><a ng-click=\"sortOrder='last_name'; reverse=!reverse\">Last Name</a></th>\n" +
    "                <th>Username</th>\n" +
    "                <th>Email</th>\n" +
    "                <th><a ng-click=\"sortOrder='system_role'; reverse=!reverse\">System Role</a></th>\n" +
    "              </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "              <tr class=\"pointer\"\n" +
    "                ng-repeat=\"user in filteredUsers = (users | filter:search) | orderBy:sortOrder:reverse | startFrom:(currentPage - 1) * pageSize | limitTo: pageSize\"\n" +
    "                ng-click=\"showUserModal(user)\">\n" +
    "                <td>\n" +
    "                  <user-icon [size]=\"30\" [user]=\"user\"></user-icon>\n" +
    "                </td>\n" +
    "                <td>{{user.id}}</td>\n" +
    "                <td>{{user.first_name}}</td>\n" +
    "                <td>{{user.last_name}}</td>\n" +
    "                <td>{{user.username}}</td>\n" +
    "                <td><a href=\"mailto:{{user.email}}\">{{user.email}}</a></td>\n" +
    "                <td>\n" +
    "                  {{user.system_role}}\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"panel-footer clearfix\">\n" +
    "        <a href class=\"btn btn-success pull-right\" ng-click=\"showUserModal()\">\n" +
    "          <i class=\"fa fa-user\"></i>\n" +
    "          <i class=\"fa fa-plus\"></i>\n" +
    "          Add New User\n" +
    "        </a>\n" +
    "        <pagination total-items=\"filteredUsers.length\" ng-model=\"currentPage\" items-per-page=\"pageSize\"\n" +
    "          max-size=\"maxSize\" class=\"pagination-sm pull-left\" boundary-links=\"true\" rotate=\"false\"></pagination>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <h4 class=\"panel-title\">Batch Import Users</h4>\n" +
    "        Import users using a CSV containing: email, first_name, last_name, username, nickname, role\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <file-uploader url=\"file_data.batchUserUrl\" files=\"file_data.batchUserFiles\"\n" +
    "          on-success=\"file_data.onBatchUserSuccess\"></file-uploader>\n" +
    "      </div>\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <h4 class=\"panel-title\">Batch Export Users</h4>\n" +
    "        Download a CSV of all users registered with {{externalName.value}}.\n" +
    "      </div>\n" +
    "      <div class=\"panel-body text-center\">\n" +
    "        <a href=\"batchUserUrl\" class=\"btn btn-primary btn-download\">\n" +
    "          <i class=\"fa fa-download\"></i> Download\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/alert-list/alert-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/alert-list/alert-list.tpl.html",
    "<div class=\"alert-top\">\n" +
    "  <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"alert.close()\">\n" +
    "    <div class=\"alert-wrapper\">\n" +
    "      <i class=\"fa fa-3x\"></i>\n" +
    "      <div class=\"alert-content\">\n" +
    "        <div ng-bind-html=\"alert.msg\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </alert>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/file-uploader/file-uploader.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/file-uploader/file-uploader.tpl.html",
    "<div class=\"file-uploader\" ng-class=\"{ 'is-uploading': isUploading }\">\n" +
    "  <div ng-hide=\"showUploader\">\n" +
    "    <button class=\"btn btn-success form-control\" ng-click=\"showUploader = true\">\n" +
    "      <i class=\"fa fa-upload\"></i> Begin Upload\n" +
    "    </button>\n" +
    "  </div><!--begin-upload-button-->\n" +
    "  <div collapse=\"!showUploader\" ng-if=\"uploadingInfo == null\" class=\"file-drop-area\">\n" +
    "    <div ng-repeat=\"upload in shownUploadZones\">\n" +
    "      <h5 class=\"text-muted\" ng-show=\"!singleDropZone && showName\">\n" +
    "        {{uploadZones.length == 1 ? '' : $index + 1 + ' -'}} {{upload.display.name}}\n" +
    "      </h5>\n" +
    "      <h5 class=\"text-muted\" ng-show=\"singleDropZone && showName\">\n" +
    "        Select {{upload.display.name}}\n" +
    "      </h5>\n" +
    "      <div ngf-select ngf-drop\n" +
    "        ng-show=\"upload.model == null || upload.model.length == 0\"\n" +
    "        class=\"drop well {{upload.display.error ? 'file-rejected' : ''}}\"\n" +
    "        ng-model=\"upload.model\"\n" +
    "        ng-model-rejected=\"upload.rejects\"\n" +
    "        ngf-change=\"modelChanged($files, upload)\"\n" +
    "        ngf-accept=\"{{upload.accept}}\"\n" +
    "        ngf-drag-over-class=\"{accept:'file-over', reject:'file-over', delay:100}\"\n" +
    "        ngf-drop-available=\"dropSupported\">\n" +
    "        <p class=\"fa {{upload.display.icon}} fa-3x\"></p>\n" +
    "        <p ng-show=\"upload.display.error\">\n" +
    "          Invalid file provided\n" +
    "          <small> Accepted files: <code>{{upload.accept.split(',').join(', ')}}</code> </small>\n" +
    "        </p>\n" +
    "        <p ng-show=\"dropSupported\" ng-hide=\"upload.display.error\">\n" +
    "          Drop {{upload.display.type}} file here\n" +
    "          <small> or click to select one </small>\n" +
    "        </p>\n" +
    "        <p ng-hide=\"dropSupported || upload.display.error\">\n" +
    "          Click to select {{upload.display.type}} file\n" +
    "        </p>\n" +
    "      </div><!--/drop-zone-->\n" +
    "      <div ng-show=\"!singleDropZone && upload.model.length > 0\" class=\"selected-files\">\n" +
    "        <span class=\"selected-file\">\n" +
    "          <i class=\"file-type fa {{upload.display.icon}}\"></i>\n" +
    "          {{upload.model[0].name}}\n" +
    "        </span>\n" +
    "        <a class=\"clear-upload text-muted\" ng-click=\"clearEnqueuedUpload(upload)\">\n" +
    "          <i class=\"fa fa-times\"></i>\n" +
    "        </a>\n" +
    "      </div><!--/selected-file-->\n" +
    "    </div><!--/drop-zones-->\n" +
    "    <div ng-show=\"singleDropZone\">\n" +
    "      <h5 class=\"text-muted\">Upload Summary</h5>\n" +
    "      <div class=\"selected-files list-group\">\n" +
    "        <div class=\"selected-file list-group-item clearfix\" ng-class=\"{highlight: upload.model.length > 0}\" ng-repeat=\"upload in uploadZones\">\n" +
    "          <div class=\"pull-left\">\n" +
    "            <i class=\"file-type fa {{upload.display.icon}}\"></i>\n" +
    "            <strong>{{upload.display.name}}</strong>\n" +
    "          </div>\n" +
    "          <div class=\"pull-right text-right\">\n" +
    "            <em ng-show=\"upload.model.length > 0\">{{upload.model[0].name}}</em>\n" +
    "            <em ng-hide=\"upload.model.length > 0\" class=\"text-muted\">File Pending</em>\n" +
    "            <a class=\"clear-upload text-muted\" ng-click=\"clearEnqueuedUpload(upload)\" ng-show=\"upload.model.length > 0\">\n" +
    "              <i class=\"fa fa-times\"></i>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </div><!--/selected-file-->\n" +
    "      </div>\n" +
    "    </div><!--/upload-summary-->\n" +
    "  </div><!--/file-drop-area-->\n" +
    "  <div ng-show=\"showUploader && !isUploading\" class=\"upload-commit-actions\">\n" +
    "    <button\n" +
    "      ng-show=\"showUploadButton && readyToUpload() && uploadingInfo == null\"\n" +
    "      ng-click=\"initiateUpload()\"\n" +
    "      class=\"btn btn-primary btn-upload\">\n" +
    "      <i class=\"fa fa-upload\"></i> Start Upload\n" +
    "    </button><!--/upload-button-->\n" +
    "    <button ng-show=\"asButton\" ng-click=\"resetUploader()\" class=\"btn btn-danger btn-cancel\">\n" +
    "      <i class=\"fa fa-times\"></i> Cancel Upload\n" +
    "    </button><!--/cancel-button-->\n" +
    "  </div>\n" +
    "  <div ng-show=\"showUploader && readyToUpload()\" class=\"upload-area text-center clearfix\">\n" +
    "    <div ng-hide=\"uploadingInfo == null || uploadingInfo.complete\" class=\"progress-area\">\n" +
    "      <div class=\"icons\">\n" +
    "        <i ng-repeat=\"upload in uploadZones\" class=\"fa {{upload.display.icon}}\"></i>\n" +
    "        <i class=\"fa fa-arrow-right\"></i>\n" +
    "        <i class=\"logo\"></i>\n" +
    "      </div>\n" +
    "      <progressbar class=\"progress-striped active\" value=\"uploadingInfo.progress\"></progressbar>\n" +
    "    </div><!--/progress-area-->\n" +
    "    <div ng-if=\"uploadingInfo.complete\" class=\"result-area\">\n" +
    "      <p class=\"result-text\">\n" +
    "        <i class=\"fa {{uploadingInfo.success === true ? 'fa-check-circle text-success' : 'fa-times-circle text-danger'}} fa-2x\"></i>\n" +
    "        <strong>File Upload {{uploadingInfo.success === true ? 'Successful' : 'Failed'}}</strong>\n" +
    "      </p>\n" +
    "      <div class=\"error-message-area\" ng-hide=\"uploadingInfo.success === true\">\n" +
    "        <hr>\n" +
    "        <p>\n" +
    "          <strong>Error Message: </strong>\n" +
    "          {{uploadingInfo.error}}\n" +
    "        </p>\n" +
    "        <p class=\"retry-options\">\n" +
    "          <a ng-click=\"initiateUpload()\">Retry Upload</a>\n" +
    "          <a ng-click=\"onClickFailureCancel()\">Cancel</a>\n" +
    "        </p><!--/error-message-area-->\n" +
    "      </div>\n" +
    "    </div><!--/result-area-->\n" +
    "  </div><!--/upload-area-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/grade-icon/grade-icon.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/grade-icon/grade-icon.tpl.html",
    "<div class=\"grade-icon\">\n" +
    "  <span\n" +
    "    class=\"grade-icon\"\n" +
    "    ng-class=\"{colorful: colorful, 'grade-0': grade == 0, 'grade-1': grade == 1, 'grade-2': grade == 2, 'grade-3': grade == 3}\"\n" +
    "    tooltip=\"{{gradeText(grade)}}\">\n" +
    "    {{gradeLetter(grade)}}\n" +
    "  </span>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/header/header.tpl.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" >\n" +
    "  <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "  <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle\" ng-init=\"navCollapsed = true\" ng-click=\"navCollapsed = !navCollapsed\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "  </div>\n" +
    "  <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "  <div class=\"collapse navbar-collapse\" ng-class=\"!navCollapsed && 'in'\" ng-show=\"!navCollapsed\">\n" +
    "    <ul class=\"nav navbar-nav navbar-left\">\n" +
    "      <ul class=\"breadcrumb\">\n" +
    "        <li>\n" +
    "          <a class=\"home\" ui-sref=\"home\">\n" +
    "            <i class=\"logo\"></i>\n" +
    "          </a>\n" +
    "        </li><!--/home-->\n" +
    "        <li>\n" +
    "          <div class=\"btn-group\" dropdown>\n" +
    "            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" dropdown-toggle>\n" +
    "              <label class=\"label label-unit\" ng-if=\"unit\">\n" +
    "                <span ng-bind=\"unit.code\"></span>\n" +
    "              </label>\n" +
    "              <span class=\"unit-name\" ng-bind=\"unit.name\" ng-if=\"unit\"></span>\n" +
    "              <span class=\"unit-name\" ng-if=\"!unit\">Select Unit</span>\n" +
    "              <span class=\"caret\"></span>\n" +
    "            </button>\n" +
    "            <unit-dropdown></unit-dropdown>\n" +
    "          </div>\n" +
    "        </li><!--/selected-unit-->\n" +
    "        <li ng-if=\"task && tutor\">\n" +
    "          <div class=\"btn-group\" dropdown>\n" +
    "            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" dropdown-toggle>\n" +
    "              <span>Staff Tasks</span>\n" +
    "              <span class=\"caret\"></span>\n" +
    "            </button>\n" +
    "            <ul class=\"dropdown-menu dropdown-tasks\" dropdown-menu>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/tasks/inbox({unitId: project.unit_id})\">Task Inbox</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/tasks/definition({unitId: project.unit_id})\">Mark By Definition</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/tasks/offline({unitId: project.unit_id})\">Mark Tasks Offline</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/tasks/viewer({unitId: project.unit_id})\">Task List</a>\n" +
    "              </li>\n" +
    "              <li class=\"divider\"></li><!--/task-related-->\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/students/list({unitId: project.unit_id})\">Student List</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/students/groups({unitId: project.unit_id})\">Student Groups</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/students/plagiarism({unitId: project.unit_id})\">Student Plagiarism</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/students/portfolios({unitId: project.unit_id})\">Student Portfolios</a>\n" +
    "              </li>\n" +
    "              <li class=\"divider\"></li><!--/student-related-->\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/analytics({unitId: project.unit_id})\">Unit Analytics</a>\n" +
    "              </li>\n" +
    "            </ul><!--/teaching-tasks-->\n" +
    "          <div>\n" +
    "        </li>\n" +
    "        <li ng-if=\"task\" ng-if=\"tutor\">\n" +
    "          <div class=\"btn-group\" dropdown>\n" +
    "            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" dropdown-toggle>\n" +
    "              <span ng-bind=\"task\"></span>\n" +
    "              <span class=\"caret\"></span>\n" +
    "            </button>\n" +
    "            <ul class=\"dropdown-menu dropdown-tasks\" dropdown-menu ng-if=\"project\">\n" +
    "              <li>\n" +
    "                <a ui-sref=\"projects/dashboard({projectId: project.project_id, taskAbbr:''})\">Dashboard</a>\n" +
    "              </li>\n" +
    "              <li class=\"divider\"></li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"projects/outcomes({projectId: project.project_id})\">Learning Outcomes</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"projects/portfolio({projectId: project.project_id})\">Portfolio Creation</a>\n" +
    "              </li>\n" +
    "              <li class=\"divider\"></li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"projects/groups({projectId: project.project_id})\">Groups List</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"projects/tutorials({projectId: project.project_id})\">Tutorial List</a>\n" +
    "              </li>\n" +
    "            </ul><!--/student-tasks-->\n" +
    "            <ul class=\"dropdown-menu dropdown-tasks\" dropdown-menu ng-if=\"unitRole\">\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/tasks/inbox({unitId: unitRole.unit_id})\" ng-if=\"unitRole.role != 'Admin'\">Task Inbox</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/tasks/definition({unitId: unitRole.unit_id})\" ng-if=\"unitRole.role != 'Admin'\">Mark By Definition</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/tasks/offline({unitId: unitRole.unit_id})\" ng-if=\"unitRole.role != 'Admin'\">Mark Tasks Offline</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/tasks/viewer({unitId: unitRole.unit_id})\" ng-if=\"unitRole.role != 'Admin'\">Task List</a>\n" +
    "              </li>\n" +
    "              <li class=\"divider\" ng-if=\"unitRole.role != 'Admin'\"></li><!--/task-related-->\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/students/list({unitId: unitRole.unit_id})\" ng-if=\"unitRole.role != 'Admin'\">Student List</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/students/groups({unitId: unitRole.unit_id})\" ng-if=\"unitRole.role != 'Admin'\">Student Groups</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/students/plagiarism({unitId: unitRole.unit_id})\" ng-if=\"unitRole.role != 'Admin'\">Student Plagiarism</a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/students/portfolios({unitId: unitRole.unit_id})\" ng-if=\"unitRole.role != 'Admin'\">Student Portfolios</a>\n" +
    "              </li>\n" +
    "              <li class=\"divider\" ng-if=\"unitRole.role != 'Admin'\"></li><!--/student-related-->\n" +
    "              <li>\n" +
    "                <a ui-sref=\"units/analytics({unitId: unitRole.unit_id})\" ng-if=\"unitRole.role != 'Admin'\">Unit Analytics</a>\n" +
    "              </li>\n" +
    "              <li ng-if=\"unitRole.role == 'Convenor' || unitRole.role == 'Admin'\">\n" +
    "                <a ui-sref=\"units/admin({unitId: unitRole.unit_id})\">Unit Administration</a>\n" +
    "              </li>\n" +
    "            </ul><!--/teaching-tasks-->\n" +
    "          </div>\n" +
    "        </li><!--/task-dropdown-->\n" +
    "      </ul><!--breadcrumbs-->\n" +
    "    </ul><!--/nav-left-->\n" +
    "    <ul class=\"nav navbar-nav navbar-right\">\n" +
    "      <li class=\"dropdown\" dropdown if-role=\"Admin Convenor\">\n" +
    "        <a class=\"dropdown-toggle\" dropdown-toggle><span class=\"glyphicon glyphicon-wrench\"></span> Administration<b class=\"caret\"></b></a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li><a ui-sref=\"admin/teachingperiods\" if-role=\"Admin\">Manage Teaching Periods</a></li>\n" +
    "          <li><a ui-sref=\"institutionsettings\" if-role=\"Admin\">Institution Settings</a></li>\n" +
    "          <li><a ui-sref=\"admin/units\">Manage Units</a></li>\n" +
    "          <li><a ui-sref=\"admin/users\">Manage Users</a></li>\n" +
    "        </ul>\n" +
    "      </li><!--/administration-->\n" +
    "      <li class=\"dropdown\" dropdown>\n" +
    "        <a class=\"dropdown-toggle dropdown-user\" dropdown-toggle>\n" +
    "          <user-icon [size]=\"25\"></user-icon>\n" +
    "          {{currentUser.name}} {{currentUser.nickname ? '(' + currentUser.nickname + ')' : ''}}\n" +
    "          <i class=\"caret\"></i>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li><a ng-click=\"openUserSettings()\">Profile</a></li>\n" +
    "          <li><a ng-click=\"openNotificationSettings()\">Notifications</a></li>\n" +
    "          <li><a ng-click=\"openCalendar()\">Calendar</a></li>\n" +
    "          <li><a ng-click=\"darkMode()\">Dark Mode / Light Mode</a></li> \n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a ng-click=\"openAboutModal()\">About</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a ui-sref=\"sign_out\">Sign Out</a></li>\n" +
    "        </ul>\n" +
    "      </li><!--/current-user-->\n" +
    "    </ul><!--/navbar-right-->\n" +
    "  </div><!--/navbar-collapse-->\n" +
    "</nav>\n" +
    "");
}]);

angular.module("common/header/unit-dropdown/unit-dropdown.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/header/unit-dropdown/unit-dropdown.tpl.html",
    "<ul class=\"dropdown-menu dropdown-units\" dropdown-menu>\n" +
    "  <li ng-hide=\"filteredUnitRoles.length == 0\" class=\"dropdown-header\">Units You Teach {{filteredUnitRoles.length}}</li>\n" +
    "  <li my-repeat-directive ng-repeat=\"unitRole in filteredUnitRoles = (unitRoles | isActiveUnitRole) | filter:isUniqueUnitRole \" ng-if=\"unitRole.teachingPeriod() && unitRole.teachingPeriod().active()\">\n" +
    "    <a ui-sref=\"units/tasks/inbox({ unitId: unitRole.unit_id })\">\n" +
    "        <small class=\"unit-info\">\n" +
    "          <label class=\"label label-unit small\">{{unitRole.unit_code}}</label>\n" +
    "          <small class=\"text-muted\">{{showDate(unitRole.start_date)}}</small>\n" +
    "        </small>\n" +
    "        <span class=\"unit-name\">{{unitRole.unit_name}}</span>\n" +
    "    </a>\n" +
    "  </li> \n" +
    "  <li my-repeat-directive ng-repeat=\"unitRole in filteredUnitRoles = (unitRoles | isActiveUnitRole) | filter:isUniqueUnitRole \" ng-if=\"!unitRole.teachingPeriod()\">\n" +
    "    <a ui-sref=\"units/tasks/inbox({ unitId: unitRole.unit_id })\">\n" +
    "        <small class=\"unit-info\">\n" +
    "          <label class=\"label label-unit small\">{{unitRole.unit_code}}</label>\n" +
    "          <small class=\"text-muted\">{{showDate(unitRole.start_date)}}</small>\n" +
    "        </small>\n" +
    "        <span class=\"unit-name\">{{unitRole.unit_name}}</span>\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li ng-hide=\"filteredUnitRoles.length == 0 || projects.length == 0\" class=\"divider\"></li>\n" +
    "  <li ng-hide=\"projects.length == 0\" class=\"dropdown-header\" ng-hide=\"{{projects.length}}\">Units You Study</li>\n" +
    "  <li my-repeat-directive ng-repeat=\"project in projects\" ng-if=\"project.teachingPeriod() && project.teachingPeriod().active()\">\n" +
    "    <a ui-sref=\"projects/dashboard({ projectId: project.project_id, taskAbbr:'' })\">\n" +
    "      <small class=\"unit-info\">\n" +
    "        <label class=\"label label-unit small\">{{project.unit_code}}</label>\n" +
    "        <small class=\"text-muted\">{{showDate(project.start_date)}}</small>\n" +
    "      </small>\n" +
    "      <span class=\"unit-name\">{{project.unit_name}}</span>\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li my-repeat-directive ng-repeat=\"project in projects\" ng-if=\"!project.teachingPeriod()\">\n" +
    "    <a ui-sref=\"projects/dashboard({ projectId: project.project_id, taskAbbr:'' })\">\n" +
    "      <small class=\"unit-info\">\n" +
    "        <label class=\"label label-unit small\">{{project.unit_code}}</label>\n" +
    "        <small class=\"text-muted\">{{showDate(project.start_date)}}</small>\n" +
    "      </small>\n" +
    "      <span class=\"unit-name\">{{project.unit_name}}</span>\n" +
    "    </a>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("common/modals/about-doubtfire-modal/about-doubtfire-modal-content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modals/about-doubtfire-modal/about-doubtfire-modal-content.tpl.html",
    "<mat-dialog-content class=\"mat-typography\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <i class=\"logo\"></i>\n" +
    "    <h1 class=\"full logo\">\n" +
    "      {{data.externalName}}\n" +
    "      <small [hidden]=\"data.externalName == 'Doubtfire'\">\n" +
    "        Powered By Doubtfire\n" +
    "      </small>\n" +
    "      <small [hidden]=\"data.externalName != 'Doubtfire'\">\n" +
    "        Version 5\n" +
    "      </small>\n" +
    "    </h1>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <h2>Lead Contributors</h2>\n" +
    "    <ul>\n" +
    "      <li *ngFor=\"let person of data.mainContributors\">\n" +
    "        <a target=\"_blank\" [href]=\"person.html_url\">\n" +
    "          <img [src]=\"person.avatar_url\">\n" +
    "          <div class=\"name\">{{person.name}}</div>\n" +
    "          <div class=\"handler\">@{{person.login}}</div>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <h2>Contributors</h2>\n" +
    "    <table mat-table [dataSource]=\"data.allContributors\" matSort (matSortChange)=\"sortData($event)\">\n" +
    "      <!-- Login Column -->\n" +
    "      <ng-container matColumnDef=\"contributor\">\n" +
    "        <th mat-header-cell *matHeaderCellDef mat-sort-header> Contributor </th>\n" +
    "        <td mat-cell *matCellDef=\"let element\"> <a target=\"_blank\" [href]=\"element.htmlUrl\"><img [src]=\"element.avatarUrl\">@{{element.login}}</a> </td>\n" +
    "      </ng-container>\n" +
    "      <!-- Contributions Column -->\n" +
    "      <ng-container matColumnDef=\"contributions\">\n" +
    "        <th mat-header-cell *matHeaderCellDef mat-sort-header> Contributions </th>\n" +
    "        <td mat-cell *matCellDef=\"let element\"> {{element.totalContributions()}} </td>\n" +
    "      </ng-container>\n" +
    "      <!-- API Contributions Column -->\n" +
    "      <ng-container matColumnDef=\"api-contributions\">\n" +
    "        <th mat-header-cell *matHeaderCellDef mat-sort-header> API </th>\n" +
    "        <td mat-cell *matCellDef=\"let element\"> {{element.apiContributions}} </td>\n" +
    "      </ng-container>\n" +
    "      <!-- Web Contributions Column -->\n" +
    "      <ng-container matColumnDef=\"web-contributions\">\n" +
    "        <th mat-header-cell *matHeaderCellDef mat-sort-header> Web </th>\n" +
    "        <td mat-cell *matCellDef=\"let element\"> {{element.webContributions}} </td>\n" +
    "      </ng-container>\n" +
    "      <!-- Doubtfire.io Contributions Column -->\n" +
    "      <ng-container matColumnDef=\"io-contributions\">\n" +
    "        <th mat-header-cell *matHeaderCellDef mat-sort-header> doubtfire.io </th>\n" +
    "        <td mat-cell *matCellDef=\"let element\"> {{element.ioContributions}} </td>\n" +
    "      </ng-container>\n" +
    "\n" +
    "      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n" +
    "      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n" +
    "    </table>\n" +
    "    <p class=\"text-muted text-center\">\n" +
    "      &copy; 2012&ndash;2020. Made in Melbourne.\n" +
    "    </p>\n" +
    "    <p class=\"text-muted text-center logo-smallprint\">\n" +
    "      Doubtfire is an <a href=\"http://github.com/doubtfire-lms\">Open Source</a> project licensed under <strong>GNU\n" +
    "        Affero General Public License (AGPL) v3.0</strong>. Star us on <a\n" +
    "        href=\"http://github.com/doubtfire-lms/doubtfire-web\">GitHub</a>!\n" +
    "      <br>\n" +
    "      The Doubtfire Logo adapted under Creative Commons from \"Progress\" by Creative Stall from the <a\n" +
    "        href=\"https://thenounproject.com/search/?q=progress&i=175994\">Noun Project</a>.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</mat-dialog-content>\n" +
    "<mat-dialog-actions align=\"end\">\n" +
    "  <button mat-stroked-button mat-dialog-close>Close</button>\n" +
    "</mat-dialog-actions>\n" +
    "");
}]);

angular.module("common/modals/comments-modal/comments-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modals/comments-modal/comments-modal.tpl.html",
    "<div class=\"modal-comment\">\n" +
    "  <div class=\"modal-body\">\n" +
    "    <div ng-if=\"commentType == 'image'\">\n" +
    "      <a href=\"{{commentResourceUrl}}\" target=\"_blank\">\n" +
    "        <img class=\"image-comment\" ng-src=\"{{commentResourceUrl}}\"></img>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div ng-if=\"commentType == 'pdf'\">\n" +
    "      <iframe class=\"pdf-comment\" ng-src=\"{{commentResourceUrl}}\" type=\"application/pdf\" />\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/modals/confirmation-modal/confirmation-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modals/confirmation-modal/confirmation-modal.tpl.html",
    "<div class=\"confirmation-modal\">\n" +
    "  <div class=\"modal-header clearfix\">\n" +
    "    <h3 class=\"modal-title\">\n" +
    "      <i class=\"fa fa-question-circle fa-2x pull-left\"></i>\n" +
    "      <div>{{title}}</div>\n" +
    "      <small>Please confirm that you want to perform this action.</small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    {{message}}\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer clearfix\">\n" +
    "    <div class=\"btn-group\">\n" +
    "      <label class=\"btn btn-success\" ng-click=\"confirmAction()\">\n" +
    "        <i class=\"fa fa-check\"></i> Confirm\n" +
    "      </label>\n" +
    "      <label class=\"btn btn-danger\" ng-click=\"cancelAction()\">\n" +
    "        <i class=\"fa fa-times\"></i> Cancel\n" +
    "      </label>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/modals/csv-result-modal/csv-result-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modals/csv-result-modal/csv-result-modal.tpl.html",
    "<div class=\"csv-result-modal\">\n" +
    "  <div class=\"modal-header clearfix\">\n" +
    "    <h3 class=\"modal-title\">\n" +
    "      <i class=\"fa fa-file-excel-o fa-2x pull-left\"></i>\n" +
    "      {{title}}\n" +
    "      <small>Response details</small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body clearfix\">\n" +
    "    <p class=\"btn-group col-sm-8 col-sm-offset-2\">\n" +
    "        <button class=\"btn btn-default col-sm-4\" ng-class=\"{ 'btn-success': activeCsvResponseSelection == 'success' }\" ng-model=\"activeCsvResponseSelection\" btn-radio=\"'success'\">\n" +
    "          Success <span class=\"badge pull-right\">{{response.success.length}}</span>\n" +
    "        </button>\n" +
    "        <button class=\"btn btn-default col-sm-4\" ng-class=\"{ 'btn-danger': activeCsvResponseSelection == 'errors' }\" ng-model=\"activeCsvResponseSelection\" btn-radio=\"'errors'\">\n" +
    "          Errors <span class=\"badge pull-right\">{{response.errors.length}}</span>\n" +
    "        </button>\n" +
    "        <button class=\"btn btn-default col-sm-4\" ng-class=\"{ 'btn-warning': activeCsvResponseSelection == 'ignored' }\" ng-model=\"activeCsvResponseSelection\" btn-radio=\"'ignored'\">\n" +
    "          Ignored <span class=\"badge pull-right\">{{response.ignored.length}}</span>\n" +
    "        </button>\n" +
    "    </p>\n" +
    "    <div ng-hide=\"response[activeCsvResponseSelection].length > 0\" class=\"callout callout-info col-sm-12\">\n" +
    "      No data to show\n" +
    "    </div>\n" +
    "    <table ng-show=\"response[activeCsvResponseSelection].length > 0\" class=\"table table-condensed table-hover\">\n" +
    "      <thead>\n" +
    "          <tr>\n" +
    "              <th class=\"message\">\n" +
    "                  Message\n" +
    "              </th>\n" +
    "              <th class=\"data\">\n" +
    "                  Data\n" +
    "              </th>\n" +
    "          </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "          <tr ng-repeat=\"item in response[activeCsvResponseSelection] | startFrom:(currentPage - 1) * pageSize | limitTo: pageSize\">\n" +
    "              <td>\n" +
    "                {{item.message}}\n" +
    "              </td>\n" +
    "              <td class=\"csv-row\">\n" +
    "                {{item.row}}\n" +
    "              </td>\n" +
    "          </tr>\n" +
    "      </tbody>\n" +
    "  </table><!--/enrolment-table-->\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer clearfix\">\n" +
    "    <pagination ng-show=\"response[activeCsvResponseSelection].length > pageSize\" total-items=\"response[activeCsvResponseSelection].length\" ng-model=\"currentPage\" items-per-page=\"pageSize\" max-size=\"maxSize\" class=\"pagination-sm pull-left\" boundary-links=\"true\" rotate=\"false\"></pagination>\n" +
    "    <button class=\"btn btn-primary pull-right\" ng-click=\"close()\">Done</button>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("common/modals/csv-result-modal/csv-upload-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modals/csv-result-modal/csv-upload-modal.tpl.html",
    "<div class=\"csv-result-modal\">\n" +
    "  <div class=\"modal-header clearfix\">\n" +
    "    <h3 class=\"modal-title\">\n" +
    "      <i class=\"fa fa-file-excel-o fa-2x pull-left\"></i>\n" +
    "      {{title}}\n" +
    "      <small>Response details</small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body clearfix\">\n" +
    "    <file-uploader files=\"batchFiles\" url=\"url\" on-success=\"onSuccess\"></file-uploader>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer clearfix\">\n" +
    "    <button class=\"btn btn-primary pull-right\" ng-click=\"close()\">Done</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/modals/progress-modal/progress-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/modals/progress-modal/progress-modal.tpl.html",
    "<div class=\"progress-modal\">\n" +
    "  <div class=\"modal-header clearfix\">\n" +
    "    <h3 class=\"modal-title\">\n" +
    "      <i class=\"fa fa-spinner fa-2x pull-left\"></i>\n" +
    "      <div>{{title}}</div>\n" +
    "      <small>{{message}}</small>\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <div class=\"large-notice-block\">\n" +
    "      <i class=\"fa fa-3x fa-spinner fa-pulse\"></i>\n" +
    "      <p>Processing...</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer clearfix\">\n" +
    "    <p class=\"help-block col-sm-6 col-sm-offset-3 text-center\">\n" +
    "      You can close this modal and you will be alerted when processing has finished\n" +
    "    </p>\n" +
    "    <button class=\"btn btn-primary pull-right\" ng-click=\"close()\">\n" +
    "      <i class=\"fa fa-check\"></i>\n" +
    "    </button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("errors/states/not-found/not-found.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("errors/states/not-found/not-found.tpl.html",
    "<div class=\"container text-center\">\n" +
    "  <div class=\"error-container\">\n" +
    "    <i class=\"fa fa-question-circle\"></i>\n" +
    "    <h1>Not Found</h1>\n" +
    "    <p>This page doesn't exist.</p>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("errors/states/timeout/timeout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("errors/states/timeout/timeout.tpl.html",
    "<div class=\"container text-center\">\n" +
    "  <div class=\"error-container\">\n" +
    "    <i class=\"fa fa-clock-o\"></i>\n" +
    "    <h1>Authentication Timeout</h1>\n" +
    "    <p>Your session has expired and you need to log back in to proceed.</p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("errors/states/unauthorised/unauthorised.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("errors/states/unauthorised/unauthorised.tpl.html",
    "<div class=\"container text-center\">\n" +
    "  <div class=\"error-container\">\n" +
    "    <i class=\"fa fa-exclamation-triangle\"></i>\n" +
    "    <h1>Unauthorised</h1>\n" +
    "    <p>You do not have sufficient permissions to access this resource, or your session has expired.</p>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("groups/group-member-contribution-assigner/group-member-contribution-assigner.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("groups/group-member-contribution-assigner/group-member-contribution-assigner.tpl.html",
    "<div class=\"group-member-contribution-assigner\">\n" +
    "  <table class=\"table table-condensed table-hover\">\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <th><a ng-click=\"memberSortOrder='student_name'; reverse=!reverse\">Team Member</a></th>\n" +
    "        <th><a ng-click=\"memberSortOrder='target_grade'; reverse=!reverse\">Target Grade</a></th>\n" +
    "        <th class=\"col-sm-4\"><a ng-click=\"memberSortOrder='rating'; reverse=!reverse\">Contribution</a></th>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "      <tr ng-repeat=\"member in team.members | orderBy:memberSortOrder:reverse\">\n" +
    "        <td>{{member.student_name}}</td>\n" +
    "        <td class=\"text-left\">\n" +
    "          <grade-icon grade=\"member.target_grade\"></grade-icon>\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <rating\n" +
    "            class=\"group-member-contribution-rating\"\n" +
    "            ng-click=\"checkClearRating(member)\"\n" +
    "            ng-model=\"member.rating\"\n" +
    "            on-hover=\"hoveringOver(member, value)\"\n" +
    "            on-leave=\"hoveringOver(member, null)\"\n" +
    "            max=\"numStars\"\n" +
    "            state-on=\"'fa fa-child rating-outline'\"\n" +
    "            state-off=\"'fa fa-child rating-disabled'\">\n" +
    "          </rating>\n" +
    "          <span\n" +
    "            class=\"label {{percentClass(member.percent)}}\"\n" +
    "            ng-show=\"member.overStar\">\n" +
    "            <span ng-show=\"member.percent > 0\">\n" +
    "              {{member.percent}} % effort\n" +
    "            </span>\n" +
    "            <span ng-hide=\"member.percent > 0\">\n" +
    "              No effort\n" +
    "            </span>\n" +
    "          </span>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "    </tbody>\n" +
    "  </table>\n" +
    "</div>\n" +
    "");
}]);

angular.module("groups/group-member-list/group-member-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("groups/group-member-list/group-member-list.tpl.html",
    "<div class=\"panel-body panel-loading\" ng-hide=\"loaded\">\n" +
    "  <i class=\"fa fa-spinner fa-pulse\"></i> Loading Members...\n" +
    "</div><!--/loading-->\n" +
    "<div class=\"panel-body\" ng-show=\"loaded && selectedGroup.members.length == 0\">\n" +
    "  <div class=\"callout callout-primary\">\n" +
    "    <h4>No members in group</h4>\n" +
    "    <p>There are no members in this group</p>\n" +
    "  </div>\n" +
    "</div><!--no-members-->\n" +
    "<table ng-show=\"loaded && selectedGroup.members.length > 0\" class=\"table table-condensed table-hover table-pointer\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th ng-show=\"unitRole\">\n" +
    "        <a ng-click=\"sortTableBy('student_id')\">\n" +
    "          Student ID\n" +
    "          <i ng-show=\"tableSort.order == 'student_id'\" class=\"fa fa-caret-{{tableSort.reverse ? 'up' : 'down'}}\"></i>\n" +
    "        </a>\n" +
    "      </th>\n" +
    "      <th>\n" +
    "        <a ng-click=\"sortTableBy('student_name')\">\n" +
    "          Name\n" +
    "          <i ng-show=\"tableSort.order == 'student_name'\" class=\"fa fa-caret-{{tableSort.reverse ? 'up' : 'down'}}\"></i>\n" +
    "        </a>\n" +
    "      </th>\n" +
    "      <th ng-show=\"unitRole\">\n" +
    "        <a ng-click=\"sortTableBy('target_grade')\">\n" +
    "          Target Grade\n" +
    "          <i ng-show=\"tableSort.order == 'target_grade'\" class=\"fa fa-caret-{{tableSort.reverse ? 'up' : 'down'}}\"></i>\n" +
    "        </a>\n" +
    "      </th>\n" +
    "      <th ng-if=\"canRemoveMembers\">\n" +
    "        Actions\n" +
    "      </th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-repeat=\"member in selectedGroup.members | orderBy:tableSort.order:tableSort.reverse\">\n" +
    "      <td class=\"student-id\" ng-show=\"unitRole\">{{member.student_id || \"N/A\"}}</td>\n" +
    "      <td class=\"student-name\">{{member.student_name}}</td>\n" +
    "      <td ng-show=\"unitRole\" class=\"student-grade text-left\">\n" +
    "        <grade-icon grade=\"member.target_grade\"></grade-icon>\n" +
    "      </td>\n" +
    "      <td class=\"actions\" ng-if=\"canRemoveMembers\">\n" +
    "        <button ng-click=\"removeMember(member)\" class=\"btn btn-sm btn-danger\" ng-hide=\"project\">\n" +
    "          <i class=\"fa fa-minus\"></i>\n" +
    "          <span ng-hide=\"member.project_id == project.project_id\">Kick</span>\n" +
    "        </button>\n" +
    "        <button ng-click=\"removeMember(member)\" class=\"btn btn-sm btn-danger\" ng-show=\"member.project_id == project.project_id\">\n" +
    "          <i class=\"fa fa-minus\"></i>\n" +
    "          <span>Leave</span>\n" +
    "        </button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("groups/group-selector/group-selector.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("groups/group-selector/group-selector.tpl.html",
    "<div class=\"panel-heading\">\n" +
    "  <h4 class=\"panel-title\">\n" +
    "    Groups in\n" +
    "    <strong ng-hide=\"showGroupSetSelector\">\n" +
    "      {{selectedGroupSet.name}}\n" +
    "    </strong>\n" +
    "    <group-set-selector\n" +
    "      ng-show=\"showGroupSetSelector\"\n" +
    "      unit=\"unit\"\n" +
    "      ng-model=\"selectedGroupSet\"\n" +
    "      on-change=\"selectGroupSet\">\n" +
    "    </group-set-selector>\n" +
    "  </h4>\n" +
    "</div><!--/panel-heading-->\n" +
    "<div class=\"panel-body panel-toolbar\" ng-show=\"loaded && canCreateGroups && (unitRole || project.tutorials().length > 0)\">\n" +
    "  <div class=\"clearfix\">\n" +
    "    <div class=\"input-group pull-left col-md-6 staff-filter\" ng-if=\"unitRole\">\n" +
    "      <div class=\"btn-group\">\n" +
    "        <label class=\"btn btn-default col-sm-6\" ng-model=\"staffFilter\" btn-radio=\"'all'\" ng-click=\"setStaffFilter('all')\">\n" +
    "          <i class=\"fa fa-university\"></i> All Tutorials\n" +
    "        </label>\n" +
    "        <label class=\"btn btn-default col-sm-6\" ng-model=\"staffFilter\" btn-radio=\"'mine'\" ng-click=\"setStaffFilter('mine')\">\n" +
    "          <i class=\"fa fa-pencil\"></i> My Tutorials\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div><!--/staff-filter-button-group-->\n" +
    "    <form name=\"newGroupForm\" class=\"input-group pull-right col-md-6\" ng-if=\"canCreateGroups\" ng-submit=\"addGroup(newGroupName)\">\n" +
    "      <input class=\"form-control\" placeholder=\"Group Name\" ng-model=\"newGroupName\">\n" +
    "      <span class=\"input-group-btn\">\n" +
    "        <button type=\"submit\" class=\"btn btn-success\">\n" +
    "          <i class=\"fa fa-plus\"></i> Create Group\n" +
    "        </button>\n" +
    "      </span>\n" +
    "    </form><!--/group-name-create-->\n" +
    "  </div>\n" +
    "</div><!--/creation-options-->\n" +
    "<div class=\"panel-body panel-loading\" ng-show=\"!loaded\">\n" +
    "  <i class=\"fa fa-spinner fa-pulse\"></i> Loading Groups...\n" +
    "</div><!--/loading-spinner-->\n" +
    "<div class=\"panel-body\" ng-show=\"loaded && shownGroups.length == 0\">\n" +
    "  <div class=\"callout callout-primary row\">\n" +
    "    <h4>No Groups To Show</h4>\n" +
    "    <p>\n" +
    "      There are no groups available for <strong>{{selectedGroupSet.name}}</strong>{{staffFilter == 'mine' || selectedGroupSet.keep_groups_in_same_class ? \" in your tutorials.\" : \".\"}}\n" +
    "    </p>\n" +
    "    <p ng-show=\"selectedGroupSet.keep_groups_in_same_class\">\n" +
    "      Please make sure that you are enrolled in the correct tutorial. You can only join a group that is running in your allocated tutorial. Use the <a ui-sref=\"projects/tutorials({projectId: project.project_id})\">Tutorial List</a> to check and update your tutorial enrolment.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</div><!--/no-groups-->\n" +
    "<table ng-show=\"loaded && shownGroups.length > 0\" class=\"table table-condensed table-hover table-pointer\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th class=\"name\">\n" +
    "        <a ng-click=\"sortTableBy('name')\">\n" +
    "          Name <i ng-show=\"tableSort.order == 'name'\" class=\"fa fa-caret-{{tableSort.reverse ? 'up' : 'down'}}\"></i>\n" +
    "        </a>\n" +
    "      </th>\n" +
    "      <th class=\"tutorial\">\n" +
    "        <a ng-click=\"sortTableBy('tutorial_id')\">\n" +
    "          Tutorial <i ng-show=\"tableSort.order == 'tutorial_id'\" class=\"fa fa-caret-{{tableSort.reverse ? 'up' : 'down'}}\"></i>\n" +
    "        </a>\n" +
    "      </th>\n" +
    "      <th class=\"capacity_adjustment\" ng-show=\"unitRole\">\n" +
    "        <a ng-click=\"sortTableBy('capacity_adjustment')\">\n" +
    "          Capacity Adjustment <i ng-show=\"tableSort.order == 'capacity_adjustment'\" class=\"fa fa-caret-{{tableSort.reverse ? 'up' : 'down'}}\"></i>\n" +
    "        </a>\n" +
    "      </th>\n" +
    "      <th class=\"capacity\">\n" +
    "        <a ng-click=\"sortTableBy('hasSpace()')\">\n" +
    "          Capacity <i ng-show=\"tableSort.order == 'hasSpace()'\" class=\"fa fa-caret-{{tableSort.reverse ? 'up' : 'down'}}\"></i>\n" +
    "        </a>\n" +
    "      </th>\n" +
    "      <th class=\"actions\" ng-show=\"(project && selectedGroupSet.allow_students_to_manage_groups) || unitRole\">\n" +
    "        Actions\n" +
    "      </th>\n" +
    "    </tr>\n" +
    "  </thead><!--/header-->\n" +
    "  <tbody>\n" +
    "    <tr\n" +
    "      ng-class=\"{info: group == selectedGroup}\"\n" +
    "      ng-repeat=\"group in shownGroups = (filteredGroups | groupsForStudent:project:selectedGroupSet)\">\n" +
    "      <th ng-click=\"selectGroup(group)\">\n" +
    "        <span\n" +
    "          editable-text=\"group.name\"\n" +
    "          e-name=\"name\"\n" +
    "          e-form=\"groupRowForm\"\n" +
    "          e-required>\n" +
    "          {{ group.name || 'Not Set' }}\n" +
    "        </span>\n" +
    "      </th><!--/group-name-->\n" +
    "      <td ng-click=\"selectGroup(group)\">\n" +
    "        <span\n" +
    "          editable-select=\"group.tutorial_id\"\n" +
    "          e-name=\"tutorial_id\"\n" +
    "          e-form=\"groupRowForm\"\n" +
    "          e-ng-options=\"t.id as (t.abbreviation + ' - ' + t.description) for t in unit.tutorials | orderBy: 'abbreviation'\">\n" +
    "          <span tooltip=\"{{group.tutorial().description}}\" tooltip-popup-delay=\"200\" tooltip-append-to-body=\"true\">\n" +
    "            {{group.tutorial().abbreviation}}\n" +
    "          </span>\n" +
    "        </span>\n" +
    "      </td><!--/group-tutorial-->\n" +
    "      <td ng-show=\"unitRole\" ng-click=\"selectGroup(group)\">\n" +
    "        <span editable-text=\"group.capacity_adjustment\" e-form=\"groupRowForm\" e-name=\"capacity_adjustment\">\n" +
    "          {{group.capacity_adjustment}}\n" +
    "        </span>\n" +
    "      </td><!--/capacity_adjustment-->\n" +
    "      <td ng-click=\"selectGroup(group)\">\n" +
    "        <span ng-show=\"group.hasSpace()\">Available</span>\n" +
    "        <span ng-hide=\"group.hasSpace()\">Full</span>\n" +
    "      </td><!--/capacity-->\n" +
    "      <td ng-show=\"(project && selectedGroupSet.allow_students_to_manage_groups) || unitRole\">\n" +
    "        <div ng-show=\"project\">\n" +
    "          <span ng-show=\"group.hasSpace()\">\n" +
    "            <button ng-click=\"joinGroup(group)\" ng-disabled=\"projectInGroup(group)\" class=\"btn btn-success btn-sm joinButton\" ng-show=\"!group.locked && !selectedGroupSet.locked\">\n" +
    "              <i class=\"fa fa-plus\"></i> Join\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-sm joinButton\" ng-show=\"group.locked || selectedGroupSet.locked\">\n" +
    "              <i class=\"fa fa-lock\"></i> Locked \n" +
    "            </button>\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div ng-show=\"unitRole\">\n" +
    "          <form editable-form name=\"groupRowForm\" onbeforesave=\"updateGroup($data, group.id)\" ng-show=\"groupRowForm.$visible\" shown=\"inserted == group\">\n" +
    "            <button type=\"submit\" ng-disabled=\"groupRowForm.$waiting\" class=\"btn btn-default btn-sm\">\n" +
    "              <i class=\"fa fa-floppy-o\"></i> Save\n" +
    "            </button>\n" +
    "            <button type=\"button\" ng-disabled=\"groupRowForm.$waiting\" ng-click=\"groupRowForm.$cancel()\" class=\"btn btn-default btn-sm\">\n" +
    "              <i class=\"fa fa-times\"></i> Cancel\n" +
    "            </button>\n" +
    "          </form>\n" +
    "          <div ng-hide=\"groupRowForm.$visible\">\n" +
    "            <button ng-click=\"groupRowForm.$show()\" class=\"btn btn-default btn-sm\">\n" +
    "              <i class=\"fa fa-pencil\"></i> Edit\n" +
    "            </button>\n" +
    "            <a class=\"btn btn-sm lockButton\" \n" +
    "              ng-class=\"{true: 'btn-warning', false: 'btn-info'}[!group.locked]\"\n" +
    "              ng-click=\"toggleLocked(group)\">\n" +
    "              <i ng-class=\"{true: 'fa fa-lock', false: 'fa fa-unlock'}[!group.locked]\"></i>\n" +
    "              {{!group.locked && \"Lock\" || \"Unlock\"}}\n" +
    "            </a>\n" +
    "            <button ng-click=\"deleteGroup(group)\" class=\"btn btn-danger btn-sm\">\n" +
    "              <i class=\"fa fa-trash-o\"></i> Delete\n" +
    "            </button>\n" +
    "          </div><!--/actions-->\n" +
    "        </div>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "<div class=\"panel-footer text-center\" ng-show=\"pagination.show || selectedGroupSet.keep_groups_in_same_class && shownGroups.length > 0 && !unitRole\">\n" +
    "  <pagination\n" +
    "    ng-show=\"pagination.show\"\n" +
    "    total-items=\"pagination.totalSize\"\n" +
    "    ng-change=\"pagination.onChange()\"\n" +
    "    ng-model=\"pagination.currentPage\"\n" +
    "    items-per-page=\"pagination.pageSize\"\n" +
    "    max-size=\"pagination.maxSize\"\n" +
    "    class=\"pagination-sm\"\n" +
    "    boundary-links=\"true\"\n" +
    "    rotate=\"false\">\n" +
    "  </pagination>\n" +
    "\n" +
    "  <p ng-show=\"selectedGroupSet.keep_groups_in_same_class && shownGroups.length > 0 && !unitRole\">\n" +
    "    Can't see the group you need to join? Groups shown are limited to those in your allocated tutorials. Use the <a ui-sref=\"projects/tutorials({projectId: project.project_id})\">Tutorial List</a> to check and update your tutorial enrolment if needed.\n" +
    "  </p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("groups/group-set-manager/group-set-manager.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("groups/group-set-manager/group-set-manager.tpl.html",
    "<group-selector\n" +
    "  unit=\"unit\"\n" +
    "  unit-role=\"unitRole\"\n" +
    "  project=\"project\"\n" +
    "  selected-group=\"selectedGroup\"\n" +
    "  selected-group-set=\"selectedGroupSet\"\n" +
    "  show-group-set-selector=\"showGroupSetSelector\"\n" +
    "  on-select=\"newGroupSelected\"\n" +
    "  class=\"panel panel-primary\">\n" +
    "</group-selector>\n" +
    "<div class=\"panel panel-default panel-group-memberships\" ng-show=\"selectedGroup\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-11\">\n" +
    "        <h4 class=\"panel-title\">\n" +
    "          Members of <a editable-text=\"selectedGroup.name\" class=\"strong\" ng-show=\"unitRole || selectedGroupSet.allow_students_to_manage_groups\" onbeforesave=\"updateGroup($data)\">{{selectedGroup.name}}</a>\n" +
    "        </h4>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-1 text-right\">\n" +
    "        <i class=\"fa fa-lock\" ng-show=\"selectedGroup.locked\" tooltip=\"This group is locked.\"></i>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div><!--/panel-heading-->\n" +
    "  <div class=\"panel-body panel-toolbar\" ng-show=\"showMemberPanelToolbar\">\n" +
    "    <form\n" +
    "      name=\"addMemberForm\"\n" +
    "      ng-submit=\"addMember(selectedStudent)\"\n" +
    "      class=\"input-group\">\n" +
    "      <input\n" +
    "        type=\"search\"\n" +
    "        class=\"form-control\"\n" +
    "        placeholder=\"Enter student name or username...\"\n" +
    "        ng-model=\"selectedStudent\"\n" +
    "        typeahead-select-on-exact=\"true\"\n" +
    "        typeahead-on-select=\"addMember(selectedStudent)\"\n" +
    "        typeahead=\"\n" +
    "          student as student.name\n" +
    "          for student in unit.activeStudents() |\n" +
    "          studentsForGroup:selectedGroupSet:selectedGroup:members |\n" +
    "          filter:$viewValue |\n" +
    "          limitTo:8\"\n" +
    "        typeahead-wait-ms=\"200\"\n" +
    "        typeahead-editable=\"false\"\n" +
    "        autocomplete=\"off\">\n" +
    "      <div class=\"input-group-btn\">\n" +
    "        <button type=\"submit\" ng-disabled=\"!selectedStudent.project_id\" class=\"btn btn-success\">\n" +
    "          <i class=\"fa fa-plus\"></i> Add Member\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div><!--/panel-body-->\n" +
    "  <group-member-list\n" +
    "    unit=\"unit\"\n" +
    "    unit-role=\"unitRole\"\n" +
    "    project=\"project\"\n" +
    "    selected-group=\"selectedGroup\"\n" +
    "    on-members-loaded=\"groupMembersLoaded\">\n" +
    "  </group-member-list>\n" +
    "</div><!--/panel-group-memberships-->\n" +
    "");
}]);

angular.module("groups/group-set-selector/group-set-selector.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("groups/group-set-selector/group-set-selector.tpl.html",
    "<select\n" +
    "  class=\"form-control\"\n" +
    "  ng-change=\"selectGroupSet()\"\n" +
    "  ng-options=\"gs as gs.name for gs in unit.group_sets track by gs.id\"\n" +
    "  ng-model=\"selectedGroupSet\">\n" +
    "</select>\n" +
    "");
}]);

angular.module("groups/student-group-manager/student-group-manager.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("groups/student-group-manager/student-group-manager.tpl.html",
    "<div>\n" +
    "<!--\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">\n" +
    "        <span ng-show=\"selectedGroup\">\n" +
    "          Group Members of\n" +
    "          <strong>\n" +
    "            <a editable-text=\"selectedGroup.name\" ng-show=\"selectedGroupSet.allow_students_to_manage_groups\" onbeforesave=\"updateGroup($data)\">{{selectedGroup.name}}</a>\n" +
    "            <span ng-hide=\"selectedGroupSet.allow_students_to_manage_groups\">{{selectedGroup.name}}</span>\n" +
    "          </strong>\n" +
    "        </span>\n" +
    "        <span ng-hide=\"selectedGroup\">\n" +
    "          Join a Group\n" +
    "        </span>\n" +
    "      </h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <group-member-list ng-show=\"selectedGroup\" selected-group=\"selectedGroup\"></group-member-list>\n" +
    "        <div class=\"callout callout-primary\" ng-hide=\"selectedGroupSet.allow_students_to_manage_groups\">\n" +
    "          <h4>You are not part of a group.</h4>\n" +
    "          <p>Talk to your tutor or convenor and ask them to add you to a group.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "  </div>-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("groups/tutor-group-manager/tutor-group-manager.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("groups/tutor-group-manager/tutor-group-manager.tpl.html",
    "<div class=\"groupset-switcher\" ng-show=\"unit.group_sets.length > 1\">\n" +
    "    <groupset-selector></groupset-selector>\n" +
    "    <hr/>\n" +
    "  </div>\n" +
    "<div class=\"row\">\n" +
    "  <groupset-group-manager></groupset-group-manager>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/states/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/states/home/home.tpl.html",
    "<div id=\"home\">\n" +
    "  <div class=\"text-center\" ng-show=\"notEnrolled()\">\n" +
    "    <h1>\n" +
    "      You are not enrolled in {{externalName.value}}.\n" +
    "    </h1>\n" +
    "    <p class=\"lead\">\n" +
    "      Contact your unit convenor or tutor to enrol you in a subject.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\"> \n" +
    "        <div class=\"cards\" ng-hide=\"notEntrolled()\">\n" +
    "          <div class=\"card card-primary\" if-role=\"Tutor Convenor Admin\">\n" +
    "            <div class=\"card-heading\">\n" +
    "              <h4>Units You Teach</h4> \n" +
    "            </div>\n" +
    "            <!-- Units with a teaching period should be listed first -->\n" +
    "            <div class=\"list-group\" ng-show=\"filteredUnitRoles.length > 0\" my-main-directive>\n" +
    "              <!-- For units with a teaching period -->\n" +
    "              <a my-repeat-directive ng-repeat=\"unitRole in filteredUnitRoles = (unitRoles | isActiveUnitRole)\"\n" +
    "                ui-sref=\"units/tasks/inbox({unitId: unitRole.unit_id})\" class=\"list-group-item\"\n" +
    "                ng-if=\"unitRole.teachingPeriod() && unitRole.teachingPeriod().active()\">\n" +
    "                <header>\n" +
    "                  {{unitRole.unit_name}}\n" +
    "                </header>\n" +
    "                <p>\n" +
    "                  <label class=\"label label-default\">{{unitRole.teachingPeriod().name()}}</label>\n" +
    "                  <label class=\"label label-info\">{{unitRole.unit_code}}</label>\n" +
    "                  <label class=\"label label-primary\">{{unitRole.role}}</label>\n" +
    "                </p>\n" +
    "              </a>\n" +
    "              <!-- For units without a teaching period -->\n" +
    "              <a my-repeat-directive ng-repeat=\"unitRole in filteredUnitRoles = (unitRoles | isActiveUnitRole)\"\n" +
    "                ui-sref=\"units/tasks/inbox({unitId: unitRole.unit_id})\" class=\"list-group-item\"\n" +
    "                ng-if=\"!unitRole.teachingPeriod()\">\n" +
    "                <header>\n" +
    "                  {{unitRole.unit_name}}\n" +
    "                </header>\n" +
    "                <p>\n" +
    "                  <label class=\"label label-default\">{{showDate(unitRole.start_date)}}</label>\n" +
    "                  <label class=\"label label-info\">{{unitRole.unit_code}}</label>\n" +
    "                  <label class=\"label label-primary\">{{unitRole.role}}</label>\n" +
    "                </p>\n" +
    "              </a>\n" +
    "            </div>\n" +
    "            <div class=\"list-group\">\n" +
    "              <a class=\"list-group-item text-right\" ui-sref=\"view-all-units\">\n" +
    "                View All\n" +
    "                <span class=\"glyphicon glyphicon-share-alt\"></span>\n" +
    "              </a>\n" +
    "            </div>\n" +
    "            <div class=\"card-body\" ng-hide=\"filteredUnitRoles.length > 0\">\n" +
    "              You do not teach any active units\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <!--/units-taught-->\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <div class=\"cards\" ng-hide=\"notEntrolled()\">\n" +
    "          <div class=\"card card-primary\" ng-show=\"projects.length > 0\">\n" +
    "            <div class=\"card-heading\">\n" +
    "              <h4>Units You Study</h4>\n" +
    "            </div>\n" +
    "            <!-- Units with a teaching period should be listed first -->\n" +
    "            <div class=\"list-group\" my-main-directive>\n" +
    "              <!-- For units with a teaching period -->\n" +
    "              <a my-repeat-directive ng-repeat=\"project in projects\" my-repeat-directive\n" +
    "                ui-sref='projects/dashboard({projectId: project.project_id, taskAbbr: \"\"})' class=\"list-group-item\"\n" +
    "                ng-if=\"project.teachingPeriod() && project.teachingPeriod().active()\">\n" +
    "                <header>\n" +
    "                  {{project.unit_name}}\n" +
    "                </header>\n" +
    "                <p>\n" +
    "                  <label class=\"label label-default\">{{project.teachingPeriod().name()}}</label>\n" +
    "                  <label class=\"label label-info\">{{project.unit_code}}</label>\n" +
    "                </p>\n" +
    "              </a>\n" +
    "              <!-- For units without a teaching period -->\n" +
    "              <a my-repeat-directive ng-repeat=\"project in projects\"\n" +
    "                ui-sref='projects/dashboard({projectId: project.project_id, taskAbbr: \"\"})' class=\"list-group-item\"\n" +
    "                ng-if=\"!project.teachingPeriod()\">\n" +
    "                <header>\n" +
    "                  {{project.unit_name}}\n" +
    "                </header>\n" +
    "                <p>\n" +
    "                  <label class=\"label label-default\">{{showDate(project.start_date)}}</label>\n" +
    "                  <label class=\"label label-info\">{{project.unit_code}}</label>\n" +
    "                </p>\n" +
    "              </a>\n" +
    "            </div>\n" +
    "            <div class=\"list-group\">\n" +
    "              <a class=\"list-group-item text-right\" ui-sref=\"view-all-projects\">\n" +
    "                View All\n" +
    "                <span class=\"glyphicon glyphicon-share-alt\"></span>\n" +
    "              </a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!--/units-taught-->\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <div class=\"cards\" ng-hide=\"notEntrolled()\">\n" +
    "          <div class=\"card card-primary\" if-role=\"Admin Convenor\">\n" +
    "            <div class=\"card-heading\">\n" +
    "              <h4>Administration</h4>\n" +
    "            </div>\n" +
    "            <div class=\"list-group\">\n" +
    "              <a class=\"list-group-item\" ui-sref=\"admin/teachingperiods\" if-role=\"Admin\">\n" +
    "                <header>\n" +
    "                  Administer Teaching Period\n" +
    "                </header>\n" +
    "                <p class=\"text-muted\">\n" +
    "                  Add new teaching-periods, or modify existing teaching-periods.\n" +
    "                </p>\n" +
    "              </a>\n" +
    "              <a class=\"list-group-item\" ui-sref=\"admin/units\">\n" +
    "                <header>\n" +
    "                  Administer Units\n" +
    "                </header>\n" +
    "                <p class=\"text-muted\">\n" +
    "                  Add new units, or modify existing units you have convenor access to.\n" +
    "                </p>\n" +
    "              </a>\n" +
    "              <a class=\"list-group-item\" ui-sref=\"admin/users\">\n" +
    "                <header>\n" +
    "                  Administer Users\n" +
    "                </header>\n" +
    "                <p class=\"text-muted\">\n" +
    "                  Add, modify or remove existing users.\n" +
    "                </p>\n" +
    "              </a>\n" +
    "            </div>\n" +
    "            <!--/admin-->\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"spinner\" ng-hide=\"dataLoaded\">\n" +
    "    <i class=\"fa fa-pulse fa-4x fa-spinner\" ng-show=\"showSpinner\"></i>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/states/new-user-wizard/new-user-wizard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/states/new-user-wizard/new-user-wizard.tpl.html",
    "<div class=\"new-user-wizard\">\n" +
    "  <div class=\"text-center welcome-to-doubtfire clearfix col-sm-12\">\n" +
    "    <i class=\"logo\"></i>\n" +
    "    <h1>Welcome to {{externalName.value}}</h1>\n" +
    "    <p class=\"lead\">To get you up and running, let us ask you a few questions</p>\n" +
    "  </div>\n" +
    "  <div class=\"new-user-wizard clearfix col-sm-12 col-md-6 col-md-offset-3\">\n" +
    "    <div class=\"panel panel-primary text-center\">\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">{{currentStep.title}}</h3>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <p class=\"strong\">{{currentStep.subtitle}}</p>\n" +
    "        <div ng-show=\"currentStep == steps.nameStep\" class=\"col-sm-12\">\n" +
    "          <div class=\"form-group col-sm-6\">\n" +
    "            <input class=\"form-control text-center input-lg\" placeholder=\"First Name\" ng-model=\"user.first_name\" />\n" +
    "          </div>\n" +
    "          <div class=\"form-group col-sm-6\">\n" +
    "            <input class=\"form-control text-center input-lg\" placeholder=\"Last Name\" ng-model=\"user.last_name\" />\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--/name-step-->\n" +
    "        <div ng-show=\"currentStep == steps.nicknameStep\">\n" +
    "          <input\n" +
    "            class=\"form-control text-center input-lg\"\n" +
    "            placeholder=\"Nickname or Preferred Name\"\n" +
    "            ng-model=\"user.nickname\"\n" +
    "          />\n" +
    "          <p class=\"help-block col-sm-12 text-center\">You can choose to leave this blank</p>\n" +
    "        </div>\n" +
    "        <!--/nickname-step-->\n" +
    "        <div ng-show=\"currentStep == steps.studentIdStep\">\n" +
    "          <input class=\"form-control text-center input-lg\" placeholder=\"Student ID\" ng-model=\"user.student_id\" />\n" +
    "        </div>\n" +
    "        <!--/student-id-step-->\n" +
    "        <div ng-show=\"currentStep == steps.avatarStep\">\n" +
    "          <user-icon [size]=\"60\"></user-icon>\n" +
    "          <p style=\"margin-top: 1.5em\">\n" +
    "            <a\n" +
    "              href=\"http://en.gravatar.com/support/activating-your-account/\"\n" +
    "              target=\"_blank\"\n" +
    "              class=\"btn btn-lg btn-default\"\n" +
    "              >Change Avatar</a\n" +
    "            >\n" +
    "          </p>\n" +
    "          <p class=\"help-block\">\n" +
    "            Once you set your avatar on Gravatar, it will automatically be updated when you next login. If you are\n" +
    "            creating a new Gravatar account, be sure to sign up using <strong>{{user.email}}</strong>.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <!--/avatar-step-->\n" +
    "        <div ng-show=\"currentStep == steps.emailStep\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <input class=\"form-control input-lg text-center\" placeholder=\"Email Address\" ng-model=\"user.email\" />\n" +
    "          </div>\n" +
    "          <hr ng-hide=\"isStaff\" />\n" +
    "          <div class=\"form-group clearfix\" ng-hide=\"isStaff\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "              <label>Task Notifications</label>\n" +
    "              <p class=\"help-block\">Recieve email notifications when new tasks become avaliable</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-12\">\n" +
    "              <div class=\"btn-group\">\n" +
    "                <label class=\"btn btn-default\" ng-model=\"user.receive_task_notifications\" btn-radio=\"true\">\n" +
    "                  <i class=\"fa fa-check\"></i>\n" +
    "                </label>\n" +
    "                <label class=\"btn btn-default\" ng-model=\"user.receive_task_notifications\" btn-radio=\"false\">\n" +
    "                  <i class=\"fa fa-close\"></i>\n" +
    "                </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <hr />\n" +
    "          <div class=\"form-group clearfix\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "              <label>Feedback Notifications</label>\n" +
    "              <p class=\"help-block\">Recieve feedback and weekly status email notifications</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-12\">\n" +
    "              <div class=\"btn-group\">\n" +
    "                <label class=\"btn btn-default\" ng-model=\"user.receive_feedback_notifications\" btn-radio=\"true\">\n" +
    "                  <i class=\"fa fa-check\"></i>\n" +
    "                </label>\n" +
    "                <label class=\"btn btn-default\" ng-model=\"user.receive_feedback_notifications\" btn-radio=\"false\">\n" +
    "                  <i class=\"fa fa-close\"></i>\n" +
    "                </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <hr ng-hide=\"isStaff\" />\n" +
    "          <div class=\"form-group clearfix\" ng-hide=\"isStaff\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "              <label>Portfolio Notifications</label>\n" +
    "              <p class=\"help-block\">Recieve email notifications when your portfolio is ready to mark</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-12\">\n" +
    "              <div class=\"btn-group\">\n" +
    "                <label class=\"btn btn-default\" ng-model=\"user.receive_portfolio_notifications\" btn-radio=\"true\">\n" +
    "                  <i class=\"fa fa-check\"></i>\n" +
    "                </label>\n" +
    "                <label class=\"btn btn-default\" ng-model=\"user.receive_portfolio_notifications\" btn-radio=\"false\">\n" +
    "                  <i class=\"fa fa-close\"></i>\n" +
    "                </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--/email-step-->\n" +
    "        <div ng-show=\"currentStep == steps.targetGradeStep\">\n" +
    "          <div ng-repeat=\"project in projects\">\n" +
    "            <div class=\"clearfix\">\n" +
    "              <p>Select your target grade for {{project.unit_name}}</p>\n" +
    "              <div class=\"btn-group col-sm-12\">\n" +
    "                <label\n" +
    "                  ng-repeat=\"grade in grades\"\n" +
    "                  class=\"btn btn-default col-sm-3\"\n" +
    "                  ng-model=\"project.target_grade\"\n" +
    "                  btn-radio=\"{{$index}}\"\n" +
    "                >\n" +
    "                  <grade-icon\n" +
    "                    grade=\"grade\"\n" +
    "                    class=\"text-{{project.target_grade == grades.indexOf(grade) ? 'primary' : 'muted'}}\"\n" +
    "                  ></grade-icon>\n" +
    "                </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <hr />\n" +
    "          </div>\n" +
    "          <p class=\"help-block\">You can change this target at any time while you are enrolled.</p>\n" +
    "        </div>\n" +
    "        <!--/target-grade-step-->\n" +
    "        <div ng-show=\"currentStep == steps.optInToResearchStep\">\n" +
    "          <div class=\"col-sm-12 text-center\">\n" +
    "            <div class=\"btn-group\">\n" +
    "              <label\n" +
    "                class=\"btn btn-default\"\n" +
    "                ng-change=\"optInOnly && done(user)\"\n" +
    "                ng-model=\"user.opt_in_to_research\"\n" +
    "                btn-radio=\"true\"\n" +
    "              >\n" +
    "                <i class=\"fa fa-check\"></i> Yes, I'll help\n" +
    "              </label>\n" +
    "              <label\n" +
    "                class=\"btn btn-default\"\n" +
    "                ng-change=\"optInOnly && done(user)\"\n" +
    "                ng-model=\"user.opt_in_to_research\"\n" +
    "                btn-radio=\"false\"\n" +
    "              >\n" +
    "                <i class=\"fa fa-close\"></i> No, thank you\n" +
    "              </label>\n" +
    "            </div>\n" +
    "            <p class=\"help-block\">You may choose to opt-in or out later at any time.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <!--/research-step-->\n" +
    "      </div>\n" +
    "      <div class=\"panel-footer clearfix\" ng-hide=\"optInOnly\">\n" +
    "        <button class=\"btn btn-primary pull-left\" ng-click=\"moveStep(-1)\" ng-hide=\"currentStep == firstStep\">\n" +
    "          <i class=\"fa fa-arrow-left\"></i> Back\n" +
    "        </button>\n" +
    "        <button\n" +
    "          class=\"btn btn-primary pull-right\"\n" +
    "          ng-click=\"moveStep(1)\"\n" +
    "          ng-disabled=\"determineDisabledForCurrentStep()\"\n" +
    "          ng-hide=\"currentStep == lastStep\"\n" +
    "        >\n" +
    "          Next <i class=\"fa fa-arrow-right\"></i>\n" +
    "        </button>\n" +
    "        <button\n" +
    "          class=\"btn btn-success pull-right\"\n" +
    "          ng-click=\"done()\"\n" +
    "          ng-disabled=\"determineDisabledForCurrentStep()\"\n" +
    "          ng-show=\"currentStep == lastStep\"\n" +
    "        >\n" +
    "          Done <i class=\"fa fa-check\"></i>\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/project-outcome-alignment/project-outcome-alignment.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/project-outcome-alignment/project-outcome-alignment.tpl.html",
    "<tabset>\n" +
    "  <tab ng-click=\"selectTab('progress')\">\n" +
    "    <tab-heading>\n" +
    "      Outcome Achievement\n" +
    "    </tab-heading>\n" +
    "  </tab>\n" +
    "  <tab ng-click=\"selectTab('reflect')\">\n" +
    "    <tab-heading>\n" +
    "      Outcome Alignment\n" +
    "    </tab-heading>\n" +
    "  </tab>\n" +
    "</tabset><!--/tab-selector-->\n" +
    "<div class=\"panel panel-default\" ng-show=\"poaView.activeTab == 'progress'\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h3 class=\"panel-title\">\n" +
    "      Outcome Achievement\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body view-alignment\">\n" +
    "    Overall progress on unit outcome are shown below\n" +
    "  </div>\n" +
    "  <task-ilo-alignment-viewer\n" +
    "    project=\"project\"\n" +
    "    unit=\"unit\"\n" +
    "    class-stats=\"classStats\"\n" +
    "    current-progress=\"currentProgress\"\n" +
    "    summary-only=\"true\"></task-ilo-alignment-viewer>\n" +
    "</div><!--/achievement-panel-->\n" +
    "<div class=\"panel panel-default clearfix\" ng-show=\"poaView.activeTab == 'progress'\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h3 class=\"panel-title\">\n" +
    "      Visualise Achievement\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    Your achievement with all ILOs are visualised below\n" +
    "  </div>\n" +
    "  <achievement-custom-bar-chart\n" +
    "    show-legend=\"false\"\n" +
    "    unit=\"unit\"\n" +
    "    project=\"project\"\n" +
    "    class=\"col-sm-12\">\n" +
    "  </achievement-custom-bar-chart>\n" +
    "</div><!--/visualisation-achievement-->\n" +
    "<div ng-show=\"poaView.activeTab == 'reflect'\">\n" +
    "  <task-ilo-alignment-editor show-csv=\"false\" unit=\"unit\" project=\"project\"></task-ilo-alignment-editor>\n" +
    "</div><!--ilo-editor-->\n" +
    "");
}]);

angular.module("projects/project-progress-dashboard/project-progress-dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/project-progress-dashboard/project-progress-dashboard.tpl.html",
    "<div ng-if=\"unit\" class=\"project-progress-dashboard\">\n" +
    "  <div class=\"col-md-4 col-md-push-8\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-sm-6 col-md-12\">\n" +
    "        <div class=\"panel panel-primary\">\n" +
    "          <div class=\"panel-heading clearfix\">\n" +
    "            <div class=\"pull-left\">\n" +
    "              <h4 class=\"panel-title\">Task List</h4>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"panel-body\">\n" +
    "            <project-tasks-list project=\"project\" on-change=\"updateBurndownChart\" student-project-id=\"studentProjectId\" task-def=\"taskDef\" unit=\"unit\" assessing-unit-role=\"assessingUnitRole\" on-select=\"showTaskView\"></project-tasks-list>\n" +
    "          </div>\n" +
    "        </div><!--task-lists-->\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-6 col-md-12\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "          <div class=\"panel-heading\">\n" +
    "            <h3 class=\"panel-title\">Target Grade</h3>\n" +
    "            Select the grade you wish to achieve in the unit.\n" +
    "          </div>\n" +
    "          <div class=\"panel-body text-center\">\n" +
    "            <p class=\"btn-group\">\n" +
    "              <label ng-repeat=\"grade in grades\" ng-click=\"chooseGrade($index)\" class=\"btn btn-default col-sm-3 text-center\" ng-model=\"project.target_grade\" btn-radio=\"{{$index}}\">\n" +
    "                <grade-icon grade=\"grade\" tooltip=\"Select a {{grade}} as your target grade\" tooltip-append-to-body=\"true\" class=\"text-{{$index == project.target_grade ? 'primary' : 'muted'}}\"></grade-icon>\n" +
    "              </label>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div><!--right-hand-panel-->\n" +
    "\n" +
    "  <div class=\"col-md-8 col-md-pull-4\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "      <div class=\"panel-heading clearfix\">\n" +
    "        <div class=\"pull-left\">\n" +
    "          <div ng-show=\"currentVisualisation == 'burndown'\">\n" +
    "            <h3 class=\"panel-title\">Burndown Chart</h3>\n" +
    "            The Burndown chart shows how much work remains for you to achieve your target grade.\n" +
    "          </div>\n" +
    "          <div ng-show=\"currentVisualisation == 'taskSummary'\">\n" +
    "            <h3 class=\"panel-title\">Task Summary Chart</h3>\n" +
    "            Summary of each of your task statuses\n" +
    "          </div>\n" +
    "        </div><!--/headings-->\n" +
    "        <div class=\"pull-right text-right toolbar\">\n" +
    "          <div class=\"buttons\">\n" +
    "            <div class=\"btn-group\">\n" +
    "              <label class=\"btn btn-default text-center\" btn-radio=\"'burndown'\" ng-model=\"currentVisualisation\">\n" +
    "                <i class=\"fa fa-line-chart\"></i>\n" +
    "              </label>\n" +
    "              <label class=\"btn btn-default text-center\" btn-radio=\"'taskSummary'\" ng-model=\"currentVisualisation\">\n" +
    "                <i class=\"fa fa-pie-chart\"></i>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div><!--/button-switch-->\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <div class=\"burndown-chart\" ng-if=\"currentVisualisation == 'burndown'\">\n" +
    "          <progress-burndown-chart project=\"project\" unit=\"unit\"></progress-burndown-chart>\n" +
    "        </div>\n" +
    "        <div ng-if=\"currentVisualisation == 'taskSummary'\">\n" +
    "          <student-task-status-pie-chart project=\"project\"></student-task-status-pie-chart>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"panel-footer text-center\">\n" +
    "        <div ng-show=\"currentVisualisation == 'taskSummary'\">\n" +
    "          You have completed\n" +
    "          <strong>{{taskStats.numberOfTasksCompleted}}</strong>\n" +
    "          tasks and have\n" +
    "          <strong>{{taskStats.numberOfTasksRemaining}}</strong>\n" +
    "          left to complete to achieve a\n" +
    "          <strong>{{grade.names[project.target_grade]}}</strong>.\n" +
    "        </div>\n" +
    "        <div ng-show=\"currentVisualisation == 'burndown'\">\n" +
    "          Aim to keep your\n" +
    "          <strong style=\"color: #e01b5d\">Complete</strong>\n" +
    "          line close to or ahead of the\n" +
    "          <strong class=\"text-muted\">Target</strong>\n" +
    "          line to keep on track.\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div><!--primary-panel-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/all/directives/all-projects-list/all-projects-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/all/directives/all-projects-list/all-projects-list.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading clearfix\">\n" +
    "      <div class=\"pull-left\">\n" +
    "        <h4 class=\"panel-title\">Units</h4>\n" +
    "        Units you study with {{externalName.value}}\n" +
    "      </div>\n" +
    "      <form role=\"search\" class=\"pull-right form-horizontal\">\n" +
    "        <input id=\"searchbar\" class=\"input-md form-control\" placeholder=\"Search for units...\" type=\"search\" ng-model=\"search\" autocomplete=\"off\" typeahead=\"project.unit_name for project in projects | filter:$viewValue | limitTo:8\" />\n" +
    "      </form>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <div class=\"callout callout-info\" ng-hide=\"filteredProjects.length > 0\">You are not enrolled in any unit with {{externalName.value}} yet</div>\n" +
    "      <table ng-show=\"filteredProjects.length > 0\" class=\"table table-hover table-pointer\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th><a ng-click=\"sortOrder='unit_code'; reverse=!reverse\">Unit Code <i ng-show=\"sortOrder=='unit_code'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "            <th><a ng-click=\"sortOrder='unit_name'; reverse=!reverse\">Name <i ng-show=\"sortOrder=='unit_name'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "            <th><a ng-click=\"sortOrder='teachingPeriod().name()'; reverse=!reverse\">Teaching Period <i ng-show=\"sortOrder=='teachingPeriod().name()'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "            <th><a ng-click=\"sortOrder='start_date'; reverse=!reverse\">Start Date <i ng-show=\"sortOrder=='start_date'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "            <th><a ng-click=\"sortOrder='end_date'; reverse=!reverse\">End Date <i ng-show=\"sortOrder=='end_date'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "            <th><a ng-click=\"sortOrder='active'; reverse=!reverse\">Active <i ng-show=\"sortOrder=='teachingPeriod().active()'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr ng-repeat=\"project in filteredProjects = (projects | filter:search) | orderBy:sortOrder:reverse | startFrom:(currentPage - 1) * pageSize | limitTo: pageSize\" ui-sref=\"projects/dashboard({projectId: project.project_id, taskAbbr:''})\" >\n" +
    "            <td>\n" +
    "              <label class=\"label label-info\">\n" +
    "                {{project.unit_code}}\n" +
    "              </label>\n" +
    "            </td>\n" +
    "            <td>{{project.unit_name}}</td>\n" +
    "            <td ng-if=\"project.teachingPeriod()\">{{(project.teachingPeriod().name())}}</td>\n" +
    "            <td ng-if=\"!project.teachingPeriod()\">Custom</td>\n" +
    "            <td>{{project.start_date | date : 'EEE d MMM' : '+0000'}}</td>\n" +
    "            <td>{{project.end_date | date : 'EEE d MMM' : '+0000'}}</td>\n" +
    "            <td ng-if=\"project.teachingPeriod()\">\n" +
    "              <i ng-if=\"project.teachingPeriod().active() && project.active\" class=\"fa fa-check\"></i>\n" +
    "              <i ng-if=\"!project.teachingPeriod().active() || !project.active\" class=\"fa fa-times\"></i>\n" +
    "            </td>\n" +
    "            <td ng-if=\"!project.teachingPeriod()\">\n" +
    "              <i ng-if=\"project.active\" class=\"fa fa-check\"></i>\n" +
    "              <i ng-if=\"!project.active\" class=\"fa fa-times\"></i>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div class=\"panel-footer clearfix\">\n" +
    "      <pagination ng-show=\"filteredProjects.length > pageSize\" total-items=\"filteredProjects.length\" ng-model=\"currentPage\" items-per-page=\"pageSize\" max-size=\"maxSize\" class=\"pagination-sm pull-left\" boundary-links=\"true\" rotate=\"false\"></pagination>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"spinner\" ng-hide=\"dataLoaded\">\n" +
    "    <i class=\"fa fa-pulse fa-4x fa-spinner\" ng-show=\"showSpinner\"></i>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/dashboard/dashboard.tpl.html",
    "<div class=\"panel-full-screen\">\n" +
    "  <student-task-list\n" +
    "    task-data=\"taskData\"\n" +
    "    project=\"project\"\n" +
    "    refresh-tasks=\"targetGradeUpdated\"\n" +
    "    class=\"col-xs-12 col-md-3\"><!--/panel-1-->\n" +
    "  </student-task-list>\n" +
    "  <progress-dashboard\n" +
    "    project=\"project\"\n" +
    "    on-update-target-grade=\"targetGradeUpdated\"\n" +
    "    class=\"col-xs-12 col-md-9\"\n" +
    "    ng-if=\"!taskData.selectedTask\">\n" +
    "  </progress-dashboard><!--/panel-2-->\n" +
    "  <task-dashboard\n" +
    "    task=\"taskData.selectedTask\"\n" +
    "    class=\"col-xs-12 col-md-6\"\n" +
    "    ng-if=\"taskData.selectedTask\">\n" +
    "  </task-dashboard><!--/panel-2-->\n" +
    "  <task-comments-viewer\n" +
    "    [task]=\"taskData.selectedTask\"\n" +
    "    [project]=\"project\"\n" +
    "    class=\"col-xs-12 col-md-3\"\n" +
    "    refocus-on-task-change=\"true\"\n" +
    "    ng-if=\"taskData.selectedTask\">\n" +
    "  </task-comments-viewer><!--/panel-3-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/dashboard/directives/progress-dashboard/progress-dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/dashboard/directives/progress-dashboard/progress-dashboard.tpl.html",
    "<div class=\"panel panel-default panel-scrollable\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h4 class=\"panel-title\">\n" +
    "      Progress Dashboard <span ng-show=\"tutor\">for {{project.student_name}}</span>\n" +
    "    </h4>\n" +
    "  </div><!--/panel-heading-->\n" +
    "  <div class=\"panel-body\">\n" +
    "    <div class=\"col-sm-12 col-xl-6\">\n" +
    "      <div class=\"card card-default card-sm card-target-grade\">\n" +
    "        <div class=\"card-heading\">\n" +
    "          <h4>Target Grade</h4>\n" +
    "        </div><!--/target-grade-heading-->\n" +
    "        <div class=\"card-body\">\n" +
    "          <select\n" +
    "            class=\"form-control input-lg\"\n" +
    "            ng-model=\"project.target_grade\"\n" +
    "            ng-options=\"grade as grades.names[grade] for grade in grades.values\"\n" +
    "            ng-change=\"updateTargetGrade(project.target_grade)\"></select>\n" +
    "        </div><!--/target-grade-body-->\n" +
    "      </div><!--/target-grade-card-->\n" +
    "      <div class=\"card card-default card-lg card-burndown\">\n" +
    "        <div class=\"card-heading\">\n" +
    "          <h4>Progress Burndown</h4>\n" +
    "          <div class=\"text-muted\">\n" +
    "            The burndown chart shows how much work remains for you to achieve your target grade.\n" +
    "          </div>\n" +
    "        </div><!--/burndown-heading-->\n" +
    "        <div class=\"card-body\">\n" +
    "          <progress-burndown-chart project=\"project\" unit=\"project.unit()\"></progress-burndown-chart>\n" +
    "        </div><!--/burndown-body-->\n" +
    "        <div class=\"card-footer\">\n" +
    "          Aim to keep your\n" +
    "          <strong style=\"color: #e01b5d\">Complete</strong>\n" +
    "          line close to or ahead of the\n" +
    "          <strong class=\"text-muted\">Target</strong>\n" +
    "          line to keep on track.\n" +
    "        </div><!--/burndown-footer-->\n" +
    "      </div><!--/burndown-card-->\n" +
    "    </div><!--/burndown-column-->\n" +
    "    <div class=\"col-sm-12 col-xl-6\">\n" +
    "      <div class=\"card card-default card-lg card-pie-chart\">\n" +
    "        <div class=\"card-heading\">\n" +
    "          <h4>Task Statuses</h4>\n" +
    "          <div class=\"text-muted\">\n" +
    "            Breakdown summary of each of your task statuses.\n" +
    "          </div>\n" +
    "        </div><!--/pie-chart-heading-->\n" +
    "        <div class=\"card-body\">\n" +
    "          <student-task-status-pie-chart\n" +
    "            project=\"project\"\n" +
    "            update-data=\"renderTaskStatusPieChart\">\n" +
    "          </student-task-status-pie-chart>\n" +
    "        </div><!--/pie-chart-body-->\n" +
    "        <div class=\"card-footer\">\n" +
    "          You have completed\n" +
    "          <strong>{{numberOfTasks.completed}}</strong>\n" +
    "          tasks and have\n" +
    "          <strong>{{numberOfTasks.remaining}}</strong>\n" +
    "          left to complete to achieve a\n" +
    "          <strong>{{grades.names[project.target_grade]}}</strong>.\n" +
    "        </div><!--/pie-chart-footer-->\n" +
    "      </div><!--/pie-chart-card-->\n" +
    "    </div><!--/pie-chart-column-->\n" +
    "  </div><!--/panel-body-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/dashboard/directives/student-task-list/student-task-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/dashboard/directives/student-task-list/student-task-list.tpl.html",
    "<div class=\"panel panel-primary\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <input\n" +
    "      type=\"text\"\n" +
    "      class=\"form-control\"\n" +
    "      ng-model=\"filters.taskName\"\n" +
    "      ng-change=\"taskNameChanged()\"\n" +
    "      placeholder=\"Search tasks...\"\n" +
    "    />\n" +
    "  </div>\n" +
    "  <ul class=\"list-group\">\n" +
    "    <li\n" +
    "      class=\"list-group-item list-group-item-task clearfix {{project.portfolioTaskStatusClass()}}\"\n" +
    "      ng-show=\"showCreatePortfolio && nearEnd()\"\n" +
    "    >\n" +
    "      <create-portfolio-task-list-item\n" +
    "        [project]=\"project\"\n" +
    "        [set-selected-task]=\"setSelectedTask\"\n" +
    "      >\n" +
    "      </create-portfolio-task-list-item>\n" +
    "    </li>\n" +
    "\n" +
    "    <li\n" +
    "      class=\"list-group-item list-group-item-task clearfix {{task.statusClass()}}\"\n" +
    "      id=\"{{task.taskKeyToIdString()}}\"\n" +
    "      ng-click=\"setSelectedTask(task)\"\n" +
    "      ng-class=\"{selected: isSelectedTask(task)}\"\n" +
    "      ng-repeat=\"task in filteredTasks | orderBy: 'topWeight'\">\n" +
    "      <div class=\"task-data\">\n" +
    "        <h4 class=\"list-group-item-heading\">\n" +
    "          {{task.definition.name}}\n" +
    "        </h4>\n" +
    "        <p class=\"list-group-item-text\">\n" +
    "          <i class=\"fa fa-users\" aria-hidden=\"true\" ng-show=\"task.isGroupTask()\"></i><i class=\"fa fa-user\" aria-hidden=\"true\" ng-hide=\"task.isGroupTask()\"></i> {{task.definition.abbreviation}} - {{gradeNames[task.definition.target_grade]}} Task <span class=\"due-time\" ng-if=\"task.isBeforeStartDate() && !task.inSubmittedState()\"><i class=\"fa fa-hourglass-start\"></i> {{task.timeToStart()}}</span><span class=\"due-time\" ng-if=\"!task.isBeforeStartDate() && !task.inSubmittedState()\"><i class=\"fa fa-hourglass-end\"></i> {{task.timeToDue()}}</span>\n" +
    "        </p>\n" +
    "      </div><!--/task-data-->\n" +
    "      <div class=\"task-badges\">\n" +
    "        <status-icon [status]=\"task.status\"></status-icon>\n" +
    "        <div class=\"task-superscript-badges\">\n" +
    "          <span class=\"task-superscript-badge new-comments-badge\" ng-if=\"task.num_new_comments > 0\">\n" +
    "            {{task.num_new_comments}}\n" +
    "          </span>\n" +
    "          <span class=\"task-superscript-badge plagiarism-detected-badge\" ng-if=\"task.plagiarismDetected()\">\n" +
    "            <i class=\"fa fa-eye\"></i>\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div class=\"task-subscript-badges\">\n" +
    "          <span class=\"task-subscript-badge grade-badge\" ng-if=\"task.hasGrade()\">\n" +
    "            {{task.gradeDesc()}}\n" +
    "          </span>\n" +
    "          <span class=\"task-subscript-badge quality-badge\" ng-if=\"task.hasQualityPoints()\">\n" +
    "            <sup>{{task.quality_pts}}</sup>&frasl;<sub>{{task.definition.max_quality_pts}}</sub>\n" +
    "          </span>\n" +
    "          <span class=\"task-subscript-badge soon-badge\" ng-if=\"task.isDueSoon() && !task.inFinalState()\">\n" +
    "            <i class=\"fa fa-clock-o\"></i>\n" +
    "          </span>\n" +
    "          <span class=\"task-subscript-badge due-badge\" ng-if=\"task.betweenDueDateAndDeadlineDate() && !task.isPastDeadline() && !task.inFinalState()\">\n" +
    "            <i class=\"fa fa-clock-o\"></i>\n" +
    "          </span>\n" +
    "          <span class=\"task-subscript-badge due-badge\" ng-if=\"task.isPastDeadline() && !task.inFinalState()\">\n" +
    "            <i class=\"fa fa-clock-o\"></i><strong>!</strong>\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div><!--/badges-->\n" +
    "    </li><!--/task-->\n" +
    "    <li ng-show=\"filteredTasks.length == 0\" class=\"list-group-item text-center text-muted\">\n" +
    "      No tasks to display.\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/dashboard/directives/task-dashboard/directives/task-assessment-card/task-assessment-card.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/dashboard/directives/task-dashboard/directives/task-assessment-card/task-assessment-card.tpl.html",
    "<div class=\"card card-default card-sm\" ng-show=\"task.definition.is_graded || task.definition.max_quality_pts > 0\">\n" +
    "  <div class=\"card-heading\">\n" +
    "    <h4>Assessment Information</h4>\n" +
    "  </div>\n" +
    "  <div class=\"card-body\">\n" +
    "    <div ng-show=\"task.definition.is_graded\">\n" +
    "      <h5>This task {{assessmentCards.hasBeenGraded ? 'has been' : 'will be'}} assigned a grade</h5>\n" +
    "      <div ng-hide=\"hasBeenGraded(task)\">\n" +
    "        <p>\n" +
    "          This task will be graded against a grade standard. Your work will\n" +
    "          be assessed and assigned a grade according to a Pass, Credit,\n" +
    "          Distinction or High Distinction standard.\n" +
    "        </p>\n" +
    "        <div class=\"callout callout-primary\">\n" +
    "          <h5>Advice for achieving a {{gradeNames[task.project().target_grade]}}</h5>\n" +
    "          <p>\n" +
    "            As you are attempting to achieve a {{gradeNames[task.project().target_grade]}} in this unit,\n" +
    "            you should attempt to achieve a <strong>{{gradeNames[task.project().target_grade]}}</strong> grade\n" +
    "            on this task. Ask your tutor to find out more on what they are looking for when they are assessing\n" +
    "            this work to a specific grade.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div><!--/graded-task-is-not-graded-->\n" +
    "      <div ng-show=\"hasBeenGraded(task)\">\n" +
    "        Your tutor has marked you on this task to a <strong>{{gradeNames[task.grade]}}</strong> standard.\n" +
    "      </div><!--/graded-task-is-graded-->\n" +
    "    </div><!--/graded-task-->\n" +
    "    <hr ng-show=\"task.definition.is_graded && task.definition.max_quality_pts > 0\">\n" +
    "    <div ng-show=\"task.definition.max_quality_pts > 0\">\n" +
    "      <h5>\n" +
    "        <span ng-hide=\"hasBeenGivenStars(task)\">\n" +
    "          This task will be assessed on a scale to {{task.definition.max_quality_pts}}\n" +
    "        </span>\n" +
    "        <span ng-show=\"hasBeenGivenStars(task)\">\n" +
    "          This task has been assessed for quality\n" +
    "        </span>\n" +
    "      </h5>\n" +
    "      <p ng-hide=\"hasBeenGivenStars(task)\">\n" +
    "        This task will be graded against a quality scale from\n" +
    "        <strong>0 to {{task.definition.max_quality_pts}}</strong>. Your work will assessed\n" +
    "        and assigned a star rating based on the quality of your submission.\n" +
    "      </p>\n" +
    "      <div ng-show=\"hasBeenGivenStars(task)\">\n" +
    "        <rating\n" +
    "          class=\"task-quality-rating\"\n" +
    "          ng-model=\"task.quality_pts\"\n" +
    "          max=\"task.definition.max_quality_pts\"\n" +
    "          state-on=\"'fa fa-star rating-outline'\"\n" +
    "          state-off=\"'fa fa-star rating-disabled'\"\n" +
    "          readonly=\"true\">\n" +
    "        </rating>\n" +
    "        <p>\n" +
    "          You have been awarded out\n" +
    "          <strong>{{task.quality_pts}} of {{task.definition.max_quality_pts}}</strong>\n" +
    "          avaliable points for this task.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div><!--/quality-star-task-->\n" +
    "  </div><!--/assessment-body-->\n" +
    "</div><!--/assessment-card-->\n" +
    "");
}]);

angular.module("projects/states/dashboard/directives/task-dashboard/directives/task-description-card/task-description-card.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/dashboard/directives/task-dashboard/directives/task-description-card/task-description-card.tpl.html",
    "<div class=\"card card-default card-sm\">\n" +
    "  <div class=\"card-heading\">\n" +
    "    <h4>Description</h4>\n" +
    "  </div><!--/description-heading-->\n" +
    "  <div class=\"card-body\">\n" +
    "    <div class=\"markdown-to-pdf\" ng-bind-html=\"taskDef.description | markdown\"></div>\n" +
    "  </div><!--/description-body-->\n" +
    "  <div class=\"card-footer\" ng-if=\"taskDef || task\">\n" +
    "    <h5>Key Information</h5>\n" +
    "    <ul>\n" +
    "      <li>\n" +
    "        <strong>{{grades.names[taskDef.target_grade]}} Task</strong>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <strong>Start Date</strong>\n" +
    "        &mdash;\n" +
    "        Aim to start this task by <strong>{{startDate() | date  : 'EEE d MMM' : '+0000'}}</strong>.\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <strong>Due Date</strong>\n" +
    "        &mdash;\n" +
    "        Aim to complete by <strong>{{dueDate() | date  : 'EEE d MMM' : '+0000'}}</strong>.\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div><!--/key-info-footer-->\n" +
    "  <div class=\"card-footer\" ng-show=\"taskDef.has_task_sheet || taskDef.has_task_resources\">\n" +
    "    <a\n" +
    "      ng-click=\"downloadEvent('PDF')\"\n" +
    "      href=\"{{urls.taskSheet}}\"\n" +
    "      ng-show=\"taskDef.has_task_sheet\"\n" +
    "      target=\"_blank\"\n" +
    "      class=\"btn btn-primary\">\n" +
    "      <i class=\"fa fa-download\"></i>\n" +
    "      Download Task Sheet\n" +
    "    </a>\n" +
    "    <a\n" +
    "      ng-click=\"downloadEvent('Resources')\"\n" +
    "      href=\"{{urls.resources}}\"\n" +
    "      ng-show=\"taskDef.has_task_resources\"\n" +
    "      target=\"_blank\"\n" +
    "      class=\"btn btn-primary\">\n" +
    "      <i class=\"fa fa-download\"></i>\n" +
    "      Download Resources\n" +
    "    </a>\n" +
    "  </div><!--/description-footer-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/dashboard/directives/task-dashboard/directives/task-due-card/task-due-card.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/dashboard/directives/task-dashboard/directives/task-due-card/task-due-card.tpl.html",
    "<div ng-if=\"(!task.inFinalState() || (task.inTimeExceeded() && !task.isPastDeadline())) && !task.inAwaitingFeedbackState()\"> <!--Only show this if it matters... not in final or waiting for tutor input-->\n" +
    "  <div ng-if=\"task.isDueSoon() && !task.pastDueDate()\"> <!--Due soon-->\n" +
    "    <div class=\"card card-warning card-sm\">\n" +
    "      <div class=\"card-heading\">\n" +
    "        <h4>Aim To Complete Soon - Due in {{task.timeUntilDueDateDescription()}}</h4>\n" +
    "      </div>\n" +
    "      <div class=\"card-body\" ng-hide=\"task.inDiscussState()\"> <!--Due and not in discuss-->\n" +
    "        <p>\n" +
    "          This task's due date is <strong>{{task.localDueDateString()}}</strong>.\n" +
    "          You should aim to complete this task before then to keep your progress on track.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"card-body\" ng-show=\"task.inDiscussState()\"> <!--Due but in discuss-->\n" +
    "        <p>\n" +
    "          This task's due date is <strong>{{task.localDueDateString()}}</strong>.\n" +
    "          Make sure to discuss this task with your tutor as soon as possible.\n" +
    "        </p>\n" +
    "        <p class=\"text-muted\">\n" +
    "          Tasks are only considered <strong>Completed</strong> once your tutor has <strong>Discussed</strong> your work\n" +
    "          with you.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div> <!--/is due soon-->\n" +
    "  <div ng-if=\"task.betweenDueDateAndDeadlineDate()\">\n" +
    "    <div class=\"card card-danger card-sm\">\n" +
    "      <div class=\"card-heading\">\n" +
    "        <h4>Past Due Date By {{task.timePastDueDateDescription()}}</h4>\n" +
    "      </div>\n" +
    "      <div class=\"card-body\" ng-hide=\"task.inDiscussState()\"> <!--Not in submitted state and overdue-->\n" +
    "        <p>\n" +
    "          You should have completed this task by <strong>{{task.localDueDateString()}}</strong>.\n" +
    "          Try and finish it as soon as possible to avoid falling behind. You will need to\n" +
    "          request an extension in order to have this task checked and marked as complete by\n" +
    "          your tutor.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"card-body\" ng-show=\"task.inDiscussState()\"> <!--Not discussed-->\n" +
    "        <p>\n" +
    "          You should have completed this task by <strong>{{task.localDueDateString()}}</strong>.\n" +
    "          Make sure to discuss this task with your tutor as soon as possible. If this task remains on\n" +
    "          this state for an extended period, it will be marked as Time Exceeded.\n" +
    "        </p>\n" +
    "        <p class=\"text-muted\">\n" +
    "          Tasks are only considered <strong>completed</strong> once your tutor has\n" +
    "          <strong>discussed</strong> your work with you.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div> <!--/between due date and deadline-->\n" +
    "  <div ng-if=\"task.isPastDeadline()\">\n" +
    "    <div class=\"card card-danger card-sm\">\n" +
    "      <div class=\"card-heading\">\n" +
    "        <h4>Passed Due Date By {{task.timePastDueDateDescription()}}</h4>\n" +
    "      </div>\n" +
    "      <div class=\"card-body\" ng-hide=\"task.inDiscussState()\"> <!--Past deadline and not submitted-->\n" +
    "        <p>\n" +
    "          You should have completed this task by <strong>{{task.localDueDateString()}}</strong>.\n" +
    "          This task is now past the deadline and will be marked as <em>Time Exceeded</em> when submitted. You should\n" +
    "          consult with the unit assessment details to determine the impact of failing to complete this task within\n" +
    "          the allocated time.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"card-body\" ng-show=\"task.inDiscussState()\"> <!--Past deadline but in discuss or awaiting feedback-->\n" +
    "        <p>\n" +
    "          You should have completed this task by <strong>{{task.localDueDateString()}}</strong>.\n" +
    "          Make sure to discuss this task with your tutor as soon as possible.\n" +
    "        </p>\n" +
    "        <p class=\"text-muted\">\n" +
    "          Tasks are only considered <strong>Completed</strong> once it demonstrates the required standard, and it is\n" +
    "          <strong>discussed</strong> with your tutor.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div> <!--/past deadline-->\n" +
    "<div class=\"card card-info card-sm\" ng-show=\"task.inAwaitingFeedbackState()\">\n" +
    "  <div class=\"card-heading\">\n" +
    "    <h4>Wait for Tutor Feedback</h4>\n" +
    "  </div>\n" +
    "  <div class=\"card-body\">\n" +
    "    <p>\n" +
    "      You have submitted this task and should now wait for feedback from your tutor.\n" +
    "      <span ng-show=\"task.isPastDeadline()\">Do not re-upload new files at this time as the status will be changed to\n" +
    "        <strong>Time Exceeded</strong>.</span>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/dashboard/directives/task-dashboard/directives/task-outcomes-card/task-outcomes-card.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/dashboard/directives/task-dashboard/directives/task-outcomes-card/task-outcomes-card.tpl.html",
    "<div class=\"card card-default card-sm\" ng-show=\"alignments.length > 0\">\n" +
    "  <div class=\"card-heading\">\n" +
    "    <h4>Intended Learning Outcomes</h4>\n" +
    "    <div class=\"text-muted\">\n" +
    "      Teaching staff believe that completing this task will help you achieve\n" +
    "      the outcomes listed below.\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"list-group\">\n" +
    "    <button\n" +
    "      class=\"clearfix list-group-item\"\n" +
    "      ng-repeat=\"alignment in alignments\"\n" +
    "      ng-click=\"alignment.collapsed = !alignment.collapsed\">\n" +
    "      <heading>\n" +
    "        <div>\n" +
    "          <h4>\n" +
    "            <strong>{{alignment.ilo.abbreviation}}</strong>\n" +
    "            <small>{{alignment.ilo.name}}</small>\n" +
    "          </h4>\n" +
    "          <p>{{alignment.label}} Click to expand</p>\n" +
    "        </div><!--/alignment-label-->\n" +
    "        <task-ilo-alignment-rater\n" +
    "          readonly=\"true\"\n" +
    "          hide-labels=\"true\"\n" +
    "          unit=\"taskDef.unit()\"\n" +
    "          ng-model=\"alignment\">\n" +
    "        </task-ilo-alignment-rater><!--/alignment-rater-->\n" +
    "      </heading>\n" +
    "      <div class=\"panel panel-default\" collapse=\"!alignment.collapsed\">\n" +
    "        <div class=\"panel-body\">\n" +
    "          <p>\n" +
    "            <h5>Outcome Description</h5>\n" +
    "            <div class=\"markdown-to-html\" ng-bind-html=\"alignment.ilo.description | markdown\"></div>\n" +
    "          </p>\n" +
    "          <p>\n" +
    "            <h5>Rationale</h5>\n" +
    "            <div class=\"markdown-to-html\" ng-bind-html=\"alignment.description | markdown\"></div>\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/dashboard/directives/task-dashboard/directives/task-status-card/task-status-card.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/dashboard/directives/task-dashboard/directives/task-status-card/task-status-card.tpl.html",
    "<div class=\"card card-default card-sm card-status\">\n" +
    "  <div class=\"card-heading task-trigger-dropdown\" ng-show=\"triggers.length > 0\">\n" +
    "    <div class=\"task-status hidden-sm hidden-xs\" dropdown>\n" +
    "      <button\n" +
    "        type=\"button\"\n" +
    "        class=\"btn btn-default form-control input-lg {{task.statusClass()}}\"\n" +
    "        dropdown-toggle>\n" +
    "        <span class=\"pull-left\">\n" +
    "          <i class=\"{{task.statusIcon()}}\"></i> {{task.statusLabel()}}\n" +
    "        </span>\n" +
    "        <span class=\"pull-right\">\n" +
    "          <i class=\"fa fa-caret-down\"></i>\n" +
    "        </span>\n" +
    "      </button><!--/select-button-->\n" +
    "      <ul class=\"dropdown-menu\" dropdown-menu>\n" +
    "        <li\n" +
    "          ng-repeat=\"trigger in triggers\"\n" +
    "          tooltip=\"{{trigger.help.reason}}\"\n" +
    "          tooltip-append-to-body=\"true\"\n" +
    "          tooltip-popup-delay=\"1000\"\n" +
    "          tooltip-placement=\"right\">\n" +
    "          <a ng-click=\"triggerTransition(trigger.status)\">\n" +
    "            <status-icon [status]=\"trigger.status\" [show-tooltip]=\"false\"></status-icon>\n" +
    "            {{trigger.label}}\n" +
    "          </a>\n" +
    "        </li>\n" +
    "      </ul><!--/select-options-->\n" +
    "    </div><!--/desktop-dropdown-->\n" +
    "    <select\n" +
    "      class=\"form-control input-lg visible-sm visible-xs\"\n" +
    "      ng-options=\"trigger.status as trigger.label for trigger in triggers\"\n" +
    "      ng-model=\"task.status\"\n" +
    "      ng-change=\"triggerTransition(task.status)\">\n" +
    "    </select>\n" +
    "  </div><!--/trigger-heading-->\n" +
    "  <div class=\"card-heading static-task-status\" ng-hide=\"triggers.length > 0\">\n" +
    "    <status-icon class=\"pull-right\" [status]=\"task.status\" [show-tooltip]=\"false\"></status-icon>\n" +
    "    <h4>{{task.statusLabel()}}</h4>\n" +
    "  </div><!--/static-status-label-->\n" +
    "  <div class=\"card-body\">\n" +
    "    <p>{{task.statusHelp().reason}} {{task.statusHelp().action}}</p>\n" +
    "  </div><!--/status-body-->\n" +
    "  <div class=\"card-footer clearfix\" ng-if=\"task.canApplyForExtension() || (task.inSubmittedState() && task.requiresFileUpload())\">\n" +
    "    <a ng-click=\"applyForExtension()\" ng-if=\"task.canApplyForExtension()\" class=\"btn btn-success\">\n" +
    "      <i class=\"fa fa-medkit\"></i>\n" +
    "      Request Extension\n" +
    "    </a>\n" +
    "    <a\n" +
    "      ng-if=\"task.inSubmittedState() && task.requiresFileUpload()\"\n" +
    "      ng-click=\"updateFilesInSubmission()\"\n" +
    "      class=\"btn btn-primary\"\n" +
    "      tooltip=\"This allows you to update files for your portfolio, but does not update the task status.\"\n" +
    "      tooltip-popup-delay=\"250\"\n" +
    "      tooltip-append-to-body=\"true\">\n" +
    "      <i class=\"fa fa-upload\"></i>\n" +
    "      Upload new files for submission\n" +
    "    </a>\n" +
    "  </div><!--/status-footer-->\n" +
    "</div><!--/status-card-->\n" +
    "");
}]);

angular.module("projects/states/dashboard/directives/task-dashboard/directives/task-submission-card/task-submission-card.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/dashboard/directives/task-dashboard/directives/task-submission-card/task-submission-card.tpl.html",
    "<div class=\"card card-default card-sm\" ng-show=\"submission.isUploaded || submission.isProcessing\">\n" +
    "  <div class=\"card-heading\">\n" +
    "    <h4>\n" +
    "      Submission\n" +
    "      <span ng-show=\"submission.isProcessing\">Processing</span>\n" +
    "    </h4>\n" +
    "  </div><!--/card-heading-->\n" +
    "  <div class=\"card-body\" >\n" +
    "    <p ng-show=\"submission.isProcessing\">\n" +
    "      Your submission is being processed and will be avaliable to view soon. You will also\n" +
    "      be able to download your most recently submitted files.\n" +
    "    </p>\n" +
    "    <p ng-show=\"submission.isUploaded\">\n" +
    "      You can choose to download your <em ng-show=\"submission.isProcessing\">previous</em>\n" +
    "      submission or the files you uploaded below.\n" +
    "    </p>\n" +
    "    <p ng-show=\"submission.isUploaded\">\n" +
    "      You uploaded this submission <strong>{{task.submission_date | humanizedDate}}</strong>.\n" +
    "    </p>\n" +
    "    <p ng-show=\"canRegeneratePdf\">\n" +
    "      If you feel there has been an error in your submission, you can request Doubtfire to\n" +
    "      regenerate your submission under the \"Actions\" dropdown menu.\n" +
    "    </p>\n" +
    "    <p ng-show=\"canReuploadEvidence\">\n" +
    "      If you would like to submit alternate evidence for use in your portfolio, you can\n" +
    "      upload alternate files under the \"Actions\" dropdown menu.\n" +
    "    </p>\n" +
    "  </div><!--/card-body-->\n" +
    "  <div class=\"card-footer clearfix\" ng-show=\"submission.isUploaded || canReuploadEvidence || canRegeneratePdf\">\n" +
    "    <div class=\"btn-group\" ng-show=\"submission.isUploaded\" dropdown>\n" +
    "      <a href=\"{{urls.pdf}}\" target=\"_blank\" class=\"btn btn-primary\">\n" +
    "        <i class=\"fa fa-download\"></i>\n" +
    "        Download Submission\n" +
    "      </a>\n" +
    "      <button class=\"btn btn-primary\" dropdown-toggle>\n" +
    "        <span class=\"caret\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li>\n" +
    "          <a href=\"{{urls.files}}\" target=\"_blank\">\n" +
    "            Download Uploaded Files\n" +
    "          </a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div><!--/download-submission-->\n" +
    "    <div class=\"task-status pull-right\" ng-show=\"canReuploadEvidence || canRegeneratePdf\" dropdown>\n" +
    "      <button type=\"button\" class=\"btn btn-default\" dropdown-toggle>\n" +
    "        Actions <span class=\"caret\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu\" dropdown-menu>\n" +
    "        <li ng-show=\"canReuploadEvidence\">\n" +
    "          <a ng-click=\"uploadAlternateFiles()\">Upload Alternate Files</a>\n" +
    "        </li>\n" +
    "        <li ng-show=\"canRegeneratePdf\">\n" +
    "          <a ng-click=\"regeneratePdf()\">Regenerate PDF</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div><!--/more-dropdown-->\n" +
    "  </div><!--/card-footer-->\n" +
    "</div><!--/card-->\n" +
    "");
}]);

angular.module("projects/states/dashboard/directives/task-dashboard/task-dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/dashboard/directives/task-dashboard/task-dashboard.tpl.html",
    "<div class=\"panel panel-pdf panel-default panel-scrollable\">\n" +
    "  <div class=\"panel-heading\" ng-show=\"task\">\n" +
    "    <div class=\"panel-title\">\n" +
    "      {{task.definition.name}} <span ng-show=\"tutor || showFooter\">by {{task.project().student_name}}</span>\n" +
    "\n" +
    "      <div class=\"dropdown pull-right\" dropdown ng-show=\"task.has_pdf || task.definition.has_task_sheet\">\n" +
    "        <button class=\"btn btn-default dropdown-toggle\" dropdown-toggle>\n" +
    "          <i class=\"fa fa-search\"></i>\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li>\n" +
    "            <a ng-click=\"setSelectedDashboardView('details')\">View Task Details</a>\n" +
    "          </li>\n" +
    "          <li ng-show=\"task.has_pdf\">\n" +
    "            <a ng-click=\"setSelectedDashboardView('submission')\">View Submission</a>\n" +
    "          </li>\n" +
    "          <li ng-show=\"task.definition.has_task_sheet\">\n" +
    "            <a ng-click=\"setSelectedDashboardView('task')\">View Task Sheet</a>\n" +
    "          </li>\n" +
    "          <li class=\"divider\" ng-show=\"task.has_pdf\"></li>\n" +
    "          <li ng-show=\"task.has_pdf\">\n" +
    "            <a href=\"{{urls.taskSubmissionPdfAttachmentUrl}}\">Download Submission PDF</a>\n" +
    "          </li>\n" +
    "          <li ng-show=\"task.has_pdf\">\n" +
    "            <a href=\"{{urls.taskFilesUrl}}\">Download Submitted Files</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <!--/download-dropdown-->\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--/panel-header-->\n" +
    "  <div class=\"panel-body\" ng-show=\"isCurrentView('details')\">\n" +
    "    <div class=\"col-sm-12 col-xl-6\">\n" +
    "      <task-plagiarism-card [task]=\"task\"></task-plagiarism-card>\n" +
    "      <task-status-card task=\"task\"></task-status-card>\n" +
    "      <task-due-card task=\"task\"></task-due-card>\n" +
    "      <task-description-card [task-def]=\"task.definition\" [task]=\"task\" [unit]=\"task.unit()\"></task-description-card>\n" +
    "    </div>\n" +
    "    <!--/task-description-column-->\n" +
    "    <div class=\"col-sm-12 col-xl-6\">\n" +
    "      <task-assessment-card task=\"task\"></task-assessment-card>\n" +
    "      <task-submission-card task=\"task\"></task-submission-card>\n" +
    "      <task-outcomes-card task-def=\"task.definition\" unit=\"task.unit()\"></task-outcomes-card>\n" +
    "    </div>\n" +
    "    <!--/task-description-column-->\n" +
    "  </div>\n" +
    "  <!--/panel-body-->\n" +
    "  <div class=\"has-pdf\" ng-if=\"isCurrentView('task')\">\n" +
    "    <pdf-viewer [pdf-url]=\"urls.taskSheetPdfUrl\"></pdf-viewer>\n" +
    "  </div>\n" +
    "  <!--/panel-body-->\n" +
    "  <div class=\"panel-body has-pdf\" ng-if=\"isCurrentView('submission') && task.has_pdf\">\n" +
    "    <!-- <pdf-viewer-panel [pdf-url]=\"urls.taskSubmissionPdfUrl\"></pdf-viewer-panel> -->\n" +
    "    <pdf-viewer [pdf-url]=\"urls.taskSubmissionPdfUrl\"></pdf-viewer>\n" +
    "  </div>\n" +
    "  <!--/panel-body-->\n" +
    "  <div class=\"panel-body text-muted no-pdf\" ng-show=\"isCurrentView('submission') && !task.has_pdf\">\n" +
    "    <i class=\"fa fa-file-pdf-o\"></i>\n" +
    "    <span ng-show=\"task && task.processing_pdf\"> PDF Still Processing </span>\n" +
    "    <span ng-show=\"task && !task.processing_pdf\"> No Submission Uploaded </span>\n" +
    "    <span ng-hide=\"task\"> No Task Selected </span>\n" +
    "  </div>\n" +
    "  <!--/panel-body-without-pdf-->\n" +
    "  <div class=\"panel-footer\" ng-if=\"task && showFooter\">\n" +
    "    <div class=\"btn-group task-status\">\n" +
    "      <label\n" +
    "        ng-repeat=\"status in taskStatusData.keys\"\n" +
    "        ng-model=\"task.status\"\n" +
    "        ng-change=\"triggerTransition(status)\"\n" +
    "        class=\"btn btn-default btn-status {{taskStatusData.class(status)}}\"\n" +
    "        tooltip-html-unsafe=\"<h5>Mark as <strong>{{taskStatusData.labels[status]}}</strong></h5><hr><p>{{taskStatusData.help[status].reason}}</p>\"\n" +
    "        tooltip-popup-delay=\"500\"\n" +
    "        btn-radio=\"'{{status}}'\"\n" +
    "      >\n" +
    "        <i class=\"fa {{taskStatusData.icons[status]}}\"></i>\n" +
    "      </label>\n" +
    "    </div>\n" +
    "    <!--/desktop-select-task-status-->\n" +
    "  </div>\n" +
    "  <!--/panel-footer-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/groups/groups.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/groups/groups.tpl.html",
    "<div class=\"container\" ng-if=\"unit.hasGroupwork()\">\n" +
    "  <group-set-manager\n" +
    "    project=\"project\"\n" +
    "    unit=\"unit\"\n" +
    "    selected-group-set=\"selectedGroupSet\">\n" +
    "  </group-set-manager>\n" +
    "</div><!--/has-groupwork-->\n" +
    "<div class=\"container\" ng-hide=\"unit.hasGroupwork()\">\n" +
    "  <div class=\"large-notice-block\">\n" +
    "    <i class=\"fa fa-2x fa-users\"></i>\n" +
    "    <p>No Group Work</p>\n" +
    "  </div>\n" +
    "  <div class=\"text-center text-muted col-sm-12 col-md-6 col-md-offset-3\">\n" +
    "    There is no group work enabled for this unit.\n" +
    "  </div>\n" +
    "</div><!--/no-groupwork-->\n" +
    "");
}]);

angular.module("projects/states/outcomes/outcomes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/outcomes/outcomes.tpl.html",
    "<div class=\"container\" ng-show=\"unit.ilos.length > 0\">\n" +
    "  <project-outcome-alignment></project-outcome-alignment>\n" +
    "</div><!--/ilos-->\n" +
    "<div class=\"container\" ng-hide=\"unit.ilos.length > 0\">\n" +
    "  <div class=\"large-notice-block\">\n" +
    "    <i class=\"fa fa-2x fa-graduation-cap\"></i>\n" +
    "    <p>No Learning Outcomes</p>\n" +
    "  </div>\n" +
    "  <div class=\"text-muted text-center col-sm-12 col-md-6 col-md-offset-3\">\n" +
    "    There are no learning outcomes for this unit.\n" +
    "  </div>\n" +
    "</div><!--/no-ilos-->\n" +
    "\n" +
    "");
}]);

angular.module("projects/states/portfolio/directives/portfolio-add-extra-files-step/portfolio-add-extra-files-step.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/portfolio/directives/portfolio-add-extra-files-step/portfolio-add-extra-files-step.tpl.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h3 class=\"panel-title\">{{activeTab.title}}</h3>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    <p>\n" +
    "      Now is your chance to upload extra files to include in your portfolio.\n" +
    "      These files will be added at to your portfolio before your selected tasks\n" +
    "      from the previous step.\n" +
    "    </p>\n" +
    "    <div class=\"card\">\n" +
    "      <div class=\"card-heading\" ng-show=\"extraFiles().length == 0\">\n" +
    "        <h4>No files to add?</h4>\n" +
    "        <p>If you do not have any files to add you can skip this step.</p>\n" +
    "      </div>\n" +
    "      <div class=\"card-heading\" ng-show=\"extraFiles().length > 0\">\n" +
    "        <h4>Extra file{{extraFiles().length > 1 ? 's' : ''}} added</h4>\n" +
    "        <p>\n" +
    "          {{extraFiles().length > 1 ? 'The files you add will appear in the portfolio in the order shown below.' : ''}}\n" +
    "          If you want to delete a file, click the cross beside the file's name.\n" +
    "        </p>\n" +
    "        <ol>\n" +
    "          <li ng-repeat=\"file in extraFiles()\">\n" +
    "            <i class=\"fa fa-file-{{file.kind}}-o\"></i> {{file.name}}\n" +
    "            <a class=\"clear-upload text-muted\" ng-click=\"deleteFileFromPortfolio(file)\">\n" +
    "              <i class=\"fa fa-times\"></i>\n" +
    "            </a>\n" +
    "          </li>\n" +
    "        </ol>\n" +
    "      </div>\n" +
    "      <div class=\"card-body\">\n" +
    "        <div class=\"form-group clearfix\" ng-hide=\"isUploading\">\n" +
    "          <label class=\"col-sm-3 text-right\">Select type of file:</label>\n" +
    "          <div class=\"col-sm-7\">\n" +
    "            <select ng-model=\"uploadType\" class=\"form-control input-sm\">\n" +
    "              <option value=\"document\">\n" +
    "                <i class=\"fa fa-file-pdf-o\"></i> Document File</option>\n" +
    "              <option value=\"code\">Code File</option>\n" +
    "              <option value=\"image\">Image File</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <file-uploader\n" +
    "          show-name=\"false\"\n" +
    "          files=\"uploadFileData.type\"\n" +
    "          payload=\"uploadFileData.payload\"\n" +
    "          is-uploading=\"isUploading\"\n" +
    "          url=\"portfolioSubmission.portfolioUrl\"\n" +
    "          on-success=\"addNewFilesToPortfolio\">\n" +
    "        </file-uploader>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div><!--/add-some-more-files-->\n" +
    "  <div class=\"panel-footer clearfix\">\n" +
    "    <button class=\"btn btn-primary pull-left\" ng-click=\"advanceActiveTab(-1)\"><i class=\"fa fa-arrow-left\"></i> Back</button>\n" +
    "    <button class=\"btn btn-primary pull-right\" ng-click=\"advanceActiveTab(1)\">Next <i class=\"fa fa-arrow-right\"></i></button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/portfolio/directives/portfolio-grade-select-step/portfolio-grade-select-step.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/portfolio/directives/portfolio-grade-select-step/portfolio-grade-select-step.tpl.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h3 class=\"panel-title\">Select Grade</h3>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    <p>\n" +
    "      In preparing your portfolio, you need to undertake a self assessment. Use the\n" +
    "      unit's assessment criteria to determine the grade your portfolio should be awarded.\n" +
    "    </p>\n" +
    "    <div class=\"card card-danger\">\n" +
    "      <div class=\"card-heading\">\n" +
    "        <h4><i class=\"fa fa-warning\"></i> Read the assessment criteria</h4>\n" +
    "        Make sure that you have reviewed the Assessment Criteria for the grade you\n" +
    "        are applying for. Each grade will have a list of criteria that you can use\n" +
    "        to determine if you meet the requirements to achieve that grade.\n" +
    "      </div>\n" +
    "      <div class=\"card-body text-center\" style=\"font-size: 1.25em;\">\n" +
    "        <input type=\"checkbox\" class=\"pointer\" id=\"agree-read\" ng-model=\"agreedToAssessmentCriteria\">\n" +
    "        <label class=\"pointer\" for=\"agree-read\">I have read the Assessment Criteria for this unit</label>\n" +
    "      </div>\n" +
    "    </div><!--/confirm-read-assessment-criteria-->\n" +
    "    <div class=\"card card-default\" collapse=\"!agreedToAssessmentCriteria\">\n" +
    "      <div class=\"card-heading\">\n" +
    "        <h4>Grade Application</h4>\n" +
    "        Select the <strong>grade</strong> you are applying for {{unit.name}} below.\n" +
    "      </div>\n" +
    "      <div class=\"card-body text-center\">\n" +
    "        <div class=\"btn-group\">\n" +
    "          <label ng-repeat=\"grade in grades\" ng-click=\"chooseGrade($index); status.isopen=false\" class=\"btn btn-default col-sm-3\" ng-model=\"project.submitted_grade\" btn-radio=\"{{$index}}\">\n" +
    "            <grade-icon grade=\"grade\" class=\"text-{{project.submitted_grade == grades.indexOf(grade) ? 'success' : 'muted'}}\"></grade-icon>\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <p class=\"help-block\">\n" +
    "          Make sure your <strong>Learning Summary Report</strong> justifies how your portfolio demonstrates you have <strong>met all unit learning outcomes to a {{targetGrade}} level</strong>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div><!--/select-the-grade-->\n" +
    "  </div><!--/content-->\n" +
    "  <div class=\"panel-footer clearfix\">\n" +
    "    <button class=\"btn btn-primary pull-left\" ng-click=\"advanceActiveTab(-1)\"><i class=\"fa fa-arrow-left\"></i> Back</button>\n" +
    "    <button class=\"btn btn-primary pull-right\" ng-disabled=\"!agreedToAssessmentCriteria\" ng-click=\"advanceActiveTab(1)\">Next <i class=\"fa fa-arrow-right\"></i></button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/portfolio/directives/portfolio-learning-summary-report-step/portfolio-learning-summary-report-step.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/portfolio/directives/portfolio-learning-summary-report-step/portfolio-learning-summary-report-step.tpl.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h3 class=\"panel-title\">\n" +
    "      {{activeTab.title}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    <p>\n" +
    "      Upload the Learning Summary Report, the primary porfolio document which\n" +
    "      justifies your desired grade.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      Your Learning Summary Report is a <strong>summary of what you have learnt in this unit</strong>.\n" +
    "      It consists of two sections:\n" +
    "      <ol>\n" +
    "        <li>a self-assessment, and</li>\n" +
    "        <li>your reflections on the unit.</li>\n" +
    "      </ol>\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      The <strong>self-assessment</strong> indicates how your portfolio aligns\n" +
    "      with the assessment criteria, and which grade you are applying for.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      Your <strong>reflections</strong> are a personal comment on what you have\n" +
    "      learnt in the unit, and how your knowledge and skills have developed.\n" +
    "    </p>\n" +
    "    <div class=\"card card-danger\" ng-show=\"projectHasDraftLearningSummaryReport\">\n" +
    "      <div class=\"card-heading\">\n" +
    "        <h4>\n" +
    "          <i class=\"fa fa-warning\"></i> Before you submit your portfolio...\n" +
    "        </h4>\n" +
    "        Your draft learning summary has already been copied over,\n" +
    "        it is <strong>advised</strong> you upload a revised copy.\n" +
    "      </div>\n" +
    "      <div class=\"card-body text-center\" style=\"font-size: 1.25em;\">\n" +
    "        <input type=\"checkbox\" class=\"pointer\" id=\"agree-read\" ng-model=\"acceptUploadNewLearningSummary\">\n" +
    "        <label class=\"pointer\" for=\"agree-read\">I would like to upload a revised learning summary</label>\n" +
    "      </div>\n" +
    "    </div> <!--/confirmed-revised-learning-summary-->\n" +
    "\n" +
    "    <div class=\"card card-success\" ng-class=\"{'card-danger': 'projectHasLearningSummaryReport() && !forceLSRSubmit', 'card-success': '!(projectHasLearningSummaryReport() && !forceLSRSubmit)'}\" collapse=\"!acceptUploadNewLearningSummary && projectHasDraftLearningSummaryReport\">\n" +
    "      <div class=\"card-heading\" ng-show=\"projectHasLearningSummaryReport() && !forceLSRSubmit && !acceptUploadNewLearningSummary\">\n" +
    "        <h4>\n" +
    "          <i class=\"fa fa-check\"></i> Learning Summary Report Submitted\n" +
    "        </h4>\n" +
    "        Click <a ng-click=\"forceLSRSubmit = true\">here</a> to re-upload a new Learning Summary Report\n" +
    "      </div><!--/lsr-uploaded-->\n" +
    "\n" +
    "      <div class=\"card-heading\" ng-hide=\"projectHasLearningSummaryReport() && !forceLSRSubmit && !acceptUploadNewLearningSummary\">\n" +
    "        <h4>\n" +
    "          <i class=\"fa fa-warning\"></i> Before you submit the Learning Summary Report...\n" +
    "        </h4>\n" +
    "        Remember to <strong>provide a justification</strong> for why you believe\n" +
    "        you have achieved a {{targetGrade}} in {{unit.name}}.\n" +
    "      </div>\n" +
    "      <div class=\"card-body\" ng-show=\"!projectHasLearningSummaryReport() || (projectHasLearningSummaryReport() && (forceLSRSubmit || acceptUploadNewLearningSummary))\">\n" +
    "        <file-uploader\n" +
    "          files=\"portfolioSubmission.learningSummaryReportFileUploadData.type\"\n" +
    "          payload=\"portfolioSubmission.learningSummaryReportFileUploadData.payload\"\n" +
    "          url=\"portfolioSubmission.portfolioUrl\"\n" +
    "          on-success=\"addNewFile\"></file-uploader>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel-footer clearfix\">\n" +
    "    <button class=\"btn btn-primary pull-left\" ng-click=\"advanceActiveTab(-1)\"><i class=\"fa fa-arrow-left\"></i> Back</button>\n" +
    "    <button class=\"btn btn-primary pull-right\" ng-disabled=\"!projectHasLearningSummaryReport()\" ng-click=\"advanceActiveTab(1)\">Next <i class=\"fa fa-arrow-right\"></i></button>\n" +
    "    <div class=\"help-block pull-right text-right col-md-8 col-sm-12\" ng-hide=\"projectHasLearningSummaryReport()\">\n" +
    "      You're missing a Learning Summary Report. Upload one to continue.\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/portfolio/directives/portfolio-review-step/portfolio-review-step.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/portfolio/directives/portfolio-review-step/portfolio-review-step.tpl.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h3 class=\"panel-title\">\n" +
    "      {{activeTab.title}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    <div class=\"card card-danger\" ng-hide=\"hasLSR && hasTasksSelected\">\n" +
    "      <div class=\"card-heading\">\n" +
    "        <h4>\n" +
    "          <i class=\"fa fa-warning\"></i> There are issues with your portfolio\n" +
    "        </h4>\n" +
    "      </div>\n" +
    "      <div class=\"card-body\">\n" +
    "        <p ng-hide=\"hasLSR\">\n" +
    "          Your portfolio <strong>must</strong> include a learning summary report.\n" +
    "          Upload this before you schedule your portfolio to be compiled.\n" +
    "        </p>\n" +
    "        <p ng-hide=\"hasTasksSelected\">\n" +
    "          <p ng-show=\"unitHasILOs\">\n" +
    "            Your portfolio <strong>must</strong> include tasks aligned to the\n" +
    "            unit's <strong>{{unit.ilos.length}} intended learning outcomes</strong>.\n" +
    "            Please indicate which tasks you think align to the unit's learning\n" +
    "            outcomes before you schedule your portfolio to be compiled.\n" +
    "          </p>\n" +
    "          <p ng-hide=\"unitHasILOs\">\n" +
    "            Your portfolio <strong>must</strong> include tasks that you have\n" +
    "            completed this teaching period. Please indicate which tasks you you would\n" +
    "            like to include in your portfolio before you schedule your portfolio\n" +
    "            to be compiled.\n" +
    "          </p>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div><!--/warnings-->\n" +
    "    <div class=\"card card-default\" ng-show=\"portfolioIsCompiling\">\n" +
    "      <div class=\"card-heading\">\n" +
    "        <h4>Portfolio Processing</h4>\n" +
    "      </div>\n" +
    "      <div class=\"card-body\">\n" +
    "        <p>\n" +
    "          Your portfolio compilation is scheduled with {{externalName.value}}.\n" +
    "          This process will take some time, check back soon to see if your\n" +
    "          portfolio is available.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div><!--/processing-->\n" +
    "    <div ng-show=\"canCompilePortfolio\">\n" +
    "      <p>\n" +
    "        {{externalName.value}} will create your portfolio once you are happy with your\n" +
    "        submissions so far.\n" +
    "      </p>\n" +
    "      <div ng-show=\"extraFiles().length > 0\">\n" +
    "        <p>\n" +
    "          You have attached <strong>{{extraFiles().length}} extra file{{extraFiles().length > 1 ? 's' : ''}}</strong>\n" +
    "          to your portfolio. You may add more files or remove {{extraFiles().length > 1 ? 'these' : 'this'}}\n" +
    "          file{{extraFiles().length > 1 ? 's' : ''}} in the previous step. Each file is listed\n" +
    "          in order of attachment below:\n" +
    "        </p>\n" +
    "        <ol>\n" +
    "          <li ng-repeat=\"file in extraFiles()\">\n" +
    "            <i class=\"fa fa-file-{{file.kind}}-o\"></i> {{file.name}}\n" +
    "          </li>\n" +
    "        </ol>\n" +
    "      </div>\n" +
    "      <div ng-show=\"selectedTasks().length > 0\">\n" +
    "        <p>\n" +
    "          You have included <strong>{{selectedTasks().length}} tasks</strong> in your portfolio. If you wish to add or remove some of these tasks,\n" +
    "          please review the <em>Select Tasks</em> step to adjust your alignments of each\n" +
    "          task to the unit's learning outcomes. Each task will be attached in the order below:\n" +
    "        </p>\n" +
    "        <ol>\n" +
    "          <li ng-repeat=\"task in selectedTasks()\">\n" +
    "            <label class=\"label label-info\">{{task.definition.abbreviation}}</label>\n" +
    "            {{task.definition.name}}\n" +
    "          </li>\n" +
    "        </ol>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"card card-default\" ng-show=\"canCompilePortfolio\">\n" +
    "      <div class=\"card-heading\">\n" +
    "        <h4>Create Your Portfolio</h4>\n" +
    "      </div>\n" +
    "      <div class=\"card-body\">\n" +
    "        <p>\n" +
    "          Once you click Create Portfolio, the construction of your portfolio will\n" +
    "          be scheduled with {{externalName.value}}. This process will take some time, and you\n" +
    "          will be emailed when your portfolio is ready to review if you have enabled\n" +
    "          portfolio notifications.\n" +
    "        </p>\n" +
    "        <p class=\"strong\">\n" +
    "          If you would like to make any further changes after you have created\n" +
    "          your portfolio, you will need to delete and recreate your portfolio.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"card-footer\">\n" +
    "        <button class=\"btn btn-success form-control\" ng-click=\"toggleCompileProject()\">\n" +
    "          <i class=\"fa fa-book\"></i> Create My Portfolio\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div><!--/create-portfolio-->\n" +
    "    <div class=\"card card-default\" ng-show=\"project.portfolio_available\">\n" +
    "      <div class=\"card-heading\">\n" +
    "        <h4>Download Portfolio</h4>\n" +
    "      </div>\n" +
    "      <div class=\"card-body\">\n" +
    "        This is the <strong>exact same document</strong> your assessor will see\n" +
    "      </div>\n" +
    "      <div class=\"card-footer\">\n" +
    "        <button class=\"btn btn-danger\" ng-click=\"deletePortfolio()\">\n" +
    "          <i class=\"fa fa-trash-o\"></i> Delete Portfolio\n" +
    "        </button>\n" +
    "        <a href=\"{{project.portfolioUrlAsAttachment()}}\" target=\"_blank\" class=\"btn btn-success\">\n" +
    "          <i class=\"fa fa-download\"></i> Download Portfolio\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel-footer clearfix\">\n" +
    "    <button class=\"btn btn-primary pull-left\" ng-click=\"advanceActiveTab(-1)\"><i class=\"fa fa-arrow-left\"></i> Back</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/portfolio/directives/portfolio-tasks-step/portfolio-tasks-step.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/portfolio/directives/portfolio-tasks-step/portfolio-tasks-step.tpl.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\" ng-show=\"unitHasILOs\">\n" +
    "    <h3 class=\"panel-title\"> Relate ILOs to Tasks </h3>\n" +
    "  </div>\n" +
    "  <div class=\"panel-heading\" ng-hide=\"unitHasILOs\">\n" +
    "    <h3 class=\"panel-title\"> Select tasks to include </h3>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    <p ng-show=\"unitHasILOs\">\n" +
    "      For each task, please indicate whether you think this task is related to one\n" +
    "      or more of the unit's <strong>{{unit.ilos.length}} learning outcomes</strong>.\n" +
    "      You may provide a rationale for each task selected, which will be noted in\n" +
    "      your portfolio.\n" +
    "    </p>\n" +
    "    <p ng-hide=\"unitHasILOs\">\n" +
    "      Please indicate which tasks you would like to include in your portfolio.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "  <task-ilo-alignment-editor\n" +
    "    unit=\"unit\"\n" +
    "    class=\"card-body\"\n" +
    "    project=\"project\"\n" +
    "    hide-panel=\"true\"\n" +
    "    hide-graph=\"true\"\n" +
    "    show-include-tasks=\"true\"></task-ilo-alignment-editor>\n" +
    "  <div class=\"panel-footer clearfix\">\n" +
    "    <button class=\"btn btn-primary pull-left\" ng-click=\"advanceActiveTab(-1)\"><i class=\"fa fa-arrow-left\"></i> Back</button>\n" +
    "    <button class=\"btn btn-primary pull-right\" ng-disabled=\"noTasksSelected()\" ng-click=\"advanceActiveTab(1)\">Next <i class=\"fa fa-arrow-right\"></i></button>\n" +
    "    <div class=\"help-block pull-right col-sm-4\" ng-show=\"noTasksSelected()\">\n" +
    "      You need to select at least one task {{unitHasILOs ? 'that is aligned to an ILO above' : 'above'}}, otherwise your portfolio will be consist of no tasks.\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/portfolio/directives/portfolio-welcome-step/portfolio-welcome-step.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/portfolio/directives/portfolio-welcome-step/portfolio-welcome-step.tpl.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h3 class=\"panel-title\">Portfolio Preparation</h3>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    <p>Preparing your portfolio involves 5 steps:</p>\n" +
    "    <ol>\n" +
    "      <li>Select your <strong>Grade</strong> you are applying for</li>\n" +
    "      <li>Upload your <strong>Learning Summary Report</strong></li>\n" +
    "      <li>Select the <strong>Tasks</strong> you want included</li>\n" +
    "      <li>Upload any <strong>Other Resources</strong> you want to add</li>\n" +
    "      <li><strong>Compile</strong> your resources into your portfolio and review</li>\n" +
    "    </ol>\n" +
    "    <p>\n" +
    "      Once you have completed all of these steps, your portfolio will be prepared by {{externalName.value}} and you will be notified when it is ready. You can then check your work, and if you want to make any corrections repeat these steps to create a new version of your portfolio.\n" +
    "    </p>\n" +
    "  </div><!--/welcome-step-->\n" +
    "  <div class=\"panel-footer clearfix\">\n" +
    "    <button class=\"btn btn-primary pull-right\" ng-click=\"advanceActiveTab(1)\">Next <i class=\"fa fa-arrow-right\"></i></button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/portfolio/portfolio.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/portfolio/portfolio.tpl.html",
    "<div class=\"container\" id=\"portfolio-state\">\n" +
    "  <tabset class=\"tabset-icon\">\n" +
    "    <tab ng-repeat=\"tab in tabs | toArray | orderBy: 'seq'\" active=\"tab.active\" disabled=\"true\">\n" +
    "      <tab-heading>\n" +
    "        <strong>Step {{tab.seq}}:</strong> {{tab.title}}\n" +
    "      </tab-heading>\n" +
    "    </tab>\n" +
    "  </tabset><!--/tabs-->\n" +
    "  <portfolio-welcome-step ng-if=\"activeTab == tabs.welcomeStep\"></portfolio-welcome-step>\n" +
    "  <portfolio-grade-select-step ng-if=\"activeTab == tabs.gradeStep\"></portfolio-grade-select-step>\n" +
    "  <portfolio-learning-summary-report-step ng-if=\"activeTab == tabs.summaryStep\"></portfolio-learning-summary-report-step>\n" +
    "  <portfolio-tasks-step ng-if=\"activeTab == tabs.taskStep\"></portfolio-tasks-step>\n" +
    "  <portfolio-add-extra-files-step ng-if=\"activeTab == tabs.otherFilesStep\"></portfolio-add-extra-files-step>\n" +
    "  <portfolio-review-step ng-if=\"activeTab == tabs.reviewStep\"></portfolio-review-step>\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/states/tutorials/tutorials.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/states/tutorials/tutorials.tpl.html",
    "<div class=\"container\" id=\"tutorials-state\">\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h4 class=\"panel-title\">Select a Tutorial</h4>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <p>\n" +
    "        Click the plus on the specific tutorial to enrol in that tutorial, or click\n" +
    "        the minus icon to withdraw from your current tutorial.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <table class=\"table table-condensed table-hover\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th class=\"stream\" ng-show=\"unit.tutorial_streams.length > 0\">\n" +
    "            <a ng-click=\"sortOrder='tutorial_stream.name'; reverse=!reverse\">Stream</a>\n" +
    "          </th>\n" +
    "          <th class=\"campus\">\n" +
    "            <a ng-click=\"sortOrder='campus.name'; reverse=!reverse\">Campus</a>\n" +
    "          </th>\n" +
    "          <th class=\"code\">\n" +
    "            <a ng-click=\"sortOrder='abbreviation'; reverse=!reverse\">Code</a>\n" +
    "          </th>\n" +
    "          <th class=\"day\">\n" +
    "            <a ng-click=\"sortOrder='meeting_day'; reverse=!reverse\">Day</a>\n" +
    "          </th>\n" +
    "          <th class=\"time\">\n" +
    "            <a ng-click=\"sortOrder='meeting_time'; reverse=!reverse\">Time</a>\n" +
    "          </th>\n" +
    "          <th class=\"room\">\n" +
    "            <a ng-click=\"sortOrder='meeting_location'; reverse=!reverse\">Room</a>\n" +
    "          </th>\n" +
    "          <th class=\"tutor\">\n" +
    "            <a ng-click=\"sortOrder='tutorName'; reverse=!reverse\">Tutor</a>\n" +
    "          </th>\n" +
    "          <th class=\"actions\">\n" +
    "            Actions\n" +
    "          </th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr ng-repeat=\"tutorial in unit.tutorials | tutorialCampusFilter:project | orderBy:sortOrder:reverse\"\n" +
    "          ng-class=\"{'info': tutorial == project.tutorial}\">\n" +
    "          <td ng-show=\"unit.tutorial_streams.length > 0\">{{tutorial.tutorial_stream.name || 'All'}}</td>\n" +
    "          <td>{{tutorial.campus.name || 'All'}}</td>\n" +
    "          <td>{{tutorial.abbreviation}}</td>\n" +
    "          <td>{{tutorial.meeting_day}}</td>\n" +
    "          <td>{{tutorial.meeting_time | date: 'shortTime'}}</td>\n" +
    "          <td>{{tutorial.meeting_location}}</td>\n" +
    "          <td>{{tutorial.tutorName}}</td>\n" +
    "          <td>\n" +
    "            <button\n" +
    "              class=\"btn btn-default btn-sm\"\n" +
    "              ng-click =\"project.switchToTutorial(tutorial)\">\n" +
    "              <div ng-hide=\"project.isEnrolledIn(tutorial.id)\"><i class=\"fa fa-plus\"></i> Enrol</div>\n" +
    "              <div ng-show=\"project.isEnrolledIn(tutorial.id)\"><i class=\"fa fa-minus\"></i> Withdraw</div>\n" +
    "            </button>\n" +
    "          </td>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("sessions/states/sign-in/sign-in.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sessions/states/sign-in/sign-in.tpl.html",
    "<div id=\"sign-in\" class=\"center-full-screen\" ng-if=\"authMethodLoaded\">\n" +
    "  <div ng-if=\"noIE\" class=\"no-ie\">\n" +
    "    <h1 class=\"logo\">\n" +
    "      <p>\n" +
    "        <a href=\"http://www.apple.com/safari/\" tooltip=\"Safari is compatible with {{externalName.value}}\" tooltip-append-to-body=\"true\">\n" +
    "          <i class=\"fa fa-safari text-primary\"></i>\n" +
    "        </a>\n" +
    "        <a href=\"http://www.google.com/chrome\" tooltip=\"Chrome is compatible with {{externalName.value}}\" tooltip-append-to-body=\"true\">\n" +
    "          <i class=\"fa fa-chrome text-primary\"></i>\n" +
    "        </a>\n" +
    "        <a href=\"http://www.firefox.com/\" tooltip=\"Firefox is compatible with {{externalName.value}}\" tooltip-append-to-body=\"true\">\n" +
    "          <i class=\"fa fa-firefox text-primary\"></i>\n" +
    "        </a>\n" +
    "        <a href=\"http://browsehappy.com\" tooltip=\"This version of Internet Explorer is not compatible with {{externalName.value}}\" tooltip-append-to-body=\"true\">\n" +
    "          <i class=\"fa fa-internet-explorer text-danger\"></i>\n" +
    "        </a>\n" +
    "      </p>\n" +
    "      {{externalName.value}}\n" +
    "    </h1>\n" +
    "    <p class=\"upgrade\"> To use {{externalName.value}}, you should <a href=\"http://browsehappy.com/\">upgrade your browser</a></p>\n" +
    "  </div>\n" +
    "  <div ng-if=\"!noIE\" class=\"login\">\n" +
    "    <h1 class=\"logo\">\n" +
    "      <i class=\"logo\"></i> {{externalName.value}}\n" +
    "      <p class=\"lead\">Learning Management System<p>\n" +
    "    </h1>\n" +
    "    <form name=\"form\" ng-submit=\"signIn()\" ng-if=\"aafLogin === false\">\n" +
    "      <div class=\"username-password-entry\" ng-class=\"{'invalid-credentials': invalidCredentials}\">\n" +
    "        <input autofocus class=\"form-control\" name=\"username\" type=\"username\" placeholder=\"Username\" ng-model=\"session.username\" auto-fill-sync required />\n" +
    "        <input class=\"form-control\" name=\"password\" type=\"password\" placeholder=\"Password\" ng-model=\"session.password\" password-validate auto-fill-sync required />\n" +
    "      </div>\n" +
    "      <button class=\"btn btn-lg btn-primary btn-block text-center\" type=\"submit\">\n" +
    "        <span ng-hide=\"signingIn\">Sign In</span>\n" +
    "        <i class=\"fa fa-spinner fa-pulse\" ng-show=\"signingIn\"></i>\n" +
    "      </button>\n" +
    "      <label class=\"checkbox remember-me\">\n" +
    "        <input type=\"checkbox\" ng-model=\"session.remember_me\"></input>\n" +
    "        <span>Remember Me</span>\n" +
    "      </label>\n" +
    "    </form>\n" +
    "    <form name=\"form\" ng-if=\"aafLogin\">\n" +
    "      <a class=\"btn btn-lg btn-primary btn-block text-center\" ng-href=\"{{aafLogin}}\">\n" +
    "        Click to Sign In...\n" +
    "      </a>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "  <footer class=\"about-doubtfire text-center\">\n" +
    "    <a href=\"\" ng-click=\"openAboutModal()\">About {{externalName.value}}</a>\n" +
    "  </footer>\n" +
    "</div>\n" +
    "<div class=\"center-full-screen\" ng-show=\"authMethodFailed || waitingAWhile\">\n" +
    "  <i class=\"fa fa-spinner fa-pulse fa-5x\" ng-if=\"!authMethodLoaded && waitingAWhile && !authMethodFailed\"></i>\n" +
    "  <div class=\"panel panel-danger\" ng-if=\"authMethodFailed\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">{{externalName.value}} Down</h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <p>{{externalName.value}} cannot connect to the server.</p>\n" +
    "      <p>Please check that <a href=\"{{api}}\"><code>{{api}}</code></a> is up and running or try again in a while.</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("sessions/states/sign-out/sign-out.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sessions/states/sign-out/sign-out.tpl.html",
    "<div class=\"container text-center center-full-screen\">\n" +
    "  <h1>\n" +
    "    <i class=\"fa fa-sign-out fa-5x\"></i>\n" +
    "    <br>\n" +
    "    Signing out...\n" +
    "  </h1>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/modals/grade-task-modal/grade-task-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/modals/grade-task-modal/grade-task-modal.tpl.html",
    "<div class=\"grade-task-modal\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h3>Assess Task Quality</h3>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body text-center\">\n" +
    "    <div ng-if=\"task.definition.is_graded\">\n" +
    "      <p>Please provide a grade to change the student's status for task <label class=\"label label-info\">{{task.definition.abbreviation}}</label>.</p>\n" +
    "      <p class=\"btn-group\">\n" +
    "        <label ng-repeat=\"idx in gradeValues\" class=\"btn btn-default col-sm-15 text-center\" ng-model=\"data.desiredGrade\" btn-radio=\"{{idx}}\">\n" +
    "          <grade-icon grade=\"grades[idx]\" tooltip=\"This student completed the task to a {{grades[idx]}} standard\" tooltip-append-to-body=\"true\"></grade-icon>\n" +
    "        </label>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div ng-if=\"task.definition.max_quality_pts > 0\">\n" +
    "      <p>Please provide a quality rating for task <label class=\"label label-info\">{{task.definition.abbreviation}}</label>.</p>\n" +
    "      <rating class=\"task-quality-rating\" ng-click=\"checkClearRating()\" ng-model=\"data.rating\" on-hover=\"hoveringOver(value)\" on-leave=\"hoveringOver(null)\" max=\"numStars\" state-on=\"'fa fa-3x fa-star icon-colorful'\" state-off=\"'fa fa-3x fa-star icon-disable'\"></rating>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-default\" ng-click=\"dismiss()\">\n" +
    "      <i class=\"fa fa-times\"></i>\n" +
    "    </button>\n" +
    "    <button class=\"btn btn-primary\" ng-click=\"close()\" ng-disabled=\"task.is_graded && data.desiredGrade == null\">\n" +
    "      <i class=\"fa fa-check\"></i>\n" +
    "    </button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/modals/plagiarism-report-modal/plagiarism-report-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/modals/plagiarism-report-modal/plagiarism-report-modal.tpl.html",
    "<div class=\"plagiarism-report-modal\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h3>Similarity Report</h3>\n" +
    "  </div><!--/modal-header-->\n" +
    "  <div class=\"modal-body clearfix\">\n" +
    "    <task-plagiarism-report-viewer task=\"task\"></task-plagiarism-report-viewer>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-default\" ng-click=\"$dismiss()\">\n" +
    "      <i class=\"fa fa-times\"></i> Close\n" +
    "    </button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/modals/upload-submission-modal/upload-submission-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/modals/upload-submission-modal/upload-submission-modal.tpl.html",
    "<div class=\"upload-submission-modal\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h3>Submit\n" +
    "      <strong>{{task.definition.abbreviation}}</strong> as\n" +
    "      <select \n" +
    "        class=\"form-control input-lg submission-type\"\n" +
    "        ng-if=\"!uploader.isUploading\"\n" +
    "        ng-change=\"onSelectNewSubmissionType(submissionType)\"\n" +
    "        ng-model=\"submissionType\"\n" +
    "        ng-options=\"id as label for (id, label) in submissionTypes\">\n" +
    "      </select>\n" +
    "      <span ng-show=\"uploader.isUploading\">\n" +
    "        {{submissionTypes[submissionType]}}\n" +
    "      </span>\n" +
    "    </h3>\n" +
    "  </div><!--/modal-header-->\n" +
    "  <div class=\"modal-body\">\n" +
    "    <div \n" +
    "      class=\"state state-group\"\n" +
    "      ng-class=\"{'state-hidden-left': isHidden('group').left,\n" +
    "                 'state-hidden-right': isHidden('group').right}\">\n" +
    "      <div class=\"card card-default\">\n" +
    "        <div class=\"card-heading\">\n" +
    "          <h4>\n" +
    "            Team Contribution\n" +
    "          </h4>\n" +
    "          <p>\n" +
    "            Please rate each team member's effort on working on {{task.definition.name}} \n" +
    "            by clicking on a <i class=\"fa fa-child\"></i> icon that represents their \n" +
    "            assigned effort.\n" +
    "          </p>\n" +
    "          <p class=\"text-muted\">\n" +
    "            To mark a team member as contributing <strong> no effort </strong> click\n" +
    "            on a <i class=\"fa fa-child\"></i> icon twice.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <!--/card-heading-->\n" +
    "        <group-member-contribution-assigner \n" +
    "          task=\"task\"\n" +
    "          class=\"card-body\"\n" +
    "          project=\"task.project()\"\n" +
    "          team=\"team\">\n" +
    "        </group-member-contribution-assigner><!--/group-member-contribution-->\n" +
    "      </div><!--/card-group-->\n" +
    "    </div><!--/state-group-->\n" +
    "    <div class=\"state state-files\" ng-class=\"{'state-hidden-left': isHidden('files').left,\n" +
    "                 'state-hidden-right': isHidden('files').right,\n" +
    "                 'state-files-uploading': uploader.isUploading}\">\n" +
    "      <div ng-class=\"{'card card-default': !uploader.isUploading}\">\n" +
    "        <div class=\"card-heading\" ng-hide=\"uploader.isUploading\">\n" +
    "          <h4>\n" +
    "            Select {{submissionType == 'need_help' ? 'files' : 'evidence'}} to upload\n" +
    "          </h4>\n" +
    "          <span ng-hide=\"submissionType == 'need_help'\">\n" +
    "            Select files from your device that show evidence of your work until no more required files are pending.\n" +
    "          </span>\n" +
    "          <span ng-show=\"submissionType == 'need_help'\">\n" +
    "            Select files from your device that you need help with. You will need to upload all required files for this submission to\n" +
    "            get help on this task but it does not matter if they are not finished.\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div class=\"card-body\">\n" +
    "          <file-uploader \n" +
    "            files=\"uploader.files\"\n" +
    "            url=\"uploader.url\"\n" +
    "            payload=\"uploader.payload\"\n" +
    "            single-drop-zone=\"true\"\n" +
    "            show-upload-button=\"false\"\n" +
    "            reset-after-upload=\"false\"\n" +
    "            is-ready=\"uploader.isReady\"\n" +
    "            is-uploading=\"uploader.isUploading\"\n" +
    "            initiate-upload=\"uploader.start\"\n" +
    "            on-click-failure-cancel=\"uploader.onFailureCancel\"\n" +
    "            on-before-upload=\"uploader.onBeforeUpload\"\n" +
    "            on-success=\"uploader.onSuccess\"\n" +
    "            on-complete=\"uploader.onComplete\"></file-uploader>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!--/state-files-->\n" +
    "    <div \n" +
    "      class=\"state state-alignment\" \n" +
    "      ng-class=\"{'state-hidden-left': isHidden('alignment').left,\n" +
    "                 'state-hidden-right': isHidden('alignment').right}\">\n" +
    "      <div class=\"card card-default\">\n" +
    "        <div class=\"card-heading\">\n" +
    "          <h4>\n" +
    "            Learning Outcome Alignment\n" +
    "          </h4>\n" +
    "          <p>\n" +
    "            Please rate the relevancy of this task to the specific learning outcome.\n" +
    "            You <strong>must</strong> relate this task to at least one outcome.\n" +
    "          </p>\n" +
    "          <p class=\"text-muted\">\n" +
    "            If you think the task is not related to a specific outcome, click the highest filled circle to remove its relevancy.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <!--/card-heading-->\n" +
    "        <div class=\"list-group\">\n" +
    "          <div class=\"list-group-item clearfix\" ng-repeat=\"ilo in ilos | orderBy: 'ilo_number'\">\n" +
    "            <div class=\"col-sm-12 col-md-7 pointer\" ng-click=\"ilo.collapsed = !ilo.collapsed\">\n" +
    "              <h4>\n" +
    "                <strong>{{ilo.abbreviation}}</strong>\n" +
    "                <small>{{ilo.name}}</small>\n" +
    "              </h4>\n" +
    "              <div>Staff believe that {{ilo.staffAlignment.label | lcfirst}}. Click to expand.</div>\n" +
    "              <div class=\"panel panel-default\" collapse=\"!ilo.collapsed\">\n" +
    "                <div class=\"panel-body\">\n" +
    "                  <p>\n" +
    "                    <h5>Outcome Description</h5>\n" +
    "                    <div class=\"markdown-to-html\" ng-bind-html=\"ilo.description | markdown\"></div>\n" +
    "                  </p>\n" +
    "                  <p ng-show=\"ilo.staffAlignment.rating > 0\">\n" +
    "                    <h5>Rationale</h5>\n" +
    "                    <div class=\"markdown-to-html\" ng-bind-html=\"ilo.staffAlignment.rationale | markdown\"></div>\n" +
    "                  </p>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div><!--/ilo-description-->\n" +
    "            <div class=\"col-sm-12 col-md-5\">\n" +
    "              <task-ilo-alignment-rater\n" +
    "                readonly=\"false\"\n" +
    "                unit=\"task.unit()\"\n" +
    "                show-zero-rating=\"true\"\n" +
    "                ng-model=\"alignments[ilo.id]\">\n" +
    "              </task-ilo-alignment-rater>\n" +
    "            </div><!--/alignment-rater-->\n" +
    "          </div>\n" +
    "        </div><!--/alignment-list-group-->\n" +
    "        <div class=\"card-footer\">\n" +
    "          <p>\n" +
    "            Jusitfy your relevancy alignments with a comment to explain your choices.\n" +
    "          </p>\n" +
    "          <textarea ng-model=\"alignmentsRationale\" class=\"form-control input-lg\" rows=\"3\" placeholder=\"My rationale is...\">\n" +
    "          </textarea>\n" +
    "        </div><!--/comments-for-alignment-->\n" +
    "      </div><!--/card-alignment-->\n" +
    "    </div><!--/state-alignment-->\n" +
    "    <div \n" +
    "      class=\"state state-comments\" \n" +
    "      ng-class=\"{'state-hidden-left': isHidden('comments').left,\n" +
    "                 'state-hidden-right': isHidden('comments').right}\">\n" +
    "      <div class=\"card card-default\">\n" +
    "        <div class=\"card-heading\">\n" +
    "          <h4 ng-show=\"submissionType == 'need_help'\">\n" +
    "            What do you need help with?\n" +
    "          </h4>\n" +
    "          <h4 ng-hide=\"submissionType == 'need_help'\">\n" +
    "            Final comments\n" +
    "          </h4>\n" +
    "          <span ng-show=\"submissionType == 'need_help'\">\n" +
    "            Supply a comment on what you would like help on for this task so your tutor can assist you.\n" +
    "          </span>\n" +
    "          <span ng-hide=\"submissionType == 'need_help'\">\n" +
    "            Supply an <strong>optional</strong> comment about this submission for your tutor to read as they assess.\n" +
    "          </span>\n" +
    "        </div><!--/card-heading-->\n" +
    "        <div class=\"card-body\">\n" +
    "          <textarea ng-model=\"comment\" class=\"form-control input-lg\" rows=\"3\" placeholder=\"{{submissionType == 'need_help' ? 'I need help with...' : 'Make a comment...'}}\">\n" +
    "          </textarea>\n" +
    "        </div>\n" +
    "      </div><!--/card-comments-->\n" +
    "      <div class=\"card card-default\" ng-show=\"privacyPolicy.privacy\">\n" +
    "        <div class=\"card-heading\">\n" +
    "          <h4>\n" +
    "            Declaration\n" +
    "          </h4>\n" +
    "        </div><!--/card-heading-->\n" +
    "        <div class=\"card-body\">\n" +
    "          <span>\n" +
    "            {{privacyPolicy.privacy}}\n" +
    "          </span>\n" +
    "          <a href=\"#\" ng-click=\"showPlagiarism = !showPlagiarism\">Plagiarism and collusion</a>\n" +
    "          <div ng-show=\"showPlagiarism\">\n" +
    "            <h4>Plagiarism and Collusion</h4>\n" +
    "            <span>\n" +
    "              {{privacyPolicy.plagiarism}}\n" +
    "            </span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div><!--/declaration-->\n" +
    "    </div><!--/state-comments-->\n" +
    "  </div>\n" +
    "</div><!--/modal-body-->\n" +
    "<div class=\"modal-footer\" ng-hide=\"uploader.isUploading\">\n" +
    "  <button class=\"btn btn-danger pull-left\" ng-click=\"$dismiss()\" ng-disabled=\"shouldDisableBtn.cancel()\" ng-show=\"shouldShowBtn.cancel()\">\n" +
    "    <i class=\"fa fa-times\"></i> Cancel Submission\n" +
    "  </button>\n" +
    "  <!--/cancel-button-->\n" +
    "  <button class=\"btn btn-default\" ng-click=\"goToState.previous()\" ng-disabled=\"shouldDisableBtn.back()\" ng-show=\"shouldShowBtn.back()\">\n" +
    "    <i class=\"fa fa-arrow-left\"></i> Back\n" +
    "  </button>\n" +
    "  <!--/back-button-->\n" +
    "  <button class=\"btn btn-default\" ng-click=\"goToState.next()\" ng-disabled=\"shouldDisableBtn.next()\" ng-show=\"shouldShowBtn.next()\">\n" +
    "    Next\n" +
    "    <i class=\"fa fa-arrow-right\"></i>\n" +
    "  </button>\n" +
    "  <!--/next-button-->\n" +
    "  <button class=\"btn btn-success\" ng-click=\"uploadButtonClicked()\" ng-disabled=\"shouldDisableBtn.submit()\" ng-show=\"shouldShowBtn.submit()\">\n" +
    "    <i class=\"fa fa-upload\"></i> Upload Submission\n" +
    "  </button>\n" +
    "  <!--/upload-button-->\n" +
    "</div>\n" +
    "<!--/modal-footer-->\n" +
    "</div>");
}]);

angular.module("tasks/project-tasks-list/project-tasks-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/project-tasks-list/project-tasks-list.tpl.html",
    "<ul class=\"project-tasks-list\">\n" +
    "  <div ng-repeat=\"(groupSetId, relatedTasks) in project.tasks | groupBy: 'definition.group_set_id'\" class=\"group-set-tasks clearfix\">\n" +
    "    <h5 class=\"group-set-name\" ng-hide=\"hideGroupSetName\">{{groupSetName(groupSetId)}}</h5>\n" +
    "    <li class=\"col-xs-4 col-lg-3\" ng-repeat=\"task in relatedTasks | orderBy: ['definition.target_grade','definition.seq']\">\n" +
    "      <button type=\"button\" class=\"col-xs-12 btn task-status {{statusClass(task.status)}}\" ng-click=\"onSelect(task, 'Task Button List')\" tooltip-popup-delay='200' tooltip-placement=\"bottom\" tooltip-html-unsafe=\"<strong>{{taskDefinition(task).name}}:</strong><br>{{task.status_txt()}}\">\n" +
    "        <i class=\"fa fa-eye\" ng-show=\"task.similar_to_count - task.similar_to_dismissed_count > 0\"></i> {{taskText(task)}}\n" +
    "      </button>\n" +
    "    </li>\n" +
    "  </div>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("tasks/task-definition-editor/task-definition-editor.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/task-definition-editor/task-definition-editor.tpl.html",
    "<div class=\"panel panel-primary task-definition-editor\">\n" +
    "  <div class=\"panel-heading clearfix\">\n" +
    "    <h3 class=\"panel-title\">\n" +
    "      {{task ? (isNew ? \"Create Task\" : \"Editing \" + task.abbreviation + \" - \" + task.name) : \"Task Details\"}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body large-notice-block\" ng-hide=\"task\" ng-hide=\"task\">\n" +
    "    <i class=\"fa fa-tasks\"></i>\n" +
    "    <p>Select a task to view its definition in detail</p>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\" ng-show=\"task\">\n" +
    "    <form class=\"form-horizontal\" role=\"form\">\n" +
    "    <div class=\"task-admin-tabs\">\n" +
    "        <tabset class=\"pull-left col-md-2\" vertical=\"true\" type=\"pills\">\n" +
    "          <tab ng-repeat=\"(tabKey, tab) in taskAdmin.tabsData | orderObjectBy: 'seq'\" active=\"tab.active\" ng-click=\"setActiveTab(tab)\">\n" +
    "            <tab-heading tooltip=\"{{tab.title}}\" tooltip-placement=\"right\" tooltip-popup-delay=\"200\">\n" +
    "              <div class=\"text-center\">\n" +
    "                <i class=\"fa fa-2x {{tab.icon}}\" style=\"margin-right: 1ex\"></i>\n" +
    "              </div>\n" +
    "            </tab-heading>\n" +
    "          </tab>\n" +
    "        </tabset><!--/tab-selector-->\n" +
    "\n" +
    "        <div class=\"col-md-10 pull-right task-admin-tab-contents\">\n" +
    "          <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading row-fluid\">\n" +
    "              <h3 class=\"panel-title\">\n" +
    "                {{activeTab.title}}\n" +
    "              </h3>\n" +
    "              {{activeTab.subtitle}}\n" +
    "            </div>\n" +
    "            <div class=\"task-admin-tab-panel panel-body\">\n" +
    "              <div ng-show=\"activeTab == taskAdmin.tabsData.taskSheet\">\n" +
    "                <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "                  <label class=\"col-sm-3 control-label\">Name</label>\n" +
    "                  <div class=\"col-sm-8\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"task.name\">\n" +
    "                  </div>\n" +
    "                </div><!--/name-->\n" +
    "\n" +
    "                <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "                  <label class=\"col-sm-3 control-label\">Abbreviation</label>\n" +
    "                  <div class=\"col-sm-8\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"task.abbreviation\"/>\n" +
    "                  </div>\n" +
    "                </div><!--/abbr-->\n" +
    "\n" +
    "                <div class=\"form-group\" ng-show=\"unit.hasStreams()\" ng-required=\"isNew\">\n" +
    "                  <label class=\"col-sm-3 control-label\">Stream</label>\n" +
    "                  <div class=\"col-sm-8\">\n" +
    "                    <div class=\"btn-group dropdown\" dropdown>\n" +
    "                      <span>\n" +
    "                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" dropdown-toggle>\n" +
    "                          {{task.tutorial_stream ? task.tutorial_stream : 'None'}} <span class=\"caret\"></span>\n" +
    "                        </button>\n" +
    "                      </span>\n" +
    "                      <ul class=\"dropdown-menu\">\n" +
    "                        <li ng-repeat=\"stream in unit.tutorial_streams | orderBy:'abbreviation'\"><a ng-click=\"changeTaskStream(task, stream.abbreviation)\" ng-hide=\"stream.abbreviation == task.tutorial_stream\">{{stream.abbreviation}}</a></li>\n" +
    "                      </ul>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div><!--/stream-->\n" +
    "\n" +
    "                <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "                  <label class=\"col-sm-3 control-label\">Grade</label>\n" +
    "                  <div class=\"col-sm-7\">\n" +
    "                    <label ng-repeat=\"grade in grades\" name=\"target-grade-{{grade}}\" class=\"radio-inline\" for=\"target-grade-{{grade}}\">\n" +
    "                      <input type=\"radio\" id=\"target-grade-{{grade}}\" value=\"{{$index}}\" ng-model=\"task.target_grade\"/>{{grade}}\n" +
    "                    </label>\n" +
    "                  </div>\n" +
    "                </div><!--/grade-->\n" +
    "\n" +
    "                <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "                  <label class=\"col-sm-3 control-label\">Description</label>\n" +
    "                  <div class=\"col-sm-8\">\n" +
    "                    <textarea class=\"form-control\" ng-model=\"task.description\"></textarea>\n" +
    "                  </div>\n" +
    "                </div><!--/desc-->\n" +
    "\n" +
    "                <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "                  <label class=\"col-sm-3 control-label\">Weighting</label>\n" +
    "                  <div class=\"col-sm-8\">\n" +
    "                    <input type=\"number\" class=\"form-control\" ng-model=\"task.weight\" min=\"1\"/>\n" +
    "                  </div>\n" +
    "                </div><!--/weighting-->\n" +
    "\n" +
    "                <div class=\"form-group\" ng-required=\"isNew\" ng-show=\"unit.hasGroupwork()\">\n" +
    "                  <label class=\"col-sm-3 control-label\">Group Task</label>\n" +
    "                  <div class=\"col-sm-8\">\n" +
    "                    <select class=\"form-control\" ng-model=\"task.group_set\" ng-options=\"gs.name for gs in unit.group_sets track by gs.id\"><option value=\"\">None</option></select>\n" +
    "                  </div>\n" +
    "                </div><!--/group task-->\n" +
    "\n" +
    "                <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "                  <label tooltip=\"Date students should aim to start this task.\" class=\"col-sm-3 control-label\">Start Date</label>\n" +
    "                  <div class=\"col-sm-7\">\n" +
    "                    <div class=\"col-sm-8 input-group\">\n" +
    "                      <input datepicker-popup=\"yyyy-MM-dd\" is-open=\"startPicker.open\" type=\"text\" class=\"form-control\" ng-model=\"task.start_date\" placeholder=\"yyyy-MM-dd\" close-text=\"Close\" />\n" +
    "                      <span class=\"input-group-btn\">\n" +
    "                        <button class=\"btn btn-default\" ng-click=\"open($event, startPicker)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\n" +
    "                      </span>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div><!--/start-date-->\n" +
    "\n" +
    "                <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "                  <label tooltip=\"Date students should aim to complete this task.\" class=\"col-sm-3 control-label\">Due Date</label>\n" +
    "                  <div class=\"col-sm-7\">\n" +
    "                    <div class=\"col-sm-8 input-group\">\n" +
    "                      <input datepicker-popup=\"yyyy-MM-dd\" is-open=\"targetPicker.open\" type=\"text\" class=\"form-control\" ng-model=\"task.target_date\" placeholder=\"yyyy-MM-dd\" close-text=\"Close\" />\n" +
    "                      <span class=\"input-group-btn\">\n" +
    "                        <button class=\"btn btn-default\" ng-click=\"open($event, targetPicker)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\n" +
    "                      </span>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div><!--/target-date-->\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                  <label tooltip=\"Date after which task submissions will not appear for feedback. Can be empty.\" class=\"col-sm-3 control-label\">Deadline</label>\n" +
    "                  <div class=\"col-sm-7\">\n" +
    "                    <div class=\"col-sm-8 input-group\">\n" +
    "                      <input datepicker-popup=\"yyyy-MM-dd\" is-open=\"duePicker.open\" type=\"text\" class=\"form-control\" ng-model=\"task.due_date\" placeholder=\"yyyy-MM-dd\" close-text=\"Close\" />\n" +
    "                      <span class=\"input-group-btn\">\n" +
    "                        <button class=\"btn btn-default\" ng-click=\"open($event, duePicker)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\n" +
    "                      </span>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div><!--/due-date-->\n" +
    "              </div>\n" +
    "\n" +
    "              <div ng-show=\"activeTab == taskAdmin.tabsData.rareSettings\">\n" +
    "                <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "                  <label class=\"col-sm-3 control-label\">Restricted</label>\n" +
    "                  <div class=\"col-sm-7\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" ng-model=\"task.restrict_status_updates\" btn-checkbox btn-checkbox-true=\"1\" btn-checkbox-false=\"0\">\n" +
    "                      <i class=\"fa fa-{{task.restrict_status_updates ? 'check' : 'times'}}\"></i>\n" +
    "                    </button>\n" +
    "                    <span class=\"help-block\">\n" +
    "                      If true, the status cannot be changed by students after it has been assigned by staff\n" +
    "                    </span>\n" +
    "                  </div>\n" +
    "                </div><!--/restricted-->\n" +
    "\n" +
    "                <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "                  <label class=\"col-sm-3 control-label\">Graded</label>\n" +
    "                  <div class=\"col-sm-7\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" ng-model=\"task.is_graded\" btn-checkbox btn-checkbox-true=\"1\" btn-checkbox-false=\"0\">\n" +
    "                      <i class=\"fa fa-{{task.is_graded ? 'check' : 'times'}}\"></i>\n" +
    "                    </button>\n" +
    "                    <span class=\"help-block\">\n" +
    "                      If true, the task will be assessed with a grade to a specific standard. For example, <em>the task was completed to a HD standard</em>.\n" +
    "                    </span>\n" +
    "                  </div>\n" +
    "                </div><!--/graded-task-->\n" +
    "\n" +
    "                <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "                  <label class=\"col-sm-3 control-label\">Quality Points</label>\n" +
    "                  <div class=\"col-sm-8\">\n" +
    "                    <div class=\"btn-group\">\n" +
    "                      <label ng-repeat=\"value in allowedQualityPoints\" class=\"btn btn-sm btn-default\" ng-model=\"task.max_quality_pts\" btn-radio=\"{{value}}\">{{value || 'Disabled'}}</label>\n" +
    "                    </div>\n" +
    "                    <span class=\"help-block\">\n" +
    "                      Requires tutors to provide a quality rating based on a number of stars. The value set here determines the maximum number of stars allowed.\n" +
    "                    </span>\n" +
    "                  </div>\n" +
    "                </div><!--/quality points-->\n" +
    "              </div>\n" +
    "              <div ng-show=\"activeTab == taskAdmin.tabsData.fileUpload\">\n" +
    "                <div class=\"form-group\" ng-required=\"isNew\">\n" +
    "                  <div class=\"panel-body large-notice-block\" ng-hide=\"task.upload_requirements.length > 0\">\n" +
    "                    <i class=\"fa fa-2x fa-upload\"></i>\n" +
    "                    <p>Add Submission Requirements</p>\n" +
    "                  </div>\n" +
    "                  <div ng-show=\"task.upload_requirements.length > 0\">\n" +
    "                    <div class=\"panel-body clearfix submission-requirement\" ng-repeat=\"upreq in task.upload_requirements\">\n" +
    "                      <label class=\"col-sm-3 control-label\">Requirement Name</label>\n" +
    "                      <div class=\"col-sm-7 form-group\">\n" +
    "                        <input class=\"form-control\" placeholder=\"Hello World Code\" type=\"text\" required ng-model=\"upreq.name\"/>\n" +
    "                      </div>\n" +
    "                      <button tooltip=\"Remove this requirement\" tooltip-append-to-body=\"true\" class=\"btn btn-danger pull-right\" ng-click=\"removeUpReq(upreq)\">\n" +
    "                        <i class=\"fa fa-trash-o\"></i>\n" +
    "                      </button>\n" +
    "                      <label class=\"col-sm-3 control-label\">Requirement Type</label>\n" +
    "                      <div class=\"col-sm-7 form-group\">\n" +
    "                        <div class=\"btn-group pull-left\">\n" +
    "                          <label name=\"upreq-type-{{upreq.key}}\" class=\"btn btn-default\" btn-radio=\"'code'\" ng-model=\"upreq.type\">\n" +
    "                            <i class=\"fa fa-file-code-o\"></i> Code\n" +
    "                          </label>\n" +
    "                          <label name=\"upreq-type-{{upreq.key}}\" class=\"btn btn-default\" btn-radio=\"'document'\" ng-model=\"upreq.type\">\n" +
    "                            <i class=\"fa fa-file-pdf-o\"></i> Document\n" +
    "                          </label>\n" +
    "                          <label name=\"upreq-type-{{upreq.key}}\" class=\"btn btn-default\" btn-radio=\"'image'\" ng-model=\"upreq.type\">\n" +
    "                            <i class=\"fa fa-file-image-o\"></i> Image\n" +
    "                          </label>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div><!--/upload-requirements-->\n" +
    "              </div>\n" +
    "              <div ng-show=\"activeTab == taskAdmin.tabsData.taskResources\">\n" +
    "                <div class=\"panel-body large-notice-block\" ng-hide=\"task && task.id\">\n" +
    "                  <i class=\"fa fa-2x fa-floppy-o\"></i>\n" +
    "                  <p>Save Task to Upload Resources</p>\n" +
    "                </div>\n" +
    "                <div ng-if=\"task && task.id\">\n" +
    "                  <div class=\"col-sm-6\">\n" +
    "                    <file-uploader\n" +
    "                      files=\"taskSheet\"\n" +
    "                      url=\"taskSheetUploadUrl()\"\n" +
    "                      on-success=\"onTaskSheetSuccess\">\n" +
    "                    </file-uploader>\n" +
    "                    <a href=\"{{taskPDFUrl()}}\" ng-show=\"task.has_task_sheet\" target=\"_blank\" class=\"btn btn-info col-sm-12\">\n" +
    "                      <i class=\"fa fa-download\"></i> Download Task Sheet\n" +
    "                    </a>\n" +
    "                    <a ng-click=\"removeTaskSheet(task)\" ng-show=\"task.has_task_sheet\" class=\"btn btn-danger col-sm-12\">\n" +
    "                      <i class=\"fa fa-trash-o\"></i> Delete Task Sheet\n" +
    "                    </a>\n" +
    "                  </div>\n" +
    "                  <div class=\"col-sm-6\">\n" +
    "                    <file-uploader\n" +
    "                      files=\"taskResources\"\n" +
    "                      url=\"taskResourcesUploadUrl()\"\n" +
    "                      on-success=\"onTaskResourcesSuccess\">\n" +
    "                    </file-uploader>\n" +
    "                    <a href=\"{{resourceUrl()}}\" ng-show=\"task.has_task_resources\" target=\"_blank\" class=\"btn btn-info col-sm-12\">\n" +
    "                      <i class=\"fa fa-download\"></i> Download Resources\n" +
    "                    </a>\n" +
    "                    <a ng-click=\"removeTaskResources(task)\" ng-show=\"task.has_task_resources\" class=\"btn btn-danger col-sm-12\">\n" +
    "                      <i class=\"fa fa-trash-o\"></i> Delete Resources\n" +
    "                    </a>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div ng-show=\"activeTab == taskAdmin.tabsData.plagiarismChecks\" class=\"form-group\">\n" +
    "                <div class=\"panel-body plagiarism-check\" ng-required=\"isNew\">\n" +
    "                  <label class=\"col-sm-3 control-label\">Warn Percent</label>\n" +
    "                  <div class=\"col-sm-8\">\n" +
    "                    <input type=\"number\" ng-disabled=\"task.plagiarism_checks.length == 0\" class=\"form-control\" ng-model=\"task.plagiarism_warn_pct\"/>\n" +
    "                    <p class=\"help-block\">\n" +
    "                      The percentage similarity where {{externalName.value}} creates a warning\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                </div><!--/check-perecent-->\n" +
    "                <div ng-required=\"isNew\" class=\"panel-body plagiarism-check clearfix\" ng-show=\"task.plagiarism_checks.length > 0\" ng-repeat=\"check in task.plagiarism_checks\">\n" +
    "                  <label class=\"col-sm-3 control-label\">Detect Language</label>\n" +
    "                  <div class=\"col-sm-7\">\n" +
    "                    <select class=\"form-control\" ng-model=\"check.type\">\n" +
    "                      <option selected disabled value=\"\">Select language</option>\n" +
    "                      <option value=\"moss pascal\">Pascal</option>\n" +
    "                      <option value=\"moss c\">C</option>\n" +
    "                      <option value=\"moss csharp\">C#</option>\n" +
    "                      <option value=\"moss cc\">C++</option>\n" +
    "                      <option value=\"moss python\">Python</option>\n" +
    "                    </select>\n" +
    "                    <p class=\"help-block\">\n" +
    "                      {{externalName.value}} uses <a href=\"http://theory.stanford.edu/~aiken/moss/\"M>Measure Of Software Similarity</a> (Moss) developed by Stanford University.\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                  <button class=\"btn btn-danger pull-right\" ng-click=\"removeCheck(check)\">\n" +
    "                    <i tooltip=\"Remove this check\" tooltip-append-to-body=\"true\" class=\"fa fa-trash-o\"></i>\n" +
    "                  </button>\n" +
    "                  <label class=\"col-sm-3 control-label\">File Patterns</label>\n" +
    "                  <div class=\"col-sm-7\">\n" +
    "                    <input class=\"form-control\" placeholder=\"*.c|*.h\" type=\"text\" required ng-model=\"check.pattern\"/>\n" +
    "                    <p class=\"help-block\">\n" +
    "                      Separate file patterns with a pipe symbol, e.g.: <code>*.c|*.h</code>\n" +
    "                    </p>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div><!--/plagiarism checks-->\n" +
    "            </div><!--/panel-body-area-->\n" +
    "            <div class=\"panel-footer text-right\" ng-show=\"activeTab == taskAdmin.tabsData.fileUpload\">\n" +
    "              <button type=\"button\" ng-click=\"addUpReq()\" class=\"btn btn-success\">\n" +
    "                  <span class=\"glyphicon glyphicon-plus\"></span> Add Submission Requirement\n" +
    "              </button>\n" +
    "            </div>\n" +
    "            <div class=\"panel-footer text-right\" ng-show=\"activeTab == taskAdmin.tabsData.plagiarismChecks\">\n" +
    "              <button type=\"button\" ng-click=\"addCheck()\" class=\"btn btn-success\">\n" +
    "                  <span class=\"glyphicon glyphicon-plus\"></span> Add Plagiarism Check\n" +
    "              </button>\n" +
    "            </div>\n" +
    "          </div><!--/tab-contents-panel-->\n" +
    "        </div><!--/tab-contents-->\n" +
    "      </div><!--/tab-feedback-tabs-->\n" +
    "    </form>\n" +
    "  </div>\n" +
    "  <div class=\"panel-footer text-right\" ng-show=\"task\">\n" +
    "    <button type=\"button\" ng-hide=\"isNew\" class=\"btn btn-danger\" ng-click=\"deleteTask()\">\n" +
    "      <i class=\"fa fa-trash-o\"></i> Delete\n" +
    "    </button>\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveTask()\">\n" +
    "      <i class=\"fa fa-save\"></i> {{isNew ? 'Create' : 'Save'}}\n" +
    "    </button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/task-definition-selector/task-definition-selector.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/task-definition-selector/task-definition-selector.tpl.html",
    "<div class=\"btn-group task-definition-selector dropdown\" dropdown>\n" +
    "  <button class=\"btn btn-{{buttonStyle}} dropdown-toggle col-sm-12\" type=\"button\" dropdown-toggle>\n" +
    "    <span ng-show=\"selectedDefinition\">\n" +
    "      Task\n" +
    "      <label class=\"label label-info\" ng-show=\"selectedDefinition\" tooltip=\"{{selectedDefinition.name}}\" tooltip-append-to-body=\"true\">\n" +
    "        {{selectedDefinition.abbreviation}}\n" +
    "      </label>\n" +
    "    </span>\n" +
    "    <span ng-hide=\"selectedDefinition\">Select Task</span>\n" +
    "    <div class=\"pull-right\">\n" +
    "      <span class=\"caret\"></span>\n" +
    "    </div>\n" +
    "  </button><!--/dropdown-button-->\n" +
    "  <ul class=\"dropdown-menu project-tasks-list\">\n" +
    "    <div ng-repeat=\"(groupSetId, relatedTaskDefs) in unit.task_definitions | groupBy: 'group_set_id'\" class=\"col-sm-12\">\n" +
    "      <h5 class=\"group-set-name\" ng-hide=\"hideGroupSetName\">\n" +
    "        {{groupSetName(groupSetId)}}\n" +
    "      </h5>\n" +
    "      <li class=\"col-xs-4 col-sm-3\" ng-repeat=\"taskDef in relatedTaskDefs | orderBy: 'seq'\">\n" +
    "        <button type=\"button\" class=\"col-xs-12 btn btn-default\" ng-class=\"{'active' : taskDef == selectedDefinition}\" ng-click=\"setSelectedDefinition(taskDef)\" tooltip-popup-delay='200' tooltip-placement=\"bottom\" tooltip=\"{{taskDef.name}}\">\n" +
    "          {{taskDef.abbreviation}}\n" +
    "        </button>\n" +
    "      </li>\n" +
    "      <li class=\"col-xs-4 col-sm-3 pull-right\" ng-if=\"showClear\">\n" +
    "        <button type=\"button\" class=\"col-xs-12 btn btn-warning\" ng-click=\"setSelectedDefinition(null)\" tooltip=\"Clear selection\" tooltip-popup-delay='200' tooltip-placement=\"bottom\">\n" +
    "          <i class=\"fa fa-times\"></i>\n" +
    "        </button>\n" +
    "      </li>\n" +
    "    </div>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/task-feedback-assessor/task-feedback-assessor.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/task-feedback-assessor/task-feedback-assessor.tpl.html",
    "<div class=\"task-feedback-assessor\">\n" +
    "  <div class=\"panel panel-default\" ng-hide=\"task\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">\n" +
    "        Task Details\n" +
    "      </h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body large-notice-block nothing-selected\" ng-hide=\"task\">\n" +
    "      <i class=\"fa fa-tasks\"></i>\n" +
    "      <p>Select a task to view its status in detail</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel panel-default\" ng-if=\"task\">\n" +
    "    <div class=\"panel-heading\" ng-show=\"task.definition.upload_requirements.length > 0\">\n" +
    "      <a class=\"pull-right\" ng-click=\"viewOptions.showPdf = !viewOptions.showPdf\"><i ng-show=\"viewOptions.showPdf\" class=\"fa fa-2x fa-chevron-circle-down\"></i><i ng-hide=\"viewOptions.showPdf\" class=\"fa fa-2x fa-chevron-circle-up\"></i></a>\n" +
    "      <h3 class=\"panel-title\">\n" +
    "        Task Submission\n" +
    "      </h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body large-notice-block\" ng-show=\"viewOptions.showPdf && (!task.has_pdf) && task.definition.upload_requirements.length > 0 \">\n" +
    "        <i class=\"fa fa-file-pdf-o fa-2x\"></i>\n" +
    "        <p>No submission PDF available.</p>\n" +
    "    </div>\n" +
    "    <task-submission-viewer ng-show=\"viewOptions.showPdf && (task.has_pdf || task.needsSubmissionDetails())\" project=\"task.project()\" task=\"task\"></task-submission-viewer>\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <a class=\"pull-right\" ng-click=\"viewOptions.showComments = !viewOptions.showComments\"><i ng-show=\"viewOptions.showComments\" class=\"fa fa-2x fa-chevron-circle-down\"></i><i ng-hide=\"viewOptions.showComments\" class=\"fa fa-2x fa-chevron-circle-up\"></i></a>\n" +
    "      <h3 class=\"panel-title\">\n" +
    "        Task Comments\n" +
    "      </h3>\n" +
    "    </div>\n" +
    "    <task-comments-viewer project=\"task.project()\" task=\"task\" comment=\"comment\" ng-show=\"viewOptions.showComments\"></task-comments-viewer>\n" +
    "\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <a class=\"pull-right\" ng-click=\"viewOptions.showClassify = !viewOptions.showClassify\"><i ng-show=\"viewOptions.showClassify\" class=\"fa fa-2x fa-chevron-circle-down\"></i><i ng-hide=\"viewOptions.showClassify\" class=\"fa fa-2x fa-chevron-circle-up\"></i></a>\n" +
    "      <h3 class=\"panel-title\">\n" +
    "        Update Task Status\n" +
    "      </h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\" ng-show=\"viewOptions.showClassify\">\n" +
    "      <task-status-selector\n" +
    "        task=\"task\"\n" +
    "        assessing-unit-role=\"assessingUnitRole\"\n" +
    "        in-menu=\"false\"\n" +
    "        trigger-transition=\"triggerTransition\"\n" +
    "        ></task-status-selector>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/task-ilo-alignment/modals/task-ilo-alignment-modal/task-ilo-alignment-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/task-ilo-alignment/modals/task-ilo-alignment-modal/task-ilo-alignment-modal.tpl.html",
    "<div class=\"task-ilo-alignment-modal\">\n" +
    "  <div class=\"modal-header text-center\">\n" +
    "    <h3>\n" +
    "      How much does <label class=\"label label-info\" tooltip=\"{{task.definition.name}}\">{{task.definition.abbreviation}}</label> relate to <label class=\"label label-info\" tooltip=\"{{ilo.name}}\">{{ilo.abbreviation}}</label>?\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body clearfix\">\n" +
    "    <p class=\"help-block col-sm-12 text-center\">\n" +
    "      Hover and click over a rating value below\n" +
    "    </p>\n" +
    "    <task-ilo-alignment-rater ng-model=\"alignment\" on-rating-changed=\"updateRating\"></task-ilo-alignment-rater>\n" +
    "    <div class=\"col-sm-12 rationale-wrapper\" ng-show=\"alignment.rating > 0\">\n" +
    "      <div tooltip=\"Click to edit rationale\" tooltip-placement=\"left\" tooltip-append-to-body=\"false\" tooltip-popup-delay=\"300\" tooltip-enable=\"alignment.description != null\" ng-click=\"toggleEditRationale()\" class=\"rationale\" ng-class=\"{'no-rationale': alignment.description == null}\" ng-hide=\"editingRationale\">\n" +
    "        <label class=\"text-muted\" ng-show=\"alignment.description != null\">\n" +
    "          Provided Rationale\n" +
    "        </label>\n" +
    "        <div ng-bind-html=\"(alignment.description || 'No rationale provided') | markdown\"></div>\n" +
    "        <div class=\"small\" ng-hide=\"alignment.description\">Click to add one</div>\n" +
    "      </div>\n" +
    "      <div ng-if=\"editingRationale\" class=\"clearfix\">\n" +
    "        <!-- <markdown-editor\n" +
    "          height=\"200\"\n" +
    "          ng-model=\"alignment.description\"\n" +
    "          placeholder=\"Edit rationale...\"\n" +
    "          autofocus=\"true\">\n" +
    "        </markdown-editor> -->\n" +
    "        <div contenteditable ng-model=\"alignment.description\" placeholder=\"Edit rationale here...\" autofocus=\"true\" style=\"border-style: solid; border-width: thin; height: 200px\" ></div>\n" +
    "        <a ng-click=\"toggleEditRationale(alignment)\" class=\"pull-right\">Done Editing</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <button ng-click=\"closeModal()\" class=\"btn btn-primary\">\n" +
    "      <i class=\"fa fa-check\"></i>\n" +
    "    </button>\n" +
    "    <button ng-click=\"removeAlignmentItem(alignment)\" ng-if=\"alignment\" tooltip=\"Remove this alignment\" tooltip-append-to-body=\"true\" class=\"btn btn-danger\">\n" +
    "      <i class=\"fa fa-trash-o\"></i>\n" +
    "    </button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/task-ilo-alignment/task-ilo-alignment-editor/task-ilo-alignment-editor.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/task-ilo-alignment/task-ilo-alignment-editor/task-ilo-alignment-editor.tpl.html",
    "<div class=\"task-ilo-alignment-editor row \">\n" +
    "  <div class=\"alignment-panels\" ng-class=\"{'col-md-9': showCsv}\">\n" +
    "    <div class=\"{{hidePanel ? '' : 'panel panel-primary'}}\">\n" +
    "      <div ng-hide=\"hidePanel\" class=\"panel-heading clearfix\">\n" +
    "        <h3 class=\"panel-title\">\n" +
    "          {{showIncludeTasks ? 'Select Tasks' : 'Intended Learning Outcome Alignment'}}\n" +
    "        </h3>\n" +
    "        <div class=\"col-sm-8 pull-left\" style=\"padding-left: 0;\">\n" +
    "          <div ng-show=\"showIncludeTasks\" >\n" +
    "            Select tasks to include and showcase in your portfolio that demonstrates your\n" +
    "            understanding of each Learning Outcome.\n" +
    "          </div>\n" +
    "          <div ng-hide=\"showIncludeTasks\">\n" +
    "            Align tasks to an Intended Learning Outcome by selecting the red circle and choosing a rating,\n" +
    "            providing an optional rational to justify why that task is related to the outcome selected.\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"btn-group pull-right\">\n" +
    "          <button class=\"btn btn-default\" ng-model=\"showGraph\" btn-radio=\"true\" uncheckable>\n" +
    "            <i class=\"fa fa-bar-chart\"></i>\n" +
    "          </button>\n" +
    "        </div>\n" +
    "      </div><!--/heading-->\n" +
    "\n" +
    "      <div class=\"panel-body\">\n" +
    "        <div class=\"large-notice-block\" ng-hide=\"tasks.length > 0\">\n" +
    "          <i class=\"fa fa-2x fa-tasks\"></i>\n" +
    "          <p>No tasks in this unit</p>\n" +
    "        </div>\n" +
    "        <div class=\"large-notice-block\" ng-hide=\"unit.ilos.length > 0 || showIncludeTasks\">\n" +
    "          <i class=\"fa fa-2x fa-graduation-cap\"></i>\n" +
    "          <p>No learning outcomes in this unit</p>\n" +
    "        </div>\n" +
    "        <table class=\"table table-task-alignment col-sm-12\" ng-hide=\"tasks.length == 0 || (unit.ilos.length == 0 && ! showIncludeTasks)\">\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <th class=\"task\" colspan=\"{{(showTaskName ? 3 : 2) - (source === unit ? 1 : 0)}}\">Task</th>\n" +
    "              <th class=\"ilo text-center\" ng-repeat=\"ilo in unit.ilos | orderBy: 'abbreviation'\" tooltip=\"{{ilo.name}}\" tooltip-append-to-body=\"true\">\n" +
    "                <label class=\"label label-info\">{{ilo.abbreviation}}</label>\n" +
    "              </th>\n" +
    "              <th ng-if=\"showIncludeTasks\" class=\"include-in-portfolio\">Include</th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr ng-repeat=\"task in tasks | taskForPortfolio: source === project | orderBy: 'definition.seq'\">\n" +
    "              <td class=\"task-abbreviation\" tooltip=\"{{task.definition.name}}\" tooltip-append-to-body=\"true\">\n" +
    "                <label class=\"label label-info\">{{task.definition.abbreviation}}</label>\n" +
    "              </td>\n" +
    "              <td class=\"task-status-icon\" ng-if=\"source === project\">\n" +
    "                <status-icon [status]=\"task.status\"></status-icon>\n" +
    "              </td>\n" +
    "              <td class=\"task-name\" ng-show=\"showTaskName\">\n" +
    "                {{task.definition.name}}\n" +
    "              </td>\n" +
    "              <td ng-repeat=\"ilo in unit.ilos | orderBy: 'abbreviation'\" class=\"ilo-alignment text-center\">\n" +
    "                {{alignment = alignmentForTaskAndIlo(task, ilo); ''}}\n" +
    "                <button ng-click=\"showAlignmentModal(task, ilo, alignment)\" class=\"btn btn-sm btn-default btn-alignment\">\n" +
    "                  <task-ilo-alignment-rater ng-if=\"alignment\" ng-model=\"alignment\" compact=\"true\"></task-ilo-alignment-rater>\n" +
    "                  <i ng-hide=\"alignment\" class=\"fa fa-circle-o fa-3x text-danger\" tooltip-append-to-body=\"true\" tooltip=\"You decided {{task.definition.abbreviation}} is not aligned to {{ilo.abbreviation}}\"></i>\n" +
    "                </button>\n" +
    "              </td>\n" +
    "              <td ng-if=\"showIncludeTasks\" class=\"include-in-portfolio\">\n" +
    "                <div\n" +
    "                  tooltip-enable=\"disableInclude(task)\"\n" +
    "                  tooltip=\"You cannot select this task as it is not aligned to any ILOs\"\n" +
    "                  tooltip-placement=\"left\"\n" +
    "                  tooltip-append-to-body=\"true\"\n" +
    "                  class=\"button-wrapper\">\n" +
    "                  <button\n" +
    "                    class=\"btn btn-sm btn-{{task.include_in_portfolio ? 'success' : 'default'}} col-sm-6 text-center\"\n" +
    "                    ng-click=\"includeTaskInPorfolio(task)\"\n" +
    "                    ng-if=\"!disableInclude(task)\">\n" +
    "                    <i class=\"fa fa-{{task.include_in_portfolio ? 'check' : 'times'}}\"></i>\n" +
    "                  </button>\n" +
    "                  <button\n" +
    "                    class=\"btn btn-sm btn-warning col-sm-6 text-center\"\n" +
    "                    ng-disabled=\"disableInclude(task)\"\n" +
    "                    ng-show=\"disableInclude(task)\">\n" +
    "                    <i class=\"fa fa-question\"></i>\n" +
    "                  </button>\n" +
    "                </div>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </div><!--/select-panel-body-->\n" +
    "    </div><!--/select-panel-->\n" +
    "    <div class=\"panel panel-default visualisation\" ng-if=\"showGraph\">\n" +
    "      <div class=\"panel-heading clearfix\">\n" +
    "          <h4 class=\"panel-title pull-left\">Visualisation</h4>\n" +
    "          <button class=\"pull-right close\" ng-click=\"closeGraph()\">&times;</button>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <alignment-bar-chart unit=\"unit\" project=\"project\" source=\"source\" task-status-factor=\"taskStatusFactor\"></alignment-bar-chart>\n" +
    "      </div>\n" +
    "      <div class=\"panel-footer text-center\">\n" +
    "        Hover over this panel to highlight\n" +
    "      </div>\n" +
    "    </div><!--/visualisation-->\n" +
    "  </div><!--/main-panels-->\n" +
    "  <div class=\"col-md-3\" ng-if=\"showCsv\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">Import Task Outcome Alignments</h3>\n" +
    "        Import links between tasks and outcomes from a CSV containing: unit_code, learning_outcome, task_abbr, rating.\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <file-uploader\n" +
    "          files=\"taskAlignmentCSV\"\n" +
    "          url=\"taskAlignmentCSVUploadUrl()\"\n" +
    "          is-uploading=\"isTaskAlignmentCSVUploading\"\n" +
    "          on-success=\"onTaskAlignmentCSVSuccess\"\n" +
    "          on-complete=\"onTaskAlignmentCSVComplete\"></file-uploader>\n" +
    "      </div>\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">Export Task Outcome Alignments</h3>\n" +
    "        Download a CSV of task outcome alignment details.\n" +
    "      </div>\n" +
    "      <div class=\"panel-body text-center\">\n" +
    "        <button class=\"btn btn-primary btn-download\" ng-click=\"downloadTaskAlignmentCSV()\">\n" +
    "          <i class=\"fa fa-download\"></i> Download\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div><!--/csv-import-export-->\n" +
    "  </div><!--/csv-panels-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/task-ilo-alignment/task-ilo-alignment-rater/task-ilo-alignment-rater.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/task-ilo-alignment/task-ilo-alignment-rater/task-ilo-alignment-rater.tpl.html",
    "<div class=\"task-ilo-alignment-rater\" ng-class=\"{colorful: colorful}\">\n" +
    "  <rating ng-hide=\"compact\" on-leave=\"setHoverValue(null)\" on-hover=\"setHoverValue(value)\" titles=\"null\" ng-model=\"ngModel.rating\" max=\"max\" state-on=\"'fa fa-2x fa-circle'\" state-off=\"'fa fa-2x fa-circle-o'\" tooltip=\"{{label}}\" tooltip-placement=\"right\" tooltip-class=\"tooltip-rating-{{hoveringOver}}\" tooltip-append-to-body=\"true\" tooltip-popup-delay=\"200\" tooltip-enable=\"showTooltips\" readonly=\"readonly\" class=\"rating-area\"></rating>\n" +
    "  <div ng-show=\"!hideLabels && selectedTooltip && !showTooltips && !compact\" class=\"text-center rating-static-tooltip\">\n" +
    "    <span class=\"rating-{{hoveringOver || ngModel.rating}} badge\" ng-hide=\"(hoveringOver || ngModel.rating) == 0\">{{tooltips[(hoveringOver || ngModel.rating)]}}</span>\n" +
    "    <span class=\"text-muted\" ng-show=\"showZeroRating && !hoveringOver && ngModel.rating == 0\">This task is not related to this outcome at all</span>\n" +
    "  </div>\n" +
    "  <div ng-show=\"compact && readonly\" class=\"compact-rating rating-{{ngModel.rating}}\" tooltip=\"{{tooltips[ngModel.rating]}}\" tooltip-class=\"tooltip-rating-{{ngModel.rating}}\" tooltip-append-to-body=\"true\">\n" +
    "    {{ngModel.rating}}\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/task-ilo-alignment/task-ilo-alignment-viewer/task-ilo-alignment-viewer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/task-ilo-alignment/task-ilo-alignment-viewer/task-ilo-alignment-viewer.tpl.html",
    "<div class=\"task-ilo-alignment-viewer\">\n" +
    "  <div class=\"clearfix\" ng-if=\"alignments.length > 0\">\n" +
    "    <ul class=\"list-group alignment-list\">\n" +
    "      <li ng-click=\"toggleExpanded(align)\" ng-class=\"{expanded: align.expanded}\" ng-repeat=\"align in alignments | orderBy: 'ilo_number'\" class=\"list-group-item col-sm-12\">\n" +
    "        <header class=\"clearfix\">\n" +
    "          <div class=\"col-sm-6 pull-left header-item\">\n" +
    "            {{ilo = summaryOnly ? align : unit.outcome(align.learning_outcome_id); ''}}\n" +
    "            <h3 class=\"list-group-item-heading outcome-heading col-sm-12\" style=\"padding: 0;\">\n" +
    "              <span class=\"col-sm-3 label label-info pull-left\">{{ilo.abbreviation}}</span>\n" +
    "              <span class=\"col-sm-9 pull-left\">{{ilo.name}}</span>\n" +
    "            </h3>\n" +
    "          </div>\n" +
    "          <div class=\"col-sm-6 pull-right clearfix header-item\">\n" +
    "            <task-ilo-alignment-rater\n" +
    "              ng-hide=\"summaryOnly\"\n" +
    "              readonly=\"true\"\n" +
    "              unit=\"unit\"\n" +
    "              ng-model=\"align\"></task-ilo-alignment-rater>\n" +
    "            <div ng-if=\"ilo && classStats && summaryOnly\">\n" +
    "              <alignment-bullet-chart\n" +
    "                show-legend=\"false\"\n" +
    "                unit=\"unit\"\n" +
    "                project=\"project\"\n" +
    "                ilo=\"ilo\"\n" +
    "                targets=\"targets\"\n" +
    "                current-progress=\"currentProgress\"\n" +
    "                class-stats=\"classStats\"></alignment-bullet-chart>\n" +
    "            </div>\n" +
    "            <div class=\"expand-icon text-muted text-{{align.expanded ? 'primary' : 'muted'}}\">\n" +
    "              <i class=\"fa fa-3x fa-chevron-circle-{{align.expanded ? 'up' : 'down'}}\"></i>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </header><!--/alignment-header-->\n" +
    "        <div class=\"list-group-item-text alignment-content col-sm-8\" ng-show=\"align.expanded\">\n" +
    "          <div ng-show=\"ilo.description\">\n" +
    "            <h5>Description</h5>\n" +
    "            <div class=\"markdown-to-html\" ng-bind-html=\"ilo.description | markdown\"></div>\n" +
    "          </div>\n" +
    "          <div ng-if=\"ilo && classStats &&!hideVisualisation\">\n" +
    "            <h5>Visualisation</h5>\n" +
    "            <alignment-bullet-chart\n" +
    "              show-legend=\"false\"\n" +
    "              unit=\"unit\"\n" +
    "              project=\"project\"\n" +
    "              ilo=\"ilo\"\n" +
    "              targets=\"targets\"\n" +
    "              current-progress=\"currentProgress\"\n" +
    "              class-stats=\"classStats\">\n" +
    "            </alignment-bullet-chart>\n" +
    "          </div>\n" +
    "          <div ng-show=\"!summaryOnly && align.description\">\n" +
    "            <h5>Rationale</h5>\n" +
    "            <div class=\"markdown-to-html\" ng-bind-html=\"align.description | markdown\"></div>\n" +
    "          </div>\n" +
    "          <div ng-show=\"summaryOnly\">\n" +
    "            <h5>Related Tasks</h5>\n" +
    "            <div class=\"related-outcome-tasks\">\n" +
    "              <ul class=\"list-group\">\n" +
    "                <li class=\"list-group-item\" ng-repeat=\"align in unit.task_outcome_alignments | outcomeFilter: ilo.id | orderBy: 'seq'\">\n" +
    "                  <div class=\"clearfix\">\n" +
    "                    {{taskDef = unit.taskDef(align.task_definition_id); ''}}\n" +
    "                    <task-ilo-alignment-rater\n" +
    "                      class=\"pull-right\"\n" +
    "                      readonly=\"true\"\n" +
    "                      unit=\"unit\"\n" +
    "                      show-tooltips=\"true\"\n" +
    "                      ng-model=\"align\">\n" +
    "                    </task-ilo-alignment-rater>\n" +
    "                    <div class=\"task-def-alignment-item\">\n" +
    "                      <label class=\"label label-info task-def-label pull-left\">{{taskDef.abbreviation}}</label>\n" +
    "                      <span class=\"col-sm-6\">{{taskDef.name}}</span>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "  <div class=\"large-notice-block\" ng-hide=\"alignments.length > 0\">\n" +
    "    <i class=\"fa fa-2x fa-graduation-cap\"></i>\n" +
    "    <p>No alignments</p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/task-plagiarism-file-viewer/task-plagiarism-file-viewer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/task-plagiarism-file-viewer/task-plagiarism-file-viewer.tpl.html",
    "<div class=\"card card-default task-plagiarism-file-viewer\">\n" +
    "  <div class=\"card-heading clearfix\">\n" +
    "    <div class=\"pull-left\">\n" +
    "      <h5 class=\"panel-title\">\n" +
    "        <strong>{{match.username || \"Other Student\"}}</strong>\n" +
    "        {{match.name}}\n" +
    "      </h5>\n" +
    "      <span ng-show=\"other\">\n" +
    "        Match is <strong>{{match.pct}}% similar</strong> to a student in {{match.tutor}}'s tutorial, {{match.tutorial}}.\n" +
    "      </span>\n" +
    "      <span ng-hide=\"other\">\n" +
    "        Similarities detected in your work.\n" +
    "      </span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"card-body plagiarism-panel\" ng-bind-html=\"match.html\" ng-show=\"match.html\">\n" +
    "  </div>\n" +
    "  <div class=\"card-body plagiarism-panel text-center strong\" ng-hide=\"match.html\">\n" +
    "    <i class=\"fa fa-low-vision fa-2x\"></i>\n" +
    "    <p>Match data hidden</p>\n" +
    "  </div>\n" +
    "  <div class=\"card-footer text-right\">\n" +
    "    <a class=\"btn btn-default\" ng-show=\"match.url\" ng-href=\"{{match.url}}\" target=\"new\">\n" +
    "      <i class=\"fa fa-file-text-o\"></i> View Report\n" +
    "    </a>\n" +
    "    <button class=\"btn btn-danger\" ng-hide=\"match.dismissed\" ng-if=\"canDismiss\" ng-click=\"dismiss_similarity(true)\">\n" +
    "      <i class=\"fa fa-check-square-o\"></i> Mark as Resolved\n" +
    "    </button>\n" +
    "    <button class=\"btn btn-danger\" ng-show=\"match.dismissed\" ng-if=\"canDismiss\" ng-click=\"dismiss_similarity(false)\">\n" +
    "      <i class=\"fa fa-square-o\"></i> Mark as Unresolved\n" +
    "    </button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/task-plagiarism-report-viewer/task-plagiarism-report-viewer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/task-plagiarism-report-viewer/task-plagiarism-report-viewer.tpl.html",
    "<div class=\"task-plagiarism-report-viewer\">\n" +
    "  <div>\n" +
    "    <div class=\"large-notice-block\" ng-show=\"noPlagiarismDetected()\">\n" +
    "      <i class=\"fa fa-eye fa-2x\"></i>\n" +
    "      <p>{{externalName.value}} has detected no similarities for this work</p>\n" +
    "    </div><!--/no-detections-->\n" +
    "    <div ng-if=\"task.similar_to_count > 0 && similarityData\">\n" +
    "      <div ng-class=\"{ 'col-md-6': canViewOther }\" class=\"col-sm-12\">\n" +
    "        <task-plagiarism-file-viewer task=\"task\" match=\"similarityData.student\" match-idx=\"match\" other=\"false\" assessing-unit-role=\"assessingUnitRole\"></task-plagiarism-file-viewer>\n" +
    "      </div>\n" +
    "      <div ng-class=\"{ 'col-md-6': canViewOther }\" class=\"col-sm-12\">\n" +
    "        <task-plagiarism-file-viewer task=\"task\" match=\"similarityData.other_student\" match-idx=\"match\" other=\"true\" assessing-unit-role=\"assessingUnitRole\"></task-plagiarism-file-viewer>\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-12 text-center\">\n" +
    "        <a ng-if=\"mailtoString\" ng-href=\"{{mailtoString}}\" class=\"btn btn-primary btn-lg\">\n" +
    "          <i class=\"fa fa-envelope\"></i> Email Students\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"task.similar_to_count > 1\">\n" +
    "    <pagination\n" +
    "      ng-show=\"task.similar_to_count > 1\"\n" +
    "      total-items=\"task.similar_to_count\"\n" +
    "      ng-model=\"match\"\n" +
    "      items-per-page=\"1\"\n" +
    "      max-size=\"5\"\n" +
    "      class=\"pagination-sm\"\n" +
    "      boundary-links=\"true\"\n" +
    "      rotate=\"false\">\n" +
    "    </pagination>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/task-sheet-viewer/task-sheet-viewer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/task-sheet-viewer/task-sheet-viewer.tpl.html",
    "<div class=\"task-sheet-viewer\">\n" +
    "  <div class=\"panel-body task-description\">\n" +
    "    <div class=\"markdown-to-pdf\" ng-bind-html=\"task.definition.description | markdown\"></div>\n" +
    "  </div><!--task-description-panel-body-->\n" +
    "  <div class=\"panel-heading assessment-details-alignment-panel\" ng-if=\"showAssessmentPanel\">\n" +
    "    <h3 class=\"panel-title\">\n" +
    "      Task Assessment\n" +
    "    </h3>\n" +
    "    Details about your task assessment are given below\n" +
    "  </div><!--view-alignment-panel-header-->\n" +
    "  <div class=\"panel-body assessment-details-alignment-panel\" ng-if=\"showAssessmentPanel\">\n" +
    "    <div class=\"assessment-item current-status\" ng-if=\"assessmentPanels.feedback.show\">\n" +
    "      <aside>\n" +
    "        <status-icon [status]=\"task.status\"></status-icon>\n" +
    "      </aside>\n" +
    "      <div class=\"content\">\n" +
    "        <h4>{{activeStatusData.help.detail}}</h4>\n" +
    "        <h5>Why do I have this status?</h5>\n" +
    "        <p>{{activeStatusData.help.reason}}</p>\n" +
    "        <h5>What should I do?</h5>\n" +
    "        <p>{{activeStatusData.help.action}}</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"assessment-item graded-task\" ng-if=\"assessmentPanels.graded.show\">\n" +
    "      <aside class=\"text-right\">\n" +
    "        <grade-icon colorful=\"assessmentPanels.graded.active\" grade=\"task.grade\"></grade-icon>\n" +
    "      </aside>\n" +
    "      <div class=\"content\">\n" +
    "        <h4 ng-show=\"assessmentPanels.graded.active\">\n" +
    "          This task {{assessmentPanels.graded.active ? 'has been' : 'will be'}} assigned a grade\n" +
    "        </h4>\n" +
    "        <div ng-hide=\"assessmentPanels.graded.active\">\n" +
    "          <p>\n" +
    "            This task will be graded against a grade standard. Your work will\n" +
    "            be assessed and assigned a grade according to a Pass,\n" +
    "            Credit, Distinction or High Distinction standard.\n" +
    "          </p>\n" +
    "          <p class=\"callout callout-primary\">\n" +
    "            As you are attempting to achieve a {{gradeName[project.target_grade]}} in this unit,\n" +
    "            you should attempt to achieve a <strong>{{gradeName[project.target_grade]}}</strong> grade\n" +
    "            on this task.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <div ng-show=\"assessmentPanels.graded.active\">\n" +
    "          Your tutor has marked you on this task to a <strong>{{gradeName[task.grade]}}</strong> standard.\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div><!--/graded-task-details-->\n" +
    "    <div class=\"assessment-item quality-stars\" ng-if=\"assessmentPanels.quality.show\">\n" +
    "      <aside ng-class=\"{'rating-outline': assessmentPanels.quality.active}\">\n" +
    "        <i class=\"fa fa-star\"></i>\n" +
    "      </aside>\n" +
    "      <div class=\"content\">\n" +
    "        <h4 ng-show=\"assessmentPanels.quality.active\">\n" +
    "          This task has been assessed for quality\n" +
    "        </h4>\n" +
    "        <h4 ng-hide=\"assessmentPanels.quality.active\">\n" +
    "          This task will be assessed on a scale to {{qualityPoints.max}}\n" +
    "        </h4>\n" +
    "        <p ng-hide=\"assessmentPanels.quality.active\">\n" +
    "          This task will be graded against a quality scale from\n" +
    "          <strong>0 to {{qualityPoints.max}}</strong>. Your work will assessed\n" +
    "          and assigned a star rating based on the quality of your submission.\n" +
    "        </p>\n" +
    "        <p ng-show=\"assessmentPanels.quality.active\">\n" +
    "          <label>Quality Mark: </label>\n" +
    "          <rating\n" +
    "            class=\"task-quality-rating\"\n" +
    "            ng-model=\"qualityPoints.assigned\"\n" +
    "            max=\"qualityPoints.max\"\n" +
    "            state-on=\"'fa fa-star rating-outline'\"\n" +
    "            state-off=\"'fa fa-star rating-disabled'\"\n" +
    "            readonly=\"true\">\n" +
    "          </rating>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div><!--/quality-star-details-->\n" +
    "  </div><!--assessment-details-panel-body-->\n" +
    "  <div class=\"panel-heading task-view-alignment-panel\" ng-hide=\"showTaskSheet\" ng-if=\"alignments.length > 0\">\n" +
    "    <h3 class=\"panel-title\">\n" +
    "      Task Outcome Alignments\n" +
    "    </h3>\n" +
    "    Teaching staff believe that completing this task will help you achieve the outcomes listed below\n" +
    "  </div><!--view-alignment-panel-header-->\n" +
    "  <div class=\"panel-body task-view-alignment-panel\" ng-hide=\"showTaskSheet\" ng-if=\"alignments.length > 0\">\n" +
    "    <task-ilo-alignment-viewer\n" +
    "      project=\"project\"\n" +
    "      task=\"task\"\n" +
    "      unit=\"unit\"\n" +
    "      alignments=\"alignments\"\n" +
    "      summative=\"false\"\n" +
    "      hide-visualisation=\"true\"></task-ilo-alignment-viewer>\n" +
    "  </div><!--view-alignment-panel-body-->\n" +
    "  <div class=\"panel-heading row-fluid task-download\" ng-show=\"hasPDF || hasResources\">\n" +
    "    <h3 class=\"panel-title\">\n" +
    "      Begin task\n" +
    "    </h3>\n" +
    "    Begin task by {{hasPDF ? \"viewing the task sheet\" : \"\"}} {{hasPDF && hasResources ? \"or\" : \"\"}} {{hasResources ? \"downloading task resources\" : \"\"}}\n" +
    "  </div>\n" +
    "  <div class=\"panel-body task-buttons-download-area\" ng-class=\"{ small: showTaskSheet }\" ng-show=\"hasPDF || hasResources\">\n" +
    "    <a ng-class=\"{ active: showTaskSheet }\" ng-click=\"toggleTaskSheet()\" ng-show=\"hasPDF\" class=\"btn btn-lg btn-default\">\n" +
    "      <div>\n" +
    "        <i class=\"fa fa-2x fa-file-pdf-o\"></i>\n" +
    "        <p>View{{showTaskSheet ? \"ing\" : ''}} PDF</p>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "    <a ng-click=\"downloadEvent('PDF')\" href=\"{{taskPDFUrl}}&as_attachment=true\" ng-show=\"hasPDF\" target=\"_blank\" class=\"btn btn-lg btn-info\">\n" +
    "      <div>\n" +
    "        <i class=\"fa fa-2x fa-file-pdf-o\"></i>\n" +
    "        <i class=\"fa fa-2x fa-download\"></i>\n" +
    "        <p>Download PDF</p>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "    <a ng-click=\"downloadEvent('Resources')\" href=\"{{resourceUrl}}\" ng-show=\"hasResources\" target=\"_blank\" class=\"btn btn-lg btn-success\">\n" +
    "      <div>\n" +
    "        <i class=\"fa fa-2x fa-download\"></i>\n" +
    "        <p>Download Resources</p>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  <div ng-if=\"showTaskSheet && hasPDF && hasResources\">\n" +
    "    <pdf-viewer-panel\n" +
    "      pdf-url=\"taskPDFUrl\"\n" +
    "      resources-url=\"resourceUrl\"\n" +
    "      hide-footer=\"true\">\n" +
    "    </pdf-viewer-panel>\n" +
    "  </div>\n" +
    "  <div ng-if=\"showTaskSheet && hasPDF && !hasResources\">\n" +
    "    <pdf-viewer-panel\n" +
    "      pdf-url=\"taskPDFUrl\"\n" +
    "      hide-footer=\"true\">\n" +
    "    </pdf-viewer-panel>\n" +
    "  </div><!--viewing-task-sheet-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/task-status-selector/task-status-selector.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/task-status-selector/task-status-selector.tpl.html",
    "<ul ng-class=\"{'dropdown-menu' :inMenu}\" class=\"task-status-selector\">\n" +
    "  <li ng-show=\"assessingUnitRole\" class=\"col-xs-6 col-sm-4 col-md-4\" ng-repeat=\"action in taskEngagementConfig.tutorTriggers\" >\n" +
    "    <div class=\"row\">\n" +
    "    <button class=\"col-xs-12 btn task-status {{action.class}}\" ng-class=\"{'active' : project.selectedTask.status == action.status}\" ng-click=\"triggerTransition(action.status)\" ng-model=\"project.selectedTask.status\" btn-radio=\"action.status\" uncheckable>\n" +
    "      <i class=\"{{action.icon}} fa-2x task-status-icon\"></i>\n" +
    "      <strong>{{action.label}}</strong>\n" +
    "    </button>\n" +
    "    </div>\n" +
    "  </li><!--/tutor-statuses-->\n" +
    "  <li ng-hide=\"assessingUnitRole || taskService.rejectFutureStates[task.status].length == 0\" class=\"col-xs-6 col-sm-4 col-md-4\">\n" +
    "    <div class=\"row\">\n" +
    "    <button class=\"col-xs-12 btn task-status {{task.statusClass()}} active\" uncheckable>\n" +
    "      <i class=\"{{task.statusIcon()}} fa-2x task-status-icon\"></i>\n" +
    "      <strong>{{task.statusLabel()}}</strong>\n" +
    "    </button>\n" +
    "    </div>\n" +
    "  </li>\n" +
    "  <li class=\"col-xs-6 col-sm-4 col-md-4\" ng-repeat=\"action in task.filterFutureStates(taskEngagementConfig.studentTriggers)\" >\n" +
    "    <div class=\"row\">\n" +
    "      <button class=\"col-xs-12 btn task-status {{action.class}}\" ng-class=\"{'active' : project.selectedTask.status == action.status}\" ng-click=\"triggerTransition(action.status)\" ng-model=\"project.selectedTask.status\" btn-radio=\"action.status\" >\n" +
    "        <i class=\"{{action.icon}} fa-2x task-status-icon\"></i>\n" +
    "        <strong>{{action.label}}</strong>\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </li><!--/student-statuses-->\n" +
    "</ul>\n" +
    "");
}]);

angular.module("tasks/task-submission-viewer/task-submission-viewer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/task-submission-viewer/task-submission-viewer.tpl.html",
    "<div class=\"panel-body task-submission-viewer\">\n" +
    "  <div class=\"large-notice-block\" ng-show=\"notSubmitted(task) || task.processing_pdf || loadingDetails(task)\">\n" +
    "    <div ng-show=\"notSubmitted(task) && ! loadingDetails(task)\">\n" +
    "      <i class=\"fa fa-upload fa-2x\"></i>\n" +
    "      <p>Upload submission before viewing</p>\n" +
    "    </div><!--/no-pdf-->\n" +
    "    <div ng-show=\"task.processing_pdf && ! loadingDetails(task)\">\n" +
    "        <i class=\"fa fa-clock-o fa-2x\"></i>\n" +
    "        <p>\n" +
    "          Submission is still being processed\n" +
    "          <p class=\"small text-muted\">\n" +
    "            Please check again shortly\n" +
    "          </p>\n" +
    "        </p>\n" +
    "    </div><!--/pdf-in-process-->\n" +
    "    <div ng-show=\"loadingDetails(task)\">\n" +
    "        <i class=\"fa fa-spinner fa-pulse fa-2x\"></i>\n" +
    "        <p>Fetching Submission Details</p>\n" +
    "    </div><!--/loading details-->\n" +
    "  </div>\n" +
    "  <div ng-if=\"task.has_pdf\">\n" +
    "    <pdf-viewer-panel\n" +
    "      pdf-url=\"taskUrl\"\n" +
    "      resources-url=\"taskFilesURL\"\n" +
    "      footer-text=\"{{task.status != 'ready_to_mark' ? 'Annotated comments are viewable once PDF is downloaded' : 'Comments will be available once your tutor has assessed your submission'}}\"\n" +
    "      ng-hide=\"notSubmitted(task) || task.processing_pdf\">\n" +
    "    </pdf-viewer-panel>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/task-submission-wizard/task-submission-wizard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/task-submission-wizard/task-submission-wizard.tpl.html",
    "<div class=\"task-submission-wizard\">\n" +
    "  <div class=\"panel-body\">\n" +
    "    <div class=\"initial-state\" ng-show=\"state == states.initial\">\n" +
    "      <div class=\"large-notice-block\" ng-show=\"task.definition.upload_requirements.length == 0\">\n" +
    "        <i class=\"fa fa-times fa-2x\"></i>\n" +
    "        <p>No files required for this task</p>\n" +
    "      </div><!--/no-files-required-->\n" +
    "      <div class=\"large-notice-block\" ng-show=\"isGroupTask && !inGroupForTask\">\n" +
    "        <i class=\"fa fa-users fa-2x\"></i>\n" +
    "        <p></p>\n" +
    "      </div><!--/no-detections-->\n" +
    "      <div class=\"large-notice-block\" ng-if=\"task.definition.upload_requirements.length > 0 && ((! isGroupTask) || inGroupForTask)\">\n" +
    "        <div class=\"icons-for-files\">\n" +
    "          <i ng-repeat=\"(k, file) in files\" class=\"fa fa-2x fa-file-{{file.type == 'document' ? 'pdf' : file.type}}-o\"></i>\n" +
    "        </div>\n" +
    "        <h3>{{numberOfFiles}} File{{numberOfFiles > 1 ? \"s\" : \"\"}} Required</h3>\n" +
    "        <p class=\"lead\">\n" +
    "          <span ng-show=\"helpLabel\">\n" +
    "          Upload as\n" +
    "          </span>\n" +
    "          {{helpLabel || \"Please select upload type below\"}}\n" +
    "        </p>\n" +
    "        <div class=\"text-center\">\n" +
    "          <div class=\"btn-group\">\n" +
    "            <button ng-repeat=\"(key, data) in uploadTypes\"\n" +
    "                class=\"btn btn-lg task-status {{data.class}}\"\n" +
    "                ng-click=\"setUploadType(key)\"\n" +
    "                ng-mouseover=\"setHelpLabel(data.text)\"\n" +
    "                ng-mouseout=\"setHelpLabel()\"\n" +
    "                ng-if=\"!data.hide\"\n" +
    "                ng-class=\"{active: uploadType == key}\">\n" +
    "              <i class=\"fa-2x {{data.icon}}\"></i>\n" +
    "            </button>\n" +
    "          </div><!--/upload-type-buttons-->\n" +
    "        </div>\n" +
    "      </div><!--upload-header-->\n" +
    "    </div><!--/initial-state-->\n" +
    "    <div class=\"group-member-contribution-state\" ng-show=\"state == states.groupMemberContribution && isGroupTask && !isUploading\">\n" +
    "      <div class=\"upload-assistant clearfix\">\n" +
    "        <h3>\n" +
    "          Team Contribution\n" +
    "          <small>\n" +
    "            Please rate each team member's effort. To mark a member with <strong>no effort</strong>, click the first <i class=\"fa fa-child\"></i> icon twice.\n" +
    "          </small>\n" +
    "        </h3>\n" +
    "      </div>\n" +
    "      <group-member-contribution-assigner task=\"task\" project=\"project\" team=\"team\"></group-member-contribution-assigner>\n" +
    "      <div class=\"text-center contribution-navigation\">\n" +
    "        <button class=\"btn btn-lg btn-default\"\n" +
    "          ng-click=\"setState(states.initial)\"> Back </button>\n" +
    "        <button class=\"btn btn-lg btn-primary\"\n" +
    "          ng-click=\"setState(states.uploadFiles)\"> Continue </button>\n" +
    "      </div>\n" +
    "    </div><!--/group-member-contribution-->\n" +
    "    <div class=\"upload-files-state\" ng-show=\"state == states.uploadFiles && task.definition.upload_requirements.length > 0\">\n" +
    "      <div class=\"upload-assistant clearfix\" ng-if=\"!isUploading\">\n" +
    "        <h3>\n" +
    "          Upload {{task.definition.name}}...\n" +
    "          <small>Select {{numberOfFiles}} file{{numberOfFiles > 1 ? \"s\" : \"\"}} below</small>\n" +
    "        </h3>\n" +
    "        <div class=\"upload-type-switcher\">\n" +
    "          <button\n" +
    "            class=\"btn btn-default\"\n" +
    "            ng-click=\"setState(states.groupMemberContribution)\"\n" +
    "            ng-if=\"isGroupTask\"\n" +
    "            ng-mouseover=\"setHelpLabel('Configure Group Member Contributions')\"\n" +
    "            ng-mouseout=\"setHelpLabel()\">\n" +
    "            <i class=\"fa fa-2x fa-child\"></i>\n" +
    "          </button>\n" +
    "          <div class=\"btn-group\">\n" +
    "            <button ng-repeat=\"(key, data) in uploadTypes\"\n" +
    "                class=\"btn task-status {{data.class}}\"\n" +
    "                ng-click=\"setUploadType(key)\"\n" +
    "                ng-mouseover=\"setHelpLabel(data.text)\"\n" +
    "                ng-mouseout=\"setHelpLabel()\"\n" +
    "                ng-if=\"!data.hide\"\n" +
    "                ng-class=\"{active: uploadType == key}\">\n" +
    "              <i class=\"fa-2x {{data.icon}}\"></i>\n" +
    "            </button>\n" +
    "          </div><!--/upload-type-buttons-->\n" +
    "          <p class=\"\">\n" +
    "            <strong ng-hide=\"helpLabel == 'Configure Group Member Contributions'\">\n" +
    "              Upload{{helpLabel == '' ? 'ing' : ''}} as\n" +
    "            </strong>\n" +
    "            <span>{{helpLabel || uploadTypes[uploadType].text}}</span>\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div><!--/upload-assistant-->\n" +
    "      <file-uploader\n" +
    "        files=\"files\"\n" +
    "        url=\"url\"\n" +
    "        payload=\"payload\"\n" +
    "        on-before-upload=\"onBeforeUpload\"\n" +
    "        is-uploading=\"isUploading\"\n" +
    "        on-success=\"onSuccess\"\n" +
    "        on-complete=\"onComplete\"></file-uploader>\n" +
    "    </div><!--/upload-area--><!--end if to hide group tasks-->\n" +
    "  </div>\n" +
    "  <div class=\"panel-footer clearfix\" ng-if=\"allowRegeneratePdf\">\n" +
    "    <button class=\"btn btn-primary pull-right\" tooltip=\"Ask {{externalName.value}} to regenerate the PDF that was created\" ng-click=\"recreateTask()\">\n" +
    "      <i class='fa fa-refresh'></i>\n" +
    "    </button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/modals/unit-ilo-edit-modal/unit-ilo-edit-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/modals/unit-ilo-edit-modal/unit-ilo-edit-modal.tpl.html",
    "<div class=\"unit-ilo-edit-modal\">\n" +
    "  <form class=\"form-horizontal\" ng-submit=\"saveILO()\" role=\"form\">\n" +
    "    <div class=\"modal-header\">\n" +
    "      <h3>{{isNew ? \"Create Learning Outcome\" : \"Edit Learning Outcome: \" + ilo.ilo_number}}</h3>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "      <div class=\"form-group\" required>\n" +
    "        <label class=\"col-sm-3 control-label\">Name</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <input type=\"text\" class=\"form-control\" ng-model=\"ilo.name\" placeholder=\"Outcome Name\" />\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" required>\n" +
    "        <label class=\"col-sm-3 control-label\">Abbreviation</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <input type=\"text\" class=\"form-control\" ng-model=\"ilo.abbreviation\" placeholder=\"ABBR\" />\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" required>\n" +
    "        <label class=\"col-sm-3 control-label\">Description</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <!-- <markdown-editor height=\"200\" placeholder=\"Enter markdown description...\" ng-model=\"ilo.description\"></markdown-editor> -->\n" +
    "          <div contenteditable ng-model=\"ilo.description\" placeholder=\"Enter markdown description...\" style=\"border-style: solid; border-width: thin; height: 200px\"></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer text-right\">\n" +
    "      <input type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"ilo.name == null || ilo.abbreviation == null || ilo.description == null\"\n" +
    "        value=\"{{isNew ? 'Create' : 'Update'}}\" />\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>");
}]);

angular.module("units/modals/unit-student-enrolment-modal/unit-student-enrolment-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/modals/unit-student-enrolment-modal/unit-student-enrolment-modal.tpl.html",
    "<div class=\"unit-student-enrolment-modal\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h3>Enrol Student</h3>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "      <div class=\"form-group\" required>\n" +
    "        <label class=\"col-sm-3 control-label\">Student</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <input type=\"input\" class=\"form-control\" placeholder=\"Student ID\" ng-model=\"student_id\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-3 control-label\" for=\"teachingperiod\">Campus</label>\n" +
    "        <div class=\"col-sm-7\">\n" +
    "          <select class=\"form-control\" ng-model=\"data.campus_id\">\n" +
    "            <option ng-value=\"campus.id\" ng-repeat=\"campus in campuses\" value=\"{{campus.id}}\">{{campus.name}}</option>\n" +
    "          </select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer text-right\">\n" +
    "    <input type=\"button\" ng-click=\"enrolStudent(student_id, data.campus_id)\" class=\"btn btn-primary\" value=\"Save\" />\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/all/directives/all-units-list/all-units-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/all/directives/all-units-list/all-units-list.tpl.html",
    "<div class=\"container\">\n" +
    "  <div if-role=\"Tutor Convenor Admin\">\n" +
    "    <div class=\"panel panel-primary\">\n" +
    "      <div class=\"panel-heading clearfix\">\n" +
    "        <div class=\"pull-left\">\n" +
    "          <h4 class=\"panel-title\">Units</h4>\n" +
    "          All units registered with {{externalName.value}}\n" +
    "        </div>\n" +
    "        <form role=\"search\" class=\"pull-right form-horizontal\">\n" +
    "          <input id=\"searchbar\" class=\"input-md form-control\" placeholder=\"Search for units...\" type=\"search\" ng-model=\"search\" autocomplete=\"off\" typeahead=\"unitRole.unit_name for unitRole in unitRoles | filter:$viewValue | limitTo:8\" />\n" +
    "        </form>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <div class=\"callout callout-info\" ng-hide=\"unitRoles.length > 0\">No units have been registered with {{externalName.value}} yet</div>\n" +
    "        <table ng-show=\"unitRoles.length > 0\" class=\"table table-hover table-pointer\">\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <th><a ng-click=\"sortOrder='unit_code'; reverse=!reverse\">Unit Code <i ng-show=\"sortOrder=='unit_code'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='unit_name'; reverse=!reverse\">Name <i ng-show=\"sortOrder=='unit_name'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='role'; reverse=!reverse\">Unit Role <i ng-show=\"sortOrder=='role'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='teachingPeriod().name()'; reverse=!reverse\">Teaching Period <i ng-show=\"sortOrder=='teachingPeriod().name()'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='start_date'; reverse=!reverse\">Start Date <i ng-show=\"sortOrder=='start_date'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='end_date'; reverse=!reverse\">End Date <i ng-show=\"sortOrder=='end_date'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "              <th><a ng-click=\"sortOrder='active'; reverse=!reverse\">Active <i ng-show=\"sortOrder=='teachingPeriod().active()'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i></a></th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr ng-repeat=\"unitRole in filteredUnitRoles = (unitRoles | filter:search) | orderBy:sortOrder:reverse | startFrom:(currentPage - 1) * pageSize | limitTo: pageSize\" ui-sref=\"units/tasks/inbox({ unitId: unitRole.unit_id })\">\n" +
    "              <td>\n" +
    "                <label class=\"label label-info\">\n" +
    "                  {{unitRole.unit_code}}\n" +
    "                </label>\n" +
    "              </td>\n" +
    "              <td>{{unitRole.unit_name}}</td>\n" +
    "              <td>{{(unitRole.role | ucfirst) || \"N/A\"}}</td>\n" +
    "              <td ng-if=\"unitRole.teachingPeriod()\">{{(unitRole.teachingPeriod().name())}}</td>\n" +
    "              <td ng-if=\"!unitRole.teachingPeriod()\">Custom</td>\n" +
    "              <td>{{unitRole.start_date | date : 'EEE d MMM' : '+0000'}}</td>\n" +
    "              <td>{{unitRole.end_date | date : 'EEE d MMM' : '+0000'}}</td>\n" +
    "              <td ng-if=\"unitRole.teachingPeriod()\">\n" +
    "                <i ng-if=\"unitRole.teachingPeriod().active() && unitRole.active\" class=\"fa fa-check\"></i>\n" +
    "                <i ng-if=\"!unitRole.teachingPeriod().active() || !unitRole.active\" class=\"fa fa-times\"></i>\n" +
    "              </td>\n" +
    "              <td ng-if=\"!unitRole.teachingPeriod()\">\n" +
    "                <i ng-if=\"unitRole.active\" class=\"fa fa-check\"></i>\n" +
    "                <i ng-if=\"!unitRole.active\" class=\"fa fa-times\"></i>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "      <div class=\"panel-footer clearfix\">\n" +
    "        <pagination ng-show=\"filteredUnitRoles.length > pageSize\" total-items=\"filteredUnitRoles.length\" ng-model=\"currentPage\" items-per-page=\"pageSize\" max-size=\"maxSize\" class=\"pagination-sm pull-left\" boundary-links=\"true\" rotate=\"false\"></pagination>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"spinner\" ng-hide=\"dataLoaded\">\n" +
    "    <i class=\"fa fa-pulse fa-4x fa-spinner\" ng-show=\"showSpinner\"></i>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/analytics/analytics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/analytics/analytics.tpl.html",
    "<div class=\"container\">\n" +
    "  <tabset class=\"tabset-icon\">\n" +
    "    <tab ng-repeat=\"tab in tabs | toArray | orderBy: 'seq'\" active=\"tab.active\" ng-click=\"setActiveTab(tab)\">\n" +
    "      <tab-heading>{{tab.title}}</tab-heading>\n" +
    "    </tab>\n" +
    "  </tabset><!--/tabs-->\n" +
    "  <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">\n" +
    "        {{activeTab.title}}\n" +
    "      </h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      {{activeTab.subtitle}}\n" +
    "    </div>\n" +
    "    <unit-stats-download unit=\"unit\" ng-if=\"activeTab === tabs.csvStatDownload\"> </unit-stats-download>\n" +
    "    <task-status-stats unit=\"unit\" ng-if=\"activeTab === tabs.taskStatusStats\"></task-status-stats>\n" +
    "    <unit-target-grade-stats unit=\"unit\" ng-if=\"activeTab === tabs.targetGradeStats\"></unit-target-grade-stats>\n" +
    "    <task-completion-stats unit=\"unit\" ng-if=\"activeTab === tabs.taskCompletionStats\"></task-completion-stats>\n" +
    "    <unit-achievement-stats unit=\"unit\" ng-if=\"activeTab === tabs.achievementStats\"></unit-achievement-stats>\n" +
    "  </div><!--/tab-contents-panel-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/analytics/directives/task-completion-stats/task-completion-stats.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/analytics/directives/task-completion-stats/task-completion-stats.tpl.html",
    "<div class=\"task-completion-stats drilldown-visualiser panel-body\">\n" +
    "  <div class=\"data-loaded\" ng-if=\"data\">\n" +
    "    <div class=\"clearfix\">\n" +
    "      <div class=\"btn-group col-sm-6 pull-left\">\n" +
    "        <label class=\"btn btn-default\" ng-model=\"dataModel.selectedType\" btn-radio=\"'unit'\">\n" +
    "          <i tooltip=\"View stats over entire unit\" class=\"fa fa-university\"></i>\n" +
    "        </label>\n" +
    "        <label class=\"btn btn-default\" ng-model=\"dataModel.selectedType\" btn-radio=\"'tutorial'\">\n" +
    "          <i tooltip=\"View stats by tutorial\" class=\"fa fa-pencil\"></i>\n" +
    "        </label>\n" +
    "        <label class=\"btn btn-default\" ng-model=\"dataModel.selectedType\" btn-radio=\"'grade'\">\n" +
    "          <i tooltip=\"View stats by target grade\" class=\"fa fa-trophy\"></i>\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-6 pull-right\" ng-if=\"dataModel.selectedType == 'tutorial'\">\n" +
    "        <select\n" +
    "          class=\"form-control\"\n" +
    "          ng-options=\"tutorial as (tutorial.abbreviation + ' - ' + tutorial.tutorName) for tutorial in (tutorialsForSelector | orderBy: 'tutorial.id' | orderBy: 'tutorial.abbreviation' | reverse) track by tutorial.id\"\n" +
    "          ng-model=\"dataModel.selectedTutorial\"></select>\n" +
    "      </div>\n" +
    "    </div><!--/toolbar-->\n" +
    "    <hr>\n" +
    "    <div ng-show=\"depth == 0\">\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'unit'\">\n" +
    "        Task completion distribution in <strong>{{unit.code}}</strong>\n" +
    "      </h4>\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'tutorial'\">\n" +
    "        <p>Task completion distribution for Tutorial <strong>{{dataModel.selectedTutorial.abbreviation}}</strong></p>\n" +
    "        <p class='small text-muted'>{{dataModel.selectedTutorial.tutorName}} at {{dataModel.selectedTutorial.meeting_time | date: shortTime}}</p>\n" +
    "      </h4>\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'grade'\">\n" +
    "        Task completion distribution by Target Grade\n" +
    "      </h4>\n" +
    "    </div><!--/headers-for-depth-0-->\n" +
    "    <div ng-show=\"depth == 1\">\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'tutorial'\">\n" +
    "        Task completion distribution over all tutorials in <strong>{{unit.code}}</strong>\n" +
    "      </h4>\n" +
    "    </div><!--/headers-for-depth-1-->\n" +
    "    <div ng-if=\"depth == 0\" ng-click=\"drillDown()\" class=\"overview-chart\">\n" +
    "      <task-completion-box-plot\n" +
    "          data=\"data\"\n" +
    "          unit=\"unit\"\n" +
    "          type=\"dataModel.selectedType\"></task-completion-box-plot>\n" +
    "    </div><!--/depth-0-chart-->\n" +
    "    <div ng-if=\"dataModel.selectedTutorial.id < 0 && depth == 1\" class=\"overview-chart\">\n" +
    "      <div ng-repeat=\"tutorial in unit.tutorials | orderBy: 'abbreviation'\" class=\"col-xs-6 col-sm-4 col-md-3\" ng-click=\"switchToTutorial(tutorial)\">\n" +
    "        <task-completion-box-plot\n" +
    "            data=\"data[tutorial.id]\"\n" +
    "            unit=\"unit\"\n" +
    "            type=\"dataModel.selectedType\"\n" +
    "            height=\"200\"\n" +
    "            show-legend=\"false\"></task-completion-box-plot>\n" +
    "        <div class=\"col-xs-12 caption text-center\">\n" +
    "          <strong>{{tutorial.abbreviation}}</strong>\n" +
    "          <div class=\"small text-muted\">{{tutorial.tutorName}} at {{tutorial.meeting_time | date: shortTime}}</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div><!--/overview-charts-->\n" +
    "  </div>\n" +
    "  <div class=\"data-not-loaded\" ng-hide=\"data\">\n" +
    "    <i class=\"fa fa-spinner fa-pulse fa-3x\"></i>\n" +
    "    <p>Loading...</p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/analytics/directives/task-status-stats/task-status-stats.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/analytics/directives/task-status-stats/task-status-stats.tpl.html",
    "<div class=\"task-status-stats drilldown-visualiser\">\n" +
    "  <div class=\"panel-body\" ng-if=\"data\">\n" +
    "    <div class=\"clearfix\">\n" +
    "      <div class=\"btn-group col-sm-6 pull-left\">\n" +
    "        <label class=\"btn btn-default\" ng-model=\"dataModel.selectedType\" btn-radio=\"'unit'\">\n" +
    "          <i tooltip=\"View task statuses over entire unit\" class=\"fa fa-university\"></i>\n" +
    "        </label>\n" +
    "        <label class=\"btn btn-default\" ng-model=\"dataModel.selectedType\" btn-radio=\"'tutorial'\">\n" +
    "          <i tooltip=\"View task statuses by tutorial\" class=\"fa fa-pencil\"></i>\n" +
    "        </label>\n" +
    "        <label class=\"btn btn-default\" ng-model=\"dataModel.selectedType\" btn-radio=\"'task'\">\n" +
    "          <i tooltip=\"View task statuses by task\" class=\"fa fa-tasks\"></i>\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-6 pull-right\" ng-if=\"dataModel.selectedType == 'tutorial'\">\n" +
    "        <select\n" +
    "          class=\"form-control\"\n" +
    "          ng-options=\"tutorial as (tutorial.text) for tutorial in (tutorialsForSelector | orderBy: 'tutorial.abbreviation' | reverse) track by tutorial.id\"\n" +
    "          ng-model=\"dataModel.selectedTutorial\"></select>\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-6 pull-right\" ng-if=\"dataModel.selectedType == 'task'\">\n" +
    "        <select\n" +
    "          class=\"form-control\"\n" +
    "          ng-options=\"task as (task.text) for task in (tasksForSelector | orderBy: 'seq') track by task.id\"\n" +
    "          ng-model=\"dataModel.selectedTask\"></select>\n" +
    "      </div>\n" +
    "    </div><!--/toolbar-->\n" +
    "    <hr>\n" +
    "    <div ng-show=\"depth == 0\">\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'unit'\">\n" +
    "        Task status distribution in <strong>{{unit.code}}</strong>\n" +
    "      </h4>\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'task'\">\n" +
    "        <p>Task status distribution of <strong>{{dataModel.selectedTask.abbreviation}}</strong> in <strong>{{unit.code}}</strong></p>\n" +
    "        <p class='small text-muted'>{{dataModel.selectedTask.name}}</p>\n" +
    "      </h4>\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'tutorial'\">\n" +
    "        <p>Status by Task for Tutorial <strong>{{dataModel.selectedTutorial.abbreviation}}</strong></p>\n" +
    "        <p class='small text-muted'>{{dataModel.selectedTutorial.tutorName}} at {{dataModel.selectedTutorial.meeting_time | date: shortTime}}</p>\n" +
    "      </h4>\n" +
    "    </div><!--/headers-for-depth-0-->\n" +
    "    <div ng-show=\"depth == 1\">\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'tutorial'\">\n" +
    "        Task status distribution over all tutorials in <strong>{{unit.code}}</strong>\n" +
    "      </h4>\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'task'\">\n" +
    "        Task status distribution over all tasks in <strong>{{unit.code}}</strong>\n" +
    "      </h4>\n" +
    "    </div><!--/headers-for-depth-1-->\n" +
    "    <div ng-show=\"depth == 2\">\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'tutorial'\">\n" +
    "        <p>Status by Task for Tutorial <strong>{{dataModel.selectedTutorial.abbreviation}}</strong></p>\n" +
    "        <p class='small text-muted'>{{dataModel.selectedTutorial.tutorName}} at {{dataModel.selectedTutorial.meeting_time | date: shortTime}}</p>\n" +
    "      </h4>\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'task'\">\n" +
    "        <p>Status by Tutorial for Task <strong>{{dataModel.selectedTask.abbreviation}}</strong></p>\n" +
    "        <p class='small text-muted'>{{dataModel.selectedTask.name}}</p>\n" +
    "      </h4>\n" +
    "    </div><!--/headers-for-depth-2-->\n" +
    "    <p class=\"col-sm-12 help-block text-center\">\n" +
    "      Click chart to explore details\n" +
    "    </p><!--/click-chart-help-block-->\n" +
    "    <div ng-if=\"depth == 0\" ng-click=\"drillDown()\" class=\"overview-chart\">\n" +
    "      <task-status-pie-chart data=\"data\" show-legend=\"true\" height=\"600\"></task-status-pie-chart>\n" +
    "    </div><!--/depth-0-chart-->\n" +
    "    <div ng-if=\"(dataModel.selectedTask.id < 0) || (depth >= 1 && dataModel.selectedTutorial.id > 0)\" class=\"overview-charts\">\n" +
    "      <div ng-repeat=\"chart in overviewKeys\" class=\"col-xs-6 col-sm-4 col-md-3 overview-chart\" ng-click=\"drillToTask(chart.task)\">\n" +
    "        <task-status-pie-chart ng-if=\"chart.show\" data=\"chart.data\" show-legend=\"false\" height=\"200\"></task-status-pie-chart>\n" +
    "        <div class=\"no-data-to-display\" ng-hide=\"chart.show\">\n" +
    "          No data\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12 caption text-center\">\n" +
    "          <strong class=\"col-xs-12\">{{chart.title}}</strong>\n" +
    "          <div class=\"col-xs-12 small text-muted\">{{chart.subtitle}}</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div><!--/overview-chart-charts-of-tutorials-or-tasks-->\n" +
    "    <div ng-if=\"(dataModel.selectedTutorial.id < 0) || (depth >= 1 && dataModel.selectedTask.id > 0)\" class=\"overview-charts\">\n" +
    "      <div ng-repeat=\"chart in (overviewKeys | orderBy: 'title' )\" class=\"col-xs-6 col-sm-4 col-md-3 overview-chart\" ng-click=\"drillToTutorial(chart.tutorial)\">\n" +
    "        <task-status-pie-chart ng-if=\"chart.show\" data=\"chart.data\" show-legend=\"false\" height=\"200\"></task-status-pie-chart>\n" +
    "        <div class=\"no-data-to-display\" ng-hide=\"chart.show\">\n" +
    "          No data\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12 caption text-center\">\n" +
    "          <strong>{{chart.title}}</strong>\n" +
    "          <div class=\"small text-muted\">{{chart.subtitle}}</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div><!--/overview-chart-charts-of-tutorials-or-tasks-->\n" +
    "  </div>\n" +
    "  <div class=\"large-notice-block\" ng-hide=\"data\">\n" +
    "    <i class=\"fa fa-spinner fa-pulse fa-3x\"></i>\n" +
    "    <p>Loading...</p>\n" +
    "  </div>\n" +
    "  <div class=\"panel-footer text-center\" ng-show=\"data && depth == 0\">\n" +
    "    <strong>{{completeStats.completed}}%</strong> of student tasks are marked as complete, while <strong>{{completeStats.left}}%</strong> are not\n" +
    "  </div><!--/footer-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/analytics/directives/unit-achievement-stats/unit-achievement-stats.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/analytics/directives/unit-achievement-stats/unit-achievement-stats.tpl.html",
    "<div class=\"unit-achievement-stats drilldown-visualiser panel-body\">\n" +
    "  <div ng-if=\"data\">\n" +
    "    <div class=\"clearfix\">\n" +
    "      <div class=\"col-sm-6 pull-left\">\n" +
    "        <div class=\"btn-group\">\n" +
    "          <label class=\"btn btn-default\" ng-model=\"dataModel.selectedType\" btn-radio=\"'unit'\">\n" +
    "            <i tooltip=\"View stats over entire unit\" class=\"fa fa-university\"></i>\n" +
    "          </label>\n" +
    "          <label class=\"btn btn-default\" ng-model=\"dataModel.selectedType\" btn-radio=\"'tutorial'\">\n" +
    "            <i tooltip=\"View stats by tutorial\" class=\"fa fa-pencil\"></i>\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div class=\"btn-group\">\n" +
    "          <label class=\"btn btn-default\" ng-model=\"dataModel.pct\" btn-radio=\"true\">\n" +
    "            <i tooltip=\"View as percent of maximum achievement\" class=\"fa fa-percent\" tooltip-append-to-body=\"true\"></i>\n" +
    "          </label>\n" +
    "          <label class=\"btn btn-default\" ng-model=\"dataModel.pct\" btn-radio=\"false\">\n" +
    "            <i tooltip=\"View as the raw achievement data\" class=\"fa fa-database\" tooltip-append-to-body=\"true\"></i>\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-6 pull-right\" ng-if=\"dataModel.selectedType == 'tutorial'\">\n" +
    "        <select\n" +
    "          class=\"form-control\"\n" +
    "          ng-options=\"tutorial as (tutorial.abbreviation + ' - ' + tutorial.tutorName) for tutorial in (tutorialsForSelector | orderBy: 'tutorial.abbreviation' | reverse) track by tutorial.id\"\n" +
    "          ng-model=\"dataModel.selectedTutorial\"></select>\n" +
    "      </div>\n" +
    "    </div><!--/toolbar-->\n" +
    "    <hr>\n" +
    "    <div ng-show=\"depth == 0\">\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'unit'\">\n" +
    "        ILO achievement distribution in <strong>{{unit.code}}</strong>\n" +
    "      </h4>\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'tutorial'\">\n" +
    "        <p>ILO achievement distribution for Tutorial <strong>{{dataModel.selectedTutorial.abbreviation}}</strong></p>\n" +
    "        <p class='small text-muted'>{{dataModel.selectedTutorial.tutorName}} at {{dataModel.selectedTutorial.meeting_time | date: shortTime}}</p>\n" +
    "      </h4>\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'grade'\">\n" +
    "        ILO achievement distribution by Target Grade\n" +
    "      </h4>\n" +
    "    </div><!--/headers-for-depth-0-->\n" +
    "    <div ng-show=\"depth == 1\">\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'tutorial'\">\n" +
    "        ILO achievement distribution over all tutorials in <strong>{{unit.code}}</strong>\n" +
    "      </h4>\n" +
    "    </div><!--/headers-for-depth-1-->\n" +
    "    <div ng-if=\"depth == 0\" ng-click=\"drillDown()\" class=\"overview-chart\">\n" +
    "      <achievement-box-plot\n" +
    "          data=\"data\"\n" +
    "          unit=\"unit\"\n" +
    "          type=\"dataModel.selectedType\"\n" +
    "          pct-holder=\"dataModel\"></achievement-box-plot>\n" +
    "    </div><!--/depth-0-chart-->\n" +
    "    <div ng-if=\"dataModel.selectedTutorial.id < 0 && depth == 1\" class=\"overview-chart\">\n" +
    "      <div ng-repeat=\"tutorial in unit.tutorials | orderBy: 'abbreviation'\" class=\"col-xs-6 col-sm-4 col-md-3\" ng-click=\"switchToTutorial(tutorial)\">\n" +
    "        <achievement-box-plot\n" +
    "            data=\"data[tutorial.id]\"\n" +
    "            unit=\"unit\"\n" +
    "            type=\"dataModel.selectedType\"\n" +
    "            height=\"200\"\n" +
    "            show-legend=\"false\"\n" +
    "            pct-holder=\"dataModel\"></achievement-box-plot>\n" +
    "        <div class=\"col-xs-12 caption text-center\">\n" +
    "          <strong>{{tutorial.abbreviation}}</strong>\n" +
    "          <div class=\"small text-muted\">{{tutorial.tutorName}} at {{tutorial.meeting_time | date: shortTime}}</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div><!--/overview-charts-->\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/analytics/directives/unit-stats-download/unit-stats-download.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/analytics/directives/unit-stats-download/unit-stats-download.tpl.html",
    "<div class=\"unit-stats-download panel-body\">\n" +
    "    <a class=\"col-sm-4 btn btn-info\" ng-click=\"fetchTaskCompletionStats()\">\n" +
    "      <i class=\"fa fa-3x fa-tasks\"></i> <br \\>\n" +
    "      <span class=\"button-title\">Task Completion Stats</span>\n" +
    "    </a>\n" +
    "    <a class=\"col-sm-4 btn btn-info\" ng-click=\"fetchTutorAssessmentStats()\">\n" +
    "      <i class=\"fa fa-3x fa-check\"></i> <br \\>\n" +
    "      <span class=\"button-title\">Tutor Assessment Stats</span>\n" +
    "    </a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/analytics/directives/unit-target-grade-stats/unit-target-grade-stats.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/analytics/directives/unit-target-grade-stats/unit-target-grade-stats.tpl.html",
    "<div class=\"drilldown-visualiser\">\n" +
    "  <div class=\"data-loaded panel-body\" ng-if=\"data\">\n" +
    "    <div class=\"clearfix\">\n" +
    "      <div class=\"btn-group col-sm-6 pull-left\">\n" +
    "        <label class=\"btn btn-default\" ng-model=\"dataModel.selectedType\" btn-radio=\"'unit'\">\n" +
    "          <i tooltip=\"View target grades over unit\" class=\"fa fa-university\"></i>\n" +
    "        </label>\n" +
    "        <label class=\"btn btn-default\" ng-model=\"dataModel.selectedType\" btn-radio=\"'tutorial'\">\n" +
    "          <i tooltip=\"View target grades by tutorial\" class=\"fa fa-pencil\"></i>\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-6 pull-right\" ng-if=\"dataModel.selectedType == 'tutorial'\">\n" +
    "        <select\n" +
    "          class=\"form-control\"\n" +
    "          ng-options=\"tutorial as (tutorial.text) for tutorial in (tutorialsForSelector | orderBy: 'tutorial.abbreviation' | reverse) track by tutorial.id\"\n" +
    "          ng-model=\"dataModel.selectedTutorial\"></select>\n" +
    "      </div>\n" +
    "    </div><!--/toolbar-->\n" +
    "    <hr>\n" +
    "    <div ng-show=\"depth == 0\">\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'unit'\">\n" +
    "        Target grade distribution in <strong>{{unit.code}}</strong>\n" +
    "      </h4>\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'tutorial'\">\n" +
    "        <p>Task grade distribution for Tutorial <strong>{{dataModel.selectedTutorial.abbreviation}}</strong></p>\n" +
    "        <p class='small text-muted'>{{dataModel.selectedTutorial.tutorName}} at {{dataModel.selectedTutorial.meeting_time | date: shortTime}}</p>\n" +
    "      </h4>\n" +
    "    </div><!--/headers-for-depth-0-->\n" +
    "    <div ng-show=\"depth == 1\">\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'tutorial'\">\n" +
    "        Target grade distribution over all tutorials in <strong>{{unit.code}}</strong>\n" +
    "      </h4>\n" +
    "    </div><!--/headers-for-depth-1-->\n" +
    "    <div ng-show=\"depth == 2\">\n" +
    "      <h4 class=\"col-xs-12 text-center\" ng-show=\"dataModel.selectedType == 'tutorial'\">\n" +
    "        <p>Target grade distribution for Tutorial <strong>{{dataModel.selectedTutorial.abbreviation}}</strong></p>\n" +
    "        <p class='small text-muted'>{{dataModel.selectedTutorial.tutorName}} at {{dataModel.selectedTutorial.meeting_time | date: shortTime}}</p>\n" +
    "      </h4>\n" +
    "    </div><!--/headers-for-depth-2-->\n" +
    "    <p class=\"col-sm-12 help-block text-center\">\n" +
    "      {{depth == 0 && dataModel.selectedType == 'unit' || depth == 1 ? 'Click chart to explore details' : 'Click to return to overview'}}\n" +
    "    </p><!--/click-chart-help-block-->\n" +
    "    <div ng-if=\"depth == 0\" ng-click=\"drillDown()\" class=\"overview-chart\">\n" +
    "      <target-grade-pie-chart data=\"data\" show-legend=\"true\" height=\"600\"></target-grade-pie-chart>\n" +
    "    </div><!--/depth-0-chart-->\n" +
    "    <div ng-if=\"dataModel.selectedTutorial.id < 0\" class=\"overview-charts\">\n" +
    "      <div ng-repeat=\"chart in (overviewKeys | orderBy: 'title' )\" class=\"col-xs-6 col-sm-4 col-md-3 overview-chart\" ng-click=\"switchToTutorial(chart.tutorial)\">\n" +
    "        <target-grade-pie-chart data=\"chart.data\" show-legend=\"false\" height=\"200\"></target-grade-pie-chart>\n" +
    "        <div class=\"no-data-to-display\" ng-hide=\"chart.show\">\n" +
    "          No data\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12 caption text-center\">\n" +
    "          <strong>{{chart.title}}</strong>\n" +
    "          <div class=\"small text-muted\">{{chart.subtitle}}</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div><!--/overview-charts-->\n" +
    "  </div>\n" +
    "  <div class=\"data-not-loaded\" ng-hide=\"data\">\n" +
    "    <i class=\"fa fa-spinner fa-pulse fa-3x\"></i>\n" +
    "    <p>Loading...</p>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/edit/directives/unit-details-editor/unit-details-editor.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/edit/directives/unit-details-editor/unit-details-editor.tpl.html",
    "<div class=\"unit-details-editor\">\n" +
    "  <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading\" ng-if=\"unit.id == -1\">\n" +
    "      <h3 class=\"panel-title\">Create Unit</h3>\n" +
    "      Create a new unit with all overview unit details here.\n" +
    "    </div>\n" +
    "    <div class=\"panel-heading\" ng-if=\"unit.id != -1\">\n" +
    "      <h3 class=\"panel-title\">Update Unit</h3>\n" +
    "      Update overview details of the unit below.\n" +
    "    </div>\n" +
    "    <form class=\"form-horizontal\" role=\"form\" name=\"unitForm\" ng-submit=\"saveUnit()\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"code\">Code</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <input class=\"form-control\" id=\"code\" type=\"text\" placeholder=\"COS1234567\" ng-model=\"unit.code\">\n" +
    "          </div>\n" +
    "        </div><!--/code-date-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"name\">Name</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <input id=\"name\" type=\"text\" class=\"form-control\" ng-model=\"unit.name\" placeholder=\"Introduction to {{externalName.value}}\">\n" +
    "          </div>\n" +
    "        </div><!--/name-date-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"description\">Description</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <textarea id=\"description\" class=\"form-control\" ng-model=\"unit.description\"></textarea>\n" +
    "          </div>\n" +
    "        </div><!--/description-date-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"teachingperiod\">Teaching Period</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <select class=\"form-control\" ng-model=\"unit.teaching_period_id\">\n" +
    "              <option value=\"\">Custom Period</option>\n" +
    "              <option ng-value=\"tp.id\" value=\"{{tp.id}}\" ng-repeat=\"tp in teachingPeriods.loadedPeriods\">{{tp.period}}-{{tp.year}} </option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div><!--/teaching-period-date-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"\">Draft Learning Summary</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <select class=\"form-control\" ng-model=\"unit.draft_task_definition_id\">\n" +
    "              <option value=\"\">None</option>\n" +
    "              <option ng-value=\"td.id\" value=\"{{td.id}}\" ng-repeat=\"td in unit.task_definitions\">{{td.abbreviation}}-{{td.name}} </option>\n" +
    "            </select>\n" +
    "            <span class=\"help-block\">\n" +
    "              When a draft learning summary task is selected, this will ensure a students uploaded draft is automatically added to the students portfolio.\n" +
    "            </span>\n" +
    "          </div>\n" +
    "        </div><!--/draft-learning-summary-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label tooltip=\"Date for the start of teaching in the unit.\" class=\"col-sm-2 control-label\" for=\"startdate\">Start Date</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"col-sm-4 input-group\">\n" +
    "              <input datepicker-popup=\"yyyy-MM-dd\" is-open=\"calOptions.startOpened\" type=\"text\" class=\"form-control\" id=\"startdate\" ng-model=\"unit.start_date\" ng-required=\"true\" placeholder=\"yyyy-MM-dd\" close-text=\"Close\" ng-if=\"!unit.teaching_period_id\" />\n" +
    "              <input datepicker-popup=\"yyyy-MM-dd\" is-open=\"calOptions.startOpened\" type=\"text\" class=\"form-control\" id=\"startdate\" ng-model=\"tp.start_date\" ng-required=\"true\" placeholder=\"yyyy-MM-dd\" close-text=\"Close\" ng-disabled=\"unit.teaching_period_id\" ng-repeat=\"tp in teachingPeriods.loadedPeriods\" ng-if=\"unit.teaching_period_id && tp.id == unit.teaching_period_id\" />\n" +
    "              <span class=\"input-group-btn\">\n" +
    "                <button class=\"btn btn-default\" type=\"button\" ng-click=\"open($event,'start')\" ng-disabled=\"unit.teaching_period_id\">\n" +
    "                  <i class=\"fa fa-calendar\"></i>\n" +
    "                </button>\n" +
    "              </span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div><!--/start-date-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"enddate\">End Date</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"col-sm-4 input-group\">\n" +
    "              <input datepicker-popup=\"{{format}}\" id=\"enddate\" type=\"text\" class=\"form-control\" ng-model=\"unit.end_date\" is-open=\"calOptions.endOpened\" ng-required=\"true\" close-text=\"Close\" ng-if=\"!unit.teaching_period_id\" />\n" +
    "              <input datepicker-popup=\"{{format}}\" id=\"enddate\" type=\"text\" class=\"form-control\" ng-model=\"tp.end_date\" is-open=\"calOptions.endOpened\" ng-required=\"true\" close-text=\"Close\" ng-disabled=\"unit.teaching_period_id\" ng-repeat=\"tp in teachingPeriods.loadedPeriods\" ng-if=\"unit.teaching_period_id && tp.id == unit.teaching_period_id\" />\n" +
    "              <span class=\"input-group-btn\">\n" +
    "                <button class=\"btn btn-default\" type=\"button\" ng-click=\"open($event,'end')\" ng-disabled=\"unit.teaching_period_id\">\n" +
    "                  <i class=\"fa fa-calendar\"></i>\n" +
    "                </button>\n" +
    "              </span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div><!--/end-date-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"enddate\">Auto apply extensions</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"btn-group\">\n" +
    "              <label class=\"btn btn-{{unit.auto_apply_extension_before_deadline ? 'success' : 'default'}}\" ng-model=\"unit.auto_apply_extension_before_deadline\" btn-radio=\"true\" uncheckable>\n" +
    "                <i class=\"fa fa-check\"></i>\n" +
    "              </label>\n" +
    "              <label class=\"btn btn-{{unit.auto_apply_extension_before_deadline ? 'default' : 'danger'}}\" ng-model=\"unit.auto_apply_extension_before_deadline\" btn-radio=\"false\" uncheckable>\n" +
    "                <i class=\"fa fa-times\"></i>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "            <span class=\"help-block\">\n" +
    "              When true, extensions will be automatically applied when they result in a date that is between the task's due date and deadline.\n" +
    "            </span>\n" +
    "          </div>\n" +
    "        </div><!--/auto apply extension-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"enddate\">Send notification emails</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"btn-group\">\n" +
    "              <label class=\"btn btn-{{unit.send_notifications ? 'success' : 'default'}}\" ng-model=\"unit.send_notifications\" btn-radio=\"true\" uncheckable>\n" +
    "                <i class=\"fa fa-check\"></i>\n" +
    "              </label>\n" +
    "              <label class=\"btn btn-{{unit.send_notifications ? 'default' : 'danger'}}\" ng-model=\"unit.send_notifications\" btn-radio=\"false\" uncheckable>\n" +
    "                <i class=\"fa fa-times\"></i>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "            <span class=\"help-block\">\n" +
    "              When true, emails will be set to students each week to indicate progress and suggest future tasks for them to work on.\n" +
    "            </span>\n" +
    "          </div>\n" +
    "        </div><!--/send_notifications-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"enddate\">Synchronise enrolments</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"btn-group\">\n" +
    "              <label class=\"btn btn-{{unit.enable_sync_enrolments ? 'success' : 'default'}}\" ng-model=\"unit.enable_sync_enrolments\" btn-radio=\"true\" uncheckable>\n" +
    "                <i class=\"fa fa-check\"></i>\n" +
    "              </label>\n" +
    "              <label class=\"btn btn-{{unit.enable_sync_enrolments ? 'default' : 'danger'}}\" ng-model=\"unit.enable_sync_enrolments\" btn-radio=\"false\" uncheckable>\n" +
    "                <i class=\"fa fa-times\"></i>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "            <span class=\"help-block\">\n" +
    "              When true student enrolments will be synchronised with other systems where this is possible.\n" +
    "            </span>\n" +
    "          </div>\n" +
    "        </div><!--/sync_enrolments-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"enddate\">Synchronise Timetable</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"btn-group\">\n" +
    "              <label class=\"btn btn-{{unit.enable_sync_timetable ? 'success' : 'default'}}\" ng-model=\"unit.enable_sync_timetable\" btn-radio=\"true\" uncheckable>\n" +
    "                <i class=\"fa fa-check\"></i>\n" +
    "              </label>\n" +
    "              <label class=\"btn btn-{{unit.enable_sync_timetable ? 'default' : 'danger'}}\" ng-model=\"unit.enable_sync_timetable\" btn-radio=\"false\" uncheckable>\n" +
    "                <i class=\"fa fa-times\"></i>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "            <span class=\"help-block\">\n" +
    "              When true timetable data will be synchronised with other systems where this is possible.\n" +
    "            </span>\n" +
    "          </div>\n" +
    "        </div><!--/sync_timetable-->\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"enddate\">Active</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"btn-group\">\n" +
    "              <label class=\"btn btn-{{unit.active ? 'success' : 'default'}}\" ng-model=\"unit.active\" btn-radio=\"true\" uncheckable>\n" +
    "                <i class=\"fa fa-check\"></i>\n" +
    "              </label>\n" +
    "              <label class=\"btn btn-{{unit.active ? 'default' : 'danger'}}\" ng-model=\"unit.active\" btn-radio=\"false\" uncheckable>\n" +
    "                <i class=\"fa fa-times\"></i>\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div><!--/active-->\n" +
    "      </div>\n" +
    "      <div class=\"panel-footer text-right\">\n" +
    "        <a class=\"btn btn-success\" ui-sref=\"units/rollover\" >\n" +
    "          <header>\n" +
    "            Rollover\n" +
    "          </header>\n" +
    "        </a>\n" +
    "        <input type=\"submit\" value=\"{{ unit.id == -1 ? 'Create' : 'Update' }}\" class=\"btn btn-success\" ng-disabled=\"unitForm.$pristine\" />\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/edit/directives/unit-group-set-editor/unit-group-set-editor.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/edit/directives/unit-group-set-editor/unit-group-set-editor.tpl.html",
    "<div class=\"unit-group-set-editor row\">\n" +
    "  <div class=\"col-sm-12\">\n" +
    "    <div class=\"panel panel-primary\">\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">\n" +
    "          Group Sets\n" +
    "        </h3>\n" +
    "      </div><!--/panel-heading-->\n" +
    "      <div class=\"panel-body\">\n" +
    "        <p>\n" +
    "          A group set is a set of related group-work. A unit can have multiple\n" +
    "          group sets for various kinds of group work which has multiple teams.\n" +
    "          <a ng-click=\"showHelp = true\"><strong>Read more about group sets</strong></a>.\n" +
    "        </p><!--/basic-help-->\n" +
    "        <div ng-show=\"showHelp\" class=\"callout callout-info\">\n" +
    "          <a class=\"pull-right\" ng-click=\"showHelp = false\">\n" +
    "            <i class=\"fa fa-times fa-2x\"></i>\n" +
    "          </a>\n" +
    "          <h4> About Group Sets </h4>\n" +
    "          <p>\n" +
    "            Once a group set has been created, you may wish to restrict certain\n" +
    "            permissions such as creating and managing groups to staff only, instead\n" +
    "            of staff and students. If you restrict this to staff only, then tutors\n" +
    "            and convenors will only be allowed to create groups, and manage them\n" +
    "            (i.e., assign students to groups). Otherwise, you assume that students\n" +
    "            will be able to self-manage themselves in that particular group set.\n" +
    "          </p>\n" +
    "          <p>\n" +
    "            You may also decide that groups can only be restricted to students in\n" +
    "            the same tutorial, otheriwse students for a given group can be from\n" +
    "            any tutorial.\n" +
    "          </p>\n" +
    "          <p>\n" +
    "            Click the pencil icon to modify these details.\n" +
    "          </p>\n" +
    "        </div><!--/extended-help-->\n" +
    "        <div ng-hide=\"unit.group_sets.length > 0\" class=\"callout callout-primary\">\n" +
    "          <h4> No Group Sets Created </h4>\n" +
    "          <p>\n" +
    "            This unit has no group sets. Click the create group set button below to create one.\n" +
    "          </p>\n" +
    "        </div><!--/no-group-sets-created-->\n" +
    "      </div><!--/panel-body-->\n" +
    "      <table ng-show=\"unit.group_sets.length > 0\" class=\"table table-hover table-pointer group-sets\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>\n" +
    "              <span tooltip=\"Name of the group set\">Name</span>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "              <span tooltip=\"Capacity for associated groups, empty for unlimited capacity\">Capacity</span>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "              <span tooltip=\"Who can create groups?\">Create Groups</span>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "              <span tooltip=\"Who can manage groups?\">Manage Groups</span>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "              <span tooltip=\"Are groups restricted to tutorials?\">Restrict to Tutorials</span>\n" +
    "            </th>\n" +
    "            <th>Actions</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr ng-repeat=\"gs in unit.group_sets\" ng-class=\"{info: gs == selectedGroupSet}\">\n" +
    "            <td ng-click=\"selectGroupSet(gs)\" class=\"col-sm-3\">\n" +
    "              <span editable-text=\"gs.name\" e-name=\"name\" e-form=\"gsRowform\" e-required>\n" +
    "                {{ gs.name || 'No Name Set' }}\n" +
    "              </span>\n" +
    "            </td>\n" +
    "            <td ng-click=\"selectGroupSet(gs)\">\n" +
    "              <span editable-number=\"gs.capacity\" e-name=\"capacity\" e-form=\"gsRowform\" e-min=\"2\">\n" +
    "                {{ gs.capacity || 'Unlimited' }}\n" +
    "              </span>\n" +
    "            </td>\n" +
    "            <td ng-click=\"selectGroupSet(gs)\">\n" +
    "              <span editable-select=\"gs.allow_students_to_create_groups\" e-name=\"allow_students_to_create_groups\" e-form=\"gsRowform\" e-ng-options=\"opt.value as opt.text for opt in studentStaffOptions\">\n" +
    "                {{ ( (gs && gs.allow_students_to_create_groups) ? 'Staff and Students' : 'Staff Only' ) }}\n" +
    "              </span>\n" +
    "            </td>\n" +
    "            <td ng-click=\"selectGroupSet(gs)\">\n" +
    "              <span editable-select=\"gs.allow_students_to_manage_groups\" e-name=\"allow_students_to_manage_groups\" e-form=\"gsRowform\" e-ng-options=\"opt.value as opt.text for opt in studentStaffOptions\">\n" +
    "                {{ ( (gs && gs.allow_students_to_manage_groups) ? 'Staff and Students' : 'Staff Only' ) }}\n" +
    "              </span>\n" +
    "            </td>\n" +
    "            <td ng-click=\"selectGroupSet(gs)\">\n" +
    "              <span editable-select=\"gs.keep_groups_in_same_class\" e-name=\"keep_groups_in_same_class\" e-form=\"gsRowform\" e-ng-options=\"opt.value as opt.text for opt in tutorialOptions\">\n" +
    "                {{ ( (gs && gs.keep_groups_in_same_class) ? 'Same Tutorial' : 'Any Tutorial' ) }}\n" +
    "              </span>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "              <form editable-form name=\"gsRowform\" onbeforesave=\"saveGroupSet($data, gs.id)\" ng-show=\"gsRowform.$visible\" class=\"form-buttons form-inline\" shown=\"inserted == gs\">\n" +
    "                <button type=\"submit\" ng-disabled=\"gsRowform.$waiting\" class=\"btn btn-default btn-sm\">\n" +
    "                  <i class=\"fa fa-floppy-o\"></i> Save\n" +
    "                </button>\n" +
    "                <button type=\"button\" ng-disabled=\"gsRowform.$waiting\" ng-click=\"gsRowform.$cancel()\" class=\"btn btn-default btn-sm\">\n" +
    "                  <i class=\"fa fa-times\"></i> Cancel\n" +
    "                </button>\n" +
    "              </form>\n" +
    "              <div ng-show=\"!gsRowform.$visible\">\n" +
    "                <button ng-click=\"gsRowform.$show()\" class=\"btn btn-default btn-sm\">\n" +
    "                  <i class=\"fa fa-pencil\"></i> Edit\n" +
    "                </button>\n" +
    "                <a class=\"btn btn-sm lockButton\"\n" +
    "                  ng-class=\"{true: 'btn-warning', false: 'btn-info'}[!gs.locked]\"\n" +
    "                  ng-click=\"toggleLocked(gs)\">\n" +
    "                <i ng-class=\"{true: 'fa fa-lock', false: 'fa fa-unlock'}[!gs.locked]\"></i>\n" +
    "                  {{!gs.locked && \"Lock\" || \"Unlock\"}}\n" +
    "                </a>\n" +
    "                <button ng-click=\"removeGroupSet(gs)\" class=\"btn btn-danger btn-sm\">\n" +
    "                  <i class=\"fa fa-trash-o\"></i> Delete\n" +
    "                </button>\n" +
    "              </div>\n" +
    "              <!--/actions-->\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table><!--/group-set-table-->\n" +
    "      <div class=\"panel-footer clearfix\">\n" +
    "        <button class=\"btn pull-right btn-success\" ng-click=\"addGroupSet()\">\n" +
    "          <i class=\"fa fa-users\"></i>\n" +
    "          <i class=\"fa fa-plus\"></i>\n" +
    "          New Group Set\n" +
    "        </button>\n" +
    "      </div><!--/panel-footer-->\n" +
    "    </div><!--/panel-->\n" +
    "  </div><!--/group-sets-->\n" +
    "  <div class=\"clearfix\">\n" +
    "    <group-set-manager\n" +
    "      ng-show=\"selectedGroupSet && unit.group_sets.length > 0\"\n" +
    "      unit=\"unit\"\n" +
    "      selected-group-set=\"selectedGroupSet\"\n" +
    "      show-group-set-selector=\"false\"\n" +
    "      unit-role=\"unitRole\"\n" +
    "      class=\"col-sm-12\"></group-set-manager>\n" +
    "  </div>\n" +
    "  <div class=\"file-io col-sm-12\" ng-if=\"selectedGroupSet && unit.group_sets.length > 0\">\n" +
    "    <hr>\n" +
    "    <div class=\"panel-row\">\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "          <h4 class=\"panel-title\">Import Groups for <strong>{{selectedGroupSet.name}}</strong></h4>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          <p>\n" +
    "            Import groups into the group set named <strong>{{selectedGroupSet.name}}</strong>\n" +
    "            with a CSV containing the following column headings:\n" +
    "          </p>\n" +
    "          <ul>\n" +
    "            <li><code>group_name</code> for the indicated group's name,</li>\n" +
    "            <li><code>tutorial</code> the group's tutorial.</li>\n" +
    "            <li><code>campus</code> the tutorial's campus (if the tutorial is new), and </li>\n" +
    "            <li><code>capacity_adjustment</code> any adjustment made to the group's capacity</li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        <div class=\"panel-footer\">\n" +
    "          <button class=\"btn btn-success form-control\" ng-click=\"downloadGroupCSV()\">\n" +
    "            <i class=\"fa fa-download\"></i> Download CSV\n" +
    "          </button>\n" +
    "          <hr />\n" +
    "          <file-uploader\n" +
    "            files=\"groupCSV\"\n" +
    "            url=\"groupCSVUploadUrl()\"\n" +
    "            is-uploading=\"isGroupCSVUploading\"\n" +
    "            on-success=\"onGroupCSVSuccess\"\n" +
    "            on-complete=\"onGroupCSVComplete\"\n" +
    "            as-button=\"true\">\n" +
    "          </file-uploader>\n" +
    "        </div>\n" +
    "      </div><!--/import-group-->\n" +
    "      <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "          <h3 class=\"panel-title\">\n" +
    "            Import Students into Groups for <strong>{{selectedGroupSet.name}}</strong>\n" +
    "          </h3>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "          <p>\n" +
    "            Import students into groups for <strong>{{selectedGroupSet.name}}</strong>.\n" +
    "            Data is listed under the following column headings:\n" +
    "          </p>\n" +
    "          <ul>\n" +
    "            <li><code>group_name</code> for the indicated group's name,</li>\n" +
    "            <li><code>group_number</code> for the indicated group's number,</li>\n" +
    "            <li><code>username</code> for the student's username, and </li>\n" +
    "            <li><code>tutorial</code> for the student's tutorial.</li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        <div class=\"panel-footer\">\n" +
    "          <button class=\"btn btn-success form-control\" ng-click=\"downloadGroupStudentCSV()\">\n" +
    "            <i class=\"fa fa-download\"></i> Download CSV\n" +
    "          </button>\n" +
    "          <hr />\n" +
    "          <file-uploader\n" +
    "            files=\"groupCSV\"\n" +
    "            url=\"groupStudentCSVUploadUrl()\"\n" +
    "            is-uploading=\"isGroupCSVUploading\"\n" +
    "            on-success=\"onGroupCSVSuccess\"\n" +
    "            on-complete=\"onGroupCSVComplete\"\n" +
    "            as-button=\"true\">\n" +
    "          </file-uploader>\n" +
    "        </div><!--/download-panel-->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div><!--/file-io-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/edit/directives/unit-ilo-editor/unit-ilo-editor.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/edit/directives/unit-ilo-editor/unit-ilo-editor.tpl.html",
    "<div class=\"unit-ilo-editor row\">\n" +
    "  <div class=\"col-md-9\">\n" +
    "    <div class=\"panel panel-primary\">\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <h3 class=\"panel-title\">Edit Intended Learning Outcomes</h3>\n" +
    "        Add, edit or delete intended learning outcomes for this unit\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "          <div class=\"callout callout-info\" ng-hide=\"unit.ilos.length > 0\">This unit has no Intended Learning Outcomes</div>\n" +
    "          <div ng-show=\"unit.ilos.length > 0\">\n" +
    "           <div style=\"overflow: auto; position: relative;\">\n" +
    "            <table class=\"table table-pointer table-hover\" style=\"min-width: 720px;\">\n" +
    "              <thead>\n" +
    "                <tr>\n" +
    "                  <th> Number </th>\n" +
    "                  <th> Abbreviation </th>\n" +
    "                  <th> Name </th>\n" +
    "                  <th> Description </th>\n" +
    "                  <th> Actions </th>\n" +
    "                </tr>\n" +
    "              </thead>\n" +
    "              <tbody>\n" +
    "                <tr ng-repeat=\"ilo in unit.ilos | orderBy:'ilo_number'\">\n" +
    "                  <td ng-click=\"editILO(ilo)\">{{ilo.ilo_number}}</td>\n" +
    "                  <td ng-click=\"editILO(ilo)\">{{ilo.abbreviation}}</td>\n" +
    "                  <td ng-click=\"editILO(ilo)\">{{ilo.name}}</td>\n" +
    "                  <td ng-click=\"editILO(ilo)\">{{ilo.description}}</td>\n" +
    "                  <td>\n" +
    "                    <button class=\"btn btn-danger\" ng-click=\"deleteILO(ilo)\">\n" +
    "                      <i class=\"fa fa-trash-o\"></i>\n" +
    "                    </button>\n" +
    "                  </td>\n" +
    "              </tbody>\n" +
    "            </table>\n" +
    "           </div>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "      <div class=\"panel-footer clearfix\">\n" +
    "        <button class=\"btn btn-success pull-right\" ng-click=\"createILO()\">\n" +
    "          <i class=\"fa fa-graduation-cap\"></i>\n" +
    "          <i class=\"fa fa-plus\"></i> Add Outcome\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-3\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "            <h4 class=\"panel-title\">Batch Upload Outcome Definitions</h4>\n" +
    "            Batch upload learning outcome definitions with a CSV containing: unit_code, ilo_number, abbreviation, name, and description.\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "            <file-uploader\n" +
    "              files=\"batchFiles\"\n" +
    "              url=\"batchOutcomeUrl()\"\n" +
    "              on-success=\"onBatchOutcomeSuccess\"></file-uploader>\n" +
    "        </div><!--batch-withdraw-->\n" +
    "        <div class=\"panel-heading\">\n" +
    "            <h4 class=\"panel-title\">Download Outcomes</h4>\n" +
    "            Download all outcomes for the unit.\n" +
    "        </div>\n" +
    "        <div class=\"panel-body text-center\">\n" +
    "            <a target=\"_blank\" ng-href=\"{{batchOutcomeUrl()}}\" class=\"btn btn-primary btn-download\">\n" +
    "                <i class=\"fa fa-download\"></i> Download\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/edit/directives/unit-staff-editor/unit-staff-editor.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/edit/directives/unit-staff-editor/unit-staff-editor.tpl.html",
    "<div class=\"unit-staff-editor\">\n" +
    "  <script type=\"text/ng-template\" id=\"staffAvatar.html\">\n" +
    "    <a>\n" +
    "      <!-- This is where a user icon can go -->\n" +
    "      <span bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></span>\n" +
    "    </a>\n" +
    "  </script>\n" +
    "  <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">Modify Unit Staff</h3>\n" +
    "      Add staff members to the unit, assigning them a convenor or tutor role.\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <div class=\"col-sm-12\">\n" +
    "        <div class=\"callout callout-info\" ng-hide=\"unit.staff.length > 0\">This unit has no staff assigned</div>\n" +
    "        <div ng-show=\"unit.staff.length > 0\">\n" +
    "          <table class=\"table table-condensed table-hover\">\n" +
    "            <thead>\n" +
    "              <tr>\n" +
    "                <th colspan=\"2\">Name</th>\n" +
    "                <th>Role</th>\n" +
    "                <th>Main Convenor</th>\n" +
    "                <th>Actions</th>\n" +
    "              </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "              <tr ng-repeat=\"staff in unit.staff\">\n" +
    "                <td style=\"width: 30px\">\n" +
    "                  <user-icon [size]=\"30\" [user]=\"staff\"></user-icon>\n" +
    "                </td>\n" +
    "                <td>{{staff.name}}</td>\n" +
    "                <td>\n" +
    "                  <div class=\"btn-group\">\n" +
    "                    <label\n" +
    "                      class=\"btn btn-default\"\n" +
    "                      tooltip=\"Tutors deliver unit content.\"\n" +
    "                      ng-model=\"staff.role\"\n" +
    "                      btn-radio=\"'Tutor'\"\n" +
    "                      ng-click=\"changeRole(staff,2)\"\n" +
    "                      >Tutor</label\n" +
    "                    >\n" +
    "                    <label\n" +
    "                      class=\"btn btn-default\"\n" +
    "                      tooltip=\"Convenors manage the unit.\"\n" +
    "                      ng-model=\"staff.role\"\n" +
    "                      btn-radio=\"'Convenor'\"\n" +
    "                      ng-click=\"changeRole(staff,3)\"\n" +
    "                      >Convenor</label\n" +
    "                    >\n" +
    "                  </div>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <button\n" +
    "                    ng-show=\"staff.role == 'Convenor'\"\n" +
    "                    ng-disabled=\"staff.id == unit.main_convenor_id\"\n" +
    "                    type=\"button\"\n" +
    "                    class=\"btn btn-default\"\n" +
    "                    ng-model=\"unit.main_convenor_id\"\n" +
    "                    ng-click=\"changeMainConvenor(staff)\"\n" +
    "                    btn-checkbox\n" +
    "                  >\n" +
    "                    <i class=\"fa fa-{{staff.id == unit.main_convenor_id ? 'check' : 'times'}}\"></i>\n" +
    "                  </button>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <button class=\"btn btn-danger\" ng-click=\"removeStaff(staff)\">\n" +
    "                    <i class=\"fa fa-trash-o\"></i>\n" +
    "                  </button>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"panel-footer clearfix\">\n" +
    "      <div class=\"input-group col-sm-12\">\n" +
    "        <input\n" +
    "          class=\"form-control\"\n" +
    "          id=\"convenors\"\n" +
    "          placeholder=\"Staff Name\"\n" +
    "          ng-model=\"selectedStaff\"\n" +
    "          typeahead=\"staff as staff.full_name for staff in staff | filter: $viewValue | filter: filterStaff\"\n" +
    "          autocomplete=\"off\"\n" +
    "          typeahead-editable=\"false\"\n" +
    "          typeahead-wait-ms=\"200\"\n" +
    "          typeahead-template-url=\"staffAvatar.html\"\n" +
    "          typeahead-select-on-exact=\"true\"\n" +
    "          typeahead-on-select=\"addSelectedStaff()\"\n" +
    "        />\n" +
    "\n" +
    "        <span class=\"input-group-btn\">\n" +
    "          <button class=\"btn btn-success pull-right\" ng-click=\"addSelectedStaff()\">\n" +
    "            <i class=\"fa fa-male\"></i>\n" +
    "            <i class=\"fa fa-plus\"></i> Add Staff\n" +
    "          </button>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/edit/directives/unit-tasks-editor/unit-tasks-editor.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/edit/directives/unit-tasks-editor/unit-tasks-editor.tpl.html",
    "<div class=\"unit-tasks-editor row\">\n" +
    "  <div ng-if=\"unit\">\n" +
    "    <div class=\"col-md-9\">\n" +
    "      <div class=\"panel panel-primary\">\n" +
    "        <div class=\"panel-heading clearfix\">\n" +
    "          <div class=\"pull-left\">\n" +
    "            <h3 class=\"panel-title\">\n" +
    "              Task List\n" +
    "            </h3>\n" +
    "            Summary of tasks added as work for this unit\n" +
    "          </div>\n" +
    "          <form role=\"search\" class=\"col-sm-4 form-horizontal pull-right\">\n" +
    "            <input id=\"searchbar\" class=\"input-md form-control\" placeholder=\"Search...\" type=\"search\" ng-model=\"taskAdminPager.search\" autofocus />\n" +
    "            <p ng-show=\"filteredTaskDefs.length < allTaskDefs.length && filteredTaskDefs.length != 0\">Showing {{filteredTaskDefs.length}} of {{unit.task_definitions.length}} tasks.</p>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body tasks-overview\">\n" +
    "          <div class=\"callout callout-info\" ng-hide=\"unit.task_definitions.length > 0\">\n" +
    "            This unit has no tasks\n" +
    "          </div>\n" +
    "          <div style=\"overflow: auto; position: relative;\">\n" +
    "           <table ng-show=\"unit.task_definitions.length > 0\" class=\"table table-condensed table-hover table-pointer\" style=\"min-width: 720px;\">\n" +
    "            <thead>\n" +
    "              <tr>\n" +
    "                <th>\n" +
    "                  <a ng-click=\"taskAdminPager.sortOrder='abbreviation'; taskAdminPager.reverse=!taskAdminPager.reverse\">\n" +
    "                    Name <i ng-show=\"taskAdminPager.sortOrder=='abbreviation'\" class=\"fa fa-caret-{{taskAdminPager.reverse ? 'down' : 'up'}}\"></i>\n" +
    "                  </a>\n" +
    "                </th>\n" +
    "                <th>\n" +
    "                  <a ng-click=\"taskAdminPager.sortOrder='target_grade'; taskAdminPager.reverse=!taskAdminPager.reverse\">\n" +
    "                    Grade <i ng-show=\"taskAdminPager.sortOrder=='target_grade'\" class=\"fa fa-caret-{{taskAdminPager.reverse ? 'down' : 'up'}}\"></i>\n" +
    "                  </a>\n" +
    "                </th>\n" +
    "                <th>\n" +
    "                  <a ng-click=\"taskAdminPager.sortOrder='start_date'; taskAdminPager.reverse=!taskAdminPager.reverse\">\n" +
    "                    Start Date <i ng-show=\"taskAdminPager.sortOrder=='start_date'\" class=\"fa fa-caret-{{taskAdminPager.reverse ? 'down' : 'up'}}\"></i>\n" +
    "                  </a>\n" +
    "                </th>\n" +
    "                <th>\n" +
    "                  <a ng-click=\"taskAdminPager.sortOrder='target_date'; taskAdminPager.reverse=!taskAdminPager.reverse\">\n" +
    "                    Due Date <i ng-show=\"taskAdminPager.sortOrder=='target_date'\" class=\"fa fa-caret-{{taskAdminPager.reverse ? 'down' : 'up'}}\"></i>\n" +
    "                  </a>\n" +
    "                </th>\n" +
    "                <th>\n" +
    "                  <a ng-click=\"taskAdminPager.sortOrder='due_date'; taskAdminPager.reverse=!taskAdminPager.reverse\">\n" +
    "                    Deadline <i ng-show=\"taskAdminPager.sortOrder=='due_date'\" class=\"fa fa-caret-{{taskAdminPager.reverse ? 'down' : 'up'}}\"></i>\n" +
    "                  </a>\n" +
    "                </th>\n" +
    "                <th>\n" +
    "                  <a ng-click=\"taskAdminPager.sortOrder='tutorial_stream'; taskAdminPager.reverse=!taskAdminPager.reverse\">\n" +
    "                    Stream <i ng-show=\"taskAdminPager.sortOrder=='tutorial_stream'\" class=\"fa fa-caret-{{taskAdminPager.reverse ? 'down' : 'up'}}\"></i>\n" +
    "                  </a>\n" +
    "                </th>\n" +
    "                <th ng-show=\"unit.hasGroupwork()\">\n" +
    "                  <a ng-click=\"taskAdminPager.sortOrder='group_set_id'; taskAdminPager.reverse=!taskAdminPager.reverse\">\n" +
    "                    Group Set <i ng-show=\"taskAdminPager.sortOrder=='group_set_id'\" class=\"fa fa-caret-{{taskAdminPager.reverse ? 'down' : 'up'}}\"></i>\n" +
    "                  </a>\n" +
    "                </th>\n" +
    "                <th ng-show=\"unit.hasStreams()\">\n" +
    "                  <a ng-click=\"taskAdminPager.sortOrder='upload_requirements.length'; taskAdminPager.reverse=!taskAdminPager.reverse\">\n" +
    "                    <i class=\"fa fa-upload\" tooltip=\"The number of files the student needs to submit.\"></i> <i ng-show=\"taskAdminPager.sortOrder=='upload_requirements.length'\" class=\"fa fa-caret-{{taskAdminPager.reverse ? 'down' : 'up'}}\"></i>\n" +
    "                  </a>\n" +
    "                </th>\n" +
    "                <th>\n" +
    "                  <a ng-click=\"taskAdminPager.sortOrder='hasPlagiarismCheck()'; taskAdminPager.reverse=!taskAdminPager.reverse\">\n" +
    "                    <i class=\"fa fa-eye\" tooltip=\"Is plagiarism checked?\"></i> <i ng-show=\"taskAdminPager.sortOrder=='hasPlagiarismCheck()'\" class=\"fa fa-caret-{{taskAdminPager.reverse ? 'down' : 'up'}}\"></i>\n" +
    "                  </a>\n" +
    "                </th>\n" +
    "                <th>\n" +
    "                  <a ng-click=\"taskAdminPager.sortOrder='restrict_status_updates'; taskAdminPager.reverse=!taskAdminPager.reverse\">\n" +
    "                    <i class=\"fa fa-lock\" tooltip=\"Are status updated locked to staff only?\"></i> <i ng-show=\"taskAdminPager.sortOrder=='restrict_status_updates'\" class=\"fa fa-caret-{{taskAdminPager.reverse ? 'down' : 'up'}}\"></i>\n" +
    "                  </a>\n" +
    "                </th>\n" +
    "                <th>\n" +
    "                  Actions\n" +
    "                </th>\n" +
    "              </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "              <tr ng-repeat=\"taskDef in filteredTaskDefs = (allTaskDefs = ( unit.task_definitions ) | filter:taskAdminPager.search) | orderBy:taskAdminPager.sortOrder:taskAdminPager.reverse | startFrom:(taskAdminPager.currentPage - 1) * taskAdminPager.pageSize | limitTo: taskAdminPager.pageSize\" ng-click=\"editTask(taskDef)\" ng-class=\"{'info': taskAdminData.selectedTask == taskDef}\">\n" +
    "                <td><strong>{{taskDef.abbreviation}}</strong> - {{taskDef.name}}</td>\n" +
    "                <td>{{grades[taskDef.target_grade]}}</td>\n" +
    "                <td>{{taskDef.start_date | date : 'EEE d MMM' : '+0000'}}</td>\n" +
    "                <td>{{taskDef.target_date | date : 'EEE d MMM' : '+0000'}}</td>\n" +
    "                <td><span ng-show=\"taskDef.due_date\">{{taskDef.due_date | date : 'EEE d MMM' : '+0000'}}</span><span ng-hide=\"taskDef.due_date\">None</span></td>\n" +
    "                <td ng-show=\"unit.hasGroupwork()\">{{groupSetName(taskDef.group_set_id)}}</td>\n" +
    "                <td ng-show=\"unit.hasStreams()\">{{taskDef.tutorial_stream}}</td>\n" +
    "                <td>{{taskDef.upload_requirements.length}}</td>\n" +
    "                <td><i ng-show=\"taskDef.hasPlagiarismCheck()\" class=\"fa fa-check\"></i><i ng-hide=\"taskDef.hasPlagiarismCheck()\" class=\"fa fa-times\"></i></td>\n" +
    "                <td><i ng-show=\"taskDef.restrict_status_updates\" class=\"fa fa-check\"></i><i ng-hide=\"taskDef.restrict_status_updates\" class=\"fa fa-times\"></i></td>\n" +
    "                <td>\n" +
    "                  <button class=\"btn btn-danger\" ng-click=\"deleteTask(taskDef)\">\n" +
    "                    <i class=\"fa fa-trash-o\"></i>\n" +
    "                  </button>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "            </tbody>\n" +
    "          </table><!--/task-table-->\n" +
    "         </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel-footer clearfix\">\n" +
    "          <pagination  ng-show=\"filteredTaskDefs.length > taskAdminPager.pageSize\" total-items=\"filteredTaskDefs.length\" ng-model=\"taskAdminPager.currentPage\" items-per-page=\"taskAdminPager.pageSize\" max-size=\"taskAdminPager.maxSize\" class=\"pagination-sm pull-left\" boundary-links=\"true\" rotate=\"false\"></pagination>\n" +
    "          <button class=\"btn btn-success pull-right\" ng-click=\"createTask()\">\n" +
    "            <i class=\"fa fa-file\"></i>\n" +
    "            <i class=\"fa fa-plus\"></i> Add Task\n" +
    "          </button>\n" +
    "        </div>\n" +
    "      </div><!--/tasks-overview-->\n" +
    "      <task-definition-editor\n" +
    "        unit=\"unit\"\n" +
    "        task=\"taskAdminData.selectedTask\"\n" +
    "        is-new=\"taskAdminData.isNew\"></task-definition-editor>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3\">\n" +
    "          <div class=\"panel panel-default\">\n" +
    "              <div class=\"panel-heading\">\n" +
    "                  <h4 class=\"panel-title\">Batch Upload Task Definitions</h4>\n" +
    "                  <p>Batch upload task definitions with a CSV containing: name, abbreviation, description, weighting, target_grade, restrict_status_updates, upload_requirements, target_week, target_day, due_week, due_day, is graded, and max quality points.</p><p>Note: Upload_requirements should be an escaped-JSON-formatted string an array of objects containing a \"key\",  \"name\" and \"type\". Target and due weeks should be the number of weeks from the unit start, and the day should be a short text (eg \"Tue\").</p>\n" +
    "              </div>\n" +
    "              <div class=\"panel-body\">\n" +
    "                  <file-uploader\n" +
    "                    files=\"batchFiles\"\n" +
    "                    url=\"batchTaskUrl()\"\n" +
    "                    on-success=\"onBatchTaskSuccess\"></file-uploader>\n" +
    "              </div><!--batch-withdraw-->\n" +
    "              <div class=\"panel-heading\">\n" +
    "                  <h4 class=\"panel-title\">Download Tasks</h4>\n" +
    "                  Download all tasks for the unit.\n" +
    "              </div>\n" +
    "              <div class=\"panel-body text-center\">\n" +
    "                <div class=\"btn-group col-sm-12\">\n" +
    "                  <a tooltip=\"Download a CSV with details of all tasks\" tooltip-append-to-body=\"true\" target=\"_blank\" ng-href=\"{{batchTaskUrl()}}\" class=\"btn btn-primary col-sm-6\">\n" +
    "                    <i class=\"fa fa-download\"></i> <i class=\"fa fa-file-excel-o\"></i> CSV\n" +
    "                  </a>\n" +
    "                  <a tooltip=\"Download task resources and task sheets for all tasks\" tooltip-append-to-body=\"true\" target=\"_blank\" ng-href=\"{{allResourceUrl()}}\" class=\"btn btn-info col-sm-6\">\n" +
    "                    <i class=\"fa fa-download\"></i> <i class=\"fa fa-file-zip-o\"></i> Zip\n" +
    "                  </a>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"panel-heading\">\n" +
    "                  <h4 class=\"panel-title\">Upload All Task PDFs</h4>\n" +
    "                  Upload PDFs of tasks such that they are viewable for students under the relevant task. Upload a ZIP containing PDFs and ZIP file resources. Name each with task abbreviation.\n" +
    "              </div>\n" +
    "              <div class=\"panel-body\">\n" +
    "                <file-uploader\n" +
    "                  files=\"taskFiles\"\n" +
    "                  url=\"taskUploadUrl\"\n" +
    "                  on-success=\"onTaskPDFSuccess\"></file-uploader>\n" +
    "                  <table ng-show=\"filesUploaded\" class=\"table table-condensed table-hover\">\n" +
    "                    <thead>\n" +
    "                      <tr>\n" +
    "                        <th>Filename</th>\n" +
    "                        <th>Details</th>\n" +
    "                      </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                      <tr ng-repeat=\"file in filesUploaded.ignored_files\">\n" +
    "                        <td>{{file.name}}</td><td>Ignored</td>\n" +
    "                      </tr>\n" +
    "                      <tr ng-repeat=\"file in filesUploaded.added_files\">\n" +
    "                        <td>{{file.name}}</td><td>Added</td>\n" +
    "                      </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "              </div><!--batch-enrol-->\n" +
    "          </div>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/edit/edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/edit/edit.tpl.html",
    "<div class=\"container\">\n" +
    "  <tabset class=\"tabset-icon\">\n" +
    "    <tab ng-repeat=\"tab in tabs | toArray | orderBy: 'seq'\" active=\"tab.active\" ng-click=\"setActiveTab(tab)\">\n" +
    "      <tab-heading>{{tab.title}}</tab-heading>\n" +
    "    </tab>\n" +
    "  </tabset><!--/tabs-->\n" +
    "  <unit-details-editor unit=\"unit\" ng-if=\"activeTab === tabs.unitTab\"></unit-details-editor>\n" +
    "  <unit-ilo-editor ng-if=\"activeTab === tabs.learningOutcomesTab\"></unit-ilo-editor>\n" +
    "  <unit-staff-editor ng-if=\"activeTab === tabs.staffTab\"></unit-staff-editor>\n" +
    "  <unit-tutorials-manager ng-if=\"activeTab === tabs.tutorialsTab\" [unit]=\"unit\"></unit-tutorials-manager>\n" +
    "  <unit-students-editor [unit]=\"unit\" ng-if=\"activeTab === tabs.studentsTab\"></unit-students-editor>\n" +
    "  <unit-tasks-editor ng-if=\"activeTab === tabs.tasksTab\"></unit-tasks-editor>\n" +
    "  <task-ilo-alignment-editor show-csv=\"true\" unit=\"unit\" ng-if=\"activeTab === tabs.taskAlignmentTab\"></task-ilo-alignment-editor>\n" +
    "  <unit-group-set-editor ng-if=\"activeTab === tabs.groupsTab\"></unit-group-set-editor>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/groups/groups.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/groups/groups.tpl.html",
    "<div class=\"container\" ng-if=\"unit.hasGroupwork()\">\n" +
    "  <group-set-manager\n" +
    "    class=\"row\"\n" +
    "    unit=\"unit\"\n" +
    "    unit-role=\"unitRole\"\n" +
    "    selected-group-set=\"selectedGroupSet\">\n" +
    "  </group-set-manager>\n" +
    "</div><!--/has-groupwork-->\n" +
    "<div class=\"container\" ng-hide=\"unit.hasGroupwork()\">\n" +
    "  <div class=\"large-notice-block\">\n" +
    "    <i class=\"fa fa-2x fa-users\"></i>\n" +
    "    <p>No Groupwork Enabled</p>\n" +
    "  </div>\n" +
    "  <div class=\"text-center col-sm-12 col-md-6 col-md-offset-3\">\n" +
    "    <p class=\"text-muted\">\n" +
    "      There is no group work enabled for this unit. Convenors should create at\n" +
    "      least one group set first for groups to be created. This can be found under\n" +
    "      the groups tab in the unit administration settings.\n" +
    "    </p>\n" +
    "    <a class=\"btn btn-default\" ui-sref=\"units/admin({unitId: unit.id})\">Unit Administration</a>\n" +
    "  </div>\n" +
    "</div><!--/no-groupwork-->\n" +
    "");
}]);

angular.module("units/states/index/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/index/index.tpl.html",
    "<div ng-hide=\"unit && (unitRole || project)\" class=\"large-notice-block\">\n" +
    "  <i class=\"fa fa-2x fa-spinner fa-pulse\"></i>\n" +
    "  <p>Loading unit details...</p>\n" +
    "</div><!--/loading-->\n" +
    "<div ng-if=\"unit && (unitRole || project)\">\n" +
    "  <ui-view/>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/plagiarism/directives/unit-student-plagiarism-list/unit-student-plagiarism-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/plagiarism/directives/unit-student-plagiarism-list/unit-student-plagiarism-list.tpl.html",
    "<div class=\"unit-student-plagiarism-list\">\n" +
    "  <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading clearfix\">\n" +
    "      <div class=\"pull-left\">\n" +
    "        <h4 class=\"panel-title\">Plagiarism Report</h4>\n" +
    "        Students from {{studentFilter == 'myStudents' ? 'my tutorials' : 'every tutorial'}} that include tasks which appear similar to other student work\n" +
    "      </div>\n" +
    "      <div class=\"pull-right toolbar text-right\">\n" +
    "        <div class=\"buttons\">\n" +
    "          <!-- <div class=\"btn-group pull-right\">\n" +
    "            <label class=\"btn btn-default\" ng-model=\"view\" btn-radio=\"'students'\">\n" +
    "              <i class=\"fa fa-user\" tooltip=\"Show students with similarities\"></i>\n" +
    "            </label>\n" +
    "            <label class=\"btn btn-default\" ng-model=\"view\" btn-radio=\"'tasks'\">\n" +
    "              <i class=\"fa fa-tasks\" tooltip=\"Show tasks with similarities\"></i>\n" +
    "            </label>\n" +
    "          </div> -->\n" +
    "          <div class=\"btn-group pull-right\">\n" +
    "            <label class=\"btn btn-default\" ng-model=\"studentFilter\" btn-radio=\"'allStudents'\">\n" +
    "              <i class=\"fa fa-university\" tooltip=\"Show all students\"></i>\n" +
    "            </label>\n" +
    "            <label class=\"btn btn-default\" ng-model=\"studentFilter\" btn-radio=\"'myStudents'\">\n" +
    "              <i class=\"fa fa-pencil\" tooltip=\"Show only my students\"></i>\n" +
    "            </label>\n" +
    "          </div>\n" +
    "        </div><!--/buttons-->\n" +
    "        <form role=\"search\" class=\"form-horizontal pull-right\">\n" +
    "          <input id=\"searchbar\" class=\"input-md form-control\" placeholder=\"Search...\" type=\"search\" ng-model=\"search\" autocomplete=\"off\" typeahead=\"text for text in unitService.unitTypeAheadData(unit) | filter:$viewValue | limitTo:8\" typeahead-wait-ms=\"200\" autofocus />\n" +
    "          <p ng-show=\"filteredStudents.length < allStudents.length && filteredStudents.length != 0\">Showing {{filteredStudents.length}} of {{unit.students.length}} students enrolled.</p>\n" +
    "        </form><!--/search-->\n" +
    "      </div><!--/toolbar-->\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"panel-body\">\n" +
    "      <div ng-show=\"view == 'students'\">\n" +
    "        <div class=\"table-responsive\">\n" +
    "          <table class=\"table table-condensed table-hover table-pointer\">\n" +
    "            <thead>\n" +
    "              <tr>\n" +
    "                <th><a href=\"\" ng-click=\"sortOrder='student_id'; reverse=!reverse\">Student ID</a></th>\n" +
    "                <th><a href=\"\" ng-click=\"sortOrder='name'; reverse=!reverse\">Name</a></th>\n" +
    "                <th><a href=\"\" ng-click=\"sortOrder='target_grade'; reverse=!reverse\">Grade</a></th>\n" +
    "                <!-- <th><a href=\"\" ng-click=\"sortOrder='similar_to_count'; reverse=!reverse\">Tasks Similar</a></th> -->\n" +
    "                <th><a href=\"\" ng-click=\"sortOrder='max_pct_copy'; reverse=!reverse\">Max Pct Similar</a></th>\n" +
    "                <th><a href=\"\" ng-click=\"sortOrder='shortTutorialDescription()'; reverse=!reverse\">Tutorial</a></th>\n" +
    "              </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "              <tr class=\"task-progress-row\" ng-repeat=\"student in filteredStudents = (allStudents = (unit.students | showStudents:studentFilter:tutorName | studentsWithPlagiarism) | filter:search) | orderBy:sortOrder:reverse | startFrom:(currentPage - 1) * pageSize | limitTo: pageSize\" ng-class=\"{'info': activeStudent == student}\" class=\"pointer\" ng-click=\"selectStudent(student)\">\n" +
    "                <td>{{student.student_id}}</td>\n" +
    "                <td>{{student.name}}</td>\n" +
    "                <td>{{grades[student.target_grade]}}</td>\n" +
    "                <!-- <td>{{student.similar_to_count}}</td> -->\n" +
    "                <td>{{student.max_pct_copy}}%</td>\n" +
    "                <td><span>{{student.shortTutorialDescription()}}</span></td>\n" +
    "              </tr>\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "          <pagination total-items=\"filteredStudents.length\" ng-model=\"currentPage\" items-per-page=\"pageSize\" max-size=\"maxSize\" class=\"pagination-sm pull-left\" boundary-links=\"true\" rotate=\"false\"></pagination>\n" +
    "        </div>\n" +
    "      </div> <!-- end students div -->\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Panel with select student/task to view  -->\n" +
    "  <div class=\"panel panel-default\" ng-hide=\"activeStudent || task\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">\n" +
    "        View similarities\n" +
    "      </h3>\n" +
    "    </div>\n" +
    "    <!-- Panel body with select message  -->\n" +
    "    <div class=\"panel-body large-notice-block nothing-selected\">\n" +
    "      <i ng-class=\"view == 'tasks' ? 'fa fa-tasks' : 'fa fa-user'\"></i>\n" +
    "      <p>Select a {{ view == 'tasks' ? 'task' : 'student' }} to view similarities</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Panel body with task details  -->\n" +
    "  <div class=\"panel panel-default\" ng-show=\"activeStudent || task\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">\n" +
    "        View similarities\n" +
    "      </h3>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\" ng-show=\"activeStudent || task\">\n" +
    "      <div ng-show=\"loadingStudent\">\n" +
    "        <div class=\"large-notice-block\">\n" +
    "          <i class=\"fa fa-spinner fa-pulse fa-2x\"></i>\n" +
    "          <p>Loading...</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div ng-hide=\"loadingStudent\">\n" +
    "        <ul class=\"nav nav-tabs nav-justified\" ng-show=\"tasksToCheck.length > 1\">\n" +
    "          <li role=\"presentation\" ng-class=\"{'active' : activeTask == task }\" ng-repeat=\"task in tasksToCheck = (activeStudent.tasks | taskWithPlagiarism)\"><a href=\"\" ng-click=\"selectTask(task)\">{{task.definition.abbreviation}}</a></li>\n" +
    "        </ul>\n" +
    "        <div class=\"col-sm-12\" ng-if=\"activeTask\">\n" +
    "          <task-plagiarism-report-viewer task=\"activeTask\" assessing-unit-role=\"assessingUnitRole\"></task-plagiarism-report-viewer>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"panel-footer\">\n" +
    "      <span ng-if=\"activeTask\"><a ng-href=\"{{activeTask.definition.plagiarism_report_url}}\" target=\"new\">All plagiarism for {{activeTask.definition.name}}</a></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/plagiarism/plagiarism.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/plagiarism/plagiarism.tpl.html",
    "<div class=\"container\">\n" +
    "  <unit-student-plagiarism-list\n" +
    "    unit=\"unit\"\n" +
    "    unit-role=\"unitRole\">\n" +
    "  </unit-student-plagiarism-list>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/portfolios/portfolios.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/portfolios/portfolios.tpl.html",
    "<div id=\"student-portfolios\" class=\"container\">\n" +
    "  <tabset>\n" +
    "    <tab ng-repeat=\"tab in tabs | toArray | orderBy: 'seq'\" active=\"tab.active\" disable=\"!selectedStudent\" ng-click=\"selectedStudent && setActiveTab(tab)\">\n" +
    "      <tab-heading>{{tab.title}}</tab-heading>\n" +
    "    </tab>\n" +
    "  </tabset><!--/tabs-->\n" +
    "  <div class=\"panel panel-primary\" ng-show=\"activeTab == tabs.selectStudent\">\n" +
    "    <div class=\"panel-heading clearfix\">\n" +
    "      <div class=\"pull-left\">\n" +
    "        <h4 class=\"panel-title\">Mark Portfolios</h4>\n" +
    "        Assess student portfolios\n" +
    "      </div>\n" +
    "      <div class=\"pull-right toolbar\">\n" +
    "        <div class=\"buttons\">\n" +
    "          <div class=\"btn-group\">\n" +
    "            <label class=\"btn btn-default\" ng-model=\"portfolioFilter\" btn-radio=\"'allStudents'\">\n" +
    "              <i class=\"fa fa-globe\" tooltip-placement=\"top\" tooltip=\"Show all students, even those without portfolios\"></i>\n" +
    "            </label>\n" +
    "            <label class=\"btn btn-default\" ng-model=\"portfolioFilter\" btn-radio=\"'withPortfolio'\">\n" +
    "              <i class=\"fa fa-book\" tooltip-placement=\"top\" tooltip=\"Show only students with portfolios\"></i>\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div class=\"btn-group\">\n" +
    "            <label class=\"btn btn-default\" ng-model=\"studentFilter\" btn-radio=\"'allStudents'\">\n" +
    "              <i class=\"fa fa-university\" tooltip-placement=\"top\" tooltip=\"Show all students\"></i>\n" +
    "            </label>\n" +
    "            <label class=\"btn btn-default\" ng-model=\"studentFilter\" btn-radio=\"'myStudents'\">\n" +
    "              <i class=\"fa fa-pencil\" tooltip-placement=\"top\" tooltip=\"Show only my students\"></i>\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div class=\"btn-group btn-group-sm select-portfolio-grade\">\n" +
    "              <label class=\"btn btn-default text-center\" ng-model=\"filterOptions.selectedGrade\" btn-radio=\"-1\">\n" +
    "                  <span class=\"grade-icon\" tooltip=\"Show all portfolios\" class=\"text-{{$index == filterOptions.selectedGrade ? 'primary' : 'muted'}}\">All</span>\n" +
    "              </label>\n" +
    "          </div>\n" +
    "          <div class=\"btn-group btn-group-sm select-portfolio-grade\">\n" +
    "            <label ng-repeat=\"grade in grades\" class=\"btn btn-default col-sm-3 text-center\" ng-model=\"filterOptions.selectedGrade\" btn-radio=\"{{$index}}\">\n" +
    "              <grade-icon grade=\"grade\" tooltip=\"Select to show student's aiming for {{grade}}\" tooltip-append-to-body=\"true\" class=\"text-{{$index == filterOptions.selectedGrade ? 'primary' : 'muted'}}\"></grade-icon>\n" +
    "            </label>\n" +
    "          </div>\n" +
    "        </div><!--/buttons-->\n" +
    "        <form role=\"search\" class=\"form-horizontal\">\n" +
    "          <input id=\"searchbar\" class=\"input-md form-control\" placeholder=\"Search...\" type=\"search\" ng-model=\"search\" autocomplete=\"off\" typeahead=\"text for text in unitService.unitTypeAheadData(unit) | filter:$viewValue | limitTo:8\" typeahead-wait-ms=\"200\" autofocus />\n" +
    "          <p ng-show=\"filteredStudents.length < allStudents.length && filteredStudents.length != 0\">Showing {{filteredStudents.length}} of {{unit.students.length}} students enrolled.</p>\n" +
    "        </form><!--/search-->\n" +
    "      </div><!--/toolbar-->\n" +
    "    </div><!--header-->\n" +
    "    <div class=\"panel-body unit-student-list\">\n" +
    "      <div class=\"panel-body large-notice-block\" ng-hide=\"filteredStudents.length > 0\">\n" +
    "        <i class=\"fa fa-book\"></i>\n" +
    "        <p>No portfolios found</p>\n" +
    "      </div>\n" +
    "      <table ng-hide=\"filteredStudents.length == 0\" class=\"table table-condensed table-hover table-pointer \">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th class=\"student-id\">\n" +
    "              <a ng-click=\"sortOrder='student_id'; reverse=!reverse\">\n" +
    "                Student <i ng-show=\"sortOrder=='student_id'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i>\n" +
    "              </a>\n" +
    "            </th>\n" +
    "            <th class=\"name\">\n" +
    "              <a ng-click=\"sortOrder='name'; reverse=!reverse\">\n" +
    "                Name <i ng-show=\"sortOrder=='name'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i>\n" +
    "              </a>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "              <a ng-click=\"sortOrder='tutorial.tutorName'; reverse=!reverse\">\n" +
    "                Tutor <i ng-show=\"sortOrder=='tutorial.tutorName'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i>\n" +
    "              </a>\n" +
    "            </th>\n" +
    "            <th class=\"tutorial\">\n" +
    "              <a ng-click=\"sortOrder='tutorial.abbreviation'; reverse=!reverse\">\n" +
    "                Tutorial <i ng-show=\"sortOrder=='tutorial.abbreviation'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i>\n" +
    "              </a>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "              <a ng-click=\"sortOrder='target_grade'; reverse=!reverse\">\n" +
    "                Target <i ng-show=\"sortOrder=='target_grade'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i>\n" +
    "              </a>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "              <a ng-click=\"sortOrder='submitted_grade'; reverse=!reverse\">\n" +
    "                Submitted as <i ng-show=\"sortOrder=='submitted_grade'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i>\n" +
    "              </a>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "              <a ng-click=\"sortOrder='orderScale'; reverse=!reverse\">\n" +
    "                Stats<i ng-show=\"sortOrder=='orderScale'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i>\n" +
    "              </a>\n" +
    "            </th>\n" +
    "            <th class=\"has-portfolio\" ng-show=\"portfolioFilter == 'allStudents'\">\n" +
    "                <a ng-click=\"sortOrder='has_portfolio'; reverse=!reverse\">\n" +
    "                  Portfolio? <i ng-show=\"sortOrder=='has_portfolio'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i>\n" +
    "              </a>\n" +
    "            </th>\n" +
    "            <th class=\"grade\">\n" +
    "              <a ng-click=\"sortOrder='grade'; reverse=!reverse\">\n" +
    "                Grade <i ng-show=\"sortOrder=='grade'\" class=\"fa fa-caret-{{reverse ? 'down' : 'up'}}\"></i>\n" +
    "              </a>\n" +
    "            </th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr class=\"task-progress-row\" ng-repeat=\"student in filteredStudents = (allStudents = (unit.students | showStudents:studentFilter:tutorName | studentsWithPortfolio:portfolioFilter | studentsWithSubmittedGrade:filterOptions.selectedGrade) | projectFilter:search) | orderBy:sortOrder:reverse | startFrom:(currentPage - 1) * pageSize | limitTo: pageSize\" ng-class=\"{'info': selectedStudent == student}\" ng-click=\"selectStudent(student)\">\n" +
    "            <td>{{student.student_id}}</td>\n" +
    "            <td>{{student.name}}</td>\n" +
    "            <td>{{student.tutorNames()}}</td>\n" +
    "            <td>{{student.shortTutorialDescription()}}</td>\n" +
    "            <td class=\"flags-data\">\n" +
    "              <grade-icon grade=\"student.target_grade\"></grade-icon>\n" +
    "            </td>\n" +
    "            <td class=\"flags-data\">\n" +
    "              <grade-icon grade=\"student.submitted_grade\"></grade-icon>\n" +
    "            </td>\n" +
    "            <td class=\"task-progress-bar\">\n" +
    "              <progress class=\"task-progress\" animate=\"true\">\n" +
    "                <bar\n" +
    "                  ng-repeat=\"bar in student.task_stats | filter:barLargerZero track by $index\"\n" +
    "                  value=\"bar.value\"\n" +
    "                  type=\"{{statusClass(bar.key)}}\">\n" +
    "                  <span ng-hide=\"bar.value < 10\">{{bar.value}}%</span>\n" +
    "                </bar>\n" +
    "              </progress>\n" +
    "            </td>\n" +
    "            <td ng-show=\"portfolioFilter == 'allStudents'\">{{student.has_portfolio ? \"Yes\" : \"No\"}}</td>\n" +
    "            <td>{{student.grade}}</td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div class=\"panel-footer clearfix\">\n" +
    "      <pagination total-items=\"filteredStudents.length\" ng-model=\"currentPage\" items-per-page=\"pageSize\" max-size=\"maxSize\" class=\"pagination-sm pull-left\" boundary-links=\"true\" rotate=\"false\"></pagination>\n" +
    "      <div class=\"pull-right\">\n" +
    "        <a class=\"btn btn-info\" href=\"{{portfolioDownloadUrl}}\" target=\"_blank\" tooltip-html-unsafe=\"<i class='fa fa-warning'></i> <strong>WARNING:</strong> Downloading all portfolios may take a long time\" tooltip-append-to-body=\"true\">\n" +
    "          <i class=\"fa fa-download\"></i> Download All Portfolios\n" +
    "        </a>\n" +
    "        <a class=\"btn btn-success\" href=\"{{gradeDownloadUrl}}\" target=\"_blank\">\n" +
    "          <i class=\"fa fa-download\"></i> Download Grades\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel panel-primary\" ng-show=\"activeTab != tabs.selectStudent && !selectedStudent\">\n" +
    "    <div class=\"panel-heading clearfix\">\n" +
    "      <div class=\"pull-left\">\n" +
    "        <h4 class=\"panel-title\" ng-hide=\"selectedStudent\">Portfolio Details</h4>\n" +
    "        Review portfolio and assign grade.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body large-notice-block\" ng-hide=\"selectedStudent\">\n" +
    "      <i class=\"fa fa-book\"></i>\n" +
    "      <p>Select student to view portfolio and assign grade</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng-if=\"selectedStudent\">\n" +
    "    <div class=\"panel panel-primary\" ng-show=\"activeTab == tabs.viewProgress\">\n" +
    "      <div class=\"panel-heading clearfix\">\n" +
    "        <div class=\"pull-left\">\n" +
    "          <h3 class=\"panel-title\">Review Progress of {{selectedStudent.name}}</h3><!--/title-->\n" +
    "          Review the students progress through the unit's tasks.\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <project-progress-dashboard ng-if=\"project\"></project-progress-dashboard>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"panel panel-primary\" ng-show=\"activeTab == tabs.viewPortfolio\">\n" +
    "      <div class=\"panel-heading clearfix\">\n" +
    "        <div class=\"pull-left\">\n" +
    "          <h3 class=\"panel-title\">Review Portfolio of {{selectedStudent.name}}</h3><!--/title-->\n" +
    "          View or download portfolio for assessment.\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body large-notice-block\" ng-hide=\"project.portfolio_available\">\n" +
    "        <i class=\"fa fa-book\"></i>\n" +
    "        <p>No Portfolio Submitted</p>\n" +
    "      </div>\n" +
    "      <pdf-viewer-panel\n" +
    "        ng-if=\"project.portfolio_available\"\n" +
    "        pdf-url=\"project.portfolioUrl()\">\n" +
    "      </pdf-viewer-panel>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"panel panel-primary\" ng-show=\"activeTab == tabs.assessPortfolio\">\n" +
    "      <div class=\"panel-heading clearfix\">\n" +
    "        <div class=\"pull-left\">\n" +
    "          <h4 class=\"panel-title\">Grade for {{selectedStudent.name}}</h4>\n" +
    "          Assign Grade for this work.\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body alignment-rater\">\n" +
    "        <div class=\"col-sm-12 rationale-wrapper\">\n" +
    "          <div tooltip=\"Click to edit rationale\" tooltip-placement=\"left\" tooltip-append-to-body=\"false\" tooltip-popup-delay=\"300\" tooltip-enable=\"project.grade_rationale != null\" ng-click=\"toggleEditRationale()\" class=\"rationale\" ng-class=\"{'no-rationale': project.grade_rationale == null}\" ng-hide=\"editingRationale\">\n" +
    "            <label class=\"text-muted\" ng-show=\"project.grade_rationale != null\">\n" +
    "              Provided Rationale\n" +
    "            </label>\n" +
    "            <div ng-bind-html=\"(project.grade_rationale || 'No rationale provided') | markdown\"></div>\n" +
    "            <div class=\"small\" ng-hide=\"project.grade_rationale\">Click to add one</div>\n" +
    "          </div>\n" +
    "          <div ng-if=\"editingRationale\" class=\"clearfix\">\n" +
    "            <!-- <markdown-editor\n" +
    "              height=\"200\"\n" +
    "              ng-model=\"project.grade_rationale\"\n" +
    "              placeholder=\"Edit rationale...\"\n" +
    "              autofocus=\"true\">\n" +
    "            </markdown-editor> -->\n" +
    "            <div contenteditable ng-model=\"project.grade_rationale\" placeholder=\"Edit rationale here...\" style=\"border-style: solid; border-width: thin; height: 200px\"></div>\n" +
    "            <a ng-click=\"toggleEditRationale(alignment)\" class=\"pull-right\">Done Editing</a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"results in gradeResults\">\n" +
    "          <h5 class=\"col-sm-2\">{{results.name}}</h5>\n" +
    "          <p class=\"btn-group col-sm-10\">\n" +
    "            <label ng-repeat=\"resultScore in results.scores\" ng-click=\"project.assignGrade(resultScore, project.grade_rationale)\" class=\"btn col-sm-2 text-center {{project.grade == resultScore ? 'btn-primary' : 'btn-default'}}\">\n" +
    "              {{resultScore}}\n" +
    "            </label>\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/rollover/directives/unit-dates-selector/unit-dates-selector.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/rollover/directives/unit-dates-selector/unit-dates-selector.tpl.html",
    "<div class=\"unit-dates-selector\">\n" +
    "  <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h3 class=\"panel-title\">Create Unit</h3>\n" +
    "      Duplicate an existing unit by specifying the time period.\n" +
    "    </div>\n" +
    "    <form class=\"form-horizontal\" role=\"form\" name=\"rolloverUnitForm\" ng-submit=\"saveUnit()\">\n" +
    "      <div class=\"panel-body\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"teachingperiod\">Teaching Period</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <select class=\"form-control\" ng-model=\"unit.teaching_period_id\">\n" +
    "              <option value=\"\">Custom Period</option>\n" +
    "              <option ng-value=\"tp.id\" value=\"{{tp.id}}\" ng-repeat=\"tp in teachingPeriods.loadedPeriods\">{{tp.period}}-{{tp.year}}</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div><!--/teaching-period-date-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label tooltip=\"Date for the start of teaching in the unit.\" class=\"col-sm-2 control-label\" for=\"startdate\">Start Date</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"col-sm-4 input-group\">\n" +
    "              <input datepicker-popup=\"yyyy-MM-dd\" is-open=\"calOptions.startOpened\" type=\"text\" class=\"form-control\" id=\"startdate\" ng-model=\"unit.start_date\" ng-required=\"true\" placeholder=\"yyyy-MM-dd\" close-text=\"Close\" ng-if=\"!unit.teaching_period_id\" />\n" +
    "              <input datepicker-popup=\"yyyy-MM-dd\" is-open=\"calOptions.startOpened\" type=\"text\" class=\"form-control\" id=\"startdate\" ng-model=\"tp.start_date\" ng-required=\"true\" placeholder=\"yyyy-MM-dd\" close-text=\"Close\" ng-disabled=\"unit.teaching_period_id\" ng-repeat=\"tp in teachingPeriods.loadedPeriods\" ng-if=\"unit.teaching_period_id && tp.id == unit.teaching_period_id\" />\n" +
    "              <span class=\"input-group-btn\">\n" +
    "                <button class=\"btn btn-default\" type=\"button\" ng-click=\"open($event,'start')\" ng-disabled=\"unit.teaching_period_id\">\n" +
    "                  <i class=\"fa fa-calendar\"></i>\n" +
    "                </button>\n" +
    "              </span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div><!--/start-date-->\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <label class=\"col-sm-2 control-label\" for=\"enddate\">End Date</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"col-sm-4 input-group\">\n" +
    "              <input datepicker-popup=\"{{format}}\" id=\"enddate\" type=\"text\" class=\"form-control\" ng-model=\"unit.end_date\" is-open=\"calOptions.endOpened\" ng-required=\"true\" close-text=\"Close\" ng-if=\"!unit.teaching_period_id\" />\n" +
    "              <input datepicker-popup=\"{{format}}\" id=\"enddate\" type=\"text\" class=\"form-control\" ng-model=\"tp.end_date\" is-open=\"calOptions.endOpened\" ng-required=\"true\" close-text=\"Close\" ng-disabled=\"unit.teaching_period_id\" ng-repeat=\"tp in teachingPeriods.loadedPeriods\" ng-if=\"unit.teaching_period_id && tp.id == unit.teaching_period_id\" />\n" +
    "              <span class=\"input-group-btn\">\n" +
    "                <button class=\"btn btn-default\" type=\"button\" ng-click=\"open($event,'end')\" ng-disabled=\"unit.teaching_period_id\">\n" +
    "                  <i class=\"fa fa-calendar\"></i>\n" +
    "                </button>\n" +
    "              </span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div><!--/end-date-->\n" +
    "      </div>\n" +
    "      <div class=\"panel-footer text-right\">\n" +
    "        <input type=\"submit\" value=\"Create Unit\" class=\"btn btn-success\" />\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/rollover/rollover.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/rollover/rollover.tpl.html",
    "<div class=\"container\">\n" +
    "  <unit-dates-selector unit=\"unit\"></unit-dates-selector>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/students-list/students-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/students-list/students-list.tpl.html",
    "<div id=\"students-list\" class=\"container\">\n" +
    "  <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <input\n" +
    "          class=\"form-control input-lg\"\n" +
    "          placeholder=\"Search for students or tutors...\"\n" +
    "          type=\"search\"\n" +
    "          ng-model=\"searchText\"\n" +
    "          ng-change=\"searchTextChanged()\"\n" +
    "          typeahead-on-select=\"searchTextChanged()\"\n" +
    "          typeahead=\"text for text in\n" +
    "            unitTypeAheadData(unit) |\n" +
    "            filter:$viewValue |\n" +
    "            limitTo:8\"\n" +
    "          typeahead-wait-ms=\"200\"\n" +
    "          autofocus><!--/search-text-->\n" +
    "          <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-default btn-lg\" type=\"button\" ng-model=\"showSearchOptions\" btn-checkbox>\n" +
    "              <i class=\"fa fa-chevron-{{showSearchOptions ? 'up' : 'down'}}\"></i>\n" +
    "            </button>\n" +
    "          </span><!--/search-options-toggle-->\n" +
    "        </div>\n" +
    "      </h4>\n" +
    "    </div><!--/search-header-->\n" +
    "    <form class=\"panel-body panel-collapseable search-options\" ng-show=\"showSearchOptions\">\n" +
    "      <div class=\"form-group staff-filter\">\n" +
    "        <label>Show Students From...</label>\n" +
    "        <div class=\"input-group\">\n" +
    "          <div class=\"btn-group\">\n" +
    "            <button class=\"btn btn-default col-sm-6\" ng-model=\"staffFilter\" ng-click=\"staffFilterChanged('all')\" btn-radio=\"'all'\">\n" +
    "              <i class=\"fa fa-university\"></i> All Tutorials\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-default col-sm-6\" ng-model=\"staffFilter\" ng-click=\"staffFilterChanged('mine')\" btn-radio=\"'mine'\">\n" +
    "              <i class=\"fa fa-pencil\"></i> My Tutorials\n" +
    "            </button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div><!--/staff-filter-button-group-->\n" +
    "      <div class=\"form-group flag-sort\">\n" +
    "        <label>Sort Flags By...</label>\n" +
    "        <div class=\"input-group\">\n" +
    "          <div class=\"btn-group\">\n" +
    "            <button class=\"btn btn-default\" ng-model=\"tableSort.order\" ng-click=\"sortTableBy('target_grade')\" btn-radio=\"'target_grade'\">\n" +
    "              <i class=\"fa fa-check\"></i> Grade\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-default\" ng-model=\"tableSort.order\" ng-click=\"sortTableBy('max_pct_copy')\" btn-radio=\"'max_pct_copy'\">\n" +
    "              <i class=\"fa fa-eye\"></i> Plagiarism\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-default\" ng-model=\"tableSort.order\" ng-click=\"sortTableBy('portfolio_status')\" btn-radio=\"'portfolio_status'\">\n" +
    "              <i class=\"fa fa-book\"></i> Portfolio Status\n" +
    "            </button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <p class=\"help-block\">\n" +
    "          Click the button twice to reverse the sort ordering.\n" +
    "        </p>\n" +
    "      </div><!--/flag-sort-button-group-->\n" +
    "    </form><!--/search-options-->\n" +
    "    <div class=\"panel-body\" ng-show=\"filteredStudents.length == 0\">\n" +
    "      <div class=\"callout callout-primary\">\n" +
    "        <h4>No students found</h4>\n" +
    "        <p>\n" +
    "          No students were found using the filters specified.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div><!--/no-students-found-->\n" +
    "    <table ng-show=\"filteredStudents.length > 0\" class=\"table table-condensed table-hover table-pointer\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th class=\"avatar\"></th>\n" +
    "          <th class=\"student-id\">\n" +
    "            <a ng-click=\"sortTableBy('student_id')\">\n" +
    "              Student ID <i ng-show=\"tableSort.order == 'student_id'\" class=\"fa fa-caret-{{tableSort.reverse ? 'down' : 'up'}}\"></i>\n" +
    "            </a>\n" +
    "          </th><!--/id-column-header-->\n" +
    "          <th class=\"name\">\n" +
    "            <a ng-click=\"sortTableBy('name')\">\n" +
    "              Name <i ng-show=\"tableSort.order == 'name'\" class=\"fa fa-caret-{{tableSort.reverse ? 'down' : 'up'}}\"></i>\n" +
    "            </a>\n" +
    "          </th><!--/name-column-header-->\n" +
    "          <th class=\"stats\">\n" +
    "            <a ng-click=\"sortTableBy('orderScale')\">\n" +
    "              Stats <i ng-show=\"tableSort.order == 'orderScale'\" class=\"fa fa-caret-{{tableSort.reverse ? 'down' : 'up'}}\"></i>\n" +
    "            </a>\n" +
    "          </th><!--/stats-column-header-->\n" +
    "          <th class=\"flags\">\n" +
    "            <a ng-click=\"sortTableBy('flags')\">\n" +
    "              Flags\n" +
    "              <i ng-show=\"\n" +
    "                tableSort.order == 'max_pct_copy' ||\n" +
    "                tableSort.order == 'target_grade' ||\n" +
    "                tableSort.order == 'portfolio_status'\"\n" +
    "                class=\"ng-hide fa fa-caret-{{tableSort.reverse ? 'down' : 'up'}}\"></i>\n" +
    "            </a>\n" +
    "          </th><!--/flags-column-header-->\n" +
    "          <th class=\"campus\">\n" +
    "            <a ng-click=\"sortTableBy('campus().name')\">\n" +
    "              Campus <i ng-show=\"tableSort.order == 'campus'\" class=\"fa fa-caret-{{tableSort.reverse ? 'down' : 'up'}}\"></i>\n" +
    "            </a>\n" +
    "          </th><!--/campus-column-header-->\n" +
    "          <th class=\"tutorial\">\n" +
    "            <a ng-click=\"sortTableBy('tutorial.abbreviation')\">\n" +
    "              Tutorial <i ng-show=\"tableSort.order == 'tutorial.abbreviation'\" class=\"fa fa-caret-{{tableSort.reverse ? 'down' : 'up'}}\"></i>\n" +
    "            </a>\n" +
    "          </th><!--/tutorial-column-header-->\n" +
    "        </tr><!--/column-headers-row-->\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr class=\"task-progress-row\" ng-repeat=\"student in filteredStudents\">\n" +
    "          <td class=\"avatar\" ng-click=\"viewStudent(student)\">\n" +
    "            <user-icon [size]=\"30\" [user]=\"student\"></user-icon>\n" +
    "          </td>\n" +
    "          <td ng-click=\"viewStudent(student)\">\n" +
    "            {{student.student_id || \"N/A\"}}\n" +
    "          </td><!--/student-id-column-->\n" +
    "          <td ng-click=\"viewStudent(student)\">\n" +
    "            {{student.name}}\n" +
    "          </td><!--/name-column-->\n" +
    "          <td ng-click=\"viewStudent(student)\" class=\"task-progress-bar\">\n" +
    "            <progress class=\"task-progress\" animate=\"true\">\n" +
    "              <bar\n" +
    "                ng-repeat=\"bar in student.task_stats\"\n" +
    "                value=\"bar.value\"\n" +
    "                type=\"{{statusClass(bar.key)}}\">\n" +
    "                <span ng-hide=\"bar.value < 10\">{{bar.value}}%</span>\n" +
    "              </bar>\n" +
    "            </progress>\n" +
    "          </td><!--/progress-column-->\n" +
    "          <td class=\"text-left\" ng-click=\"viewStudent(student)\">\n" +
    "            <span class=\"flags\">\n" +
    "              <span class=\"flag\">\n" +
    "                <grade-icon grade=\"student.target_grade\"></grade-icon>\n" +
    "              </span>\n" +
    "              <span ng-show=\"student.max_pct_copy > 0\" class=\"flag\">\n" +
    "                <i class=\"fa fa-eye fa-2x\" ></i>\n" +
    "              </span>\n" +
    "              <span ng-show=\"student.has_portfolio\" class=\"flag\">\n" +
    "                <i class=\"fa fa-book fa-2x\" ng-class=\"{'text-muted': student.compile_portfolio}\"></i>\n" +
    "              </span>\n" +
    "            </span>\n" +
    "          </td><!--/flags-column-->\n" +
    "          <td>\n" +
    "            <student-campus-select [unit]=\"unit\" [student]=\"student\" [update]=\"true\"></student-campus-select>\n" +
    "          </td><!--/campus-column-->\n" +
    "          <td>\n" +
    "            <student-tutorial-select [unit]=\"unit\" [student]=\"student\"></student-tutorial-select>\n" +
    "          </td><!--/tutorial-column-->\n" +
    "        </tr><!--/student-row-->\n" +
    "      </tbody>\n" +
    "    </table><!--/student-table-->\n" +
    "    <div class=\"panel-footer\">\n" +
    "      <div class=\"pull-right\">\n" +
    "        <button\n" +
    "          type=\"button\"\n" +
    "          class=\"btn btn-default\"\n" +
    "          ng-csv=\"getCSVData\"\n" +
    "          lazy-load=\"true\"\n" +
    "          csv-header=\"getCSVHeader()\"\n" +
    "          filename=\"student-project-export.csv\"\n" +
    "          target=\"_blank\">\n" +
    "          <i class=\"fa fa-file-excel-o\"></i>\n" +
    "          <i class=\"fa fa-download\"></i> Export CSV\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\" ng-click=\"showEnrolModal()\">\n" +
    "          <i class=\"fa fa-user\"></i>\n" +
    "          <i class=\"fa fa-plus\"></i> Enrol Student\n" +
    "        </button>\n" +
    "      </div><!--/export-buttons-->\n" +
    "      <pagination\n" +
    "        total-items=\"pagination.totalSize\"\n" +
    "        ng-change=\"pagination.onChange()\"\n" +
    "        ng-model=\"pagination.currentPage\"\n" +
    "        items-per-page=\"pagination.pageSize\"\n" +
    "        max-size=\"pagination.maxSize\"\n" +
    "        class=\"pagination-sm\"\n" +
    "        boundary-links=\"true\"\n" +
    "        rotate=\"false\">\n" +
    "      </pagination><!--/pagination-->\n" +
    "    </div><!--/panel-footer-->\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/tasks/inbox/inbox.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/tasks/inbox/inbox.tpl.html",
    "<div class=\"inbox-panel-full-screen\">\n" +
    "  <staff-task-list\n" +
    "    ng-if=\"taskData\"\n" +
    "    [show-search-options]=\"showSearchOptions\"\n" +
    "    [filters]=\"filters\"\n" +
    "    [task-data]=\"taskData\"\n" +
    "    [unit]=\"unit\"\n" +
    "    [unit-role]=\"unitRole\"\n" +
    "  >\n" +
    "  </staff-task-list>\n" +
    "  <task-dashboard\n" +
    "    style=\"flex-grow: 3; margin-right: 10px; margin-left: 10px\"\n" +
    "    task=\"taskData.selectedTask\"\n" +
    "    show-footer=\"true\"\n" +
    "    show-submission=\"true\"\n" +
    "  >\n" +
    "  </task-dashboard>\n" +
    "  <task-comments-viewer\n" +
    "    style=\"min-width: 300px; flex-grow: 1; max-width: 400px\"\n" +
    "    [task]=\"taskData.selectedTask\"\n" +
    "    [project]=\"taskData.selectedTask.project()\"\n" +
    "  >\n" +
    "  </task-comments-viewer>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/tasks/offline/offline.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/tasks/offline/offline.tpl.html",
    "<div class=\"container\" id=\"task-offline-marking-state\">\n" +
    "  <div class=\"panel-row\">\n" +
    "    <div class=\"panel panel-primary\">\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <h4 class=\"panel-title\">Download Unmarked Tasks</h4>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <p>\n" +
    "          Download a zip file containing the tasks that require feedback,\n" +
    "          along with a CSV you can use to submit your comments and task\n" +
    "          status changes.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"panel-footer\">\n" +
    "        <a target=\"_blank\" class=\"btn btn-success form-control\" href=\"{{readyToMarkSubmissionsUrl}}\">\n" +
    "          <i class=\"fa fa-file-zip-o\"></i> <i class=\"fa fa-download\"></i> Download Tasks To Mark\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div><!--/download-unmarked-->\n" +
    "    <div class=\"panel panel-primary\">\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <h4 class=\"panel-title\">Upload Marked Zip</h4>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <p>\n" +
    "          Make changes to student's statuses in the downloaded <code>marks.csv</code>\n" +
    "          file. Re-zip your changes and optional annotated PDFs with your feedback and\n" +
    "          upload below.\n" +
    "        </p>\n" +
    "        <p class=\"text-muted\">\n" +
    "          Use this option when you have made annotations to student's work for feedback\n" +
    "          and to change student's task states.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"panel-footer\">\n" +
    "        <file-uploader\n" +
    "          url=\"uploadSubmissionUrl\"\n" +
    "          files=\"zipMarkingFiles\"\n" +
    "          is-uploading=\"isUploading\"\n" +
    "          is-ready=\"isReady.zip\"\n" +
    "          as-button=\"true\"\n" +
    "          on-success=\"onMarkingUploadSuccess\">\n" +
    "        </file-uploader>\n" +
    "      </div>\n" +
    "    </div><!--/upload-zip-->\n" +
    "    <div class=\"panel panel-primary\">\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <h4 class=\"panel-title\">Upload Marked CSV</h4>\n" +
    "      </div>\n" +
    "      <div class=\"panel-body\">\n" +
    "        <p>\n" +
    "          Make changes to student's statuses in the downloaded <code>marks.csv</code>\n" +
    "          file. Upload your modified <code>marks.csv</code> below.\n" +
    "        </p>\n" +
    "        <p class=\"text-muted\">\n" +
    "          Use this option when you have not made annotations to student's work\n" +
    "          and just want to change student's task states.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"panel-footer\">\n" +
    "        <file-uploader\n" +
    "          url=\"uploadSubmissionUrl\"\n" +
    "          files=\"csvMarkingFiles\"\n" +
    "          is-uploading=\"isUploading\"\n" +
    "          is-ready=\"isReady.csv\"\n" +
    "          as-button=\"true\"\n" +
    "          on-success=\"onMarkingUploadSuccess\">\n" +
    "        </file-uploader>\n" +
    "      </div>\n" +
    "    </div><!--/upload-zip-->\n" +
    "  </div><!--/top-panels-->\n" +
    "  <div class=\"panel panel-default\" ng-show=\"taskUploadResults && taskUploadResults.length > 0\">\n" +
    "    <hr>\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h4 class=\"panel-title\">\n" +
    "        Upload Results\n" +
    "        <a class=\"pull-right\" ng-click=\"dismissResults()\">\n" +
    "          <i class=\"fa fa-times\"></i>\n" +
    "        </a>\n" +
    "      </h4>\n" +
    "    </div>\n" +
    "    <table class=\"table table-striped\">\n" +
    "      <thead>\n" +
    "        <th>Filename</th>\n" +
    "        <th>Task</th>\n" +
    "        <th>Message</th>\n" +
    "      </thead>\n" +
    "      <tr ng-repeat=\"item in taskUploadResults.failed\" class=\"danger\">\n" +
    "        <td>{{item.file}}</td>\n" +
    "        <td>{{item.task}}</td>\n" +
    "        <td>{{item.error}}</td>\n" +
    "      </tr>\n" +
    "      <tr ng-repeat=\"item in taskUploadResults.succeeded\">\n" +
    "        <td>{{item.file}}</td>\n" +
    "        <td>{{item.task}}</td>\n" +
    "        <td>Success</td>\n" +
    "      </tr>\n" +
    "      <tr ng-repeat=\"item in taskUploadResults.ignored\" class=\"info\">\n" +
    "        <td>{{item.file}}</td>\n" +
    "        <td>{{item.task}}</td>\n" +
    "        <td>File ignored</td>\n" +
    "      </tr>\n" +
    "    </table>\n" +
    "  </div><!--/upload-results-->\n" +
    "  <hr>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "      <h4 class=\"panel-title\">How to mark offline</h4>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <h5>1. Open CSV</h5>\n" +
    "      <p>\n" +
    "        To mark, open <code>marks.csv</code> in your favourite spreadsheet or text editor.\n" +
    "      </p>\n" +
    "      <h5>2. Open PDF</h5>\n" +
    "      <p>\n" +
    "        Open a student's PDF submission file under the appropriate directory.\n" +
    "        You may choose to annotate or comment on this PDF file.\n" +
    "      </p>\n" +
    "      <h5>3. Decide a new status</h5>\n" +
    "      <p>\n" +
    "        A student may decide that their work is:\n" +
    "      </p>\n" +
    "      <ul>\n" +
    "        <li>Ready to Mark (or <code>rtm</code>), or</li>\n" +
    "        <li>Needs Help (or <code>needs_help</code>).</li>\n" +
    "      </ul>\n" +
    "      <p>\n" +
    "        This is indicated in the <code>status</code> column for the respective task\n" +
    "        row in the <code>marks.csv</code> file.\n" +
    "      </p>\n" +
    "      <p>\n" +
    "        Once you decide what status to update a student's work to, change the\n" +
    "        <code>status</code> column value to one of the following:\n" +
    "      </p>\n" +
    "      <table class=\"table table-condensed\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>Status</th>\n" +
    "            <th>Description</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>\n" +
    "              <code>discuss</code> or <code>d</code>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "              The student has completed work to a satisfactory\n" +
    "              standard and you will discuss the work with them at\n" +
    "              the next tutorial.\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>\n" +
    "              <code>demonstrate</code> or <code>demo</code>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "              The same as <code>discuss</code>, but a reminder for you\n" +
    "              to ask the student to show you the work in class (i.e., prove\n" +
    "              to you that the code works).\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>\n" +
    "              <code>fix</code>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "              The student has made some errors and you will want them to\n" +
    "              make fixes to their submission, and resubmit their work for\n" +
    "              re-correction at a later date.\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>\n" +
    "              <code>do_not_resubmit</code>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "              The student has consistently submitted the same work without\n" +
    "              making required fixes. This indicates that the student should\n" +
    "              fix the work themselves and include it in their portfolio where\n" +
    "              staff will reassess it.\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>\n" +
    "              <code>redo</code>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "              The student has completely misunderstood what the task asked\n" +
    "              of them, or have completed unrelated files to Doubtfire. You want\n" +
    "              them to start the task again from scratch.\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>\n" +
    "              <code>fail</code>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "              The student has failed this task and will no longer have any\n" +
    "              more attempts at uploading further work. Use this sparingly.\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "\n" +
    "      <h5>4. Leaving a comment</h5>\n" +
    "      <p>\n" +
    "        Your previous comment and the student's previous comment will be\n" +
    "        present in the <code>Student's Last Comment</code> and\n" +
    "        <code>Your Last Comment</code> column, respectively.\n" +
    "\n" +
    "        You may choose to add a new comment to this in the <code>New Comment</code>\n" +
    "        column.\n" +
    "      </p>\n" +
    "\n" +
    "      <h5>5. Graded task</h5>\n" +
    "      <p>\n" +
    "        If the task is a graded task, you should set the value of the\n" +
    "        <code>New Grade</code> column to one of:\n" +
    "      </p>\n" +
    "\n" +
    "      <ul>\n" +
    "        <li><code>p</code>  - for a task that was completed to a Pass standard</li>\n" +
    "        <li><code>c</code>  - for a task that was completed to a Credit standard</li>\n" +
    "        <li><code>d</code>  - for a task that was completed to a Distinction standard</li>\n" +
    "        <li><code>hd</code> - for a task that was completed to a High Distinction standard</li>\n" +
    "      </ul>\n" +
    "\n" +
    "      <h5>6. Rezip</h5>\n" +
    "      <p>\n" +
    "        Re-zip the entire package again, including each student's username folder and\n" +
    "        <code>marks.csv</code>. Alternatively, if you haven't made any annotations to students' work\n" +
    "        you can chose to upload just the marks.csv file instead.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        To do this, navigate to the upload tabs above.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/tasks/viewer/directives/task-details-view/task-details-view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/tasks/viewer/directives/task-details-view/task-details-view.tpl.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <div class=\"panel-title\">\n" +
    "      Details for {{taskDef.name}}\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    <task-outcomes-card task-def=\"taskDef\" unit=\"unit\"></task-outcomes-card>\n" +
    "    <task-description-card [task-def]=\"taskDef\" [unit]=\"unit\" [task]=\"\"></task-description-card>\n" +
    "  </div><!--/comment-list-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/tasks/viewer/directives/task-sheet-view/task-sheet-view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/tasks/viewer/directives/task-sheet-view/task-sheet-view.tpl.html",
    "<div class=\"panel panel-pdf panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <div class=\"panel-title\" ng-hide=\"taskDef\">\n" +
    "      No Task Selected\n" +
    "    </div>\n" +
    "    <div class=\"panel-title\" ng-show=\"taskDef\">\n" +
    "      {{taskDef.name}}\n" +
    "    </div>\n" +
    "  </div><!--/panel-header-->\n" +
    "  <div class=\"panel-body no-pdf\" ng-hide=\"hasPdf\">\n" +
    "    <i class=\"fa fa-question-circle\"></i>\n" +
    "    <span>\n" +
    "      This task has no task sheet\n" +
    "    </span>\n" +
    "  </div><!--/panel-body-without-pdf-->\n" +
    "  <div class=\"panel-body has-pdf\" ng-if=\"hasPdf\">\n" +
    "    <pdf-viewer [pdf-url]=\"urls.taskPdfUrl\"></pdf-viewer>\n" +
    "  </div><!--/panel-body-with-pdf-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/tasks/viewer/directives/unit-task-list/unit-task-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/tasks/viewer/directives/unit-task-list/unit-task-list.tpl.html",
    "<div class=\"panel panel-primary\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <input type=\"text\" class=\"form-control\" ng-model=\"filters.taskSearch\" ng-change=\"taskNameChanged()\" placeholder=\"Search tasks...\">\n" +
    "  </div>\n" +
    "  <ul class=\"list-group\">\n" +
    "    <li class=\"list-group-item list-group-item-task clearfix {{task.statusClass()}}\"\n" +
    "      id=\"{{task.taskKeyToIdString()}}\"\n" +
    "      ng-click=\"setSelectedTask(task)\"\n" +
    "      ng-class=\"{selected: isSelectedTask(task)}\"\n" +
    "      ng-repeat=\"task in filteredTasks\">\n" +
    "      <div class=\"task-data\">\n" +
    "        <h4 class=\"list-group-item-heading\">\n" +
    "          {{task.name}}\n" +
    "        </h4>\n" +
    "        <p class=\"list-group-item-text\">\n" +
    "          {{task.abbreviation}} - {{gradeNames[task.target_grade]}} Task\n" +
    "        </p>\n" +
    "      </div><!--/task-data-->\n" +
    "    </li><!--/task-->\n" +
    "    <li ng-show=\"filteredTasks.length == 0\" class=\"list-group-item text-center text-muted\">\n" +
    "      No tasks to display.\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("units/states/tasks/viewer/viewer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("units/states/tasks/viewer/viewer.tpl.html",
    "<div class=\"panel-full-screen\">\n" +
    "  <unit-task-list\n" +
    "    filters=\"filters\"\n" +
    "    unit-tasks=\"unitTasks\"\n" +
    "    unit='unit'\n" +
    "    selected-task-def=\"selectedTaskDef\"\n" +
    "    class=\"col-xs-12 col-md-3\"><!--/panel-1-->\n" +
    "  </unit-task-list>\n" +
    "  <task-sheet-view\n" +
    "    task-def=\"selectedTaskDef\"\n" +
    "    unit='unit'\n" +
    "    class=\"col-xs-12 col-md-6\">\n" +
    "  </task-sheet-view><!--/panel-2-->\n" +
    "  <task-details-view\n" +
    "    task-def=\"selectedTaskDef\"\n" +
    "    unit=\"unit\"\n" +
    "    class=\"col-xs-12 col-md-3\">\n" +
    "  </task-details-view><!--/panel-3-->\n" +
    "</div>");
}]);

angular.module("visualisations/visualisation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("visualisations/visualisation.tpl.html",
    "<div ng-isolate-scope>\n" +
    "  <nvd3 options=\"options\" data=\"data\" id=\"chart\" api=\"api\" config=\"config\"></nvd3>\n" +
    "</div>\n" +
    "");
}]);
