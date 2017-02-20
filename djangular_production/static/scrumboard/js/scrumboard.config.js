(function () {
    'use strict';

    var app = angular.module('scrumboard');

    app.config(['$routeProvider', config]);
    app.run(['$http', run]);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/scrumboard/html/scrumboard.html',
                controller: 'ScrumboardController'
            })
            .when('/login', {
                templateUrl: '/scrumboard/html/login.html',
                controller: 'LoginController'
            })
            .otherwise('/');
    }

    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
}());
