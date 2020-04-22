import { flipArgs } from './flipArgs'

describe("Use flipArgs function", () => {
  test("should use the flipArgs functions to get correct values", () => {
    const flippped =       flipArgs(
      (...args) => [...args]
    )
    expect(
      flippped(1,2,3)
    ).toStrictEqual([3,2,1])
  });
});