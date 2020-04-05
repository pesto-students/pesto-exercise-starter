import { isNumberArrayExactCopy } from "./array-utils";

test("Test Array Utils", () => {
  expect(isNumberArrayExactCopy([], [1])).toBe(false);
  expect(isNumberArrayExactCopy({}, [1])).toBe(false);
  expect(isNumberArrayExactCopy([2], [1])).toBe(false);
  expect(isNumberArrayExactCopy([2, 1], [1])).toBe(false);
  expect(isNumberArrayExactCopy([2, 1], [1, 2])).toBe(false);
  expect(isNumberArrayExactCopy([2, 1], [2, 1])).toBe(true);
});
