/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10 001st prime number? */

const primeNumber = 10001;
let iii = 0
// function to determine if a number is a prime or not
const isPrime = number => {
    let hasRemainder = 0;
    // console.log(`number: ${number}`);
    for (let i = 1; i <= number; i++) {
        iii++
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
    for (let n = 1; primeArray.length < amount; n++) {
        iii++
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
console.log(`iii ${iii}`)

/* alternative solution:
const primeNumber = 10001;
let itterations = 0
// function to determine if a number is a prime or not
const isPrime = number => {
    let noRemainderCount = 0;
    // console.log(`number: ${number}`);
    for (let i = 3; i <= number; i+=2) {
        itterations++
        // console.log(`i: ${i}`);
        if (noRemainderCount > 1) {
            break;
        }
        if ((number % i) === 0) {
            noRemainderCount += 1;
            // console.log(`totalRest: ${noRemainderCount}`);
        }
    };
    return noRemainderCount === 1 ? true : false;
};
// console.log(isPrime(5)); // true

// function to add x primes to an array
const makePrimeArray = amount => {
    let primeArray = [];
    for (let n = 1; primeArray.length < amount; n+=2) {
        // console.log(`n: ${n}`);
        if (isPrime(n)) {
            primeArray.push(n);
        }
        itterations++
    };
    return primeArray;
};
// console.log(makePrimeArray(4)); // [ 2, 3, 5, 7 ]

// function to spit out the xth number of an array
const whichPrime = x => {
    console.log(makePrimeArray(x)[x-1]);
}

whichPrime(primeNumber);
console.log(`iterations: ${itterations}`) */