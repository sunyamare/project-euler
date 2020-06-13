// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below two million.
/*  
- not higher than rounded up square root 
- only check primes 0 up 
** game plan:
- count up numbers from 1 to 2 mill
- for each of these numbers, check if it's divisible by any previously identified prime in the primesArray up to its rounded up square root
- if the found primes are not higher than the next number's square root, check against each uneven number between the highest found prime and its rounded up squareroot
*/
const isDivisibleRestZero = (potentialPrime, divisor) => {
  if (potentialPrime % divisor === 0) return true;
};
const findPrimeSumBelow = (value) => {
  let primesArray = [];
  for (let potentialPrime = 2; potentialPrime <= value; potentialPrime++) {
    const isDivisibleByPreviousPrimes = primesArray.some((prime) =>
      isDivisibleRestZero(potentialPrime, prime)
    );
    if (isDivisibleByPreviousPrimes) {
      continue;
    } else {
      const roundedUpSqrt = Math.ceil(Math.sqrt(potentialPrime));
      const highestFoundPrime = primesArray[primesArray.length - 1];
      if (highestFoundPrime > roundedUpSqrt) {
        primesArray.push(potentialPrime);
        continue;
      } else {
        const divisorFromValue = roundedUpSqrt - highestFoundPrime;
        let divisorArray = [];
        for (divisor = divisorFromValue; divisor < roundedUpSqrt; divisor++) {
          if (divisor === 1 || divisor % 2 === 0) continue;
          divisorArray.push(divisor);
        }
        const isDivisibleByNewDivisors = divisorArray.some((divisor) =>
          isDivisibleRestZero(potentialPrime, divisor)
        );
        if (isDivisibleByNewDivisors) {
          continue;
        } else {
          primesArray.push(potentialPrime);
        }
      }
    }
  }
  // console.log("primesArray", primesArray);
  const arraySum = primesArray.reduce((a, b) => a + b);
  console.log("arraySum", arraySum);
};
findPrimeSumBelow(2000000);
