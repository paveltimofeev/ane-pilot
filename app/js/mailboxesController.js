'use strict';

//
// Controller of Mailboxes view
//

angular.module('dmpApp').controller('mailboxesController', 
                ['$scope', '$http', 'maiboxDatabaseServiceMock', 
                function mailboxesController($scope, $http, maiboxDatabaseServiceMock)
                {
				
                        // Refresh mailboxes grid action
                    	$scope.refresh = function() 
                    	{
                    		maiboxDatabaseServiceMock.GetMailboxes(function(data){
                    			
                    			$scope.departaments = data;
                    			
                    		});
                    	};
                    	
                        
                    	
                    	// Recreate database action
                    	$scope.resetDatabase = function() 
                    	{
                    	    $scope.departaments = [];
							
							 // should be something like this:
							maiboxDatabaseServiceMock.CreateRundomMailboxes( 100, maiboxDatabaseServiceMock.Departaments, 
							              	            function(success) { 
							              	            	$scope.refresh();
							              	            }, 
							              	            function(error) { 
							              	            	
							              	            });
                            
                            
                    		 /* $http.get( 'https://api.github.com/search/repositories?q=%22elasticsearch%22').success(function (data) 
                    		 {
                    		 	$scope.departaments = data;
                    		 });
                    		 */
                    	};
						
						$scope.refresh();
                }
]);
