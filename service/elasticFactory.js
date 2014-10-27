var config          = require('./serviceConfig.js');
var elasticsearch   = require('elasticsearch');


var client = new elasticsearch.Client(
                    {
                        host: config.DB.URL,
                        log: 'trace'
                    });
                

exports.esClient = client;