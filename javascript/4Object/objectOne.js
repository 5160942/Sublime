Player.prototype.usesBat = function() {
	return true;
}

var swingJay = new Player("chris");
if(swingJay.usesBat) {
	console.log("exist and uses Bat");
}