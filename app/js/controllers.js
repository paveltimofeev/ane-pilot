'use strict';

/* Controllers */

var dmpControllers = angular.module('dmpControllers', []);


function mailboxesController($scope, $http, mailboxesREST)
{
	$scope.refresh = function() 
	{
		$scope.departaments = mailboxesREST.query();
	};
	
	
	$scope.resetDatabase = function() 
	{
		var url = 'https://api.github.com/search/repositories?q=%22elasticsearch%22';
		//var url = 'http://localhost:1337/mailboxes';
		
		$http.get(url)
		.success(function (data) 
		{
			$scope.departaments = data;
			$scope.count = 0;
		});
	};
	

}

function notimplementedController($scope)
{
	$scope.message = 'This page is not implemented yet.';
	$scope.count = 0;
}


dmpControllers.controller('mailboxesController', ['$scope', '$http', 'mailboxesREST', mailboxesController]);
dmpControllers.controller('notimplementedController', ['$scope', notimplementedController]);
