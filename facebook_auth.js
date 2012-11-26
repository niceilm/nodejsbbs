/**
 * facebook auth handler
 * @type {*}
 */
var everyauth = require('everyauth');
var config = require('./config');
var db = require('./db');
var Promise = everyauth.Promise;

everyauth.facebook.appId(config.facebook.appId).appSecret(config.facebook.appSecret).handleAuthCallbackError(function(req, res) {
	console.log('handleAuthCallbackError');
}).findOrCreateUser(function(session, accessToken, accessTokExtra, fbUserMetadata) {
	var promise = this.Promise();
	db.users.findOne({'id':fbUserMetadata.id}, function(err, user) {
		if(err) {
			console.log("Error in finding user for auth. Check Db.");
			promise.fail(err);
		} else if(user) {
			console.log("User " + fbUserMetadata.username + " found and logged in.");
			promise.fulfill(user);
		} else {
			var savedUser = {
				id:fbUserMetadata.id,
				username:fbUserMetadata.username,
				name:fbUserMetadata.name
			};
			db.users.insert(savedUser, function(err) {
				console.log(savedUser);
				promise.fulfill(savedUser);
			});
		}
	});
	return promise;
}).redirectPath('/');

everyauth.everymodule.findUserById(function(req, userId, callback) {
	db.users.findOne({'id':userId}, function(err, user) {
		req.user = user;
		callback(null, req.user);
	});
});

/**
 * Check cedentials on admin public action
 */
module.exports.checkCredentials = function (req, res, next) {
	if (!req.session.auth) {
		// Redirect the user to the login page
		return res.redirect('/auth/facebook');
	}

	// Otherwise, pass control to the route handler -- see above
	return next();
};
