import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  test('should return a string', () => {
    expect(typeof longestWordInString('some hello')).toBe('string');
  });
  test('should return the correct solution', () => {
    expect(longestWordInString('The quick brown fox jumped over the lazy dog')).toBe('jumped');
    expect(longestWordInString('May the force be with you')).toBe('force');
    expect(longestWordInString('What if we try a super-long word such as otorhinolaryngology')).toBe('otorhinolaryngology');
  });
});
