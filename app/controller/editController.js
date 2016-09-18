(function () {
  'use strict';

  angular.module('movieApp')
    .controller('editContrl', ['$stateParams', '$scope', 'Movies', '$state',
      function($stateParams,$scope, Movies, $state) {
        $scope.updateMovie = function () {
          Movies.update($stateParams, $scope.movie).$promise.then(function (moveResult) {
            // console
            $scope.movie = moveResult.result;
            $state.go('home');
          }).catch(function (err) {
            console.log(err);
          });
        }

        $scope.init = function () {
          console.log('hmmmmmm')
          Movies.get($stateParams).$promise.then(function (moveResult) {
            console.log(moveResult, 'kjksjkdj')
            $scope.movie = moveResult.result[0];
          }).catch(function (err) {
            console.log(err);
          });
        };

        $scope.init();
      }]);
}())