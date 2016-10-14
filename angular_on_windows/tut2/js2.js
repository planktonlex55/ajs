
var myApp = angular.module("myModule", [])
					.controller("myController", function($scope){
						var employees = [
						{name:'Tendulkar', gender:'Male', country:'India', age: 43},
						{name:'Phelps', gender:'Male', country:'USA', age: 33},
						{name:'Sara', gender:'Female', country:'United Kingdom', age:32},
						{name:'Saina', gender:'Female', country:'Bharat', age:25}
						];
						
						$scope.employees = employees; //$scope is the model
					});
/*
if downloaded for offline purposes, on visual studio use this :- /// <reference path="angular.js" />
*/

