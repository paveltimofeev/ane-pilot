'use strict';

//
// Controller of Mailboxes view
//

angular.module('dmpAppControllersModule2', []).controller('mailboxesController', 
                ['$scope', 
                function mailboxesController($scope)
                {
				
                    
                        // Refresh mailboxes grid action
                    	$scope.refresh = function() 
                    	{
							$scope.departaments = [{ "index":1, "email":"aherfdg@e-mail.com","name": "Lorem Departament", "count":250, "size": 1450 }];
                    	};
                    	
                        
                    	
                    	// Recreate database action
                    	$scope.resetDatabase = function() 
                    	{
                    	    
                    	    // should be something like this:
                    	    //maiboxDatabaseService.CreateRundomMailboxes(
                          //              	            1000000, 
                          //              	            ['Dep1', 'Dep2', 'Dep3'], 
                          //              	            function(data) { 
                          //              	                
                          //              	                // success!; 
                          //              	                
                          //              	            }, 
                          //              	            function(data) { 
                          //              	                
                          //              	                // error!; 
                          //              	                
                          //              	            });
                            
                    	    
                    		var url = 'https://api.github.com/search/repositories?q=%22elasticsearch%22';
                    		
                    		$http.get(url).success(function (data) 
                    		{
                    			$scope.departaments = data;
								$scope.count = 0;
                    		});
                    	};
                }
]);




