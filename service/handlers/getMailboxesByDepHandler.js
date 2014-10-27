var getMailboxes = {
    'spec' : 
    {
        'path' : '/Mailboxes/ByDep',
        'method' : 'GET'
    },
    'action' : 
    function(req, res)
    {
        res.set('Content-Type', 'text/plain');
        res.send('Hei, do you wanna some mailboxes, bro ?? ');  
    }
};


module.exports = getMailboxes;