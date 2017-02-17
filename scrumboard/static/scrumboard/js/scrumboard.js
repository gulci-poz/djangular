(function () {
    'use strict';

    var app = angular.module('scrumboard', []);

    /*
    app.config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
    });
    */

    app.controller('ScrumboardController',
        ['$scope', '$http', ScrumboardController]);

    function ScrumboardController($scope, $http) {
        $scope.add = function (list, title) {
            var card = {
                list: list.id,
                title: title
            };

            $http.post('/scrumboard/cards/', card)
                .then(function (response) {
                        list.cards.push(response.data);
                    },
                    function () {
                        alert('Could not create card');
                    }
                );
        };

        $scope.data = [];

        $scope.loadData = function () {
            $http.get('/scrumboard/lists/').then(
                function (response) {
                    $scope.data = response.data;
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
