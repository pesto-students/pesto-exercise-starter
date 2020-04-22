  function generateFabonacci(number) {
    let previous = 0;
    let current = 1;
    let next;
    let i = 1;
    while (i <= number) {
      next = previous + current;
      previous = current;
      current = next;
      i++;
    }
    return next;
  }

  function isOdd(number) {
    return !(number % 2 === 0)
  }
  //try to do it in single loop.
  function sumFibs(number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
      const fabonacciNumber = generateFabonacci(i);
      if (fabonacciNumber > number) return sum;
      if (fabonacciNumber <= number) {
        if (isOdd(fabonacciNumber)) {
          sum = sum + fabonacciNumber
        }
      }
    }

    return sum;
  }

  export {
    sumFibs,
  };