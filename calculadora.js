let displayValue = '';

function addToDisplay(digit) {
	displayValue += digit;
	document.getElementById('result').innerHTML = displayValue;
}

function clearDisplay() {
	displayValue = '';
	document.getElementById('result').innerHTML = displayValue;
}

function calculate() {
	try {
		displayValue = eval(displayValue);
		document.getElementById('result').innerHTML = displayValue;
	} catch (e) {
		document.getElementById('result').innerHTML = "Erro";
	}
} 