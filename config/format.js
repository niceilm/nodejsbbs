/**
 * formatting 관련
 * @type {Function}
 */
module.exports.number = function(vValue) {
	var sValue = String(vValue) || "0";
	return sValue.replace(/(\d)(?=(\d{3})+$)/gi, "$1,");
};

module.exports.date = function(value){
		return value.getFullYear() + "." + value.getMonth() + "." + value.getDay();
};