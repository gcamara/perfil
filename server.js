// server.js

// set up ========================
var express  = require('express');
var app      = express();          // create our app w/ express
var mongoose = require('mongoose');
var fs 		 = require('fs');

// configuration =================

app.use(express.static(__dirname));                 // set the static files location /public/img will be /img for users

//Mongo Setup
var mongo = 'mongodb://localhost/gb';
mongoose.connect(mongo, function(success) {
	console.log(success);
});

var db = mongoose.connection;

db.on('error', function() {
	throw new Error('Impossivel conectar');
});

//Imports
require('./models/user');
require('./routes')(app);


// listen (start app with node server.js) ======================================
app.listen(8090, "0.0.0.0");
console.log("App listening on port 8090");
