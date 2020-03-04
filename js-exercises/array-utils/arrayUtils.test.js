// Write your own test cases.
import { forEach, map, reduce, filter } from "./arrayUtils";
describe("Use Array Utils", () => {
  it("should use array utility functions to get correct values", () => {
    expect(map([1, 2, 3], element => element)).toStrictEqual([1, 2, 3]);
    expect(
      reduce(
        [1, 2, 3],
        (currentValue, previousValue) => currentValue + previousValue
      )
    ).toBe(6);
  });
});