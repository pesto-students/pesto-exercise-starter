function pathSatisfies(...args) {
	const condition = args[0];
	const path = args[1];
	const subject = args[2];
	let searchResult = subject[path[0]];

	for (let i = 1; i < path.length; i++) {
		searchResult = searchResult[path[i]];
	}

	return condition(searchResult);
}

export { pathSatisfies };

// const isPositive = n => n > 0;

// it('returns true if the specified object path satisfies the given predicate', () => {
//   expect(pathSatisfies(isPositive, ['x', 1, 'y'], { x: [{ y: -1 }, { y: 1 }] })).toBe(true);
// });
