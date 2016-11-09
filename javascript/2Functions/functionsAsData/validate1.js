function createDataForScientist() {
	return {
		name:"Chris",
		age: Math.floor(Math.random() * (100-1) + 1),
	};
};

function validateForAge(data) {
	person = data();
	console.log(person);
	if(person.age < 1 || person.age > 99) {
		return true;
	} else {
		return false;
	}
}

function errorForAge() {
	console.log("error while processing");
}

function parseRequest(data, validate, errorHandler) {
	var error = validate(data);
	if(!error) {
		console.log("no error");
	} else {
		errorHandler();
	}
}
parseRequest(createDataForScientist,validateForAge,errorForAge);