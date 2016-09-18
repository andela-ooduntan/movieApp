(function () {
  'use strict';

  var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    apiRoutes = require('./api/routes'),
    app = express();

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(apiRoutes);
  app.use(express.static(__dirname + '/app'));

  app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
  });

  app.listen(3009, function (err) {
    console.log(err ? err : 'App started at port 3009');
  });

}());