(function() {
    'use strict';

    /**
     * This is the main entry point into the application.
     * This module contains application configuration, dependencies, and startup code.
     */
    var app = angular.module('electronApp', ['ui.router', 'ui.bootstrap']);

    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: './www/views/login/login.html',
                controller: 'LoginCtrl as vm'
            })
            .state('main', {
                url: '/main',
                abstract: true,
                templateUrl: './www/views/main/main.html',
                controller: 'MainCtrl as vm'
            })
            .state('main.stations', {
                url: '/stations',
                views: {
                    'tab-view': {
                        templateUrl: './www/views/stations/stations.html',
                        controller: 'StationsCtrl as vm'
                    }
                }
            })
            .state('main.graphs', {
                url: '/graphs',
                views: {
                    'tab-view': {
                        templateUrl: './www/views/graphs/graphs.html'
                    }
                }
            })
            .state('main.settings', {
                url: '/settings',
                views: {
                    'tab-view': {
                        templateUrl: './www/views/settings/settings.html'
                    }
                }
            });
    });


})();
