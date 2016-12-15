// http://plnkr.co/edit/uFhMPuajxL9kTHDo1nS4?p=preview

//object manipulation.
//everything in JS is a fckung obj. like python.

var Pizza = {
  crust: 'thin',
  size: 'small',
  toppings: 3,
  getCompany: function(){
    return 'PizzaHut'
  }
};


/*
In JavaScript, almost "everything" is an object.

    Booleans can be objects (if defined with the new keyword)
    Numbers can be objects (if defined with the new keyword)
    Strings can be objects (if defined with the new keyword)
    Dates are always objects
    Maths are always objects
    Regular expressions are always objects
    Arrays are always objects
    Functions are always objects
    Objects are always objects

All JavaScript values, except primitives, are objects.

JavaScript Primitives
A primitive value is a value that has no properties or methods.
A primitive data type is data that has a primitive value.
JavaScript defines 5 types of primitive data types:

    string
    number
    boolean
    null
    undefined

Primitive values are immutable (they are hardcoded and therefore cannot be changed).
*/

/*
  object has properties with named values.
  object method is a property with a function definition.
  
object creation:-
  method1: using object literal.
  var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; 
  
  method2: using new keyword.
  var person = new Object();
    person.firstName = "John";
    person.lastName = "Doe";
    person.age = 50;
    person.eyeColor = "blue"; 
  
  method3: using obj. constructor
  function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  var myFather = new person("John", "Doe", 50, "blue");
  var myMother = new person("Sally", "Rally", 48, "green");
  
  other methods: 
    using factory pattern, 
    using prototype pattern, 
    using dynamic prototype pattern
    
=========================================

Note: JS objects r mutable. They are addressed by reference and not
by value. (By value, creates copies; but since it is by reference,
copies of objects r not created.)
eg. x n person are the same in below example. x points to person.
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
var x = person;
x.age = 10;           // This will change both x.age and person.age 
  
  
  
  
  
  
*/


//to get obj properties n methods
console.log(Object.getOwnPropertyNames(Pizza)); 

//to get only obj methods. i.e. getToppings
console.log(Object.getOwnPropertyNames(Pizza).filter(function(p){
  return typeof Pizza[p] === 'function' ;
}));

//to get only obj properties
console.log(Object.getOwnPropertyNames(Pizza).filter(function(x){
  return typeof Pizza[x] !== 'function'; 
}));

//==========================
//https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm

//Pizza.prototype.price = '10USD';
//this wont work here, as it is not a function obj

console.log('=================');
//for-in. to get all keys of Pizza.
for (var tmp in Pizza){
  console.log(tmp);
}
//Problem is this will loop thru the shared prototype as well.
for (var tmp in Pizza){
  if (Pizza.hasOwnProperty(tmp)){
    console.log(tmp);
  }
}

//==========================
/*
    for - loops through a block of code a number of times.
    for/in - loops through the properties of an object.
    while - loops through a block of code while a specified condition is true.
    do/while - also loops through a block of code while a specified condition is true.
*/





