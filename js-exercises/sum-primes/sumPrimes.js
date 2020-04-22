function sumPrimes(number) {

    if(number && typeof number === 'number'){

      let primes = [];
      
      if(number > 2){
         primes.push(2);
      }

      for(let i = 3 ; i <= number ; ){

        let isPrime = true;
        
        for(let j = 0 ; j < primes.length ; j++){

           if(i % primes[j] === 0){
              isPrime = false;
           }

        }

        if(isPrime){
          primes.push(i);
        }

        i += 2;

      }

      return primes.reduce((sum,prime) => {
          return sum + prime;
      });

    } else {
      return false;
    }

}

export {
  sumPrimes,
};
