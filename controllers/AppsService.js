'use strict';

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
      "termsOfServiceUrl" : "https://whispir.com/tos",
      "deviceLimit" : 3
    },
    "apns" : {
      "certificateDate" : "2016-01-25T10:00:00,816226465Z",
      "enabled" : "true"
    },
    "apnsSandbox" : {
      "enabled" : "false"
    },
    "gcm" : {
      "gcmProjectId" : "whispir-sample-application",
      "gcmProjectNumber" : "199337176512",
      "gcmApiKey" : "AIzaSyARTfazpXVmt7TvyYp4DkGAw59rjpdzKdQ"
    }
  }, {
    "id" : "BC473BCDFECBE384",
    "name" : "Sample Application 2",
    "description" : "Sample Whispir Application for Push Notifications\n",
    "options" : {
      "apikey" : "ab3bfe83hff8fnf0wfdfiusb02",
      "termsOfServiceUrl" : "https://whispir.com/tos",
      "deviceLimit" : 3
    },
    "apns" : {
      "certificateDate" : "2016-01-25T10:00:00,816226465Z",
      "enabled" : "true"
    },
    "apnsSandbox" : {
      "enabled" : "false"
    },
    "gcm" : {
      "gcmProjectId" : "whispir-sample-application",
      "gcmProjectNumber" : "199337176512",
      "gcmApiKey" : "AIzaSyARTfazpXVmt7TvyYp4DkGAw59rjpdzKdQ"
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
    "termsOfServiceUrl" : "https://whispir.com/tos",
    "deviceLimit" : 3
  },
  "apns" : {
    "certificateDate" : "2016-01-25T10:00:00,816226465Z",
    "enabled" : "true"
  },
  "apnsSandbox" : {
    "enabled" : "false"
  },
  "gcm" : {
    "gcmProjectId" : "whispir-sample-application",
    "gcmProjectNumber" : "199337176512",
    "gcmApiKey" : "AIzaSyARTfazpXVmt7TvyYp4DkGAw59rjpdzKdQ"
  }
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.appsAppIdGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * appId (String)
   **/

var examples = {};
  
  examples['application/json'] = {
  "id" : "BC473BCDFECBE384",
  "name" : "Sample Application 2",
  "description" : "Sample Whispir Application for Push Notifications\n",
  "options" : {
    "apikey" : "ab3bfe83hff8fnf0wfdfiusb02",
    "termsOfServiceUrl" : "https://whispir.com/tos",
    "deviceLimit" : 3
  },
  "apns" : {
    "certificateDate" : "2016-01-25T10:00:00,816226465Z",
    "enabled" : "true"
  },
  "apnsSandbox" : {
    "enabled" : "false"
  },
  "gcm" : {
    "gcmProjectId" : "whispir-sample-application",
    "gcmProjectNumber" : "199337176512",
    "gcmApiKey" : "AIzaSyARTfazpXVmt7TvyYp4DkGAw59rjpdzKdQ"
  }
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.appsAppIdPut = function(args, res, next) {
  /**
   * parameters expected in the args:
   * appId (String)
   * app (ApplicationRequest)
   **/

var examples = {};
  

  
  res.end();
}
exports.appsAppIdDelete = function(args, res, next) {
  /**
   * parameters expected in the args:
   * appId (String)
   **/

var examples = {};
  

  
  res.end();
}
