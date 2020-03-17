function deepEqual(...args) {
	const obj1 = args[0];
	const obj2 = args[1];
	const matchDescriptors = args[2] ? args[2].matchDescriptors : false;

	if (!matchDescriptors) {
		return objectCompare(obj1, obj2);
	} else {
	}

	return true;
}

function objectCompare(obj1, obj2) {
	for (let item in obj1) {
		if (!obj2[item] || obj1[item] !== obj2[item]) return false;
	}
	return true;
}

function primitiveCompare(item1, item2) {
	return item1 === item2;
}

function deepCompare(obj1, obj2) {
	for (let item in obj1) {
		const item1 = obj1[item];
		const item2 = obj2[item];

		if (!item in obj2 || Object.keys(obj1).length !== Object.keys(obj2).length) {
			//if key/s is absent
			return false;
		} else if (typeof item1 !== 'object' && typeof item2 !== 'object') {
			//if values are primitive
			if (!primitiveCompare(item1, item2)) return false;
		} else if (typeof item1 === 'object' && typeof item2 === 'object') {
			//same keys, both objects. check recursively
			deepCompare(item1, item2);
			const descriptors1 = Object.getOwnPropertyDescriptors(obj1, item);
			const descriptors2 = Object.getOwnPropertyDescriptors(obj2, item);
			if (!objectCompare(descriptors1, descriptors2)) return false;
		} else if (typeof item1 !== typeof item2) {
			return false;
		}
	}
	return true;
}

export { deepEqual };
