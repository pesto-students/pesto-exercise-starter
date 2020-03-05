// write your own test cases

import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  test('flips the given arguments', () => {
    const arr = x => x.map((element) => element);
    const flipped = flipArgs(arr);
    expect(flipped('a', 'b', 'c', 'd')).toEqual(['d', 'c', 'b', 'a']);
  });

  test('flips the given arguments', () => {
    const arr = x => x.map((element) => element);
    const flipped = flipArgs(arr);
    expect(flipped(1, 2, 3, 4)).toEqual([4, 3, 2, 1]);
  });
});
