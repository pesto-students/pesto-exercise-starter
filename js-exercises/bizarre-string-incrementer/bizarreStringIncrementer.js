function bizarreStringIncrementer(str) {
	let lastElement = str[str.length - 1];
	if (!isNumber(lastElement)) return str + 1;

	str = str.split('');
	let output = '';
	let numString = '';
	let zeroString = '';

	while (isNumber(lastElement)) {
		numString = str.pop() + numString;
		lastElement = str[str.length - 1];
	}

	str = str.join('');
	zeroString = extractLeadingZeroes(numString);
	numString = removeLeadingZeroes(numString, zeroString);

	let initialNumberStringLen = numString.length;

	numString = parseInt(numString);
	numString += 1;

	if (!zeroString.length) {
		output = str + numString;
	} else if (initialNumberStringLen !== numString.toString().length) {
		output = str + zeroString.slice(1) + numString;
	} else {
		output = str + zeroString + numString;
	}
	return output;
}

function removeLeadingZeroes(numString, zeroString) {
	return numString.slice(zeroString.length);
}

function extractLeadingZeroes(numString) {
	numString = numString.split('');
	let zeroString = '';
	let i = 0;
	while (numString[0] == 0) {
		zeroString += numString.shift();
	}
	return zeroString;
}

function isNumber(element) {
	return isFinite(parseInt(element));
}

export { bizarreStringIncrementer };
