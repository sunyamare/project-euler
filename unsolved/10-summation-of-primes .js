/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.*/
const primesArray = [];
const maxSum = 2000000;
let primeSum = 0;
let stopVariable = 0;
const addPrimesTillStop = nextPrime => {
    if (stopVariable !== 1) {
        primeSum += nextPrime;
    }
};
const generatePrimesTillMaxSum = () => {
    for (let n = 1; primeSum < maxSum; n++) {
        // generate prime numbers
        // prime: only divisible with rest 0 by itself and 1
    }
};
console.log(primeSum);
