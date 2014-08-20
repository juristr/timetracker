(function(){

    'use strict';

    angular
        .module('pomodoro')
        .controller('PerformancesController', PerformancesController);

    PerformancesController.$inject = ['$scope', 'taskListService', 'timeCalculationService'];

    function PerformancesController($scope, taskListService, timeCalculationService){
        var vm = this;
        vm.data = [];

        init();

        /////////////

        function init(){
          vm.data = [
              [
                ['Available time', 8],
                ['Effective time', (timeCalculationService.sumSecondsSpent(taskListService.getAllTasks()))/3600]
              ]
            ];

          vm.chartOptions = {
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
        }
    }

})();