// Write your own test cases.

import { forEach, filter, map, reduce } from "./arrayUtils";

describe("Use Array Utils functions", () => {
  test("should use the array util functions to get correct values", () => {
    let testArray = ['a', 'b', 'c']
    let string = ""
    forEach(testArray, (ele) => {string += ele})
    expect(string).toBe('abc');
    expect(
      filter(["a", "b", "c"], (element, index) => {
        if (index === 1) {
          return element;
        }
      })
    ).toStrictEqual(['b']);
    expect(map(["a", "b", "c"], element => element)).toStrictEqual(["a", "b", "c"]);
    expect(reduce(["a", "b", "c"], element => {return element})).toStrictEqual('a');
  });
});