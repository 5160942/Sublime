
function testOne() {
	var a = 1;
	this.getPoint = function() {
		return a;
	}
	this.score = function() {
		a++;
	}
}

var t1 = new testOne();
console.log(t1.a)  //undefined. cant access to inner variable
t1.score();
console.log(t1.getPoint());