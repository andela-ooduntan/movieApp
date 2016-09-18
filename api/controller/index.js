(function () {
  'use strict';

  var appService = require('../service');

  module.exports  = {
    makeQuery: function (queryString) {
      console.log(this, 'function')
      if(queryString) {
        var regExSearch = new RegExp(queryString, 'i');

        return {
          $or: [
            {title: regExSearch},
            {director: regExSearch},
            {year: regExSearch},
            {genre: regExSearch},
            {country: regExSearch},
          ]
        }
      }

      return {};
    },

    createMovie: function (req, res) {
      console.log(this);
      // appService.saveMovie(req.body, function (err, result) {
      //   if(err) return res.send({error: err});
      //
      //   return res.send({result: result});
      // });
    },

    getAllMovies: function (req, res) {
      console.log("This is", this);
      var query = this.makeQuery(req.query.q);

      appService.getMovies(query, function (err, result) {
        if(err) return res.send({error: err});

        return res.send({result: result});
      });
    },

    getAMovie: function (req, res) {
      appService.getMovies({_id: req.params.id}, function (err, result) {
        if(err) return res.send({error: err});

        return res.send({result: result});
      });
    },

    updateMovie: function (req, res) {
      var movieId = {_id: req.params.id},
        newMovieData = req.body;

      appService.editMovie(movieId, newMovieData, function (err, result) {
        if(err) return res.send({error: err});

        return res.send({result: result});
      });
    },

    removeMovie: function (req, res) {
      appService.deleteMovie({id: req.params.id}, function (err, result) {
        if(err) return res.send({error: err});

        return res.send({result: result});
      });
    }
  };

  // module.exports = controller;
}()).call(this);