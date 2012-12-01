var urls = {
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
	],
	'jquery.mobile-1.2.0.min.js':[
		'/js/jquery.mobile-1.2.0.min.js',
		'http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js'
	],
	'jquery.mobile-1.2.0.min.css':[
		'http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css'
	],
	'jquery.mobile.custom.js':[
		'/js/jquery.mobile.custom.js'
	]
};

var getUrl = function() {
	var key;
	var temp = {};
	var index = process.env.VCAP_APP_HOST ? 1 : 0;

	for(key in urls) {
		if(urls.hasOwnProperty(key)) {
			temp[key] = urls[key][index] || urls[key][0];
		}
	}

	return temp;
};

module.exports = getUrl();