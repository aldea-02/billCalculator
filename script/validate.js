function validateForm(name,price) {
	if (
		(name === "" || name === null) &&
		(price === "" || price === null)
	) {
		return inputValidation("Please fill out all the fields!");
	}
	if (name === "" || name === null) {
		return inputValidation("Please fill out the item's name!");
	}
	if (price === "" || price === null) {
		return inputValidation("Please fill out the item's price!");
	}
    if (!/^[a-zA-Z ]*$/g.test(name)) {
        return inputValidation("Please input a valid item name!");
	}
	error.innerHTML = "";
	return 0;
}

function inputValidation(message){
    error.innerHTML = message;
    return 1;
}