'use strict';

//
// Not implemented view controller
//
angular.module('dmpApp').controller('notimplementedController', 
                    ['$scope', 
                    function notimplementedController($scope)
                    {
						var pre = ['No, this ', 'And this ', 'Again, ', 'Sorry, ', 'So sorry, but this ', 'Oops, this '];
                    	$scope.message = pre[Math.floor(Math.random()* pre.length)] + 'page is not implemented yet.';
                    }
                    
]);
