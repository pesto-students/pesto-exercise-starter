function minima(k, arr) {
	return arr
		.sort((prev, next) => {
			if (prev < next) return -1;
			else if (prev > next) return 1;
		})
		.filter((el, index) => index < k);
}
export { minima };
