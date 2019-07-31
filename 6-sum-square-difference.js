/* The sum of the squares of the first ten natural numbers is, 1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum. */

const startingNumber = 1;
const endingNumber = 100;

// function to square a number
const squareNumber = number => {
    return number *= number;
};
// console.log(squareNumber(3)); // 9

// function to sum every number between and including two numbers
const sumUp = (fromNumber, toNumber) => {
    let result = 0;
    for (i = fromNumber; i <= toNumber; i++) {
        result += i; 
    }
    return result;
};
// console.log(sumUp(1,10)); // 55

// function to square and sum up every number between and including two numbers
const squareSumUp = (fromNumber, toNumber) => {
    let result = 0;
    for (i = fromNumber; i <= toNumber; i++) {
        result += squareNumber(i);
    }
    return result;
};
// console.log(squareSumUp(1,10)); // 385

// funciton to find the difference between the sum of the squares of the first x natural numbers and the square of the sum
const squareSumVsSumSquare = (fromNumber, toNumber) => {
    let squareSum = squareNumber(sumUp(fromNumber, toNumber));
    let sumSquare = squareSumUp(fromNumber, toNumber);
    return squareSum - sumSquare;
};
console.log(squareSumVsSumSquare(startingNumber, endingNumber));