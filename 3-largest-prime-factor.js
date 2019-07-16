/* The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ? */

// divide x by the lowest possible number without rest, print that number and the result
// take result and do the same until no more divisions are possible

var i;
var n = 600851475143;
var result = 0;

for (i = 1; i < 1000000 && n > 1; i++) { 
    if (n % i == 0) {
        n /= i;
        // console.log("divider = " + i);
        // console.log("division result = " + n)
        result = i;
    }
    // console.log("i", i)
}

console.log("Result = " + result)
