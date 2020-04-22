import { parseMs } from './parseMs';

describe('parseMs', () => {
  describe('parseMs', () => {
    test('should return an object', () => {
      const expectedObject1 = {
        days: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        microseconds: 0,
        nanoseconds: 0,
      };
      expect(parseMs(86400000)).toEqual(expectedObject1);
      const expectedObject2 = {
        days: 1,
        hours: 1,
        minutes: 1,
        seconds: 1,
        milliseconds: 1,
        microseconds: 102,
        nanoseconds: 100,
      };
      expect(parseMs(90061001.1021)).toEqual(expectedObject2);
    });
  });
});
