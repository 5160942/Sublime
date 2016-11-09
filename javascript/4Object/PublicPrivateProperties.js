function Player(name,sport,age,country) {
	Player.noOfPlayers = 0;
	this.constructor.noOfPlayer++;

	//private properties and functions
	//can only be edited, viewed, invoked by previledged members
	var retirementAge = 40;
	var available = true;
	var playerAge = age ? age : 18;
	function isAvailable() {
		return available && (playerAge<retirementAge);
	}
	var playerName = name ? name : "unknown";
	var playerSport = sport ? sport : "unknown";


	//public properties, can be accessed from anywhere
	this.batPreference = "lefty";
	this.hasCelebGirlFriend = false;
	this.endorses = "super band";


	//previledged method (public)
	this.book = function() {
		if(!isAvailable()) {
			this.available = false;
		} else {
			console.log("player is unavailable");
		}
	}
	this.getName = function() {
		return playerName;blu
	}

	this.getAge = function () {
		return playerAge;
	}

	this.getSport = function() {
		return playerSport;
	}

	this.switchHands = function() {
		this.batPreference = "BOTH";
	}
};

/*
	//public methods
	//can only access public and prototype properties
	Player.prototype.switchHands = function () {
		this.batPreference = "righty";
	}
	Player.prototype.dateCeleb = function () {
		this.hasCeleGirlFriend = true;
	}
	Player.prototype.fixEyes = function () {
		this.wearGlasses = true;
	}
*/