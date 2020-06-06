/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2. For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc. 
https://www.mathsisfun.com/numbers/pythagorean-triples.html:
When m and n are any two positive integers (m > n):
a = m2 − n2
b = 2mn
c = m2 + n2
Then a, b, and c form a Pythagorean Triple.
Example: m=2 and n=1
a = 22 − 12 = 4 − 1 = 3
b = 2 × 2 × 1 = 4
c = 22 + 12 = 4 + 1 = 5
Thus, we obtain the first Pythagorean Triple (3,4,5).

- m & n generator function where b & c are never more than target sum / 3
  - increase m (larger number) to max
  - increase n by 1 and continue with increasing m to max
  - do until all options are generated
  - return m & n combinations in an array of objects
- triplet generator function using the m & n array of objects
  - one by one, use m & n objects to generate a triplet and sum their values 
  - if sum > target sum, break
  - if sum < target sum, sum a multiple of the triplet, repeat above step
  - if sum = target sum, return triplet
*/

const returnTripletsWhichSumsTo = (sum) => {
  return sum;
};
console.log(returnTripletsWhichSumsTo(1000));

/*
const findTheTriplet = () => {
    const maxA = 350;
    const maxB = 400;
    const maxC = 450;
    const maxM = 200;
    const maxN = 200;
    let tripletArray = [0, 0, 0];
    console.log(tripletArray);
    const tripletConstructor = (m, n) => {
        tripletArray[0] = Math.pow(m, 2) - Math.pow(n, 2);
        tripletArray[1] = 2 * m * n;
        tripletArray[2] = Math.pow(m, 2) + Math.pow(n, 2);
    };
    loopOne: for (let n = 1; n < maxN; n++) {
        loopTwo: for (let m = 1; m < maxM; m++) {
            if (
                tripletArray[0] < 0 ||
                tripletArray[1] < 0 ||
                tripletArray[2] < 0 ||
                tripletArray[0] > tripletArray[1] ||
                tripletArray[1] > tripletArray[2]
            ) {
                console.log("if (break): " + tripletArray);
                break loopTwo;
            } else if (
                tripletArray[0] + tripletArray[1] + tripletArray[2] < 1000 &&
                tripletArray[0] < maxA &&
                tripletArray[1] < maxB &&
                tripletArray[2] < maxC
            ) {
                console.log("else if: " + tripletArray);
                tripletConstructor(m, n);
                console.log(tripletArray);
            } else {
                console.log("else: " + tripletArray);
            }
        }
    }
};
findTheTriplet();
*/
