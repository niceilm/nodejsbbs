var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;

PostProvider = function (databaseURL) {
	this.db = mongojs(databaseURL, ['posts']);
};

PostProvider.prototype.findAll = function (callback) {
	this.db.posts.find().toArray(function (err, results) {
		if(err) {
			callback(err);
		} else {
			callback(null, results);
		}
	});
};

PostProvider.prototype.findById = function (id, callback) {
	this.db.posts.findOne({_id:ObjectId(id)}, function (err, result) {
		if(err) {
			callback(err);
		} else {
			callback(null, result);
		}
	});
};

PostProvider.prototype.save = function (posts, callback) {
	if(typeof(posts.length) === "undefined") {
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

	this.db.posts.insert(posts, function () {
		callback(null, posts);
	});
};

PostProvider.prototype.addCommentToPost = function (postId, comment, callback) {
	this.db.posts.update({
		_id:ObjectId(postId)},
		{"$push":{comments:comment}
	}, function (err, article) {
		if(err) {
			callback(err);
		} else {
			callback(null, article);
		}
	});
};

exports.PostProvider = PostProvider;