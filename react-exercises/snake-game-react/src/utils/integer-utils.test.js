import { isEven, isPositive } from "./integer-utils";

describe("test isEven()", function () {
  test("should return false if non-integer value is passed", function () {
    expect(isEven()).toBe(false);
    expect(isEven({})).toBe(false);
    expect(isEven(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
    expect(isEven(2.5)).toBe(false);
  });

  test("should not work with strings:", function () {
    expect(isEven("0")).toBe(false);
    expect(isEven("1")).toBe(false);
    expect(isEven("2")).toBe(false);
    expect(isEven("3")).toBe(false);
  });

  test("should return true/false on integer values", function () {
    expect(isEven(0)).toBe(true);
    expect(isEven(1)).toBe(false);
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(-31)).toBe(false);
    expect(isEven(-32)).toBe(true);
    expect(isEven(Number.MAX_SAFE_INTEGER - 1)).toBe(true);
  });
});

describe("test isPositive()", () => {
  test("should return false if non-integer value is passed", function () {
    expect(isPositive()).toBe(false);
    expect(isPositive({})).toBe(false);
    expect(isPositive(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
    expect(isPositive(2.5)).toBe(false);
  });

  test("should not work with strings:", function () {
    expect(isPositive("0")).toBe(false);
    expect(isPositive("1")).toBe(false);
    expect(isPositive("2")).toBe(false);
    expect(isPositive("3")).toBe(false);
  });

  test("should return true/false on integer values", () => {
    expect(isPositive(-1)).toBe(false);
    expect(isPositive(1)).toBe(true);
    expect(isPositive(-0)).toBe(false);
    expect(isPositive(0)).toBe(true);
  });
});
