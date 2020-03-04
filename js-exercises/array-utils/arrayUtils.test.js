import { forEach, filter, map, reduce } from "./arrayUtils";

describe("Use Array Utils functions", () => {
  test("should use the array util functions to get correct values", () => {
    // expect(forEach(["a", "b", "c"], element => {})).toBe();
    expect(
      filter(["a", "b", "c"], (element, index) => {
        if (index === 1) {
          return element;
        }
      })
    ).toBe([]);
    expect(map(["a", "b", "c"], element => element)).toBe(["a", "b", "c"]);
    expect(reduce(["a", "b", "c"], element => {})).toBe(0);
  });
});
