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
- triplet generator function
  - increase m (larger number) to max
  - increase n by 1 and continue with increasing m to max
  - do until all options are generated
  - return a, b, c combinations in an array of objects
  - take constraints into account
- triplet tester function 
  - if sum < target sum, sum a multiple of the triplet to find target sum
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
    for (let m = n + 1; m < max; m++) {
      const a = getA(m, n);
      const b = getB(m, n);
      const c = getC(m, n);
      // if (a > b) break;
      // if (b > c) break;
      // if (b + c > max) break;
      if (a + b + c > max) break;
      const sum = a + b + c;
      const div = 1000 / sum;
      const rest = 1000 % sum;
      tripletObjectArray.push({ a, b, c, sum, div: Math.round(div, 2), rest });
    }
  }
  return tripletObjectArray;
};

const tripletTester = (tripletObjectArray, maxSum) => {
  // console.log(tripletObjectArray);
  let resultObject = {};
  for (let i = 0; i < tripletObjectArray.length; i++) {
    const { a, b, c } = tripletObjectArray[i];
    const tripletSum = a + b + c;
    if (tripletSum === maxSum) {
      resultObject = { a, b, c };
      break;
    } else if (tripletSum < maxSum) {
      for (let i = 2; i < maxSum; i++) {
        const multiple = tripletSum * i;
        if (multiple > maxSum) {
          break;
        }
        if (multiple === maxSum) {
          resultObject = { a, b, c };
          break;
        }
      }
    } else {
      console.error("smth's odd");
    }
  }
  console.log("resultObject", resultObject);
  return resultObject;
};

const returnTripletsWhichSumsTo = (maxSum) => {
  return tripletTester(tripletGenerator(maxSum), maxSum);
};

returnTripletsWhichSumsTo(1000);
