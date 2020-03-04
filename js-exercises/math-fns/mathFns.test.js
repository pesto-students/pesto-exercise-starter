import { sqrts, power, rounds } from './mathFns';

describe('Use Math functions', () => {
  test('should use the math functions to get correct values', () => {
    expect(sqrts(49)).toBe(7);
    expect(power(2, 4)).toBe(16);
    expect(rounds(7.4)).toBe(7);
  });
});
