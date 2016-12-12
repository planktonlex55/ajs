//new Promise(function(resolve, reject){ //Note: promise takes a callback with resolve n reject params.
// ...	
//});

//demonetization. gotoBank->withdrawal->returnHome.

let gotoBank = function(){
	return new Promise(function(resolve, reject){
	//return new Promise(function(){ //if we dont include resolve n reject in the param-section, then we will get undefined error.	
		console.log ('M at the bank');
		resolve(); //assuming this promise resolved correctly. 
					// this line is very imp. else the .then chaining will not execute the next callback function.
	});
};

let withdrawal = function(){
	return new Promise (function (resolve,reject ) {
		console.log ('===>withdrew money');
		resolve();  //assuming this promise resolved correctly
	});
};

let returnHome = function(){
	return new Promise (function(resolve, reject){
		console.log ('===> returned home');
		resolve();  //assuming this promise resolved correctly
	});
};

//gotoBank();
//withdrawal();
//returnHome();
// all actions define above. Now lets chain them using .then()
//execute gotobank with () 


gotoBank().then(function(){
	//console.log('xx');
	return withdrawal(); //execute the next method.
}).then(function(){
	return returnHome(); //execute the next method.
}).then(function(){
	console.log ('--> all is finished');
});




