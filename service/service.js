var getRoot             = require('./handlers/getRootHandler.js');
var getMailboxesByDep   = require('./handlers/getMailboxesByDepHandler.js');
var getMailboxesCount   = require('./handlers/getMailboxesCountHandler.js');
var postMailboxes       = require('./handlers/postMailboxesBulkHandler.js');

var config          = require('./serviceConfig.js');

var util            = require('util');
var express         = require('express');
var bodyParser      = require('body-parser')
var elasticsearch   = require('elasticsearch');


/// Print out configuration info
console.log('DB.URL:   ' + config.DB.URL);
console.log('REST.URL: ' + config.REST.URL);


var app = express();
app.set('Title', 'RESTful service');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/// GET service root
app.get(getRoot.spec.path, getRoot.action);

/// GET return mailboxes
app.get(getMailboxesByDep.spec.path, getMailboxesByDep.action);

/// GET return mailboxes
app.get(getMailboxesCount.spec.path, getMailboxesCount.action);

/// POST add a lot of mailboxes
app.post(postMailboxes.spec.path, postMailboxes.action);






app.listen(config.REST.Port);

console.log('Started REST service');