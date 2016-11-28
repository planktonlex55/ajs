// Eg.1. basic inheritance. (My plunker link: https://plnkr.co/edit/B2PtYkLvcCWYIeU5xYUm?p=preview )
//Class variables, sub-class variables, instance variables.

//Note:- in this example our classes are NOT encapsulated.
//SuperClass1
var Vehicle = function(){
  this.manufacturer = null; //null will not take m. If "undefined", then it will take m.
  this.manufacturer_address= null;
};

//SubClass1. Only defined, not yet inherting SuperClass1
var Four_Wheeler = function(){
  this.engine_type = null;  //2-stroke, 4-stroke, DSI, etc.
  this.vehicle_type = null; //LMV, SUV, HMV
};

//Subclass Four_Wheeler now inherits from Vehicle();
Four_Wheeler.prototype = new Vehicle(); 

var veh1 = new Four_Wheeler();
veh1.name = 'WagonR'; //instance variable. Specific only to veh1 obj. veh2 will not have it. 
var veh2 = new Four_Wheeler();

document.write ('veh1.manufacturer is: ' + veh1.manufacturer + '<br>');
document.write ('veh1.manufacturer_address is: ' + veh1.manufacturer_address + '<br>');
document.write ('veh1.engine_type is: ' + veh1.engine_type + '<br>');
document.write ('veh1.vehicle_type is: ' + veh1.vehicle_type + '<br>' );
document.write ('veh1.name is: ' + veh1.name);
document.write ("<br>Note: veh2 does not have a new property, hence, veh2.name is: ");
document.write (veh2.name);
document.write("<br>")
