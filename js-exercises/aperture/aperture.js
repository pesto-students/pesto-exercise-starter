function aperture(len, array) {
	const superSet = [];

	if (len > array.length) return superSet;

	for (let i = 0; i <= array.length - len; i++) {
		const subSet = array.slice(i, i + len);
		superSet.push(subSet);
	}
	return superSet;
}

export { aperture };
