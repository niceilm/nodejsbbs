var env = {
	'local' : 0,
	'cloudfoundry' : 1
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

module.exports = {
	urls : getUrl('local')
};