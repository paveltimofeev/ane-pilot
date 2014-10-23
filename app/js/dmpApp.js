'use strict';
//var express = require('express');

var dmpApp = angular.module('dmpApp', ['ngRoute', 'notimplementedController', 'mailboxesController'] );

///
/// Setting up routing
///
dmpApp.config(['$routeProvider', function($routeProvider) 
								{
									$routeProvider.when('/notimplemented', { 
														templateUrl : 'partials/notimplemented.html', 
														controller: 'notimplementedController'
												  })
												  .when('/mailbox-sizes-by-deps', { 
														templateUrl : 'partials/mailbox-sizes-by-deps.html', 
														controller: 'mailboxesController'
												  })
												  .when('/unit-tests', { 
												  		redirectTo: '/Jasmine/' 
												  })
												  .when('/e2e-tests', { 
												  		redirectTo: '/notimplemented' 
												  })
												  .otherwise({ 
														redirectTo: '/notimplemented'
												   });
								}
			]);
