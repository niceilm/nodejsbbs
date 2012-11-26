var db = require('./db');
var ObjectId = db.ObjectId;

var findAll = function(callback) {
	db.posts.find().toArray(function(err, results) {
		if(err) {
			callback(err);
		} else {
			callback(null, results);
		}
	});
};

var findById = function(id, callback) {
	db.posts.findOne({_id:ObjectId(id)}, function(err, result) {
		if(err) {
			callback(err);
		} else {
			callback(null, result);
		}
	});
};

var save = function(posts, callback) {
	if(typeof(posts.length) === "undefined") {
		posts = [posts];
	}

	for(var i = 0 ; i < posts.length ; i++) {
		var article = posts[i];
		article.created_at = new Date();
		if(article.comments === undefined) {
			article.comments = [];
		}
		for(var j = 0 ; j < article.comments.length ; j++) {
			article.comments[j].created_at = new Date();
		}
	}

	db.posts.insert(posts, function() {
		callback(null, posts);
	});
};

var addCommentToPost = function(postId, comment, callback) {
	db.posts.update({
		_id:ObjectId(postId)}, {"$push":{comments:comment}
	}, function(err, article) {
		if(err) {
			callback(err);
		} else {
			callback(null, article);
		}
	});
};

var removePost = function(postId, username, cb) {
	db.posts.findOne({_id:ObjectId(postId)}, function(err, post) {
		if(err) {
			throw {name:'db error', message:'error message'};
		}
		if(!post.username || username === post.username) {
			db.posts.remove({_id:ObjectId(postId)}, cb);
		} else {
			cb({name:'auth error', message:'권한이 없습니다.'});
		}
	});
};

var updatePost = function(postId, username, post, cb) {
	db.posts.findOne({_id:ObjectId(postId)}, function(err, dbPost) {
		if(username === post.username || !post.username) {
			post.file = post.file || dbPost.file;
			post.filepath = post.filepath || dbPost.filepath;

			db.posts.update({_id:ObjectId(postId)}, {
				'$set':post
			}, cb);
		}else{
			cb({name:'auth error', message:'권한이 없습니다.'});
		}
	});

};

exports.findAll = findAll;
exports.findById = findById;
exports.save = save;
exports.addCommentToPost = addCommentToPost;
exports.removePost = removePost;
exports.updatePost = updatePost;