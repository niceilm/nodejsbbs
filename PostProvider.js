var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

PostProvider = function(host, port, db) {
	this.db = new Db(db, new Server(host, port, {auto_reconnect : true}, {}));
	this.db.open(function() {
	});
};

PostProvider.prototype.getCollection = function(callback) {
	this.db.collection('posts', function(err, postCollection) {
		if(err) {
			callback(err);
		} else {
			callback(null, postCollection);
		}
	});
};

PostProvider.prototype.findAll = function(callback) {
	this.getCollection(function(err, postCollection) {
		if(err) {
			callback(err);
		} else {
			postCollection.find().toArray(function(err, results) {
				if(err) {
					callback(err);
				} else {
					callback(null, results);
				}
			});
		}
	});
};

PostProvider.prototype.findById = function(id, callback) {
	this.getCollection(function(err, postCollection) {
		if(err) {
			callback(err);
		} else {
			postCollection.findOne({_id : postCollection.db.bson_serializer.ObjectID.createFromHexString(id)}, function(error, result) {
				if(err) {
					callback(error);
				} else {
					callback(null, result);
				}
			});
		}
	});
};

PostProvider.prototype.save = function(posts, callback) {
	this.getCollection(function(err, postCollection) {
		if(err) {
			callback(err);
		} else {
			if(typeof(posts.length) == "undefined") {
				posts = [posts];
			}

			for(var i = 0; i < posts.length; i++) {
				var article = posts[i];
				article.created_at = new Date();
				if(article.comments === undefined) {
					article.comments = [];
				}
				for(var j = 0; j < article.comments.length; j++) {
					article.comments[j].created_at = new Date();
				}
			}

			postCollection.insert(posts, function() {
				callback(null, posts);
			});
		}
	});
};

PostProvider.prototype.addCommentToPost = function(postId, comment, callback) {
	this.getCollection(function(err, postCollection) {
		if(err) {
			callback(err);
		} else {
			postCollection.update({_id : postCollection.db.bson_serializer.ObjectID.createFromHexString(postId)}, {"$push" : {comments : comment}}, function(err, article) {
				if(err) {
					callback(err);
				} else {
					callback(null, article)
				}
			});
		}
	});
};

exports.PostProvider = PostProvider;