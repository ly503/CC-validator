function validateName() {
	var name = document.getElementsByClassName("name")[0].value;

	if (/[0-9]/.test(name) === true) {
		document.getElementsByClassName("error-message")[0].innerHTML += "<br>Name cannot contain any numbers. Please enter a valid name.";
		return false;
	}

	return true; 
}

function validateStreetAddress() {
	console.log("street");
	var isValid = true; 
	var streetAddress = document.getElementsByClassName("streetaddress")[0].value;

	if (/[0-9]/.test(streetAddress) !== true) {
		isValid = false;
		document.getElementsByClassName("error-message")[0].innerHTML += "<br>Street Address must contain both the number of the residence as well as the name of the street.";
	}

	if (/[a-zA-Z]/.test(streetAddress) !== true) {
		isValid = false;
		document.getElementsByClassName("error-message")[0].innerHTML += "<br>Street Address must contain both name of the residence as well as the street number.";
	}

	return isValid; 
}

function validateCity() {
	console.log("city")
	var city = document.getElementsByClassName("city")[0].value;

	if (/[0-9]/.test(city) === true) {
		document.getElementsByClassName("error-message")[0].innerHTML += "<br>City name cannot contain any numbers. Please enter a valid city name.";
		return false;
	}
	return true; 
}

function validateState() {
	console.log("state")
	var state = document.getElementsByClassName("state")[0].value;

	if (/[0-9]/.test(state) === true) {
		document.getElementsByClassName("error-message")[0].innerHTML += "<br>State name cannot contain any numbers. Please enter a valid state name.";
		return false;
	}
	return true; 
}

function validateCountry() {
	console.log("country")
	var country = document.getElementsByClassName("country")[0].value;

	if (/^[0-9]+$/.test(country) === true) {
		document.getElementsByClassName("error-message")[0].innerHTML += "<br>Country name cannot contain any numbers. Please enter a valid country name.";
		return false;
	}

	return true; 
}

function validateCreditCard() {
	console.log("credit");
//strip dashes
//5 if statements
//1 to check for 16 numbers
//1 to check for all numbers
//1 to check if there are 2 different digits
//1 to check if the final digit is even
//1 to check if sum of all digits is more than 16
//return valid or not statement

	var isValid = true;

	//1. Strip the dashes out of the string
	var ccNumber = document.getElementsByClassName("creditcardnumber")[0].value;
	ccNumber = ccNumber.replace(/-/g, "");

	//2. Check to see whether there are at least 16 digits
	if (ccNumber.length !== 16) {
		isValid = false;
		document.getElementsByClassName("error-message")[0].innerHTML += "<br>Incorrect length. Please enter a valid credit card number";
	}

	//3. Check to see whether all of the digits are numbers.
	if (/^[0-9]+$/.test(ccNumber) !== true) {
		isValid = false;
		document.getElementsByClassName("error-message")[0].innerHTML += "<br>Card number must contain only numbers. Please enter a valid credit card number";
	}

	//4. Check to see whether there are at least two different numbers included in the string. 
	//METHOD 1
	// var notSameNumber = false;

	// for (index = 0; index < ccNumber.length; index++) {
	// 	var currentNumber = ccNumber[index];

	// 	if (index !== 0) {
	// 		if (ccNumber[index - 1] !== currentNumber) {
	// 			notSameNumber = true;
	// 			break;
	// 		}
	// 	}
	// }

	// if (notSameNumber === false) {
	// 	alert("Please enter a valid credit card number");
	// 	return false;
	// }

	//METHOD 2
	if (ccNumber.split("").every(char => ccNumber[0] === char)) {
		isValid = false;
		document.getElementsByClassName("error-message")[0].innerHTML += "<br>Card number must contain at least two different numbers. Please enter a valid credit card number";
	}


	//5. Check to see whether the last digit is an even number
	var lastIndex = ccNumber.length - 1;

	if (ccNumber[lastIndex] % 2 === 1) {
		isValid = false;
		document.getElementsByClassName("error-message")[0].innerHTML += "<br>Card number must end in an even number. Please enter a valid credit card number";
	}


	//6. Get the total number of the digits. Total must be greater than 16.
	//METHOD 1
	// var total = 0;

	// for (index = 0; index < ccNumber.length; index++) {
	// 	var number = parseInt(ccNumber[index]);
	// 	total = total + number;
	// }

	//METHOD 2
	if (ccNumber.length === 0) {
		var total = 0;
	} else {
		var total = ccNumber.split("").reduce((total, indexValue) => total + indexValue);
	}

	if (total <= 16) {
		isValid = false;
		document.getElementsByClassName("error-message")[0].innerHTML += "<br>Card number total value be greater than 16. Please enter a valid credit card number";
	}

	return isValid;
}

function validateCVV() {
	var cvv = document.getElementsByClassName("cvv")[0].value;

	console.log(cvv);
	console.log(/^[0-9]{3,4}$/.test(cvv));

	if (!/^[0-9]{3,4}$/.test(cvv)) {
		document.getElementsByClassName("error-message")[0].innerHTML += "<br>CVV number must contain either 3 or 4 digits. Please enter a valid cvv number";
		return false;
	}

	return true; 
}

function validateExpDate() {
	var expDate = document.getElementsByClassName("expDate")[0].value;

	if (!/^[0-9]{6}$/.test(expDate)) {
		document.getElementsByClassName("error-message")[0].innerHTML += "<br>Date must be 6 digits - 2 for month and 4 for year";
		return false;
	}
	
	return true; 
}

function validateForm(event) {
	event.preventDefault();

	document.getElementsByClassName("error-message")[0].innerHTML = "";

	var validName = validateName();
	var validStreetAddress = validateStreetAddress();
	var validCity = validateCity();
	var validState = validateState();
	var validCountry = validateCountry();
	var validCreditCard = validateCreditCard();
	var validCVV = validateCVV();
	var validExpDate = validateExpDate();

	//If all validation has passed. Return the following statement. 
	if (validName && validStreetAddress && validCity && validState && validCountry && validCreditCard && validCVV && validExpDate) {
		alert("Thank you for your submission");
	}
}

// console.log(validateCreditCard("9999-9999-8888-0000")); //true
// console.log(validateCreditCard("4444-4444-4444-4444")); //false

document.getElementById("billing-info-form").addEventListener("submit", validateForm);

