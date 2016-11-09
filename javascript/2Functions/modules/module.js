function add(a,b) {
	var z = a+b;
	return {
		z,
		a
	};
}

var sum = add(2,1);

for(var i = 0 ; i < sum.arguments; i++) {
	console.log(arguments[i]);
}