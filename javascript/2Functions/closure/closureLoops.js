for (var i = 0; i <= 5; i++) {
	(function() {
		var j = i;
		setTimeout(function() {
			console.log(j);
		});
	})();
}