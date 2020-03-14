import { bouncer } from './bouncer';

describe('bouncer', () => {
  test('should return array without any falsy values', () => {
    expect(bouncer([false, null, 0, NaN, undefined, '', 9])).toEqual([9]);
    expect(bouncer([false, null, 0, NaN, undefined, '', 9])).toEqual([9]);
  });
});
