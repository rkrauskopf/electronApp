(function() {
    angular
        .module('electronApp')
        .factory('settings', settings);

    //settingsService.$inject = ['$http'];

    function settings() {
        return {
            awsServerUrl: 'http://localhost:1337/',
            userID: ''
        }
    }
})();
