var fs    = require('fs');
var util  = require('util');

var handlersDir = './handlers';
var scriptExtension = '.js';

function IsJavasctiptFile(filePath)
{
    return (filePath.indexOf(scriptExtension) == filePath.length-3);
}

var getRoot = {
    'spec' : 
    {
        'path'      : '/',
        'method'    : 'GET'
    },
    'action' : 
    function(req, res)
    {
        fs.readdir(handlersDir, function(err, files) {
            
            var links = '<br/>';
            
            for (var i = 0; i < files.length; i++) {
                
                if( IsJavasctiptFile( files[i] ) ) {
                    
                    try 
                    {
                        var handler = require('./' + files[i]);
                        links += util.format('<a href="%s">[%s] %s</a><br/>', handler.spec.path, handler.spec.method, handler.spec.path);
                    }
                    catch(ex) 
                    {
                        links += util.format('ERROR (%s): %s<br/>', files[i], ex.message);
                    }
                    
                }
            }
  
            links += '<br/><form action="/Mailboxes/Bulk" method="POST" ><input type="text" name="nmb" value="15"></input><input type="submit" value="Submit"></input></form>';
 
            res.send((new Date()) + links);
        });
    }
};


module.exports = getRoot;