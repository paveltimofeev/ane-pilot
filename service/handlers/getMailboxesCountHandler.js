var config     = require('../serviceConfig.js');
var es   = require('../elasticFactory');


var getMailboxesCount = {
    'spec' : 
    {
        'path' : '/Mailboxes/Count',
        'method' : 'GET'
    },
    'action' : 
    function(req, res)
    {
        res.set('Content-Type', 'application/json');
        
        var result = {
            count:  0,
            errors: null,
            status: null
        };
        
		es.esClient.count( { index: config.DB.Index }, function (error, response, status) 
			{
				result.status = status;
				result.errors = error;
				
				if(error == null)
				{
					result.count = response.count;
				}

				res.send(result); 
			});
    }
};


module.exports = getMailboxesCount;