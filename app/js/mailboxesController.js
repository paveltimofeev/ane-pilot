'use strict';

//
// Controller of Mailboxes view
//
angular.module('dmpApp', [])
    .controller('mailboxesController', 
                ['$scope', '$http', 'mailboxesREST', 
                function mailboxesController($scope, $http, mailboxesREST)
                {
                    
                        // Refresh mailboxes grid action
                    	$scope.refresh = function() 
                    	{
                    		$scope.departaments = mailboxesREST.query();
                    	};
                    	
                        
                    	
                    	// Recreate database action
                    	$scope.resetDatabase = function() 
                    	{
                    	    /*
                    	    // should be something like this:
                    	    maiboxDatabaseService.CreateRundomMailboxes(
                                        	            1000000, 
                                        	            ['Dep1', 'Dep2', 'Dep3'], 
                                        	            function(data) { 
                                        	                
                                        	                // success!; 
                                        	                
                                        	            }, 
                                        	            function(data) { 
                                        	                
                                        	                // error!; 
                                        	                
                                        	            });
                            */
                    	    
                    		var url = 'https://api.github.com/search/repositories?q=%22elasticsearch%22';
                    		
                    		$http.get(url).success(function (data) 
                    		{
                    			$scope.departaments = data;
                    			$scope.count = 0;
                    		});
                    	};
                }
]);


