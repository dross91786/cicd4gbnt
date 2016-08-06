var mongoose = require('mongoose');

//Create User Schema
var UserSchema = new mongoose.Schema({
  userName: String,
  role    : String,
  email   : String
});

//export the model Schema
module.exports = UserSchema;
