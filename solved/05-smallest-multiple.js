/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */

const divisorMin = 1;
const divisorMax = 20;
const numberMin = 1;
let stopVariable = 0;

let iterations = 0;
for (let number = numberMin; stopVariable == 0; number++) { 
    let counter = 0;
    iterations++;
    // console.log("number: " + number);
    for (divisor = divisorMin; divisor <= divisorMax; divisor++) {
        iterations++;
        // console.log(" divisor: " + divisor);
        if (number % divisor != 0) {
            break; // to optimize performance
        } else { 
            // console.log("  counter: " + counter);
            counter++;
            if(counter == divisorMax) {
                stopVariable = 1;
                console.log("-------> result: " + number); // 232792560
            }
        }
    }
}

/* alternative solution of a senior dev: 
const fn = (divisorMin = 2, divisorMax = 20) =>
{
    let iterations = 0;
    let currentNumber = 0;
    let incrementBy = 2432902008176640000;
    // for (let i = divisorMax; i >= divisorMin; i--)
    // {
    //     incrementBy *= i;
    // }

    console.log(`increment by: ${incrementBy}`)

    while (true)
    {
        iterations++
        currentNumber+=720
        let divisor = divisorMax

        while (divisor > 1) {
            iterations++
            if (currentNumber % divisor !== 0) {
                break; // to optimize performance: only stops inner loop
            } else { 
                if(divisor === 2) {
                    console.log(`iterations ${iterations}`)
                    return currentNumber
                }
            }
            divisor--
        }
    }

}

console.log(`result: ${fn(1, 20)}`); */