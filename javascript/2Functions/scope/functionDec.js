console.log("function expression");

var functionOne = function() {
	console.log("functionOne function expression");
}
functionOne(); // must use after the actual function declaration

functionTwo();

function functionTwo(a, b, c) {
	console.log("functionTwo function declaration");
	console.log(a + b + c);
	console.log("number of argruments" + " " + arguments.length);
	console.log(arguments);
}

console.log("argruments paramter");

var sum = function() {
	var i, total = 0;
	for(i = 0 ; i <arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}