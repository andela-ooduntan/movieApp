'use strict';

angular.module('movieApp')
  .controller('homeContrl', ['$scope', 'Movies',
    function($scope, Movies) {
      $scope.movie = {};
      $scope.movieList = [];

      $scope.addMovie = function () {
        Movies.save($scope.movie).$promise.then(function (movieData) {
          $scope.movieList.splice(0, 0, movieData.result);
          console.log(movieData);
        }).catch(function (err) {
          console.log(err);
        });
      }

      $scope.deleteMovie = function (movieIndex) {
        var movieId = $scope.movieList[movieIndex]._id;

        Movies.delete({id: movieId}).$promise.then(function (result) {
          console.log(result);
          $scope.movieList.splice(movieIndex, 1);
        }).catch(function (err) {
          console.log(err);
        });
      }

      $scope.init = function () {
        Movies.get().$promise.then(function (movieData) {
          $scope.movieList = movieData.result;
        });
      }

      $scope.init();
}]);