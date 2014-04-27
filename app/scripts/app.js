'use strict';

angular.module('d3DiplomApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/investor', {
                templateUrl: 'views/investor.html',
                controller: 'InvestorCtrl'
            })
            .when('/region', {
                templateUrl: 'views/region.html',
                controller: 'RegionCtrl'
            })
            .when('/analyze', {
              templateUrl: 'views/analyze.html',
              controller: 'AnalyzeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
