import { addBigIntegers } from "./addBigIntegers";

describe("addBigIntegers", () => {
  it("Adds a series of large integers", () => {
    expect(
      addBigIntegers(`539
8
201`)
    ).toEqual("748");
  });
});
