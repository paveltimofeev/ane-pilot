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
        
        try
        {
            es.esClient.count( { index: config.DB.Index }, function (error, response, status) 
                {
                    result.status = status;
                    result.errors = error;
                    
                    if(!error)
                    {
                        result.count = response.count;
                    }

                    res.send(require('util').inspect(result)); 
                });
        }
        catch(ex)
        {
            result.errors = ex;
            res.send(result); 
        }
    }
};


module.exports = getMailboxesCount;