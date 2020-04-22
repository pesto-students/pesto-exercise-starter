import { forEach, filter, map, reduce } from './arrayUtils';

describe('array methods', () => {
  const inputArr = [1, 2, 3, 4];

  test('array map', () => {
    const resultArr = map(inputArr, element => 2 * element);
    expect(resultArr).toEqual([2, 4, 6, 8]);
  });

  test('array filter', () => {
    const filteredArray = filter(inputArr, element => element > 2);
    expect(filteredArray).toEqual([3, 4]);
  });

  test('array reduce', () => {
    const reducedValue = reduce(
      inputArr,
      (initialValue, element) => initialValue + element,
      0
    );
    expect(reducedValue).toBe(10);
  });

  test('array forEach', () => {
    const foo = jest.fn();
    forEach(inputArr, a => foo(a));
    expect(foo).toHaveBeenCalledWith(4);
  });
});
