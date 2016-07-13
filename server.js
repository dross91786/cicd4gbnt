var express = require('express');
var fs = require('fs');
var exec = require('child_process').exec;
var app = express();


app.listen(process.env.PORT || 7225);
console.log("Were up and running.  GBNT!")

app.get('/', function(req, res) {
  res.send('Pick an app to deploy buddy! Life just got a hell of a lot easier!');
});

app.get('/dt-seed-app-sb', function(req, res) {
  exec("wget https://s.yimg.com/fz/api/res/1.2/x6_UnTlhwm6_N.8tCOeR0Q--/YXBwaWQ9c3JjaGRkO2g9MTUwO3E9OTU7dz0yMDA-/http://electricka.com/etaf/ETAFHomePages/site_reference_page/images/smilie2.jpg");
  res.send("Your sb service is downloaded!")

});
