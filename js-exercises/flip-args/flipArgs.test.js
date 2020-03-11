// write your own test cases
import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  it('flips the arguments', () => {
    var flipped = flipArgs(function(arr) {
      return arr[arr.length-1];
    });
    expect(flipped([5,4])).toBe(5);
  });
})