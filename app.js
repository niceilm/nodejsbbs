/**
 * Module dependencies.
 */
var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
var everyauth = require('everyauth');
var facebook_auth = require('./filter/facebook_auth');
var pageable = require('./filter/pageable');
var routes = require('./routes');
var config = require('./config');
var app = express();
everyauth.debug = true;

/**
 * express configuration
 */
app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser({ keepExtensions:true, uploadDir:config.uploadPath }));
	app.use(express.methodOverride());
	app.use(express.cookieParser('bbs secret'));
	app.use(express.session());
	app.use(everyauth.middleware(app));
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});
app.configure('development', function() {
	app.use(express.errorHandler({ dumpExceptions:true, showStack:true }));
});
app.configure('production', function() {
	app.use(express.errorHandler());
});

fs.stat(config.uploadPath, function(err) {
	if(err) {
		fs.mkdir(config.uploadPath, 0744, function(err) {
			if(err) {
				throw err;
			}
		})
	}
});

app.get('/', pageable, routes.index);
app.get('/post/new', facebook_auth, routes.new);
app.post('/post/new', facebook_auth, routes.newPost);
app.get('/post/:id', routes.view);
app.del('/post/:id', facebook_auth, routes.removePost);
app.put('/post/:id', facebook_auth, routes.updatePost);
app.post('/post/addComment', facebook_auth, routes.addComment);
app.get('/post/attachment/:filename/:filepath', facebook_auth, routes.viewFile);

http.createServer(app).listen(config.express.port, config.express.host, function() {
	console.log("Express server listening on port " + config.express.port);
});

module.exports = app;