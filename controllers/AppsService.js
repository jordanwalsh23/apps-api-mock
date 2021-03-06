'use strict';

exports.appsAppIdDelete = function(args, res, next) {
  /**
   * parameters expected in the args:
  * appId (String)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.appsAppIdPut = function(args, res, next) {
  /**
   * parameters expected in the args:
  * appId (String)
  * app (ApplicationRequest)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.appsGet = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "applications" : [ {
    "id" : "BC473BCDFECBE384",
    "name" : "Sample Application",
    "description" : "Sample Whispir Application for Push Notifications\n",
    "options" : {
      "apikey" : "ab3bfe83hff8fnf0wfdfiusb02",
      "clientSecret" : "8ddfs90f90df90df9j0d90jfds0j9fd0j990jfd",
      "deviceLimit" : 3,
      "workspaces" : "B38CBDEFADE38FDE,E3DABCF485FD458D",
      "contactDescriptionField" : "jobTitle"
    },
    "apns" : {
      "certificateDate" : "2016-01-25T10:00:00,816226465Z"
    },
    "gcm" : {
      "gcmProjectId" : "whispir-sample-application",
      "gcmProjectNumber" : "199337176512",
      "gcmApiKey" : "AIzaSyARTfazpXVmt7TvyYp4DkGAw59rjpdzKdQ"
    },
    "defaultWorkspaceEnabled" : true,
    "registrationTypes" : [ "INVITE" ],
    "managedBySystem" : false,
    "links" : [ {
      "rel" : "update",
      "url" : "/apps/BC473BCDFECBE384",
      "method" : "PUT",
      "type" : "application/vnd.whispir.application-v1+json;application/vnd.whispir.application-v1+xml"
    }, {
      "rel" : "delete",
      "url" : "/apps/BC473BCDFECBE384",
      "method" : "DELETE"
    } ]
  }, {
    "id" : "BC473BCDFECBE385",
    "name" : "Sample Application 2",
    "description" : "Sample Whispir Application for Push Notifications\n",
    "options" : {
      "apikey" : "ab3bfe83hff8fnf0wfdfiusb02",
      "clientSecret" : "8ddfs90f90df90df9j0d90jfds0j9fd0j990jfd",
      "deviceLimit" : 3,
      "workspaces" : "B38CBDEFADE38FDE,E3DABCF485FD458D",
      "contactDescriptionField" : "jobTitle"
    },
    "apns" : {
      "certificateDate" : "2016-01-25T10:00:00,816226465Z"
    },
    "gcm" : {
      "gcmProjectId" : "whispir-sample-application",
      "gcmProjectNumber" : "199337176512",
      "gcmApiKey" : "AIzaSyARTfazpXVmt7TvyYp4DkGAw59rjpdzKdQ"
    },
    "defaultWorkspaceEnabled" : true,
    "registrationTypes" : [ "INVITE" ],
    "managedBySystem" : false,
    "links" : [ {
      "rel" : "update",
      "url" : "/apps/BC473BCDFECBE385",
      "method" : "PUT",
      "type" : "application/vnd.whispir.application-v1+json;application/vnd.whispir.application-v1+xml"
    }, {
      "rel" : "delete",
      "url" : "/apps/BC473BCDFECBE385",
      "method" : "DELETE"
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

exports.appsPost = function(args, res, next) {
  /**
   * parameters expected in the args:
  * app (ApplicationRequest)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "id" : "BC473BCDFECBE384",
  "name" : "Sample Application",
  "description" : "Sample Whispir Application for Push Notifications\n",
  "options" : {
    "apikey" : "ab3bfe83hff8fnf0wfdfiusb02",
    "clientSecret" : "8ddfs90f90df90df9j0d90jfds0j9fd0j990jfd",
    "deviceLimit" : 3,
    "workspaces" : "B38CBDEFADE38FDE,E3DABCF485FD458D",
    "contactDescriptionField" : "jobTitle"
  },
  "apns" : {
    "certificateDate" : "2016-01-25T10:00:00,816226465Z"
  },
  "gcm" : {
    "gcmProjectId" : "whispir-sample-application",
    "gcmProjectNumber" : "199337176512",
    "gcmApiKey" : "AIzaSyARTfazpXVmt7TvyYp4DkGAw59rjpdzKdQ"
  },
  "defaultWorkspaceEnabled" : true,
  "registrationTypes" : [ "INVITE" ],
  "managedBySystem" : false,
  "links" : [ {
    "rel" : "update",
    "url" : "/apps/BC473BCDFECBE384",
    "method" : "PUT",
    "type" : "application/vnd.whispir.application-v1+json;application/vnd.whispir.application-v1+xml"
  }, {
    "rel" : "delete",
    "url" : "/apps/BC473BCDFECBE384",
    "method" : "DELETE"
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

