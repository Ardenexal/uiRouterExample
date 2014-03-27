'use strict';

angular.module('uiRouterExampleApp', [
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '',
                templateUrl: 'views/main.html'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'views/main.html'
            })
            .state('list', {
                url: '/list',
                templateUrl: 'views/list.html',
                controller: 'listCtrl'
            }).state('list.item', {
                url: '/:item',
                templateUrl: 'views/list.item.html',
                controller: function($scope, $stateParams){
                    $scope.item = $stateParams.item
                }
            });
    });
