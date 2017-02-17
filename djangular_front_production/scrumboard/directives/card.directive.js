(function () {
    'use strict';

    var app = angular.module('scrumboard');

    app.directive('scrumboardCard', CardDirective);

    function CardDirective() {
        return {
            templateUrl: '/scrumboard/directives/card.html',
            restrict: 'E',
            controller: ['$scope', '$http', function ($scope, $http) {
                var url = '/api/scrumboard/cards/' + $scope.card.id + '/';
                $scope.update = function () {
                    $http.put(url, $scope.card)
                        .then(function () {

                            },
                            function () {
                                console.log('Access denied: put')
                            });
                };

                $scope.delete = function () {
                    $http.delete(url)
                        .then(function () {
                                var cards = $scope.list.cards;
                                cards.splice(cards.indexOf($scope.card), 1);
                            },
                            function () {
                                console.log('Access denied: delete')
                            });
                };

                $scope.modelOptions = {
                    debounce: 500
                };
            }]
        };
    }
}());
