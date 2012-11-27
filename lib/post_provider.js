/**
 * @description 포스트 처리 모듈
 * @type {*}
 */
var async = require('async');
var db = require('./db');
var ObjectId = db.ObjectId;

var findAll = function(callback) {
	db.posts.find(callback);
};

var findByPage = function(page, callback) {
	async.parallel([
		function(callback){
			db.posts.find().sort({_id:-1}).skip((page.number-1)*page.size).limit(page.size, callback);
		},
		function(callback){
			db.posts.count(callback);
		}
	], callback);
};

var findById = function(id, callback) {
	db.posts.findOne({_id:ObjectId(id)}, callback);
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

	db.posts.insert(posts, callback);
};

var addCommentToPost = function(postId, comment, callback) {
	db.posts.update({
		_id:ObjectId(postId)}, {"$push":{comments:comment}
	}, callback);
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
		} else {
			cb({name:'auth error', message:'권한이 없습니다.'});
		}
	});
};

exports.findAll = findAll;
exports.findByPage = findByPage;
exports.findById = findById;
exports.save = save;
exports.addCommentToPost = addCommentToPost;
exports.removePost = removePost;
exports.updatePost = updatePost;