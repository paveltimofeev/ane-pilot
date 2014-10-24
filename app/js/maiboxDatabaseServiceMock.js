angular.module('dmpDB', []).factory('maiboxDatabaseServiceMock', function() {
    
    /// Names of departanents
    var depts = 
 	[
 	    'SD Departament', 
 	    'Sales Departament', 
 	    'Logistics Departament', 
 	    'Administration', 
 	    'Production Departament',
 	    'Department of Justice', 
 	    'Department of Eagles', 
 	    'Department of Health', 
 	    'Department of Public Safety', 
 	    'Department of Innovative Development', 
 	    'Department of personnel and training', 
 	    'Department of social development'
    ];
    
    /// Dtabase mock
    var data = {"mailboxes":[]};
    
    /// Int randon generator
    function GetRnd(max){ 
        return Math.floor(Math.random() * max); 
    }
 
    
    var GetMailboxes = function(sCallback) {
        
		sCallback(data.mailboxes);
    };
    
    var AddMailbox = function(email, departament, mailboxsize, sCallback, eCallback) {
    
        try
    	{
    		data.mailboxes[data.mailboxes.length] = { "index": GetRnd(1000), "name": '[MOCKED] ' + departament, "size": mailboxsize, "count" : GetRnd(100)  };
    	}
    	catch(ex)
    	{
    		if(eCallback !== null)
    		   eCallback(ex);
    	}
    	
    	if(sCallback !== null)
    	   sCallback( { message: 'Mailbox added successfully'} );
	   
    };
    
    var CreateRundomMailboxes = function(count, departamentsNamesArray, sCallback, eCallback) {
        
        if(count > 100) {
            
            eCallback( { 'message': 'You ask to create too many mailboxes'} );
            
        }
        else if(count > 0 && departamentsNamesArray !== null && departamentsNamesArray.length > 0) {
    		
    		data.mailboxes = [];
    		
    		var maxDepIndex = departamentsNamesArray.length;

    		for(var i = 0; i < count; i++)
    		{
    			AddMailbox( 'mailbox' + i + '@domain.com', 
    			            departamentsNamesArray[GetRnd(maxDepIndex)], 
    			            GetRnd(1000), 
    			            null, 
    			            eCallback
    			          );
    		}
    		
    		if(sCallback !== null)
    		   sCallback( {message: count + " mailboxes added successfully"} );
    	}
    	
    };
    
    
    return {
        Departaments : depts,
        GetMailboxes : GetMailboxes,
        AddMailbox  : AddMailbox,
        CreateRundomMailboxes : CreateRundomMailboxes
    };
});