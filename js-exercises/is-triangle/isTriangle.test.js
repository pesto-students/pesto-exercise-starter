import { isTriangle } from "./isTriangle";

describe("isTriangle", () => {
  it("should return true if triangle can be formed given three lines", () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
    expect(isTriangle(1, 2, 2)).toBe(true);
  });

  it("should return false if triangle can not be formed given three lines", () => {
    expect(isTriangle(1, 4, 2)).toBe(false);
    expect(isTriangle(1, 5, 2)).toBe(false);
    expect(isTriangle(1, 3, 2)).toBe(false);
  });
});
