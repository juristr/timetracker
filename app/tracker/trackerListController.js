(function(){

    'use strict';

    angular
        .module('pomodoro')
        .controller('trackerListController', ['$scope', 'timeCalculationService', 'taskListService', function($scope, timeCalculationService, taskListService){

            $scope.tasks = taskListService.getAllTasks();

            $scope.addTask = function(taskDescription){
                taskListService.addTask({
                    title: taskDescription
                });

                $scope.taskDescription = '';
            };

            $scope.totalTimeSpent = function(){
                return timeCalculationService.sumSecondsSpent($scope.tasks);
            };

        }]);

})();