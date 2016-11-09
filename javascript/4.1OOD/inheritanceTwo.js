
function Child(name) {
	this.name = name;
};

Child.prototype = new Person();
var Chris = new Child("Chris");
Chris.cry();