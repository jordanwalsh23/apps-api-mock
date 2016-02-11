'use strict';

exports.workspacesWorkspaceIdInvitesGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * workspaceId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "invites" : [ {
    "appId" : "B384CFD912ADE903",
    "sentDate" : "2016-01-25T10:00:00,816226465Z",
    "from" : "John Smith",
    "status" : {
      "sent" : 46,
      "accepted" : 12
    }
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

