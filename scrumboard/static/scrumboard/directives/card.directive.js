(function () {
    'use strict';

    var app = angular.module('scrumboard');

    app.directive('scrumboardCard', CardDirective);

    function CardDirective() {
        return {
            templateUrl: '/static/scrumboard/directives/card.html',
            restrict: 'E',
            controller: ['$scope', '$http', function($scope, $http) {
                var url = '/scrumboard/cards/' + $scope.card.id + '/';
                $scope.update = function () {
                    $http.put(url, $scope.card);
                };

                $scope.modelOptions = {
                    debounce: 500
                };
            }]
        };
    }
}());
