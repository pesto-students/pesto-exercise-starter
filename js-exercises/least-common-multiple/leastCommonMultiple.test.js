import { leastCommonMultiple } from './leastCommonMultiple';

describe('leastCommonMultiple', () => {
  it('should return number', () => {
    const answer = leastCommonMultiple(4, 16);
    expect(typeof answer).toBe('number');
  });
  it('should return correct answer', () => {
    const answer = leastCommonMultiple(4, 16);
    expect(answer).toEqual(16);
  });
  it('should return correct answer', () => {
    const answer = leastCommonMultiple(6, 21);
    expect(answer).toEqual(42);
  });
});
