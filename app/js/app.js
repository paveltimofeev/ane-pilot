'use strict';

//var express = require('express');
//var api = require('api')

/* App Module */
var dmpApp = angular.module('dmpApp', 
								[ 'ngRoute', 
								  'dmpControllers', 
								  'dmpRESTServices' ]
							);

dmpApp.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.when('/notimplemented', { 
							templateUrl : 'partials/notimplemented.html', 
							controller: 'notimplementedController'})
					  .when('/mailbox-sizes-by-deps', { 
							templateUrl : 'partials/mailbox-sizes-by-deps.html', 
							controller: 'mailboxesController'})
					  .otherwise({ 
							redirectTo: '/notimplemented'
					   });
	}]);
	
	
dmpApp.get('/api/mailboxes', api.mailboxes);