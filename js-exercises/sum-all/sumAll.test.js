import { sumAll } from './sumAll';

describe('sumAll', () => {
  test('should return a number', () => {
    expect(typeof sumAll([1, 4])).toEqual('number');
  });
  test('should return correct number', () => {
    expect(sumAll([1, 4])).toBe(10);
    expect(sumAll([4, 1])).toBe(10);
    expect(sumAll([5, 10])).toBe(45);
    expect(sumAll([10, 5])).toBe(45);
    expect(sumAll([0, 2])).toBe(3);
    expect(sumAll([2, 2])).toBe(2);
    expect(sumAll([2, 0])).toBe(3);
  });
});
