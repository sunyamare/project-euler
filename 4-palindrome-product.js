/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers. */

// needs: reverse number [x], multiply by counting up all possible ways [], stop when > 1000 [], print palindrom with the two largest numbers below 1000 []

var i;
var number1 = 1;
var number2 = 1;
var product = 0;
var multiplier = 0;

function reverse(n) //reverse number
{
	n = n + ""; // make a string
	return n.split("").reverse().join(""); // split every character, reverse all, join every character
}
// console.log(reverse(1234));

for (i = 1; i < 100000000 && number1 < 1000 && number2 < 1000; i++) {
    number1 += i;
    number2 += i;
    if (number1 * number2 == reverse(number1 * number2)) {
        product = number1 * number2;
        multiplier = number1;
    }
    // console.log("i", i)
}
console.log("Product (palindrom): " + product);
console.log("Multiplier: " + multiplier);

