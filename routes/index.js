var postProvider = require('../lib/post_provider');
var config = require('../config');
var path = require('path');
var async = require('async');

/*
 * GET home page.
 */
exports.index = function(req, res) {
	var page = req.param('page');
	postProvider.findByPage(page, function(err, results) {
		page.total = results[1];
		res.render('index', {
			title:'nodejs bbs',
			posts:results[0],
			page:page
		});
	});
};

exports.new = function(req, res) {
	res.render('post_new', {
		title:'New Post'
	});
};

exports.newPost = function(req, res) {
	var user = req.user;
	var uploadFile = req.files.file;

	postProvider.save({
		userid:user.id,
		username:user.username,
		title:req.param('title'),
		body:req.param('body'),
		file:uploadFile.name,
		filepath:path.basename(uploadFile.path)
	}, function(err, docs) {
		res.redirect('/');
	});
};

exports.view = function(req, res) {
	async.parallel([
		function(cb){
			postProvider.addCount(req.params.id, cb);
		},
		function(cb){
			postProvider.findById(req.params.id, cb);
		}
	], function(err, results) {
		var post = results[1];
		res.render('post_show', {
			title:post.title,
			post:post
		});
	});
};

exports.addComment = function(req, res) {
	postProvider.addCommentToPost(req.param('_id'), {
		person:req.param('person'),
		comment:req.param('comment'),
		create_at:new Date()
	}, function(err, docs) {
		res.redirect('/post/' + req.param('_id'))
	});
};

exports.viewFile = function(req, res, next) {
	var filename = req.params.filename;
	var filepath = config.express.uploadPath + "/" + req.params.filepath;

	res.download(filepath, encodeURIComponent(filename), function(err) {
		if(err) {
			next(err);
		} else {
			console.log('transferred %s', filepath);
		}
	});
};

exports.removePost = function(req, res) {
	postProvider.removePost(req.params.id, req.user.username, function(err) {
		if(err) {
			res.send(err.message);
		} else {
			res.redirect('/');
		}
	});
};

exports.updatePost = function(req, res) {
	var user = req.user;
	var uploadFile = req.files.file;
	var post = {
		userid:user.id,
		username:user.username,
		title:req.param('title'),
		body:req.param('body'),
		file:uploadFile.name,
		filepath:path.basename(uploadFile.path)
	};

	postProvider.updatePost(req.params.id, req.user.username, post, function(err) {
		if(err) {
			res.send(err.message);
		} else {
			res.redirect('/');
		}
	});
};