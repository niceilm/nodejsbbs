module.exports = {
	uploadPath : __dirname + '/uploads',
	express : {
		port : (process.env.VMC_APP_PORT || process.env.PORT || 3000),
		host : (process.env.VCAP_APP_HOST || 'localhost')
	},
	facebook : {
		appId : process.env.VCAP_APP_HOST ? '449290298463113' : '252233128235888',
		appSecret : process.env.VCAP_APP_HOST ? 'a3563a2fc4e40850e1af14702f9a5d1b' : '02b6e2784fa03a0a2bacb659008ed34a'
	}
};