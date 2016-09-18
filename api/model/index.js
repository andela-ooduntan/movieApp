(function () {
  'use strict';

  var mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/movieAppNext', function (err) {
    console.log(err ? err : 'Connected to movieAppNext db');
  });

    var appSchema = mongoose.Schema({
      title: String,
      director: String,
      year: String,
      country: String,
      genre: String
    });

    module.exports = mongoose.model('movies', appSchema);
}());