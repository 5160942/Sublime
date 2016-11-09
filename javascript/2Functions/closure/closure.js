var outer = "outer";
var copy;
function outerFn() {
	var inner = "Inner";
	function innerFn(param) {
		var innerVar = "asdfasdfasdf";
		console.log(outer);
		console.log(inner);
		console.log(param);
		console.log(magic);
		return innerVar;
	}
	copy = innerFn;
}
var magic = "MAGIC";

outerFn();
copy("from param");

function logMessage(param) {
	console.log(param);
	}

function delay(message) {
	setTimeout ( logMessage(message), 10000);
}
delay("hello WorldSDFSDF");

// function delay(message) {
// setTimeout( function timerFn(){
// console.log( message );
// }, 1000 );
// }
// delay( "Hello World" );