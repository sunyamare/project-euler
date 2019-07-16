/* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. */

// as long as the value is < 4000000 sum up all even numbers in the fibonacci sequence
// which loop ... while / for / ? -> for loop when # of iterations is clear, otherwise while loop

// Tips: recursion -> use functions, find out the number of cycles and use memoization 

var i;
var var1 = 0;
var var2 = 1;
var result = 0;

for (i = 1; i < 10000000000 && var2 < 4000000; i++) { 
    var1 += var2;
    var2 += var1;
    // console.log("Fibonacci var1: " + var1);
    // console.log("Fibonacci var2: " + var2);
    if (var2 < 4000000) {
        if (var1 % 2 == 0) {
            // console.log("div Fibonacci var1: " + var1);  
            result += var1; 
        }
        if (var2 % 2 == 0) {
            // console.log("div Fibonacci var2: " + var2);  
            result += var2; 
        }
    }
    // console.log("i", i)
}
console.log(result)
