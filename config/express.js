// config/express.js
var express = require('express');

module.exports = function() {
	var app = express();
	
	// variavel de ambiente
	app.set('port', 3000);
	
	// middleware
	app.use(express.static('public/www/'));

	return app;
};