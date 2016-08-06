var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require ('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
var port = 7225;

//create the application
var app = express();

//Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//Connect to MongoDB
mongoose.connect('mongodb://localhost/cicd4gbnt');
mongoose.connection.once('open', function() {

  //Load the models
  app.models = require('./models/index');

  //load the routes
  var routes = require('./routes');

  _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
  })
  console.log('Everything is working automagically on port ' + port + '!');
  app.listen(port);
});
