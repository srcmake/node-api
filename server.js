var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Store our v1_routes file in the variable named "routes".
var routes = require('./routes/v1_routes');

// Tell our server to use the v1_routes file for all incoming requests that start with "/v1".
app.use('/v1', routes);
// For example, srcmake.com/v1 requests will all get sent to the v1_routes file to be handled.
// But srcmake.com/candy will not.

// We could define more paths depending on our API functionality. For example...
// app.use('/v2', v2_routes);
// could have handled a path for a version 2 of our app, if we ever make it. 

module.exports = app;
