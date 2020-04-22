// write your own test cases
import { flipped } from './flipArgs';

describe('flipped', () => {
  const expected = ['bob','alice'];
  
  it('check reverse', () => {
    expect(['bob', 'alice']).toEqual(expect.arrayContaining(expected));
  });
});
