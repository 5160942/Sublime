function Person(name) {
	this.name = name;
	var age = 23;

	this.getAge = function() {
		return age;
	}
};

Person.prototype.cry = function() {
	console.log("Crying");
}
