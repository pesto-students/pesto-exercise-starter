// Write your own test cases.

import {
  forEach, filter, map, reduce,
} from './arrayUtils';

describe('array methods', () => {
  test('array forEach', () => {
    const testArray = [1, 2, 3, 4];
    const log = jest.fn();
    global.console = { log };
    forEach(testArray, (element) => console.log(element));
    expect(log).toHaveBeenCalledWith(4);
  });

  test('array map', () => {
    const testArray = [1, 2, 3, 4];
    const resultArray = map(testArray, (element) => 2 * element);
    expect(resultArray).toEqual([2, 4, 6, 8]);
  });

  test('array filter', () => {
    const testArray = [1, 2, 3, 4];
    const filteredArray = filter(testArray, (element) => element % 2 === 0);
    expect(filteredArray).toEqual([2, 4]);
  });

  test('array reduce', () => {
    const testArray = [1, 2, 3, 4];
    const reducedValue = reduce(testArray, (initialValue, element) => initialValue + element, 0);
    expect(reducedValue).toBe(10);
  });
});
