// The Object.is() behaves like the `===` with two differences:
//  - -0 and +0
//  - NaN

// Negative Zero 
// The `===` operator treats -0 and +0 as the same value
let amount = -0,
    volume = +0

console.log(amount === volume) // true

// Object.is treats -0 and +0 as different values
console.log(Object.is(amount, volume)) // false


// The `===` operator treats NaN and NaN as different values.
let quantity = NaN
console.log(quantity === quantity) // false
console.log(Object.is(quantity, quantity)) // true


