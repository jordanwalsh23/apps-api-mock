'use strict';

var url = require('url');


var Invites = require('./InvitesService');


module.exports.appsAppIdInvitesGet = function appsAppIdInvitesGet (req, res, next) {
  Invites.appsAppIdInvitesGet(req.swagger.params, res, next);
};

module.exports.appsAppIdInvitesPost = function appsAppIdInvitesPost (req, res, next) {
  Invites.appsAppIdInvitesPost(req.swagger.params, res, next);
};
