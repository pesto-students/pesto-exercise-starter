// Calculate the cube of each element in an array
function forEach(item_list) {
	const cube_items_list = [];
	item_list.forEach(function(item) {
		cube_items_list.push(item * item * item);
	});
	return cube_items_list
}




// Calculate the square root of each element in an array
function map(item_list) {
	const sqrt_item_list = item_list.map(Math.sqrt);
	return sqrt_item_list
}




// Filter the age groups between 20 to t24
function filter(age_groups_list) {
	return age_groups_list.filter(filterAge)
}

function filterAge(age) {
	return age >= 20 && age <= 24
}



// Calculate the sum of each element in an array
function reduce(numbers_list) {
	return numbers_list.reduce(reduceToSum)
}

function reduceToSum(total, num) {
	return total + num
}

export {
  forEach,
  map,
  filter,
  reduce,
}