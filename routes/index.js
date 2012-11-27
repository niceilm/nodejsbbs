var postProvider = require('../post_provider');
var path = require('path');
var config = require('../config');

/*
 * GET home page.
 */
exports.index = function(req, res) {
//	postProvider.findAll(function(err, docs) {
//		res.render('index', {
//			title:'nodejs bbs',
//			posts:docs
//		});
//	});
	var page = req.params.page || 1;
	postProvider.findByPage(10 * page, page, function(err, docs) {
		res.render('index', {
			title:'nodejs bbs',
			posts:docs
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
	postProvider.findById(req.params.id, function(err, post) {
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