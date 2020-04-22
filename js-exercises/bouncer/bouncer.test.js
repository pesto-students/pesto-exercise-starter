import { bouncer } from './bouncer';

describe('bouncer', () => {
  it('should return array', () => {
    const result = bouncer([null, false, '', NaN, 4]);
    const isArr = Array.isArray(result);
    expect(isArr).toBe(true);
  });

  it('should return correct result', () => {
    const result = bouncer([null, false, '', NaN, 4]);
    expect(result).toEqual([4]);
  });
  it('should return correct result', () => {
    const result = bouncer([false, null, 0, NaN, undefined, '', 9]);
    expect(result).toEqual([9]);
  });
});
