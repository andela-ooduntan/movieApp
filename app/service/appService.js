(function () {
  'use strict';

  angular.module('movieApp').factory('Movies',
    ['$resource',
      function ($resource) {
        return $resource('/movies/:id', {id: '@id'},
          {
          update: {
            method: 'PUT'
          }
        });
  }]);
}());