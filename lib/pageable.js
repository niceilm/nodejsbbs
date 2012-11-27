/**
 * pageable 처리
 * @param req
 * @param res
 * @param next
 * @return {*}
 */
module.exports = function(req, res, next) {
	req.params.page = {
		number : req.param('page.number') || 1,
		size : req.param('page.size') || 5,
		list : req.param('page.list') || 5
	};
	return next();
};