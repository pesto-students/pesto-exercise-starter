import { deepEqual } from './deepEqual';

describe('Template Test', () => {
	test('Template Test', () => {
		expect(true).toBe('Write your own test cases');
	});
});

/*

// const obj1 = {name: 'sonny', age: '32'};
// const obj2 = {name: 'sonny', age: '32'};

const obj1 = {};
Object.defineProperty(obj1, 'name', {value:'sonny'});
Object.defineProperty(obj1, 'age', {value:'32'});
// Object.getOwnPropertyDescriptors(obj1);

// const obj2 = {name: 'sonny', age: '32'};
const obj2 = {};
Object.defineProperty(obj2, 'name', {value:'sonny'});
Object.defineProperty(obj2, 'age', {value:'32'});
// Object.getOwnPropertyDescriptors(obj1);


deepEqual(obj1, obj2)

*/
