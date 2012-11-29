/**
 * service configuration
 */

var env = {
	'local' : 0,
	'cloudfoundry' : 1
};

process.env.VCAP_APP_HOST

var config = {
	uploadPath : __dirname + '/uploads',
	express : {
		port : (process.env.VMC_APP_PORT || process.env.PORT || 3000),
		host : (process.env.VCAP_APP_HOST || 'localhost')
	},
	facebook : {
		appId : process.env.VCAP_APP_HOST ? '449290298463113' : '252233128235888',
		appSecret : process.env.VCAP_APP_HOST ? 'a3563a2fc4e40850e1af14702f9a5d1b' : '02b6e2784fa03a0a2bacb659008ed34a'
	},
	mongo : process.env.VCAP_SERVICES ? JSON.parse(process.env.VCAP_SERVICES)['mongodb-2.0'][0]['credentials'] : {
		"hostname":"localhost",
		"port":27017,
		"username":"",
		"password":"",
		"name":"",
		"db":"nodejsbbs"
	},
	urls : {
		'bootstrap.min.css':[
			'/css/bootstrap.min.css',
			'//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.2.1/css/bootstrap.min.css'
		],
		'bootstrap-responsive.min.css':[
			'/css/bootstrap-responsive.min.css',
			'//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.2.1/css/bootstrap-responsive.min.css'
		],
		'html5.js': [
			'http://html5shim.googlecode.com/svn/trunk/html5.js'
		],
		'favicon.ico':[
			'/img/favicon.ico',
			'http://twitter.github.com/bootstrap/assets/ico/favicon.ico'
		],
		'apple-touch-icon-144-precomposed.png':[
			'/img/apple-touch-icon-144-precomposed.png',
			'http://twitter.github.com/bootstrap/assets/ico/apple-touch-icon-144-precomposed.png'
		],
		'apple-touch-icon-114-precomposed.png':[
			'/img/apple-touch-icon-114-precomposed.png',
			'http://twitter.github.com/bootstrap/assets/ico/apple-touch-icon-114-precomposed.png'
		],
		'apple-touch-icon-72-precomposed.png':[
			'/img/apple-touch-icon-72-precomposed.png',
			'http://twitter.github.com/bootstrap/assets/ico/apple-touch-icon-72-precomposed.png'
		],
		'apple-touch-icon-57-precomposed.png':[
			'/img/apple-touch-icon-57-precomposed.png',
			'http://twitter.github.com/bootstrap/assets/ico/apple-touch-icon-57-precomposed.png'
		],
		'jquery.min.js':[
			'/js/jquery.min.js',
			'//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js'
		],
		'bootstrap.min.js':[
			'/js/bootstrap.min.js',
			'//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.2.1/bootstrap.min.js'
		]
	}
};

var getUrl = function(environment) {
	var key;
	var temp = {};
	var index = env[environment];

	for(key in urls) {
		if(urls.hasOwnProperty(key)) {
			temp[key] = urls[key][index] || urls[key][0];
		}
	}

	return temp;
};

module.exports = config;