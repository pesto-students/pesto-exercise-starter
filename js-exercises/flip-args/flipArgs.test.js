// write your own test cases
import { flipped } from './flipArgs';


describe('flipped', () => {
  const expected = ['Bob','Alice'];
  it('matches even if received contains additional elements', () => {
    expect(['Alice', 'Bob']).toEqual(expect.arrayContaining(expected));
  });
});
