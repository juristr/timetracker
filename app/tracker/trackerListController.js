(function(){

    'use strict';

    angular.module('pomodoro')
        .controller('TrackerListController', TrackerListController);

    function TrackerListController($scope, timeCalculationService, taskListService){
        var vm = this;
        vm.tasks = [];
        vm.addTask = addTask;
        vm.totalTimeSpent = totalTimeSpent;

        init();

        ///////////////

        function init(){
            vm.tasks = taskListService.getAllTasks();
        }

        function addTask(taskDescription){
            taskListService.addTask({
                title: taskDescription
            });

            vm.taskDescription = '';
        }

        function totalTimeSpent(){
            return timeCalculationService.sumSecondsSpent(vm.tasks);
        }
    }

    TrackerListController.$inject = ['$scope', 'timeCalculationService', 'taskListService'];

})();