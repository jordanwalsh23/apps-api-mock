'use strict';

var url = require('url');


var Apps = require('./AppsService');


module.exports.appsGet = function appsGet (req, res, next) {
  Apps.appsGet(req.swagger.params, res, next);
};

module.exports.appsPost = function appsPost (req, res, next) {
  Apps.appsPost(req.swagger.params, res, next);
};

module.exports.appsAppIdGet = function appsAppIdGet (req, res, next) {
  Apps.appsAppIdGet(req.swagger.params, res, next);
};

module.exports.appsAppIdPut = function appsAppIdPut (req, res, next) {
  Apps.appsAppIdPut(req.swagger.params, res, next);
};

module.exports.appsAppIdDelete = function appsAppIdDelete (req, res, next) {
  Apps.appsAppIdDelete(req.swagger.params, res, next);
};
