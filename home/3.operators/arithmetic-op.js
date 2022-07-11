// JavaScript supports the following arithmetic operatos:
//  addition (+)
//  subtraction (-)
//  multiplication (*)
//  division (/)

// Addition
let netPrice = 9.99,
    shippingPrice = 1.99
let grossPrice = netPrice + shippingPrice
console.log(grossPrice)
// When (+) is used with a string it follows the rule:
//  - If both values are a string, it concatenates the second string to the first one
//  - If one value is a string, it converst the numeric value into a string and concatenates
let x = 10,
    y = '20'
console.log(x + y)

// Subtraction (-)
let result = 30 - 10
let subResult = 10 - 30
console.log(result, subResult)
// If the value is a string, a boolean, or undefined, the JavaScript engine will:
//  - First, covert the NaN vale into a number using Number()
//  - Second, perform the subtraction

// Multiplication operator
let multResult = 2 * 9
console.log(multResult)
let multResult2 = '2' * 7
console.log(multResult2)
// If either value is not a number, JavaScript engine will implicitly converts it into a number 
//using the Number() function and performs the multiplication.

// Divide operator (/)
let divResult = 20 / 10
console.log(divResult)
// If either value is not a number, JavaScript engine converts it into a number for division
let divResult2 = '30' / 5
console.log(divResult2)

// Using JavaScript arithmetic operators with objects
// If a value is an object, the JavaScript engine will call the valueOf() method of the object to 
//get the value for calculation.
let energy = {
  valueOf() {
    return 100
  }
}

let currentEnergy = energy - 10
console.log(currentEnergy)

currentEnergy = energy - 20
console.log(currentEnergy)

currentEnergy = energy - 100
console.log(currentEnergy)
