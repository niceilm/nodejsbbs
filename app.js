/**
 * Module dependencies.
 */

var express = require('express')
	, routes = require('./routes')
	, user = require('./routes/user')
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
		"db":"db"
	}
}
var generate_mongo_url = function(obj) {
	obj.hostname = (obj.hostname || 'localhost');
	obj.port = (obj.port || 27017);
	obj.db = (obj.db || 'test');

	if(obj.username && obj.password) {
		return "mongodb://" + obj.username + ":" + obj.password + "@" + obj.hostname + ":" + obj.port + "/" + obj.db;
	} else {
		return "mongodb://" + obj.hostname + ":" + obj.port + "/" + obj.db;
	}
};

var mongourl = generate_mongo_url(mongo);

var record_visit = function(req, res) {
	/* Connect to the DB and auth */
	require('mongodb').connect(mongourl, function(err, conn) {
		conn.collection('ips', function(err, coll) {
			var object_to_insert = { 'ip':req.connection.remoteAddress, 'ts':new Date() };

			coll.insert(object_to_insert, {safe:true}, function(err) {
				res.writeHead(200, {'Content-Type':'text/plain'});
				res.write(JSON.stringify(object_to_insert));
				res.end('\n');
			});
		});
	});
}
app.configure(function() {
	app.set('port', port);
	app.set('host', host);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(express.session());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
	app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/history', record_visit);
app.get('/test', function(req, res){
	res.send("GoodNice");
});

http.createServer(app).listen(app.get('port'), app.get('host'), function() {
	console.log("Express server listening on port " + app.get('port'));
});
