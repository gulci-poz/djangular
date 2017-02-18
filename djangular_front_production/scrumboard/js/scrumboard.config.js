(function () {
    'use strict';

    var app = angular.module('scrumboard');

    app.run(['$http', run]);

    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
}());
