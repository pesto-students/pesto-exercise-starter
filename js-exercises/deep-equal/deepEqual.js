function deepEqual(...args) {
	const obj1 = args[0];
	const obj2 = args[1];
	const matchDescriptors = args[2] ? args[2].matchDescriptors : false;

	if (!matchDescriptors) {
		return objectCompare(obj1, obj2);
	} else {
		return deepCompare(obj1, obj2);
	}
}

function objectCompare(obj1, obj2) {
	if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

	for (let item in obj1) {
		if (obj1[item] !== obj2[item]) return false;
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
			return false;
		} else if (typeof item1 !== 'object' && typeof item2 !== 'object') {
			if (!primitiveCompare(item1, item2)) return false;
		} else if (typeof item1 === 'object' && typeof item2 === 'object') {
			deepCompare(item1, item2);
			const descriptors1 = Object.getOwnPropertyDescriptor(obj1, item);
			const descriptors2 = Object.getOwnPropertyDescriptor(obj2, item);
			if (!objectCompare(descriptors1, descriptors2)) return false;
		} else if (typeof item1 !== typeof item2) {
			return false;
		}
	}
	return true;
}

export { deepEqual };
