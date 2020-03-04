// write your own test cases
import { flipArgs } from "./flipArgs";
describe("flip args", () => {
  test("Flipping Args", () => {
    const result = flipArgs(1, 2, 3, 4);
    expect(result).toBe([4, 3, 2, 1]);
  });
});
