'use strict';

///
/// Not implemented view controller
///
angular.module('dmpApp', [])
       .controller('notimplementedController', 
                    ['$scope', 
                    function notimplementedController($scope)
                    {
                    	$scope.message = 'This page is not implemented yet.';
                    	$scope.count = 0;
                    }
                    
]);
