/* The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832. */
const thousandDigitNumber = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';

/* Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product? */

const thousandDigitArray = thousandDigitNumber.split("");
// console.log(thousandDigitArray)

const tDA = thousandDigitArray
console.log(`initial number length: ${tDA.length}`)
// console.log(tDA[0]) // 7
// console.log(tDA[999]) // 0

const adjacentDigits = 13 // defines how many adjacent digits we want to find the biggest product for
console.log(`number of adjacent digits: ${adjacentDigits}`)

const numberOfAdjacentDigitArrays = tDA.length - 4 + 1
console.log(`number of adjacent digit arrays: ${numberOfAdjacentDigitArrays}`)

const buildAdjacentDigitArrays = (howManyArrays, initialNumberArray, numberGroupLength) => {
    let result
    let numberGroupArray = []
    for (let arrays = 0; arrays < howManyArrays; arrays++) {
        // console.log(`arrays: ${arrays}`)
        let tempArray = []
        for (let i = arrays; i < numberGroupLength + arrays; i++) {
            // console.log(`i: ${i}`)
            tempArray.push(initialNumberArray[i])
        }
        tempArray = tempArray.map(Number);
        tempArray = tempArray.reduce( (a,b) => a * b ) // combine array elements to one
        // console.log(tempArray)
        numberGroupArray.push(tempArray)
    }
    numberGroupArray.sort((a, b) => b - a) // sort descending (numerically)
    // console.log(`after loops and sorting numberGroupArray: ${numberGroupArray}`)
    result = numberGroupArray[0]
    return result
}
const biggestProduct = buildAdjacentDigitArrays(numberOfAdjacentDigitArrays, tDA, adjacentDigits)

console.log(`biggest product: ${biggestProduct}`)