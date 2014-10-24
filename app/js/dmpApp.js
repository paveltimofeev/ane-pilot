'use strict';
//var express = require('express');

var dmpApp = angular.module('dmpApp', ['ngRoute', 'dmpDB'] );

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
												  .otherwise({ 
														redirectTo: '/mailbox-sizes-by-deps'
												   });
								}
			]);
