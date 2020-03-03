const isTriangle = require('./isTriangle');

test('isTriangle', () => {
  expect(isTriangle(4,7,10)).toBe(true);
  expect(isTriangle(2,11,13)).toBe(false);
});
