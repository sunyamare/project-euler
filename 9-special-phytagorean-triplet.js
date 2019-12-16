/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2. For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc. */
/*
- begin iteration with: c = 1000 - b - a

- c > b, otherwise break

- b > a, otherwise break
- a + b + c must be <= 1000
- a ^ 2 + b ^ 2 must be c ^ 2

... https://www.mathsisfun.com/numbers/pythagorean-triples.html
*/
const findTriplet = sumOfSides => {
    const maxSideC = 334; // sumOfSides - 3; // c > b > a -> 3, 2, 1 -> 2 + 1 are min. lenghts of a and b
    const minSide = 1;
    let stopVariable = 0;
    let c = maxSideC;
    for (c; c >= minSide; c--) {
        if (stopVariable === 1) {
            break;
        }
        console.log("c: " + c);
        b = c - 1;
        for (b; b >= minSide; b--) {
            if (stopVariable === 1) {
                break;
            }
            console.log("b: " + b);
            if (c < b) {
                console.log("c < b");
                continue;
            }
            a = b - 1;
            for (a; a >= minSide; a--) {
                console.log("a: " + a);
                if (a + b + c > sumOfSides) {
                    console.log("a + b + c > " + sumOfSides);
                    continue;
                } else if (b < a) {
                    console.log("b < a");
                    continue;
                } else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
                    console.log("***** 1 triple *****");
                    console.log("a: " + a);
                    console.log("b: " + b);
                    console.log("c: " + c);
                    continue;
                } else if (
                    a + b + c === 1000 &&
                    Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
                ) {
                    console.log("***** final triple *****");
                    stopVariable = 1;
                    break;
                } else {
                    continue;
                }
            }
        }
    }
    console.log("a: " + a);
    console.log("b: " + b);
    console.log("c: " + c);
    console.log("sum: " + (a + b + c));
};
findTriplet(1000);
