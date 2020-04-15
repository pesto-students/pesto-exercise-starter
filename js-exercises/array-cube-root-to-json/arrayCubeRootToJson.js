const arrayCubeRootToJson = (arr) => {
	if (!Array.isArray(arr)) throw 'Invalid input. Expected an array of numbers.';
	if (!allNumbers(arr)) throw 'Invalid input/s. Expected an array of numbers only.';

	const cubesRootsMap = {};

	for (let number of arr) {
		cubesRootsMap[number.toString()] = Math.cbrt(number);
	}
	return cubesRootsMap;
};

function allNumbers(arr) {
	return arr.every((number) => !isNaN(number));
}

export { arrayCubeRootToJson };
