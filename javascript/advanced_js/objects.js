var Pizza = function(){		//In JS, there is no actual definition of class. class are represent by functions in JS. functions are objects
	this.crust = 'thin';	//public property
	this.size = 'small';
	this.getsize = function(){	//public method to access public property. 
		return this.size;
	};
	
	var toppings = 3;	//private property. private vars dont require this
	/*
	this.fetchtoppings = function(){	//public method to access private property.
		return toppings;
	}
	*/
	var getToppings = function(){ //private method to access private property.
		return toppings; //closure.
	};
	
	//this was shown in the tut. but this wont work, as we have other properties like size, crust, etc. which are public.
	//the author's example video did not have public properties. so this block is commented.
	//var tmp = {}; //empty obj. this is same as writing var tmp = new Object();
	//tmp.getToppings = getToppings();
	//return tmp;
	
	this.getToppings = getToppings(); //public property to capture private method. 
}; //Pizza obj ends.

var pizza1= new Pizza();
console.log(pizza1.crust);
console.log(pizza1.getsize()); //pizza1.getsize() will return the size, whereas pizza1.getsize will return the function() def

console.log(pizza1.toppings); //undefined. private property. 
//console.log(pizza1.fetchtoppings()); //3. uncomment above code .
//console.log(pizza1.getToppings());  //undefined. cannot access private method directly.
console.log(pizza1.getToppings);
