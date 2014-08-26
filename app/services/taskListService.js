(function(){

    'use strict';

    angular.module('pomodoro')
        .factory('taskListService', taskListService);

    function taskListService(localStorageService){
        var taskListCache = [];

        var service = {};
        service.getAllTasks = getAllTasks;
        service.addTask = addTask;
        service.deleteTask = deleteTask;
        service.saveTasks = saveTasks;

        return service;

        //////////////////////

        function getAllTasks(){
            taskListCache = loadFromLocalStorage();
            return taskListCache;
        }

        function addTask(task){
            if(typeof(task.id) === 'undefined'){
                task.id = guid();
            }
            task.isPlaying = false;

            // taskListCache.push(task);
            taskListCache.unshift(task);

            saveToLocalStorage(taskListCache);
        }

        function deleteTask(task){

            // loop to the task of interest
            for(var i=0; i < taskListCache.length; i++){
              if(taskListCache[i].id === task.id){
                break;
              }
            }

            // remove element
            taskListCache.splice(i, 1);

            saveToLocalStorage(taskListCache);
        }

        function saveTasks(){
            saveToLocalStorage(taskListCache);
        }


        function saveToLocalStorage(taskListCache){
            localStorageService.set('pomodoro-tracker-app', taskListCache);
        }

        function loadFromLocalStorage(){
            return localStorageService.get('pomodoro-tracker-app') || [];
        }
    }

    taskListService.$inject = ['localStorageService'];

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