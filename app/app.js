(function(){
    'use strict';

    angular
        .module('pomodoro', [
          'ngRoute',
          'LocalStorageModule',
          'ui.chart'
        ])
        .config(function($routeProvider){
          $routeProvider
            .when('/', {
              templateUrl: 'app/tracker/list.html',
              controller: 'TrackerListController',
              controllerAs: 'vm'
            })
            .when('/performances', {
              templateUrl: 'app/performances/outline.html',
              controller: 'PerformancesController',
              controllerAs: 'vm'
            })
            .otherwise({
              redirectTo: '/'
            });
        });


}());

