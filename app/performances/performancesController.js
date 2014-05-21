(function(){

    'use strict';

    angular
        .module('pomodoro')
        .controller('performancesController', ['$scope', 'taskListService', 'timeCalculationService', function($scope, taskListService, timeCalculationService){

            $scope.data = [[
              ['Available time', 8],
              ['Effective time', (timeCalculationService.sumSecondsSpent(taskListService.getAllTasks()))/3600]
            ]];

            $scope.chartOptions = {
              seriesDefaults: {
                // Make this a pie chart.
                renderer: jQuery.jqplot.PieRenderer,
                rendererOptions: {
                  // Put data labels on the pie slices.
                  // By default, labels show the percentage of the slice.
                  showDataLabels: true
                }
              },
              legend: { show:true, location: 'e' }
            };

        }]);
})();