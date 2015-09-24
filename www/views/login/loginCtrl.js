(function() {
    'use strict';

    angular.module('electronApp').controller('LoginCtrl',
        function loginCtrl($state, rest, settings) {
            var vm = this;
            vm.username = '';
            vm.password= '';
            vm.errorMessage = '';
            vm.login = login;

            function login() {
                vm.errorMessage = '';
                rest.login(vm.email, vm.password)
                    .then(function(success) {
                        vm.errorMessage = '';
                        settings.userID = success.data.id;
                        $state.go('main.stations');
                    })
                    .catch(function(error) {
                        vm.errorMessage = error.data ? error.data : 'A login error has occured';
                    })
            }

        }
    );
})();
