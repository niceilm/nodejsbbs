/**
 * express 환경
 * @type {Object}
 */
var path = require('path');
module.exports = {
	uploadPath : path.normalize(__dirname + '/../uploads'),
	port : (process.env.VMC_APP_PORT || process.env.PORT || 3000),
	host : (process.env.VCAP_APP_HOST || 'localhost')
};
