//http://plnkr.co/edit/ue4KZhmssJJUBkPH7Frz?p=preview

//Method1:-
var Pizza = {
  crust : 'thin', //note. no equalto or semi colon
  size : 'medium'
};

/*
Note:- this is a simple object. so we can write something like this:
notice there is no this. or var . Also, there is a colon in between.

"getFullName" : function() {
    return this.fullName;
  }
*/

console.log(typeof Pizza);
console.log(Pizza.crust, Pizza.size); //anyone can access.
Pizza.crust = 'crap';
Pizza.size = 'XXXL'; //unauthorized setters.
console.log(Pizza.crust, Pizza.size); //crap XXXL 




//Method2:-
//constructor pattern of object creation. 
var funcPizza = function(){
  var crust = 'thin'; //private
  this.size = 'small';
  
  this.setCrust = function(param1){
    if (param1 == 'thin' || param1 == 'cheesy'){
      crust = param1;// priv. vars dont require this.
    } //if ends.
  }; //setCrust ends.
  
  this.getCrust = function(){
    return crust;  
  };
};

console.log('Method2:')
var pizza2 = new funcPizza();
console.log('1. Getter getCrust:' + pizza2.getCrust());
pizza2.setCrust('cheesy');
console.log('2. Getter getCrust:' + pizza2.getCrust());
pizza2.setCrust('flaky'); //cheesy. 
//will not set to 'flaky' as set condition fails.
console.log('3. Getter getCrust:' + pizza2.getCrust());



//Method 3:-
//enclosed function block is outside.
//if this is so, then the instance creation should also be inside it.
//we wont be able to create instances from outside this block.

(function(){
  var closurePizza = function(){
    var crust = 'thin'; //private
    this.size = 'small';

    this.setCrust = function(param1){
      if (param1 == 'thin' || param1 == 'cheesy'){
        crust = param1;// priv. vars dont require this.
      } //if ends.
    }; //setCrust ends.
  
    this.getCrust = function(){
      return crust;  
    };
  }; //closurePizza Class ends.
  
  var pizza3 = new closurePizza();
  console.log('Method3: getCrust()' + pizza3.getCrust());

})(); //def. n execution on same line. 
//so no new closurePizza() is reqd.

//var pizza3 = new closurePizza(); 
  //wont work outside the block
  //closurePizza is not defined. Error.
//console.log (typeof pizza3);






//Method 4:
console.log("=====================");
var closedPizza = (function(){
  var Pizzie = function(){
    var crust = 'thin'; //private
    this.size = 'small';

    this.setCrust = function(param1){
      if (param1 == 'thin' || param1 == 'cheesy'){
        crust = param1;// priv. vars dont require this.
      } //if ends.
    }; //setCrust ends.
  
    this.getCrust = function(){
      return crust;  
    };
  }; //Pizzie ends.

  var pizza4 = new Pizzie();
  //var pizza4 = new closedPizza(); 
  //closedPizza is not a constructor;
  console.log (typeof pizza4); //object 
  console.log(pizza4.size);
  
})(); //closedPizza Class ends here.

//var pizza5 = new closedPizza(); 
//closedPizza is not a constructor. error.
//console.log (typeof pizza3);

console.log(closedPizza); //undefined.

//conclusion:- in method 3 and method 4, both are same. 
// the objects will have to be created inside the function block.






//Gyan:
/* http://stackoverflow.com/questions/9053842/advanced-javascript-why-is-this-function-wrapped-in-parentheses
1.
(function(){      -or-    (function(){
//some code.                //some code.
})()                      }()) //note the last closing ).    

is same as:

function foo(){
  //some code.
}
foo();

=============
2. 
function foo(x){
 //some code. 
}
foo(1);

is same as:

(function (x){
//some code.
})(1)

// here, x = 1.
}

*/
