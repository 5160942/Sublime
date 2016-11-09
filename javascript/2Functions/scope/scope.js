//global scope

var a = 1;
function scopeTest() {
	a = 2;
}
console.log(a);
scopeTest();
console.log(a);


//local scope
var scope_name = "global";
function showScopeName() {
	var scope_name = "local";
	console.log(scope_name);
}
console.log(scope_name);
showScopeName();

var g = 0;
function foo(a) {
	var b = 1;
	function bar() {
		g++;
	}
	var c = 2;
	return bar();
}
foo(6);
console.log(g);
console.log("self calling function")
var a = 1;
//Lets introduce a function -scope
//1. Add a named function foo() into the global scope
function foo() {
var a = 2;
console.log( a ); // 2
}
//2. Now call the named function foo()
foo();
console.log( a ); // 1

console.log("self calling function2")
var a = 1;
//Lets introduce a function -scope
//1. Add a named function foo() into the global scope
(function foo() {
var a = 2;
console.log( a ); // 2
})(); //<---this function executes immediately
console.log( a ); // 1

(function add(a) {
	var b = 1;
	console.log( a + b);
})(2);

console.log("code execution");
k = 1;
var k;
console.log(k);


koo();
function koo() {
	console.log(a);
	var a = 1;
}