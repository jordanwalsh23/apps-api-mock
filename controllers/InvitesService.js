'use strict';

exports.workspacesWorkspaceIdInvitesGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * workspaceId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "invites" : [ {
    "id" : "B384CFD912ADE903",
    "appId" : "C39EFDBCAE349DFE",
    "sentDate" : "2016-01-25T10:00:00,816226465Z",
    "from" : "John Smith",
    "result" : {
      "sent" : 46,
      "accepted" : 12
    },
    "links" : [ {
      "rel" : "self",
      "method" : "GET",
      "url" : "/workspaces/B384DEFE3891AFCB/invites/B384CFD912ADE903"
    } ]
  }, {
    "id" : "AAF384FED8490DFE",
    "appId" : "C39EFDBCAE349DFE",
    "sentDate" : "2016-01-25T10:00:00,816226465Z",
    "from" : "John Smith",
    "result" : {
      "sent" : 46,
      "accepted" : 12
    },
    "links" : [ {
      "rel" : "self",
      "method" : "GET",
      "url" : "/workspaces/B384DEFE3891AFCB/invites/AAF384FED8490DFE"
    } ]
  } ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.workspacesWorkspaceIdInvitesInviteIdGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * workspaceId (String)
  * inviteId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "id" : "AAF384FED8490DFE",
  "appId" : "C39EFDBCAE349DFE",
  "sentDate" : "2016-01-25T10:00:00,816226465Z",
  "from" : "John Smith",
  "result" : {
    "sent" : 46,
    "accepted" : 12
  },
  "recipients" : [ {
    "name" : "Brad Smith",
    "mri" : "Brad.Smith.220.Sandbox@Contact.whispir.com",
    "type" : "ActiveContact",
    "status" : "Pending",
    "lastUpdated" : "2016-01-25T10:00:00,816226465Z",
    "notes" : ""
  } ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.workspacesWorkspaceIdInvitesPost = function(args, res, next) {
  /**
   * parameters expected in the args:
  * workspaceId (String)
  * invite (InviteRequest)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "status" : "SUCCESS",
  "message" : "Your message has been accepted for processing."
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

