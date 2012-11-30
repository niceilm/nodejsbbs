/**
 * facebook 환경
 * @type {Object}
 */
var facebook = {
	cloudfoundry : {
		appId : '449290298463113',
		appSecret : 'a3563a2fc4e40850e1af14702f9a5d1b'
	},
	localhost : {
		appId : '252233128235888',
		appSecret : '02b6e2784fa03a0a2bacb659008ed34a'
	}
};

module.exports = (function() {
	if(process.env.VCAP_APP_HOST) {
		return facebook.cloudfoundry;
	} else {
		return facebook.localhost;
	}
})();
