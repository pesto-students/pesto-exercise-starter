// Write your own test cases.

//test case to check if first argument is an array or Not
// check if callback is a valid function

import {
  forEach,
  map,
  filter,
  reduce
} from './arrayUtils';

describe('call passed callback function on each element of passed array', () => {
  test('should return undefined', () => {
    expect(forEach([1, 2, 3], (element) => console.log(element))).toBe(undefined);
  });
  // test('should throw Error', () => {
  //   let object = {}
  //   expect(forEach([1, 2, 3], object)).toThrowError(/valid/);
  // });
});

describe('call passed callback function on each element of passed array and return the new array', () => {
  test('should return a new array', () => {
    let callback = function (element) {
      return 2 * element;
    }
    expect(map([1, 2, 3], callback)).toEqual([2, 4, 6]);
  });
  // test('should throw Error', () => {
  //   let object = {}
  //   expect(forEach([1, 2, 3], object)).toThrowError(/valid/);
  // });
});


describe('call passed callback function on each element of passed array and return the new array for callback being true', () => {
  test('should return a new array', () => {
    let callback = element => element > 4
    expect(filter([3, 8, 4, 9, 10], callback)).toEqual([8, 9, 10]);
  });
  // test('should throw Error', () => {
  //   let object = {}
  //   expect(forEach([1, 2, 3], object)).toThrowError(/valid/);
  // });
});

describe('call reduce function without initial value', () => {
  test('should return an integer.', () => {
    let array = [{
      x: 2
    }, {
      x: 22
    }];
    let maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
    expect(reduce(array, maxCallback)).toBe(22);
  });
  test('should return an integer.', () => {
    let array = [0, 1, 2, 3, 4];
    let callback = (accumulator, currentValue, currentIndex, array) => {
      return accumulator + currentValue
    }
    expect(reduce(array, callback)).toBe(10);
  });
});

describe('call reduce function with initial value', () => {
  test('should return an integer.', () => {
    let array = [0, 1, 2, 3, 4];
    let callback = (accumulator, currentValue, currentIndex, array) => {
      return accumulator + currentValue
    }
    expect(reduce(array, callback, 10)).toBe(20);
  });
});