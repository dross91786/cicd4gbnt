var mongoose = require('mongoose');

//Create User Schema
var DeploySchema = new mongoose.Schema({
  appName: String,
  url    : String
});

//export the model Schema
module.exports = DeploySchema;
