(function() {
    'use strict';

    angular.module('electronApp').controller('StationsCtrl',
        function StationsCtrl($window, rest) {
            var vm = this;
            vm.location = $window.location;
            vm.stations = [];

            activate();

            function activate() {
                rest.getStations()
                    .then(function(response) {
                        vm.stations = response.data;
                    });
            }
        }
    );
})();
