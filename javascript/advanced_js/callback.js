var add = function (a,b){ return a + b ; };
var multiply = function (a,b) { return a * b ; };

//callback are nothing but:-
// 1. functions passed to another function (as param)
// 2. n then executed in the other function. 

var doCalc = function(num1, num2, callbackfunc){ //function passed as param 
	return callbackfunc (num1, num2);	//executed in other function. return in imp.
}

console.log(doCalc(2, 3, add));
console.log(doCalc(2, 3, multiply));

//callback can be anonymous function too.
// anonymous functions are used for one time work.
// see how x n y automatically get the values of 2 n 3.

console.log(doCalc(2, 3, function(x, y){
	console.log("Anonymous function get power of 2 n 3:== " , (x / y));
	return 'done';
}));
