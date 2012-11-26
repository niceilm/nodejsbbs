/**
 * service configuration
 */
var env;
if(process.env.VCAP_SERVICES) {
	env = JSON.parse(process.env.VCAP_SERVICES);
}

module.exports = {
	uploadPath : __dirname + '/uploads',
	express : {
		port : (process.env.VMC_APP_PORT || process.env.PORT || 3000),
		host : (process.env.VCAP_APP_HOST || 'localhost')
	},
	facebook : {
		appId : process.env.VCAP_APP_HOST ? '449290298463113' : '252233128235888',
		appSecret : process.env.VCAP_APP_HOST ? 'a3563a2fc4e40850e1af14702f9a5d1b' : '02b6e2784fa03a0a2bacb659008ed34a'
	},
	mongo : process.env.VCAP_SERVICES ? env['mongodb-2.0'][0]['credentials'] : {
		"hostname":"localhost",
		"port":27017,
		"username":"",
		"password":"",
		"name":"",
		"db":"nodejsbbs"
	}
};