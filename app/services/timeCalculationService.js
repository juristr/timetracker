(function(){

    'use strict';

    angular.module('pomodoro')
        .factory('timeCalculationService', function(){
            return {
                sumSecondsSpent: function(taskList){
                    var sumOfSecondsSpent = 0;

                    if(taskList){
                        for(var i=0; i<taskList.length; i++){
                            sumOfSecondsSpent += taskList[i].timeSpent;
                        }
                    }

                    return sumOfSecondsSpent;
                }
            };
        });

})();