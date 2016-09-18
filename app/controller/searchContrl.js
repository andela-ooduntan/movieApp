(function () {
  'use strict';

  angular.module('movieApp')
    .controller('searchContrl', ['$stateParams', '$scope', 'Movies',
      function($stateParams,$scope, Movies) {
      $scope.searchTerm = $stateParams.q

        $scope.init = function () {
          Movies.get($stateParams).$promise.then(function (moveResult) {
            $scope.searchResult = moveResult.result;
            console.log( $scope.searchResult );
          }).catch(function (err) {
            console.log(err);
          });
        };

        $scope.init();
      }]);
}())