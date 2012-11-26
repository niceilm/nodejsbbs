module.exports = {
	uploadPath : __dirname + '/uploads',
	express : {
		port : (process.env.VMC_APP_PORT || process.env.PORT || 3001),
		host : (process.env.VCAP_APP_HOST || 'local.niceilm.net' || 'localhost')
	},
	facebook : {
		appId : '449290298463113',
		appSecret : 'a3563a2fc4e40850e1af14702f9a5d1b'
	}
};