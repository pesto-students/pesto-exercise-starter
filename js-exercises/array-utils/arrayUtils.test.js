import { forEach, map, filter, reduce } from "./arrayUtils";

it("forEach customised - Should result expected index and element", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  forEach(array, (index, element) => {
    expect(element).toBe(array[index]);
  });
});

it("map customised - Should result expected elements after map", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const expected = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  const array_after_map = map(array, (index, element) => element + 5)
  expect(array_after_map).toEqual(expected)
});

it("filter customised - Should result expected elements after filter by condition", () => {
  const array = [1, 2, 3, 4, 5];
  const expected = [5]
  const array_after_filter = filter(array, (element) => element >= 5)
  expect(array_after_filter).toEqual(expected)
});

it("reduce customised - Should result expected elements after reduce elements inside by condition", () => {
  const array = [1, 2, 3, 4, 5];
  const expected = 15
  const value_after_reduce = reduce(array, (accumulator, computedValue) => accumulator + computedValue)
  expect(value_after_reduce).toEqual(expected)
});