(function () {
  'use strict';

  var appModel = require('../model');

  module.exports = {
    saveMovie: function (moveData, cb) {
      var newMovie = new appModel(moveData);

      newMovie.save(cb);
    },

    getMovies: function (query, cb) {
      appModel.find(query, cb);
    },

    editMovie: function (movieId, newMovieData, cb) {
      appModel.update(movieId, newMovieData, cb);
    },

    deleteMovie: function (movieId, cb) {
      appModel.remove(movieId, cb);
    }
  };
}());