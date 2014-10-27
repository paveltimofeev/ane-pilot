var config     = require('../serviceConfig.js');
var es   = require('../elasticFactory');

var postMailboxes = {
    'spec' : 
    {
        'path'      : '/Mailboxes/Bulk',
        'method'    : 'POST'
    },
    'action' : 
    function(req, res)
    {
        console.log( req.param('nmb'));
        console.log( req.query.nmb );
        console.log( req.params.nmb );
        
        var count = req.param('nmb');
        
        
        var bodyArr = [];
        
        for (var i = 0; i < count; i++) 
        {
            bodyArr.push( { index:  { _index: config.DB.Index, _type: 'mailbox', _id: i } });
            bodyArr.push( { name:   'departament_' + (i % 5), size: (i % 199), email: 'me_'+ i +'@email.com'  });
        }
        
        
        var result = 
        {
            count : 0,
            errors: null
        }
        
        es.esClient.bulk({ body: bodyArr }, function (err, resp) {
            
            result.errors = err;
            
            if(!err){
                result.count = bodyArr.length;
            }
            
        });

    }
};


module.exports = postMailboxes;