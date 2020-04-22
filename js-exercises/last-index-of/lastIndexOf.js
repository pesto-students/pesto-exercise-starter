export function lastIndexOf(...args) {
  let elementToFind = args[0];
  let arrayPassed = args[1];
  let lastIndexOfElement = arrayPassed.lastIndexOf(elementToFind);
  return lastIndexOfElement ? lastIndexOfElement : -1;
}

export { lastIndexOf };
