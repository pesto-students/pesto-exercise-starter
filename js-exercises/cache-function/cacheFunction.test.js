import { cacheFunction } from "./cacheFunction";

describe("cacheFunction", () => {
  it("should return a function", () => {
    expect(typeof cacheFunction()).toBe("function");
  });
  it("The cached function should return the correct result", () => {
    const foo = x => x * x;
    const cachedFunction = cacheFunction(foo);
    expect(cachedFunction(5)).toBe(25);
  });
  it("should cache function results and not rerun the original callback if the same arguments are presented", () => {
    const foo = jest.fn();
    const myCachedFunction = cacheFunction(foo);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    expect(foo).toHaveBeenCalledTimes(2);
  });
});

it("The cached function should return the correct result with 2 arguments", () => {
  const foo = (x, y) => x * y;
  const cachedFunction = cacheFunction(foo);
  expect(cachedFunction(5, 4)).toBe(20);
});

it("The cached function should return the correct result with 3 arguments", () => {
  const foo = (x, x1, x2) => x * x1 * x2;
  const cachedFunction = cacheFunction(foo);
  expect(cachedFunction(5, 2, 5)).toBe(50);
});
