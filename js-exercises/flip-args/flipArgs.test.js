// write your own test cases
import {
  flipArgs
} from './flipArgs';

describe('flip arguments test', () => {
  const func = (...args) => args;
  test('should return the function', () => {
    const flippedFunc = flipArgs(func);
    expect(typeof flippedFunc).toBe('function');
  });

  test('should return same number of arguments', () => {
    const flippedFunc = flipArgs(func)(1, 2, 3);
    expect(flippedFunc.length).toBe(3);
  });

  test('should return reversed arguments', () => {
    const flippedFunc = flipArgs(func)(1, 2, 3);
    const flippedArgs = parseInt(flippedFunc.join(''));
    expect(flippedArgs).toBe(321);
  });
});
