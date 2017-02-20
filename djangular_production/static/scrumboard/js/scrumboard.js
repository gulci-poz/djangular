(function () {
    'use strict';

    var app = angular.module('scrumboard', ['ngRoute']);

    /*
     app.config(function ($interpolateProvider) {
     $interpolateProvider.startSymbol('{$');
     $interpolateProvider.endSymbol('$}');
     });
     */

    app.controller('ScrumboardController',
        ['$scope', '$http', '$location', ScrumboardController]);

    function ScrumboardController($scope, $http, $location) {
        $scope.add = function (list, title) {
            var card = {
                list: list.id,
                title: title
            };

            $http.post('/api/scrumboard/cards/', card)
                .then(function (response) {
                        list.cards.push(response.data);
                    },
                    function () {
                        console.log('Could not create card: post');
                    }
                );
        };

        $scope.logout = function () {
            $http.get('/api/auth_api/logout/')
                .then(function () {
                    $location.url('/login')
                });
        };

        $scope.data = [];

        $scope.loadData = function () {
            $http.get('/api/scrumboard/lists/')
                .then(function (response) {
                        $scope.data = response.data;
                    },
                    function () {
                        console.log('Access denied: get')
                    }
                );
        };

        // wymaga ngRoute -> todo_later
        // musimy pamiętać o $route w definicji i funkcji kontrolera
        /*
         $scope.reloadRoute = function () {
         $route.reload();
         };

         $scope.$watch("data", function () {
         $scope.reloadRoute();
         });
         */

        // początkowe ładowanie danych
        $scope.loadData();
    }

}());
