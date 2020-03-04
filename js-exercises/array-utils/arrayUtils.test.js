// Write your own test cases.
import {
  forEach, map,

} from './arrayUtils';

describe('array forEach test', () => {
  test('should expect only valid array', () => {
    try {
      const func = forEach({}, () => { });
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  test('should expect only valid callback', () => {
    try {
      const func = forEach([1, 3, 4], {});
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});

describe('array map test', () => {
  test('should expect only valid array', () => {
    try {
      const func = forEach({}, () => { });
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  test('should expect only valid callback', () => {
    try {
      const func = forEach([1, 3, 4], {});
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  test('should return an array', () => {
    const func = (element) => element * 2;
    const testArr = [1, 2, 3];
    const returnedArr = map(testArr, func);
    expect(Array.isArray(returnedArr)).toBeTruthy();
  });

  test('should return same length array', () => {
    const func = (element) => element * 2;
    const testArr = [1, 2, 3];
    const returnedArr = map(testArr, func);
    expect(returnedArr.length).toBe(3);
  });

  test('should return correct result', () => {
    const func = (element) => element * 2;
    const testArr = [1, 2, 3];
    const returnedArr = map(testArr, func);
    expect(Number(returnedArr.join(''))).toBe(246);
  });
});