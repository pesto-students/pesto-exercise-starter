import { updateObject } from "./updateObject";

describe("updateObject", () => {
  it("check update object type", () => {
    expect(typeof updateObject(1, '_', ['a', 'b', 'c'])).toBe('object');
  });
  it('check update object', () => {
    expect(updateObject(1, '_', ['a', 'b', 'c'])).toStrictEqual(["a", "_", "c"]);

    expect(updateObject(-1, '_', ['a', 'b', 'c'])).toStrictEqual(["a", "b", "_"]);

    expect(updateObject(8, '_', ['a', 'b', 'c'])).toStrictEqual(["a", "b", "_"]);

    expect(updateObject(-5, '_', ['a', 'b', 'c'])).toStrictEqual(["a", "_", "c"]);

    expect(updateObject(-3, '_', ['a', 'b', 'c'])).toStrictEqual(["_", "b", "c"]);
  });
});
