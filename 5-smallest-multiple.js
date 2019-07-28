/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */

const divisorMin = 1;
const divisorMax = 20;
const numberMin = 1;
const numberMax = 1000000000;
let stopVariable = 0;

// do as long as the number is smaller than the max number and the stopVariable is 0
for (number = numberMin; number <= numberMax && stopVariable == 0; number++) { 
    let counter = 0;
    // console.log("number: " + number);
    for (divisor = divisorMin; divisor <= divisorMax; divisor++) {
        // console.log(" divisor: " + divisor);
        if (number % divisor == 0) {
            // console.log("  counter: " + counter);
            counter++;
            if(counter == divisorMax) {
                stopVariable = 1;
                console.log("-------> result: " + number); // answer: 232792560 (took 24s to calculate/run)
            }
        }
    }
}
