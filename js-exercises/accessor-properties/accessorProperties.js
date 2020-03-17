function accessorProperties() {
	let _number;
	return {
		get number() {
			return _number.toString(2);
		},
		set number(value) {
			_number = value;
		}
	};
}

export { accessorProperties };
