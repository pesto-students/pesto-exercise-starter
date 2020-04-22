function nextFibonacciNumber (previousFibonacciNumber, previousToPreviousFibonnaciNumber) {
    if (!previousFibonacciNumber || !previousToPreviousFibonnaciNumber) {
        return 1
    }

    return previousFibonacciNumber + previousToPreviousFibonnaciNumber;
}


function fibonacciNumbersUntil (n) {
    let fibonacciNumbers = []
    let firstFibonacciNumber = 1

    for (let fibonacciNumber = firstFibonacciNumber; fibonacciNumber <= n;) {
        let lastFibonacciNumber = fibonacciNumbers[fibonacciNumbers.length - 1 ]
        fibonacciNumbers.push(fibonacciNumber)
        fibonacciNumber = nextFibonacciNumber(fibonacciNumber, lastFibonacciNumber)
    }

    return fibonacciNumbers
}


function sumFibs(n) {
    let allFibonacciNumbersUntilN = fibonacciNumbersUntil(n)
    let sumOfOddFibonacciNumbersUntilN = allFibonacciNumbersUntilN
                .filter( number => (number % 2) === 1)
                .reduce((initialValue, number) => initialValue + number, 0)

    return sumOfOddFibonacciNumbersUntilN;
}

export {
  sumFibs,
};
