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
>>> game plan:
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

const getA = (m, n) => {
  return Math.pow(m, 2) - Math.pow(n, 2);
};
const getB = (m, n) => {
  return 2 * m * n;
};
const getC = (m, n) => {
  return Math.pow(m, 2) + Math.pow(n, 2);
};

const tripletGenerator = (max) => {
  let tripletObjectArray = [];
  for (let n = 1; n < max; n++) {
    // console.log("-- n", n);
    for (let m = n + 1; m < max; m++) {
      //   console.log("- m", m);
      const a = getA(m, n);
      const b = getB(m, n);
      const c = getC(m, n);
      //   console.log("max", max);
      //   console.log("b + c", b + c);
      if (a > b) break;
      if (b + c > max) {
        // console.log("break");
        break;
      }
      //   console.log("b", b);
      //   console.log("c", c);
      tripletObjectArray.push({ a: a, b: b, c: c, m: m, n: n });
    }
  }
  console.log(tripletObjectArray);
  return tripletObjectArray;
};
/* - triplet generator function using the m & n array of objects
  - one by one, use m & n objects to generate a triplet and sum their values 
  - if sum > target sum, break
  - if sum < target sum, sum a multiple of the triplet, repeat above step
  - if sum = target sum, return triplet*/
const tripletTester = (tripletObjectArray, maxSum) => {
  console.log("maxSum", maxSum);
  tripletObjectArray.forEach((object) => {
    const tripletSum = object.a + object.b + object.c;
    console.log("tripletSum", tripletSum);
    switch (true) {
      case tripletSum > maxSum:
        break;
      case tripletSum === maxSum:
        return "the solution: ", object.a, object.b, object.c;
      case tripletSum < maxSum:
        console.log("here");
        for (let i = 2; i < maxSum; i++) {
          console.log("in here");
          const multiple = tripletSum * i;
          console.log("multiple", multiple);
          if (multiple === maxSum) return multiple;
        }
        break;
      default:
        return "no solution found";
    }
  });
};

const returnTripletsWhichSumsTo = (maxSum) => {
  const tripletObjectArray = tripletGenerator(maxSum / 3);
  return tripletTester(tripletObjectArray, maxSum);
};
console.log(returnTripletsWhichSumsTo(1000));
// next: check why m doesn't increase more in triplet generator
