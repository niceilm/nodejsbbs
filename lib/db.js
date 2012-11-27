/**
 * database 관련
 */
var mongojs = require('mongojs');
var config = require('../config');

var generateMongoUrl = function (obj) {
	obj.hostname = (obj.hostname || 'localhost');
	obj.port = (obj.port || 27017);
	obj.db = (obj.db || 'test');

	if(obj.username && obj.password) {
		return "mongodb://" + obj.username + ":" + obj.password + "@" + obj.hostname + ":" + obj.port + "/" + obj.db;
	} else {
		return "mongodb://" + obj.hostname + ":" + obj.port + "/" + obj.db;
	}
};
var db = mongojs(generateMongoUrl(config.mongo), ["posts", "users"]);

module.exports = db;
module.exports.ObjectId = mongojs.ObjectId;