var iphone_offer = '20% discount on iphones';
var micromax_offer = '50% discount on micromax phones';
var karbonn_offer = '30% discount on karbonn phones';
var lyf_offer = '70% discount on lyf phones';
var intex_offer = '10% discount on intex phones';
var no_offer = 'No discount for crappy phones';

var phoneSuperClass = function(value) {  
  this.call = 1;
  this.contacts = 1;
  this.processor = '1mhz';
  this.ram = '256mb';
  this.type = value;
};

var smartphoneSubClass = function(value) { //value can be smartphone/non_smartphone  
  phoneSuperClass.call(this, value);
  this.touchscreen = 1;	
  this.gorilla_glass = 1;
  this.stylus = 1;
  this.accelerometer = 1;
  this.gyrometer = 1;
};
smartphoneSubClass.prototype = Object.create(phoneSuperClass.prototype);  
smartphoneSubClass.prototype.constructor = smartphoneSubClass;  
/*<smartphone> phoneName: getter n setter */
smartphoneSubClass.prototype.setPhoneName = function(param) {  
  this.phoneName = param;
};
smartphoneSubClass.prototype.getPhoneName = function() {  
  return (this.phoneName);
};
/*<smartphone> phoneModel: getter n setter */
smartphoneSubClass.prototype.setPhoneModel = function(param) {  
  this.phoneModel = param;
};
smartphoneSubClass.prototype.getPhoneModel = function() {  
  return (this.phoneModel);
};
/*<smartphone> phoneProcessor: getter n setter */
smartphoneSubClass.prototype.setPhoneProcessor = function(param) {  
  this.phoneProcessor = param;
};
smartphoneSubClass.prototype.getPhoneProcessor = function() {  
  return (this.phoneProcessor);
};
/*<smartphone> phoneRam: getter n setter */
smartphoneSubClass.prototype.setPhoneRam = function(param) {  
  this.phoneRam = param;
};
smartphoneSubClass.prototype.getPhoneRam = function() {  
  return (this.phoneRam);
};
/*<smartphone> phoneMemory: getter n setter */
smartphoneSubClass.prototype.setPhoneMemory = function(param) {  
  this.phoneMemory = param;
};
smartphoneSubClass.prototype.getPhoneMemory = function() {  
  return (this.phoneMemory);
};
/*<smartphone> touchScreen: getter n setter */
smartphoneSubClass.prototype.setTouchScreen = function(param) {  
  this.touchScreen = param;
};
smartphoneSubClass.prototype.getTouchScreen = function() {  
  return (this.touchScreen);
};
/*<smartphone> phoneMemory: getter n setter */
smartphoneSubClass.prototype.setCapacitive = function(param) {  
  this.capacitive = param;
};
smartphoneSubClass.prototype.getCapacitive = function() {  
  return (this.capacitive);
};
/*<smartphone> offer: getter n setter */
smartphoneSubClass.prototype.setOffer = function(param) {  
  this.offer = param;
};
smartphoneSubClass.prototype.getOffer = function() {  
  return (this.offer);
};

//phoneType, phoneName, phoneProcessor, phoneRam, phoneMemory, touchScreen, capacitive

var nonSmartphoneSubClass = function(value) { //value will be smartphone/non_smartphone  
  phoneSuperClass.call(this, value);
  this.touchscreen = 0;	//new properties added
  this.gorilla_glass = 0;
  this.stylus = 0;
  this.accelerometer = 0;
  this.gyrometer = 0;
};
nonSmartphoneSubClass.prototype = Object.create(phoneSuperClass.prototype);  
nonSmartphoneSubClass.prototype.constructor = nonSmartphoneSubClass;  
/*<nonSmartphone> phoneName: getter n setter */
nonSmartphoneSubClass.prototype.setPhoneName = function(param) {  
  this.phoneName = param;
};
nonSmartphoneSubClass.prototype.getPhoneName = function() {  
  return (this.phoneName);
};
/*<nonSmartphone> phoneModel: getter n setter */
nonSmartphoneSubClass.prototype.setPhoneModel = function(param) {  
  this.phoneModel = param;
};
nonSmartphoneSubClass.prototype.getPhoneModel = function() {  
  return (this.phoneModel);
};
/*<nonSmartphone> phoneProcessor: getter n setter */
nonSmartphoneSubClass.prototype.setPhoneProcessor = function(param) {  
  this.phoneProcessor = param;
};
nonSmartphoneSubClass.prototype.getPhoneProcessor = function() {  
  return (this.phoneProcessor);
};
/*<nonSmartphone> phoneRam: getter n setter */
nonSmartphoneSubClass.prototype.setPhoneRam = function(param) {  
  this.phoneRam = param;
};
nonSmartphoneSubClass.prototype.getPhoneRam = function() {  
  return (this.phoneRam);
};
/*<nonSmartphone> phoneMemory: getter n setter */
nonSmartphoneSubClass.prototype.setPhoneMemory = function(param) {  
  this.phoneMemory = param;
};
nonSmartphoneSubClass.prototype.getPhoneMemory = function() {  
  return (this.phoneMemory);
};
/*<nonSmartphone> touchScreen: getter n setter */
nonSmartphoneSubClass.prototype.setTouchScreen = function(param) {  
  this.touchScreen = param;
};
nonSmartphoneSubClass.prototype.getTouchScreen = function() {  
  return (this.touchScreen);
};
/*<nonSmartphone> phoneMemory: getter n setter */
nonSmartphoneSubClass.prototype.setCapacitive = function(param) {  
  this.capacitive = param;
};
nonSmartphoneSubClass.prototype.getCapacitive = function() {  
  return (this.capacitive);
};
/*<nonSmartphone> offer: getter n setter */
nonSmartphoneSubClass.prototype.setOffer = function(param) {  
  this.offer = param;
};
nonSmartphoneSubClass.prototype.getOffer = function() {  
  return (this.offer);
};

