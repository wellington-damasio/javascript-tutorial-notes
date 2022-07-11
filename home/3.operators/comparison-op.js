// To compare values, use a comparison operator. The following table shows comparison operators
//in JavaScript

//Operator | Meaning
// <       | less than
// >       | greater than
// <=      | less than or equal to
// >=      | greater than or equal to
// ==      | equal to
// !=      | not eoual to

// Comparison operators return a boolean value indicating if the comparison is true or not.

// Compare a number with a value of another type
// If a value is a number and the other is not, the comparison operator will convert the non-numeric
//value into a number and compare them numerically.
console.log(10 < '20') // true
console.log('10' == 10) // true
console.log('10' === 10) // false

// Compare a Boolean with another value
console.log(true > 0) // true
console.log(false < 1) // true
console.log(true > false) // true
console.log(false > true) // false 
console.log(true >= true) // true
console.log(true <= true) // true
console.log(false >= false) // true
console.log(false <= false) // true

// Compare null and undefined
console.log(null == undefined) // true 

// Compare NaN with other values
console.log(NaN == 1) // false
console.log(NaN == 0) // false
console.log(NaN == NaN) //false (even this)

// Strict equal (===)
// Summarizing, the stric equal operator does not convert values to number before comparing, so if
//the 2 values being compared are the same but with different types (10 === '10'), it will 
//return false
