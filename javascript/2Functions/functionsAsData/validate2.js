function createDataForScientist() {
	return {
		name : "Chris",
		age : Math.floor(Math.random() * (100-1) + 1),
		};
};

function validateForAge(data) {
	person = data();
	console.log(person);
	if(person.age < 1 || person.age > 99) {
		return true;
	} else {
		false;
	}
}
;
function errorHandler() {
	console.log("error while processing");
};

function parseRequest(data, validate, errorHandle) {
	var error = validate(data);
	if(!error) {
		console.log("no error");
	} else {
		errorHandle();
	}
};

parseRequest(createDataForScientist,validateForAge,errorHandler);