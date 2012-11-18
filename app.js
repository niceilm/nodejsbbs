/**
 * Module dependencies.
 */

var express = require('express')
	, routes = require('./routes')
	, fs = require('fs')
	, user = require('./routes/user')
	, PostProvider = require('./post_provider').PostProvider
	, http = require('http')
	, path = require('path')
	, app = express()
	, port = (process.env.VMC_APP_PORT || process.env.PORT || 3000)
	, host = (process.env.VCAP_APP_HOST || 'localhost');

if(process.env.VCAP_SERVICES) {
	var env = JSON.parse(process.env.VCAP_SERVICES);
	var mongo = env['mongodb-2.0'][0]['credentials'];
} else {
	var mongo = {
		"hostname":"localhost",
		"port":27017,
		"username":"",
		"password":"",
		"name":"",
		"db":"bbs"
	}
}

var generateMongoUrl = function(obj) {
	obj.hostname = (obj.hostname || 'localhost');
	obj.port = (obj.port || 27017);
	obj.db = (obj.db || 'test');

	if(obj.username && obj.password) {
		return "mongodb://" + obj.username + ":" + obj.password + "@" + obj.hostname + ":" + obj.port + "/" + obj.db;
	} else {
		return "mongodb://" + obj.hostname + ":" + obj.port + "/" + obj.db;
	}
};

var mongoUrl = generateMongoUrl(mongo);
var postProvider = new PostProvider(mongoUrl);
var uploadPath = __dirname + '/uploads';

fs.stat(uploadPath, function(err) {
	if(err) {
		fs.mkdir(uploadPath, 0744, function(err) {
			if(err) {
				throw err;
			}
		})
	}
});

app.configure('all', function() {
	app.set('port', port);
	app.set('host', host);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser({ keepExtensions:true, uploadDir:uploadPath }));
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(express.session());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
	app.use(express.errorHandler({ dumpExceptions:true, showStack:true }));
});

app.configure('production', function() {
	app.use(express.errorHandler());
});

app.get('/', function(req, res) {
	postProvider.findAll(function(err, docs) {
		res.render('index', {
			title:'nodejs bbs',
			posts:docs
		});
	});
});

app.get('/post/new', function(req, res) {
	res.render('post_new', {
		title:'New Post'
	});
});

app.post('/post/new', function(req, res) {
	var uploadFile = req.files.file;

	postProvider.save({
		title:req.param('title'),
		body:req.param('body'),
		file:uploadFile.name,
		filepath:path.basename(uploadFile.path)
	}, function(err, docs) {
		res.redirect('/');
	});
});

app.get('/post/:id', function(req, res) {
	postProvider.findById(req.params.id, function(err, post) {
		res.render('post_show', {
			title:post.title,
			post:post
		});
	});
});

app.post('/post/addComment', function(req, res) {
	postProvider.addCommentToPost(req.param('_id'), {
		person:req.param('person'),
		comment:req.param('comment'),
		create_at:new Date()
	}, function(err, docs) {
		res.redirect('/post/' + req.param('_id'))
	});
});

app.get('/post/attachment/:filename/:filepath', function(req, res, next) {
	var filename = req.params.filename
		, filepath = uploadPath + "/" + req.params.filepath;

	res.download(filepath, encodeURIComponent(filename), function(err) {
		if(err) {
			next(err);
		} else {
			console.log('transferred %s', filepath);
		}
	});
});

http.createServer(app).listen(app.get('port'), app.get('host'), function() {
	console.log("Express server listening on port " + app.get('port'));
});
