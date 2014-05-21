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
              controller: 'trackerListController'
            })
            .when('/performances', {
              templateUrl: 'app/performances/outline.html',
              controller: 'performancesController'
            })
            .otherwise({
              redirectTo: '/'
            });
        });


}());

