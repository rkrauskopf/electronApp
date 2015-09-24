(function() {
    'use strict';

    angular.module('electronApp').controller('MainCtrl',
        function loginCtrl($window) {
            var vm = this;
            vm.location = $window.location;

        }
    );
})();