/*******************************************************************************************/


function savePhone( phoneType, phoneName, phoneModel, phoneProcessor, phoneRam, phoneMemory, touchScreen, capacitive ) {
	var pType = phoneType.value;
	var pObj;
	if (pType == 'smartphone'){
		pObj = new smartphoneSubClass('smartphone');
	}
	else { 
		pObj = new nonSmartphoneSubClass('non_smartphone'); 
	}	

	pObj.setPhoneName(phoneName.value);
	pObj.setPhoneModel(phoneModel.value);
	pObj.setPhoneProcessor(phoneProcessor.value);
	pObj.setPhoneRam(phoneRam.value);
	pObj.setPhoneMemory(phoneMemory.value);
	pObj.setTouchScreen(touchScreen.value);
	pObj.setCapacitive(capacitive.value);
	
	var pName = pObj.getPhoneName();
	switch(pName) {
		case "iphone":
			pObj.setOffer(iphone_offer);
			break;
		case "micromax":
			pObj.setOffer(micromax_offer);
			break;
		case "karbonn":
			pObj.setOffer(karbonn_offer);
			break;
		case "lyf":
			pObj.setOffer(lyf_offer);
			break;
		case "intex":
			pObj.setOffer(intex_offer);
			break;		
		default:
			pObj.setOffer(no_offer);
	}
	
	//console.log(pObj.getOffer(), pObj.getPhoneName(), pObj.getPhoneProcessor(), pObj.getPhoneRam(), pObj.getPhoneMemory()); //equivalent to writing console.log(pObj.phoneName);
	storeData(pObj);
}

function storeData(phone){
	//var unique_string = 'phone_' + phone.getPhoneName() + '_' + phone.type + '_' + phone.getPhoneModel();
	var unique_string = 'phone_' + phone.type + '_' + phone.getPhoneName() + '_' + phone.getPhoneModel();
	var data = {'phoneType': phone.type, 'phoneName': phone.getPhoneName(), 'phoneModel': phone.getPhoneModel(), 'phoneProcessor': phone.getPhoneProcessor(), 'phoneRam': phone.getPhoneRam(), 'phoneMemory': phone.getPhoneMemory(), 'touchScreen': phone.getTouchScreen(), 'capacitive': phone.getCapacitive(), 'offer': phone.getOffer() };
	
	localStorage.setItem(unique_string, JSON.stringify(data));
}

function fetchData(phone){
	//var unique_string = 'phone_' + phone.getPhoneName() + '_' + phone.type;
	var unique_string = 'phone_' + phone.type + '_' + phone.getPhoneName() + '_' + phone.getPhoneModel();
	return localStorage.getItem(unique_string);
}

function calc_rows(){
	return (localStorage.length)	
}
	
function calc_cols(){
	var first_key = localStorage.key(0);
	var first_value = localStorage.getItem(first_key); //to get the stringified version
	
	first_value = JSON.parse(first_value); // to convert JSON string into a JSON object.
	
	var count = 0;
	for(var key in first_value) {
		if(first_value.hasOwnProperty(key)){
			count++;
		}
	}
	return (count);
}


function listAllPhones(){
	//var e = document.getElementById("touchScreen");
	var num_rows = calc_rows();
	var num_cols = calc_cols();	
	console.log ('num_rows is:' + num_rows);
	console.log ('num_cols is:' + num_cols);
	
	var theader = '<div class="Title"> <p>Phones List: </p></div><div class="Heading"><div class="Cell"><p>Phone Type</p></div><div class="Cell"><p>Phone Name</p></div><div class="Cell"><p>Phone Model</p></div><div class="Cell"><p>Processor</p></div><div class="Cell"><p>Ram</p></div><div class="Cell"><p>Memory</p></div><div class="Cell"><p>TouchScreen</p></div><div class="Cell"><p>Capacitive</p></div><div class="Cell"><p>Offers</p></div></div> ';
	
    var tbody = '';
	
	for( var i=0; i<num_rows; i++){
		var lineItem = localStorage.getItem(localStorage.key(i));
		lineItem = JSON.parse(lineItem); // to convert JSON string into a JSON object.
		var arr = Object.keys(lineItem).map(function(k) { return lineItem[k] }); // get the array to iterate.

		var set_blue = 0; //iphones
		var set_green = 0; //android

		if (arr[0] == 'smartphone' && arr[1] == 'iphone'){ set_blue = 1; }
		if (arr[0] == 'smartphone' && arr[1] != 'iphone'){ set_green = 1; }	
		
		tbody += '<div class="Row">';
		var j = 0;
		var color;
				for( j=0; j<num_cols;j++){			
					tbody += '<div class="Cell"><p>';
					if (set_blue) { tbody += '<font color="blue">' + arr[j] + '</font></p></div>';}
					else if (set_green) { tbody += '<font color="green">' + arr[j] + '</font></p></div>';} 					
					else { 
						tbody += arr[j] + '</p></div>' ; 
					}	
				}
        tbody += '</div>\n';
    }	
    var tfooter = '';
	document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;	
}
