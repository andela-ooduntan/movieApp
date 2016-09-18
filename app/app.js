'use strict';

// Declare app level module which depends on views, and components
angular.module('movieApp', [
  'ui.router',
  'ngResource',
]).
config(['$locationProvider', '$urlRouterProvider', '$stateProvider',
  function($locationProvider, $urlRouterProvider, $stateProvider) {
    // $locationProvider.html5Mode({
    //   enable: true,
    //   requireBase: false
    // });

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home',
        {
          url: '/home',
          controller: 'homeContrl',
          templateUrl: '/view/home.html'
        })
      .state('edit',
        {
          url: '/edit/{id}',
          controller: 'editContrl',
          templateUrl: '/view/edit.html'
        })
      .state('search',
        {
          url: '/search?q',
          controller: 'searchContrl',
          templateUrl: '/view/search.html'
        });
}]);
