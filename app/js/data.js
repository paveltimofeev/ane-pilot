// ExpressJS
var express = require('express');
var util = require('util');

// Elasticsearch REST API client module
var elasticsearch = require('es');
var config = { 
				_index:'dmp',
				server:{ host:'localhost', port:19821 }
				};
				
var es = elasticsearch(config);

// --------------------------------------------------------------------------------
// DATABASE ACCESS LAYER
// (should be moved to separate module)
//
// Simple test / checking if index exists
exports.testDB = function() {
	es.indices.exists({ _index : 'dmp' }, function (err, data) {

		if(err == null)
		{
			console.log('Test result: ' + (data.exists ? '"dmp" index exists in db' : '"dmp" index does not exists in db'));
			console.log('Code: ' + data.statusCode);
		}
		else
		{
			console.error('EROR: ' + util.inspect(err));
		}
	});
	
	es.count(function(err, data){
		console.log( 'DATA:'+util.inspect(data));
		console.log( 'ERROR:'+util.inspect(err));
	});
};

exports.GetMailboxes = function(sCallback) {
	// mock
	sCallback(data.mailboxes);
}

exports.AddMailbox = function(email, departament, mailboxsize, sCallback, eCallback) {
	data.mailboxes[data.mailboxes.length] = {"email": email,
						"departament": departament, 
						"mailboxsize": mailboxsize };
}

exports.CreateRundomMailboxes = function(count, departamentsNamesArray, sCallback, eCallback) {
	if(count > 0 && departamentsNamesArray != null && departamentsNamesArray.length > 0) {
		
		var maxDepIndex = departamentsNamesArray.length;
		var maxMailboxSize = 1000;
		for(var i = 0; i < count; i++)
		{
			exports.AddMailbox('mailbox'+i+'@domain.com', 
				departamentsNamesArray[Math.floor(Math.random() * maxDepIndex)], 
				Math.floor(Math.random() * maxMailboxSize), sCallback, eCallback);
		}
	}
}


function PrintError(err) {
	var u = require('util');
	console.error(u.log('ERROR: ' + u.inspect(err)));
}

// mock database
var data = {"mailboxes":[]};


// --------------------------------------------------------------------------------
// simple tests

exports.CreateRundomMailboxes(1000000, ['Dep1', 'Dep2', 'Dep3'], function(data){}, PrintError);
exports.AddMailbox('my.name@domain.com', 'my departament', 250, function(data){ console.log(data); }, PrintError);
exports.GetMailboxes(function(mailboxes) { 
	console.log('I have got a ' + mailboxes.length + ' mailboxes:');
	/*
		for(var i =0; i < mailboxes.length; i++)
		{
			console.log(' - ' + mailboxes[i].email + ' (' + mailboxes[i].departament + ') ' + mailboxes[i].mailboxsize + ' Mb');
		}
	*/

});

exports.testDB();

