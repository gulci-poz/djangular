(function () {
    'use strict';

    var app = angular.module('scrumboard');

    app.controller('LoginController',
        ['$scope', '$http', '$location', 'Login', LoginController]);

    function LoginController($scope, $http, $location, Login) {
        if (Login.isLoggedIn()) {
            $location.url('/');
        }

        $scope.login = function () {
            Login.login($scope.user)
                .then(function () {
                        $location.url('/');
                    }, function () {
                        $scope.login_error = 'Invalid username/password combination';
                    }
                );
        };
    }
}());
