angular.module('doubtfire.tasks.task-definition-editor', []).directive('taskDefinitionEditor', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'tasks/task-definition-editor/task-definition-editor.tpl.html',
    scope: {
      unit: "=",
      task: "=",
      isNew: "="
    },
    controller: ["$scope", "$filter", "DoubtfireConstants", "taskService", "gradeService", "TaskDefinition", "alertService", "Unit", "Task", "ProgressModal", function($scope, $filter, DoubtfireConstants, taskService, gradeService, TaskDefinition, alertService, Unit, Task, ProgressModal) {
      var populate_task;
      $scope.grades = gradeService.grades;
      $scope.targetPicker = {
        open: false
      };
      $scope.duePicker = {
        open: false
      };
      $scope.startPicker = {
        open: false
      };
      $scope.externalName = DoubtfireConstants.ExternalName;
      $scope.taskAdmin = {
        tabsData: {
          taskSheet: {
            title: "Task Description",
            subtitle: "Provide the descriptive details for this task",
            icon: "fa-info",
            seq: 0,
            active: false
          },
          rareSettings: {
            title: "Other Settings",
            subtitle: "Adjust settings to customise task interaction",
            icon: "fa-adjust",
            seq: 1,
            active: false
          },
          fileUpload: {
            title: "Submission Details",
            subtitle: "Indicate what files students need to submit for this task",
            icon: "fa-upload",
            seq: 2,
            active: false
          },
          taskResources: {
            title: "Task Resources",
            subtitle: "Upload the task sheet and other resources for this task",
            icon: "fa-file-o",
            seq: 3,
            active: false
          },
          plagiarismChecks: {
            title: "Plagiarism Detection",
            subtitle: "Add plagiarism checks for this task",
            icon: "fa-eye",
            seq: 4,
            active: false
          }
        }
      };
      $scope.taskSheet = {
        file: {
          name: 'Task Sheet',
          type: 'document'
        }
      };
      $scope.taskSheetUploadUrl = function() {
        return Unit.taskSheetUploadUrl($scope.unit, $scope.task);
      };
      $scope.onTaskSheetSuccess = function(response) {
        alertService.add("success", "Task sheet uploaded", 2000);
        return $scope.task.has_task_sheet = true;
      };
      $scope.changeTaskStream = function(task, stream) {
        return task.tutorial_stream = stream;
      };
      $scope.taskPDFUrl = function() {
        return (Task.getTaskPDFUrl($scope.unit, $scope.task)) + "&as_attachment=true";
      };
      $scope.removeTaskSheet = function(task) {
        return TaskDefinition.taskSheet["delete"]({
          unit_id: $scope.unit.id,
          task_def_id: task.id
        }, function(success) {
          task.has_task_sheet = false;
          return alertService.add("success", "Deleted task sheet", 2000);
        }, function(error) {
          var ref;
          return alertService.add("danger", "Delete failed, " + ((ref = error.data) != null ? ref.message : void 0), 6000);
        });
      };
      $scope.removeTaskResources = function(task) {
        return TaskDefinition.taskResources["delete"]({
          unit_id: $scope.unit.id,
          task_def_id: task.id
        }, function(success) {
          task.has_task_resources = false;
          return alertService.add("success", "Deleted task resources", 2000);
        }, function(error) {
          var ref;
          return alertService.add("danger", "Delete failed, " + ((ref = error.data) != null ? ref.message : void 0), 6000);
        });
      };
      $scope.taskResources = {
        file: {
          name: 'Task Resources',
          type: 'zip'
        }
      };
      $scope.taskResourcesUploadUrl = function() {
        return Unit.taskResourcesUploadUrl($scope.unit, $scope.task);
      };
      $scope.onTaskResourcesSuccess = function(response) {
        alertService.add("success", "Task sheet uploaded", 2000);
        return $scope.task.has_task_resources = true;
      };
      $scope.resourceUrl = function() {
        return Task.getTaskResourcesUrl($scope.unit, $scope.task);
      };
      $scope.setActiveTab = function(tab) {
        if (tab === $scope.activeTab) {
          return;
        }
        if ($scope.activeTab != null) {
          $scope.activeTab.active = false;
        }
        $scope.activeTab = tab;
        return $scope.activeTab.active = true;
      };
      $scope.isActiveTab = function(tab) {
        return tab === $scope.activeTab;
      };
      $scope.setActiveTab($scope.taskAdmin.tabsData['taskSheet']);
      $scope.open = function($event, pickerData) {
        $event.preventDefault();
        $event.stopPropagation();
        if (!pickerData.open) {
          $scope.targetPicker.open = false;
          $scope.duePicker.open = false;
          $scope.startPicker.open = false;
        }
        return pickerData.open = !pickerData.open;
      };
      $scope.addUpReq = function() {
        var newLength, newUpReq;
        newLength = $scope.task.upload_requirements.length + 1;
        newUpReq = {
          key: "file" + (newLength - 1),
          name: "",
          type: "code",
          language: "Pascal"
        };
        return $scope.task.upload_requirements.push(newUpReq);
      };
      $scope.removeUpReq = function(upReq) {
        return $scope.task.upload_requirements = $scope.task.upload_requirements.filter(function(anUpReq) {
          return anUpReq.key !== upReq.key;
        });
      };
      $scope.addCheck = function() {
        var newCheck, newLength;
        newLength = $scope.task.plagiarism_checks.length + 1;
        newCheck = {
          key: "check" + (newLength - 1),
          pattern: "",
          type: ""
        };
        return $scope.task.plagiarism_checks.push(newCheck);
      };
      $scope.removeCheck = function(check) {
        return $scope.task.plagiarism_checks = $scope.task.plagiarism_checks.filter(function(aCheck) {
          return aCheck.key !== check.key;
        });
      };
      $scope.allowedQualityPoints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      populate_task = function(oldTask, newTask) {
        _.extend(oldTask, newTask);
        if (newTask.weighting) {
          return oldTask.weight = newTask.weighting;
        }
      };
      $scope.deleteTask = function() {
        return taskService.deleteTask($scope.task, $scope.unit, null);
      };
      return $scope.saveTask = function() {
        var due, promise, task, tgt;
        task = {};
        _.extend(task, $scope.task);
        task.weighting = $scope.task.weight;
        task.upload_requirements = JSON.stringify($scope.task.upload_requirements);
        task.plagiarism_checks = JSON.stringify($scope.task.plagiarism_checks);
        task.tutorial_stream_abbr = $scope.task.tutorial_stream;
        if (task.group_set) {
          task.group_set_id = task.group_set.id;
        } else {
          task.group_set_id = -1;
        }
        if ((Date.parse(task.start_date) > Date.parse(task.target_date)) || (Date.parse(task.target_date) > Date.parse(task.due_date))) {
          return alertService.add("danger", "Invalid task dates, unit not saved. Ensure start date is before due date, and due date is before deadline.", 5000);
        } else {
          if (task.target_date && task.target_date.getMonth) {
            tgt = task.target_date;
            task.target_date = (tgt.getFullYear()) + "-" + (tgt.getMonth() + 1) + "-" + (tgt.getDate());
          }
          if (task.start_date && task.start_date.getMonth) {
            tgt = task.start_date;
            task.start_date = (tgt.getFullYear()) + "-" + (tgt.getMonth() + 1) + "-" + (tgt.getDate());
          }
          if (task.due_date && task.due_date.getMonth) {
            due = task.due_date;
            task.due_date = (due.getFullYear()) + "-" + (due.getMonth() + 1) + "-" + (due.getDate());
          }
          if ($scope.isNew) {
            promise = TaskDefinition.create({
              unit_id: $scope.unit.id,
              task_def: task
            }).$promise;
            ProgressModal.show('Task Definition Creation', 'Please wait while student projects are updated.', promise);
            return promise.then((function(response) {
              $scope.unit.task_definitions.push(response);
              return alertService.add("success", response.name + " Added", 2000);
            }), (function(response) {
              if (response.data.error != null) {
                return alertService.add("danger", "Error: " + response.data.error, 6000);
              }
            }));
          } else {
            return TaskDefinition.update({
              unit_id: $scope.unit.id,
              id: task.id,
              task_def: task
            }).$promise.then((function(response) {
              populate_task($scope.task, response);
              return alertService.add("success", response.name + " Updated", 2000);
            }), (function(response) {
              if (response.data.error != null) {
                return alertService.add("danger", "Error: " + response.data.error, 6000);
              }
            }));
          }
        }
      };
    }]
  };
});
