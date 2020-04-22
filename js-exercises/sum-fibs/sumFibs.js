function sumFibs(num) {
    let fibonacciArray = [1, 1];
    let result = 2, i = 1, x;
    do {
      x = fibonacciArray[i-1] + fibonacciArray[i];
      fibonacciArray.push(x);
      if(x%2!=0 && x<num) result += x;
      i++;
    } while (x < num)
    return result;
}

export {
  sumFibs,
};