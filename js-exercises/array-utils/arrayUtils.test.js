// Write your own test cases.
import { forEach, map, reduce, filter } from "./arrayUtils";
describe("Use Array Utils", () => {
  it("should use array utility functions to get correct values", () => {
    expect(map([5, 6, 7], element => element)).toStrictEqual([5, 6, 7]);
    expect(
      reduce(
        [1, 2, 3],
        (currentValue, previousValue) => currentValue + previousValue
      )
    ).toBe(6);
  });
});