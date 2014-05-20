(function(){
    'use strict';


    angular
        .module('pomodoro', [
          'ngRoute',
          'LocalStorageModule'
        ])
        .config(function($routeProvider){
          $routeProvider
            .when('/', {
              templateUrl: 'app/tracker/list.html',
              controller: 'trackerListController'
            })
            .otherwise({
              redirectTo: '/'
            });
        });


}());

