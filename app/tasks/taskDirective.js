(function(){

    'use strict';

    angular.module('pomodoro')
        .directive('task', ['taskListService', 'timeCalculationService', function(taskListService, timeCalculationService){
            return {
                restrict: 'E',
                scope: {
                    taskItem: '=task'
                },
                templateUrl: 'app/tasks/task.html',
                controller: function($scope){
                    var timer;

                    $scope.play = function(task){
                        task.isPlaying = true;

                        if(typeof(task.startTime) === 'undefined'){
                            task.startTime = new Date();
                        }

                        if(typeof(task.timeSpent) === 'undefined'){
                            task.timeSpent = 0;
                        }

                        timer = setInterval(function() {
                            $scope.$apply(function(){
                                task.timeSpent += 1;
                            });
                        }, 1000);
                    };

                    $scope.stop = function(task){
                        task.isPlaying = false;

                        if(timer){
                            clearInterval(timer);
                        }

                        //task.timeSpent += parseInt(moment(moment().diff(moment(task.startTime))).format('ss'), 10);
                        // moment.utc(moment(new Date(),"DD/MM/YYYY HH:mm:ss").diff(moment(task.startTime,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");

                        //reset
                        task.startTime = undefined;
                        taskListService.saveTasks();
                    };

                    $scope.deleteTask = function(task){
                        taskListService.deleteTask(task);
                    };

                    $scope.totalTimeSpent = function(){
                        return timeCalculationService.sumSecondsSpent($scope.tasks);
                    };
                }
            };
        }]);

})();