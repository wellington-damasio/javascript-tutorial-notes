// Logical operators in JavaScript allow you to compare variables and do something based on the result 
//of that comparison

// JavaScript provides three logical operators:
//  - ! (NOT)
//  - || (OR)
//  - && (AND)

// The Logical NOT operator (!)
// When you apply the ! operator to a boolean value, it returns true if it is false and false if it
//is true
let eligible = true,
    required = false

console.log(!eligible)
console.log(!required)

// The ! operator works based on the following rules: (for !a)
//   - If a is undefined, the result is true
//   - If a is null, the result is true
//   - If a is a number other then 0, the result is false (1, 2, 3,-2 , -90)
//   - If a is NaN, the result is true
//   - If a is null, the result is true
//   - If a is an object, the result is false
//   - If a is an empty string, the result is true. In case a is a non-empty string, the result is
//  false

console.log('undefined: ' + !undefined) // true
console.log('!null: ' + !null) // true
console.log('20: ' + !20) // false
console.log('0: ' + !0) // true
console.log('NaN: ' + !NaN) // true
console.log('{}: ' + !{}) // false
console.log('\'\':' + !'') // true
console.log('\'OK\': ' + !'OK') // true
console.log('false: ' + !false) // true
console.log('true: ' + !true) // false

// Double negation
// The double negation uses the NOT operator twice to convert a value to its real boolean.
console.log(!!10) // true
console.log(!!false)  // false
console.log(!!true) // true

// The Logical AND Operator (&&)
// let result =  a && b  
// If a can be converted to true, the && operator returns the b; otherwise, it returns the a.
let eligible2 = false,
    required2 = true

console.log(eligible2 && required2) // false

eligible2 = true
required2 = true
console.log(eligible2 && required2) // true

const isOdd = num => Boolean(num % 2)
const printOdd = () => console.log('This is a odd number')

const advPrintOdd = num => Boolean(num % 2) && console.log(`${num} is a odd number`)

isOdd(2) && printOdd()
isOdd(3) && printOdd()

advPrintOdd(3)
advPrintOdd(4)


// Short-circuit evaluation
let b = true
let result = b && (1 / 0)
console.log(result)

b = false
result = b && (1/0)
console.log(result)

let c = false
let result2 = c && (1 / 0)
console.log(result2)

// The Logical OR opertor (||)
let a = false
let d = true
let orResult = a || d
// If a can be converted to true, retuns a; else returns b. This rule is also applied to booleans.
console.log(orResult)

// Logical operator precedence
// When you use the mixed logical operators in an expression, the JavaScript engine evaluates the 
// operators based on a specified order, and this order is called the operator precedence. In other
// words, the operator precedence is the order that which an operator is executed.
//
// The precedence of the logical operator is in the following order from highest to the lowest:
//  1. Logical NOT (!)
//  2. Logical AND (&&)
//  3. Logical OR (||)
//





