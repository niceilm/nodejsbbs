/**
 * service configuration
 */

module.exports.urls = require('./urls');
module.exports.facebook = require('./facebook');
module.exports.express = require('./express');
module.exports.mongo = require('./mongo');
module.exports.phase = process.env.VCAP_APP_HOST ? "real" : "local";