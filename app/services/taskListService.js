(function(){

    'use strict';

    angular.module('pomodoro')
        .factory('taskListService', ['localStorageService', function(localStorageService){

            var taskList = [];

            var saveToLocalStorage = function(taskList){
                localStorageService.set('pomodoro-tracker-app', taskList);
            };
            var loadFromLocalStorage = function(){
                return localStorageService.get('pomodoro-tracker-app') || [];
            };

            return {
                getAllTasks: function(){
                    taskList = loadFromLocalStorage();
                    return taskList;
                },

                addTask: function(task){
                    if(typeof(task.id) === 'undefined'){
                        task.id = guid();
                    }
                    task.isPlaying = false;

                    // taskList.push(task);
                    taskList.unshift(task);

                    saveToLocalStorage(taskList);
                },

                deleteTask: function(task){

                    // loop to the task of interest
                    for(var i=0; i < taskList.length; i++){
                      if(taskList[i].id === task.id){
                        break;
                      }
                    }

                    // remove element
                    taskList.splice(i, 1);

                    saveToLocalStorage(taskList);
                },

                saveTasks: function(){
                    saveToLocalStorage(taskList);
                }

            };


        }]);

    // utility functions
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