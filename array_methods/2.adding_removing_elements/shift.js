// The Array.prototype.shift() method removes the first element from an array
//and returns that element.

// If the array is empty, the shift() mehtod returns undefined. Otherwise, it 
//returns the removed element. Also, the shift() method reduces the length of 
//the array by one

// --------------------------------------------------------------
//                 Using shift() basic example
// --------------------------------------------------------------
let numbers = [10, 20, 50]
let number = numbers.shift()

console.log({numbers})
console.log({number})
console.log({length: numbers.length})

// --------------------------------------------------------------
//                 Using shift() to empty an array
// --------------------------------------------------------------
let numbers2 = [30, 40, 50, 12, 33, 55]
let number2

// In this while loop, for each loop, we are redeclaring the number2 variable 
//so the shift() method gets reasigned to the variable and another nuber is 
//taken from the array

while((number2 = numbers2.shift()) !== undefined) {
	console.log(number2)
}

console.log(numbers2)
