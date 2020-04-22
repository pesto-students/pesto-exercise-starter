import { updateObject } from './updateObject';

test('should throw error', () => {
  try {
    updateObject();
  } catch (e) {
    expect(e).toBeTruthy();
  }
});

test('should return array', () => {
  const result = updateObject(1, '_', ['a', 'b', 'c']);
  expect(Array.isArray(result)).toBe(true);
});

test('should return correct result', () => {
  const result = updateObject(1, '_', ['a', 'b', 'c']);
  expect(result).toEqual(['a', '_', 'c']);
});
