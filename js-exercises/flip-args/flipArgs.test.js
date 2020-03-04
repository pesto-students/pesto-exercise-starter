import {
  flipArgs
} from './flipArgs.js';

describe('flipArgs', () => {
  it('should return a reversed array', () => {
    let returnArray = function (...args) {
      return args;
    }
    let instanceofFlipArgs = flipArgs(returnArray);

    expect(instanceofFlipArgs(1, 2, 3)).toEqual([3, 2, 1]);
  });
});