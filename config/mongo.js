/**
 * mongodb 환경설정
 * @type {*}
 */
module.exports = (function() {
	if(process.env.VCAP_SERVICES) {
		return JSON.parse(process.env.VCAP_SERVICES)['mongodb-2.0'][0]['credentials'];
	} else {
		return {
			"hostname" : "localhost",
			"port" : 27017,
			"username" : "",
			"password" : "",
			"name" : "",
			"db" : "nodejsbbs"
		};
	}
})();
