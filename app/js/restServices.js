
var dmpRESTServices = angular.module('dmpRESTServices', ['ngResource']);

dmpRESTServices.factory('mailboxesREST', ['$resource', function($resource) 
	{
		return $resource(
						//'https://api.github.com/search/repositories?q=%22elasticsearch%22',
						'http://localhost:1337/mailboxes', 
						{}, 
						{
							query: { method:'GET', params:{}, isArray:true}
						});
	}]);
	
	
	
	
	
	