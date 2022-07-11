// In JavaScript, an array is an ordered list of values. Each value is called an element  and is 
//specified by an index

// Arrays in JavaScript have the following characteristics
//  1. Can hold mixed values of mixed types. booleans, strings, numbers, objects, etc...
//  2. The size of the array is dynamic and auto-growing.


// Creating Arrays in JavaScript
let scores = new Array()
// You can create an array with limited number of values it can store
let scores = Array(10) // stores 10 values
// You can initialize an array with values
let scores = new Array(12, 33, 4, 'name', {age: 18})
// Obs: if you create a new array an pass a number to it, you create an array with an initial size, but
//if you give it more than one value, or if the value is NaN, you initalize the array

// The prefered way to create arrays in JavaScript is to use  let name = []
let arrayName = [element1, element,2, ...]
let emptyArray = []

// Accessing JavaScript array elements arrayName[index]
const mountains = ['Everest', 'Fuji', 'Nanga Parbat']
console.log(mountains[0]) //Everest
console.log(mountains[1]) //Fuji
console.log(mountains[2]) // Nanga Parbat




