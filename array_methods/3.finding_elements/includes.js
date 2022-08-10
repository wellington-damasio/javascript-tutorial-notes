// The includes() method is used to check if an array has a certain element

// array.includes(element, fromIndex)

console.log([1, 2, 3].includes(2)) // true
console.log([1, 2, 3].includes(1)) // true
console.log([1, 2, 3].includes(1, 1)) // false
console.log([1, 2, 3].includes(4)) // false

// If we were using the old indexOf() way to find an element in an array, this
//would return false
console.log([NaN].includes(NaN)) // true 

// -------------------------------------------------------------------
//       Checking if an object is in an array using includes()
// -------------------------------------------------------------------
let bmw = {name: 'BMW'}
	toyota = {name: 'Toyota'}
	ford = {name: 'Ford'}

let cars = [bmw, toyota]

console.log(cars.includes(bmw)) // true
console.log(cars.includes(ford)) // false