
var myApp = angular.module("myModule", [])
					.controller("myController", function($scope){
var countries = [
	{name:'USA',
	 cities: [
				{name: 'Dallas'},
				{name: 'Palo Alto'},
				{name: 'Menlo Park'},
			 ]
	},
	
	{name:'India',
	 cities: [
				{name: 'Delhi'},
				{name: 'Mumbai'},
				{name: 'Pune'},
			 ]
	},
	
	{name:'UK',
	 cities: [
				{name: 'London'},
				{name: 'Liverpool'},
				{name: 'Birmingham'},
			 ]
	},
];
						
						$scope.countries = countries; //$scope is the model
					});
/*
if downloaded for offline purposes, on visual studio use this :- /// <reference path="angular.js" />
*/

