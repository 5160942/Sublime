var validateDataForAge = function(data) {
	person = data();
	console.log(person);
	if(person.age > 1 || person.aga < 99) {
		return true;
	} else {
		return false;
	}
};

function errorHandlerForAge(error) {
	console.log("error while processing");
}

function parseRequest(data,validate,errorHandler)
{
	var error = validate(data);
	if(error) {
		console.log("no error");
	} else {
		errorHandler();
	}
}

var createDataForScientist = function() {
	return {
		name: "albert",
		age : Math.floor(Math.random() * (100-1) +1),
	};
};