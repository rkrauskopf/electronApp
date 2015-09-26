(function() {
    angular
        .module('electronApp')
        .factory('settings', settings);

    //settingsService.$inject = ['$http'];

    function settings() {
        return {
            //awsServerUrl: 'http://52.89.180.140:1337/',
            awsServerUrl: 'http://52.89.180.140:1337/',
            userID: ''
        }
    }
})();
