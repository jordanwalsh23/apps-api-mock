'use strict';

var url = require('url');


var Invites = require('./InvitesService');


module.exports.workspacesWorkspaceIdInvitesGet = function workspacesWorkspaceIdInvitesGet (req, res, next) {
  Invites.workspacesWorkspaceIdInvitesGet(req.swagger.params, res, next);
};

module.exports.workspacesWorkspaceIdInvitesInviteIdGet = function workspacesWorkspaceIdInvitesInviteIdGet (req, res, next) {
  Invites.workspacesWorkspaceIdInvitesInviteIdGet(req.swagger.params, res, next);
};

module.exports.workspacesWorkspaceIdInvitesPost = function workspacesWorkspaceIdInvitesPost (req, res, next) {
  Invites.workspacesWorkspaceIdInvitesPost(req.swagger.params, res, next);
};
