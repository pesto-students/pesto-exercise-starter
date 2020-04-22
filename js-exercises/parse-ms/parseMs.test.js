import { parseMs } from './parseMs';

describe('parseMs', () => {
  it('should return an object', () => {
    const dateObj = parseMs(1584893802643);
    expect(typeof dateObj).toBe('object');
  });
  it('should return correct result', () => {
    const dateObj = parseMs(1584893802643);
    expect(dateObj).toEqual(
      {
        days: 22,
        hours: 21,
        minutes: 46,
        seconds: 42,
        milliseconds: 643,
        microseconds: 0,
        nanoseconds: 0,
      },
    );
  });
});
