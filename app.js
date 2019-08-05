

var express = require('express');
var app = express();


var my1 = require('./code/1-hello-world.js');
var my2point1 = require('./code/2.1-send-hello.js');
var my2point2 = require('./code/2.2-fetch-hello.js');

// Routes




app.get('/', function(req, res) {

  res.send('Check Node console');






});





// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);
