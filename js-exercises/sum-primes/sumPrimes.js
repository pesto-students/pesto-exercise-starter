function isPrime(number) {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}

function primeNumbersUntil (number) {
    let primeNumbers = []
    for (var num = 2; num <= number; num++) {
        if (isPrime(num)) {
          primeNumbers.push(num)
        }
    }

    return primeNumbers
}

function sumPrimes(number) {
    return primeNumbersUntil(number).
    reduce((sum, value) => sum += value, 0)
}

export {
  sumPrimes,
};
