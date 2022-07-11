// JavaScript strings are primitive values. Also, strings are immutable. It means that if you modify
//a string, you will always get a new string. The original string doesn't change
let str = 'Hi'
let greeting = "Hello"

// ES6 introduced template literals
let name = `Noah`
let phrase = `I'm a good man. You know... "good".`
// You can call variables inside template literals
let hello = `Hello, ${name}!`
console.log(hello)

// To escape special characters in strings use the backslash.
//  Line break: \n
//  Tab: \t
//  Backslash: \

// Accessing characters
// Access characters in strings using array-like notation with the zero-based index.
console.log(greeting[2]) // l
// To access counting from last to first use negative numbers
console.log(greeting[1]) // e
console.log(greeting[-1]) // l

// Concatenating strings
// You can concatenate a string using the `+=` or the `+` operator
const car = '812'
const brand = 'Ferrari'
const carName = brand + car // Ferrari 812
console.log(carName)

let className = 'btn'
console.log(className)
className += ' btn-primary'
console.log(className)
className += ' btn-sm'
console.log(className)

// Converting non-string values to string
let status = false
console.log(status.toString())




