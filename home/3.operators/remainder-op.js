// JavaScript uses the % operator to represent remainder operator. The remainder operator returns
// the remainder left over when one value is divided by another value

// Equation for the remainder
// dividend = divisor * quotient + remainder
// where |remainder| < |divisor|

let positiveRemainder = 5 % 2
console.log(positiveRemainder)

let negativeRemainder = -5 % 3
console.log(negativeRemainder)

// If the dividend is zero and the divisor is non-zero, the remainder is zero:
let remainderOfZero = 0 % 10
console.log(remainderOfZero)

// Using the remainder operator the check if the number is odd or not
const isOdd = num => Boolean(num % 2) // if odd, returns 1 (true), otherwise returns 0 (false)

console.log(isOdd(2))

console.log(isOdd(3))

console.log(isOdd(909))
