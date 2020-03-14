const alphabeticShift = (input) => {
	let newString = '';
	for (let char of input) {
		let charCode = char.charCodeAt(0);
		newString += String.fromCharCode(charCode + shiftBy(charCode));
	}
	return newString;
};

function shiftBy(charCode) {
	if (charCode === 90 || charCode === 122) {
		return -25;
	} else {
		return 1;
	}
}

export { alphabeticShift };
