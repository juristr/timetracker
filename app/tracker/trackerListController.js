(function(){

    'use strict';

    angular
        .module('pomodoro')
        .controller('trackerListController', ['$scope', function($scope){
            var timer = undefined;

            $scope.tasks = [{
                id: guid(),
                isPlaying: false,
                title: 'demo'
            }];

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
            };

            // this should be on the model
            
            /*
            $scope.timeSpent = function(task){
                return moment.utc(moment(task.endTime,"DD/MM/YYYY HH:mm:ss").diff(moment(task.startTime,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");
            };*/

            $scope.addTask = function(taskDescription){

                $scope.tasks.push({
                    id: guid(),
                    isPlaying: false,
                    title: taskDescription
                });

                $scope.taskDescription = '';
            };

            $scope.deleteTask = function(task){


                for(var i=0; i < $scope.tasks.length; i++){
                  if($scope.tasks[i].id === task.id){
                    break;    
                  }
                }

                // remove element
                $scope.tasks.splice(i, 1);
            };

        }]);


    var guid = (function() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
                     .toString(16)
                     .substring(1);
        }
        return function() {
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                 s4() + '-' + s4() + s4() + s4();
        };
      })();

})();