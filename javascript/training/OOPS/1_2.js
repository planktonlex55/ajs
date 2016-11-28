//Eg.2. of OOPS. this -vs- var . My plunked link:- https://plnkr.co/edit/qEyvnPRtpw8JBx1RK1Ln?p=preview
//plz refer eg.1. before proceeding.

var Vehicle = function(){
  this.manufacturer = null; //best practice. no m. assigned.
  //this here means that it is "protected". var means it is "private" 
    //protected variables are DIRECTLY accessible in subclasses and also in objects 
    //protected variables do not require a getter/setter.
  this.manufacturer_address = null;
  var manufacturer_phone = '+91 9800011111';
  
  this.get_manufacturer_phone = function(){
    return manufacturer_phone;
  };
};

var Four_Wheeler = function(){
  this.engine_type = null;  // 2-stroke, 4-stroke, DSI, etc.
  this.vehicle_type = null; //LMV, SUV, HMV
};

Four_Wheeler.prototype = new Vehicle(); //this is how inheritance happens.

var veh1 = new Four_Wheeler();
document.write(veh1.manufacturer);
document.write(veh1.manufacturer_address);
document.write(veh1.engine_type);
document.write(veh1.vehicle_type);
document.write('<br>');
document.write(veh1.manufacturer_phone); //private vars are not directly accessible.
//hence we get undefined (if there is no getter)
document.write("<br>Using getter to access manufacturer_phone's private value.");
document.write(veh1.get_manufacturer_phone()); 
//VIMP:- when u call getter, plz note :-
//veh1.get_manufacturer_phone will give entire function definition as a string.
//veh1.get_manufacturer_phone() will execute the defined function and return a value.
//() is a big big fcuker.
 
