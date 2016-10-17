
var myApp = angular.module("myModule", [])
					.controller("myController", function($scope, $log){

					var employees = [
						{name:'Tendulkar', gender:'Male', country:'India', age: 43, dob : new Date("November 22, 1970"), salary: 100000},
						{name:'Phelps', gender:'Male', country:'USA', age: 33, dob : new Date("April 10, 1980"), salary: 120000},
						{name:'Sara', gender:'Female', country:'United Kingdom', age:32, dob : new Date("December 21, 1990"), salary: 60000},
						{name:'Saina', gender:'Female', country:'Bharat', age:25, dob : new Date("June 21, 1995"), salary: 70000}
					];
					
					$scope.employees = employees;
					$scope.sortColumn = "name"; //initialize so that on 1st page load there is some value.
					
					//getColumn is the behaviour of the model, which is called in the view.
					$scope.getColumn = function(colname){
						if ($scope.sortColumn == colname) {
							$scope.sortColumn = "-" + colname;
						}
						else {
							$scope.sortColumn = colname;
						}
					};

					});
/*
if downloaded for offline purposes, on visual studio use this :- /// <reference path="angular.js" />
*/

