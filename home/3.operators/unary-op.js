// Unary operators work on one value. The following table shows the unary operators and their meanings
// Unary Operators | Name                        | Meaning
// +x              | Unary plus                  | Covert a value into a number
// -x              | Unary minus                 | Convert a value into a number and negate it
// ++x             | Increment operator (prefix) | Add one  to the value
// -x              | Decrement operator (prefix) | Subtract one from the value
// x++             | Increment operator (postfix)| Add one to the value
// x-              | Decrement operator (postfix)| Subtract one from the value

// +n
let f = false,
    t = true
console.log(+f)
console.log(+t)
console.log(-f)
console.log(-t)

let weight = 90
console.log(weight--)
console.log(weight++)
console.log(--weight)
console.log(++weight)

let subWeight = weight++ - 5 
console.log(subWeight)
console.log(weight)

let addWeight = weight-- + 5
console.log(addWeight)
console.log(weight)

// Summary
// Unary operators work on one value
//
// Unary (+) or minus (-) converts a non-numeric value into a number. The unary minus negates the 
//value after the conversion
//
// The prefix increment operator add one to a value. The value is changed before the statement is 
//evaluated
//
// The postfix increment operator adds one to a value. The value is changed after the statement is
//evaluated
//
// The prefix decrement subtracts one from a value. The value is changed before the statement is
//evaluated
//
// The postfix decrement subtracts one from a value. The value is changed after the statement is
//evaluated


