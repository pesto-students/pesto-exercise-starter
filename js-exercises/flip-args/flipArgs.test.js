import flipArgs from './flipArgs';

describe('flip the args', () => {
  it('should return a function', () => {
    expect(typeof flipArgs()).toBe('function');
  });

  test('should flip the args from an array.', () => {
    const foo = args => args;
    const flipArr = flipArgs(foo);
    expect(flipArr([0, 10, 20, 30, 0, 10, 20, 30, 0, 10])).toStrictEqual([
      10,
      0,
      30,
      20,
      10,
      0,
      30,
      20,
      10,
      0
    ]);
    expect(flipArr(['a', 'b', 'c'])).toStrictEqual(['c', 'b', 'a']);
    expect(flipArr([false, null, 0])).toStrictEqual([0, null, false]);
  });
});
