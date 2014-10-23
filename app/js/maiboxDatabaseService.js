
// ExpressJS
var express = require('express');
var util = require('util');

// Elasticsearch REST API client module
var elasticsearch = require('es');
var config = 
			{ 
				_index:'dmp',
				server:{ host:'localhost', port:19821 }
			};
				
var es = elasticsearch(config);


// --------------------------------------------------------------------------------
// DATABASE ACCESS LAYER
// (should be moved to separate service? To move, or not to move, that's question... yet.)
//

// mock database
var data = {"mailboxes":[]};

// Simple test / checking if index exists
exports.testDB = function() {
	es.indices.exists({ _index : 'dmp' }, function (err, data) {

		if(err === null)
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

// Returns all mailboxes
exports.GetMailboxes = function(sCallback) {
	// mock
	if(sCallback !== null)
	   sCallback(data.mailboxes);
};

// Add new mailbox to DB
exports.AddMailbox = function(email, departament, mailboxsize, sCallback, eCallback) {
	
	try
	{
		data.mailboxes[data.mailboxes.length] = 
								{
									"email": email,
									"departament": departament, 
									"mailboxsize": mailboxsize 
								};
	}
	catch(ex)
	{
		if(eCallback !== null)
		   eCallback(ex);
	}
	
	if(sCallback !== null)
	   sCallback( { message: 'Mailbox added successfully'} );
};

// Add numbers of maiboxes with rundom deparaments names supplied in departamentsNamesArray
exports.CreateRundomMailboxes = function(count, departamentsNamesArray, sCallback, eCallback) {
	if(count > 0 && departamentsNamesArray !== null && departamentsNamesArray.length > 0) {
		
		var maxDepIndex = departamentsNamesArray.length;
		var maxMailboxSize = 1000;
		for(var i = 0; i < count; i++)
		{
			exports.AddMailbox('mailbox'+i+'@domain.com', 
				departamentsNamesArray[Math.floor(Math.random() * maxDepIndex)], 
				Math.floor(Math.random() * maxMailboxSize), null, eCallback);
		}
		
		if(sCallback !== null)
		   sCallback( {message: count + " mailboxes added successfully"} );
	}
};

// Just pring error message to console for dubugging purposes
function PrintError(err) {
	var u = require('util');
	console.error(u.log('ERROR: ' + u.inspect(err)));
}


// --------------------------------------------------------------------------------
// simple tests

exports.CreateRundomMailboxes(1000000, ['Dep1', 'Dep2', 'Dep3'], function(data){ console.log(data.message); }, PrintError);
exports.AddMailbox('my.name@domain.com', 'my departament', 250, function(data){ console.log(data.message); }, PrintError);
exports.GetMailboxes(function(mailboxes) { 
	console.log('I have got a ' + mailboxes.length + ' mailboxes');
	
});

exports.testDB();