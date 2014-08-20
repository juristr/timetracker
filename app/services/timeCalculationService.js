(function(){

    'use strict';

    angular.module('pomodoro')
        .factory('timeCalculationService', timeCalculationService);

    function timeCalculationService(){
        var service = {};
        service.sumSecondsSpent = sumSecondsSpent;
        return service;

        ///////////////////

        function sumSecondsSpent(taskList){
            var sumOfSecondsSpent = 0;

            if(taskList){
                for(var i=0; i<taskList.length; i++){
                    sumOfSecondsSpent += taskList[i].timeSpent || 0;
                }
            }

            return sumOfSecondsSpent;
        }

    }
})();