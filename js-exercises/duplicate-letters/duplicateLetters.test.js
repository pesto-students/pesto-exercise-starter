import { duplicateLetters } from "./duplicateLetters";

describe("2 Largest duplicate count", () => {
  test("should get the correct number of duplicates", () => {
    expect(duplicateLetters("qwertyuiopasdfghjkl")).toBe(false);
    expect(duplicateLetters("asdfghjklqwerftyuiop")).toBe(2);
    expect(duplicateLetters("asyfghjklqyerftyuiop")).toBe(3);
    expect(duplicateLetters("psyfpghjklqerftyupiop")).toBe(4);
    expect(duplicateLetters("psyfpghjklperftyupiop")).toBe(5);
    expect(duplicateLetters("psyfpghjklpprftyupiop")).toBe(6);
    expect(duplicateLetters("psyfpghjklppprftyupiop")).toBe(7);
  });
});
