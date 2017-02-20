(function () {
    'use strict';

    var app = angular.module('scrumboard');

    app.service('Login', ['$http', '$location', Login]);

    // konstruktor serwisu, stworzony obiekt zostanie wstrzyknięty
    // do komponentu angulara

    function Login($http, $location) {

        // deklarujemy funkcje dla serwisu
        this.login = login;
        this.isLoggedIn = isLoggedIn;
        this.logout = logout;
        this.redirectIfNotLoggedIn = redirectIfNotLoggedIn;

        function login(credentials) {
            return $http.post('/api/auth_api/login/', credentials)
                .then(function (response) {
                    localStorage.currentUser = JSON.stringify(response.data);
                });
        }

        function isLoggedIn() {
            return !!localStorage.currentUser;
        }

        function logout() {
            delete localStorage.currentUser;
            $http.get('/api/auth_api/logout/')
                .then(function () {
                    $location.url('/login');
                });
        }

        function redirectIfNotLoggedIn() {
            if (!isLoggedIn()) {
                $location.url('/login');
            }
        }
    }
}());
