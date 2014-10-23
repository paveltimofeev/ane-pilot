'use strict';

/* Controllers */

//
// TODO: Proof of concept, should delete later
//

var dmpControllers = angular.module('dmpControllers', []);


function littleTestCtrl($scope){ 
    $scope.text = "foo"; 
}


dmpControllers.controller('littleTestCtrl', ['$scope', littleTestCtrl]);