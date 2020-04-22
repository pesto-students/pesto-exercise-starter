import { leastCommonMultiple } from './leastCommonMultiple';

describe('leastCommonMultiple', () => {
  test('should return updated array', () => {
    expect(leastCommonMultiple(6, 21)).toEqual(42);
    expect(leastCommonMultiple(3, 6)).toEqual(6);
  });
});
