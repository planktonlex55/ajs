
var myApp = angular.module("myModule", [])
					.controller("myController", function($scope, $log){

	//state of the model				
var countries = [
	{name:'USA',
	 cities: [
				{name: 'Dallas'},
				{name: 'Palo Alto'},
				{name: 'Menlo Park'},
			 ],
	 likes: 0, dislikes:0		 
	},
	
	{name:'India',
	 cities: [
				{name: 'Delhi'},
				{name: 'Mumbai'},
				{name: 'Pune'},
			 ],
	 likes: 0, dislikes:0		 
	},
	
	{name:'UK',
	 cities: [
				{name: 'London'},
				{name: 'Liverpool'},
				{name: 'Birmingham'},
			 ],
  	 likes: 0, dislikes:0		 
	},
];
						
						
				$scope.countries = countries; //$scope is the model

				//behaviour of the model
				//doLikes() will be a function which can be called in the view.
				$scope.doLikes = function (country){
							country.likes++;
							$log.info(country);
					};
				
				//doDislikes() will be a function which can be called in the view.
				$scope.doDislikes = function (country){
							country.dislikes++;
							$log.info(country);
					};		
				});
/*
if downloaded for offline purposes, on visual studio use this :- /// <reference path="angular.js" />
*/

