var arr1 = [10, 20, 30, 40];
console.log( arr1.valueOf() );  //Array [10, 20, 30, 40]
//-or- to do it in one line 
console.log(arr1.valueOf().join()); //10,20,30,40
console.log(arr1.valueOf().join('')); //10203040

//=========================================

var count = arr1.unshift(1); //adds one element to left n returns count
console.log(arr1);  // Array [ 1, 10, 20, 30, 40 ]
console.log(count); //5

var count2 = arr1.push(50);
console.log(arr1);  // Array [ 1, 10, 20, 30, 40, 50 ]
console.log(count2); //6

console.log('-------');
var pop1 = arr1.pop();
console.log(arr1); //Array [ 1, 10, 20, 30, 40 ]
console.log(pop1); //50
 
var shift1 = arr1.shift();
console.log(arr1);  //Array [ 10, 20, 30, 40 ]
console.log(shift1);  //1

//=========================================

var id_array = [5, 1, 0, 88, 22, 23];
console.log(id_array.sort()); //sorts in ASCII order.

/*
To fix this we need a compareFunction:-
compareFunction 	Optional. A function that defines an alternative 
sort order. The function should return a negative, zero, or 
positive value, depending on the arguments, like:
    function(a, b){return a-b}
*/

console.log(id_array.sort(function(a, b){
  return a-b;   
})); 

//======================================== 
console.log('----------------------');

var a1 = [10, 20, 30, 40];
var a2 = [11, 22, 33, 44];

console.log(a1.concat(a2)); //Array [ 10, 20, 30, 40, 11, 22, 33, 44 ] 
console.log(a2);









