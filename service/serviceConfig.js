var util = require('util');

var Config = {
    
    DB :{ 
            Protocol : '',
            Host     : 'localhost',
            Port     : '19821',
            Index    : 'my_dmp_index',
            URL      : ''
        },
        
    REST : {
            Protocol : '',
            Host     : 'localhost',
            Port     : 19822,
            URL      : ''
        }
};


/* [ TEMPORARY ] Check if node runned at Cloud9
if(process.env.C9_FULLNAME !== null) {
    Config.REST.Host = process.env.IP;
    Config.REST.Port = process.env.PORT;
}*/

Config.DB.URL   = util.format('%s%s:%d', Config.DB.Protocol, Config.DB.Host, Config.DB.Port);
Config.REST.URL = util.format('%s%s:%d', Config.REST.Protocol, Config.REST.Host, Config.REST.Port);



/// Service configuration
module.exports = Config;



