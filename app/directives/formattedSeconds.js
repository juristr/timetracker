(function(){

    'use strict';

    angular
        .module('pomodoro')
        .filter('formattedSeconds', formattedSeconds);

    function formattedSeconds(){
        return function(input){
            return humanizeDuration(input);
        };
    }

    function humanizeDuration(input) {
        var units = 's';
        // units is a string with possible values of y, M, w, d, h, m, s, ms
        var duration = moment().startOf('day').add(units, input),
        format = "";

        if(duration.hour() > 0){ format += "H [hours] "; }

        if(duration.minute() > 0){ format += "m [min] "; }

        format += " s [secs]";

        return duration.format(format);
    }

})();