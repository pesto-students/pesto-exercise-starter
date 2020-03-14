import { updateObject } from './updateObject';

describe('updateObject', () => {
  test('should return updated array', () => {
    expect(updateObject(1, '_', ['a', 'b', 'c'])).toEqual(['a', '_', 'c']);
    expect(updateObject(-1, '_', ['a', 'b', 'c'])).toEqual(['a', 'b', '_']);
    expect(updateObject(0, 'a', ['b', 'c'])).toEqual(['a', 'c']);
  });
});
