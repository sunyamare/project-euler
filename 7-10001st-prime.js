/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10 001st prime number? */

const primeNumber = 10001;

// function to determine if a number is a prime or not
const isPrime = number => {
    let hasRemainder = 0;
    // console.log(`number: ${number}`);
    for (i = 1; i <= number; i++) {
        // console.log(`i: ${i}`);
        if (hasRemainder > 2) {
            break;
        }
        if (!(number % i)) {
            hasRemainder += 1;
            // console.log(`totalRest: ${hasRemainder}`);
        }
    };
    return hasRemainder == 2 ? true : false;
};
// console.log(isPrime(5)); // true

// function to add x primes to an array
const makePrimeArray = amount => {
    let primeArray = [];
    for (n = 1; primeArray.length < amount; n++) {
        // console.log(`n: ${n}`);
        if (isPrime(n)) {
            primeArray.push(n);
        }
    };
    return primeArray;
};
// console.log(makePrimeArray(4)); // [ 2, 3, 5, 7 ]

// function to spit out the xth number of an array
const whichPrime = x => {
    console.log(makePrimeArray(x)[x-1]);
}

whichPrime(primeNumber);