//JavaScript for collecting number inputs and mathmatical operation

function inputNumArray(){
	var numOne = parseInt(document.getElementById("numOne").value);
	var numTwo = parseInt(document.getElementById("numTwo").value);
	return [numOne, numTwo]
}

function add([inputArray]) {
	document.getElementById("answer").innerHTML = inputArray[0] + inputArray[1];
}

function subtract([inputArray]){
	document.getElementById("answer").innerHTML = inputArray[0] - inputArray[1];
}

function multiply([inputArray]) {
	document.getElementById("answer").innerHTML = inputArray[0] * inputArray[1];
}

function divide([inputArray]) {
	document.getElementById("answer").innerHTML = inputArray[0] / inputArray[1];
}
