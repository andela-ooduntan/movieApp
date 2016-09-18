(function () {
  'use strict';

  var express = require('express'),
    appController = require('../controller'),
    routes = express.Router();

  routes.post('/movies', appController.createMovie);
  routes.get('/movies', appController.getAllMovies);
  routes.get('/movies/:id', appController.getAMovie);
  routes.put('/movies/:id', appController.updateMovie);
  routes.delete('/movies/:id', appController.removeMovie);

  module.exports = routes;
}());