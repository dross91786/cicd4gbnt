var restful = require('node-restful');

module.exports = function(app, route) {

  //Setup the contoller for REST.
  var rest = restful.model(
    'deployment',
    app.models.deployment
  ).methods(['get', 'put', 'post', 'delete']);

  //Register this endpoint with the application
  rest.register(app, route);

  //Return Middleware
  return function(req, res, next) {
    next();
  };
};
