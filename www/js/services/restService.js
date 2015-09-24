(function() {
    angular
        .module('electronApp')
        .factory('rest', rest);

    rest.$inject = ['$http', 'settings'];

    function rest($http, settings) {
        var service = {
            login: login,
            getStations: getStations
        };

        return service;

        function login(email, password) {
            return $http.post(settings.awsServerUrl + 'login', {
                email: email,
                password: password
            })
        }

        function getStations() {
            return $http.get(settings.awsServerUrl + 'user/' + settings.userID + '/stations');
        }
    }
})();
