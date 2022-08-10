// ES6 provides a new feature called destructing assignment that allows you to 
//destructure properties of an object or elements of an array into individual 
//variables.

// Prior to destructuring r
function getScores() {
	return [70, 80, 90]
}

let scores = getScores()
let x = scores[0]
let y = scores[1]
let z = scores[2]

console.log({x, y, z})

// After destructuring
const [a, b, c] = getScores()

console.log({a, b, c})

// -----------------------------------------------------------------
// 			Array Destructuring Assignment and Rest syntax
// -----------------------------------------------------------------
// It’s possible to take all remaining elements of an array and put them in a new 
//array by using the rest syntax (...):

let otherScores = [23, 55, 6766, 7, 121]
const [h, j, k, ...left] = otherScores

console.log({h, j, k, left})


// -----------------------------------------------------------------
// 						Setting default values
// -----------------------------------------------------------------
function getItems() {
	return [10, 20]
}

let items = getItems()
let thirdItem = items[2] !== undefined ? items[2] : 'nothing here...'

console.log({thirdItem})

// Using destructuring
const [q, w, e = 'nothing here...'] = getItems()
console.log({q, w, e})

// -----------------------------------------------------------------
// 			Fallback if there's no array to destruct
// -----------------------------------------------------------------
function otherGetItems() {
	return null
}

const [u, i = 20] = otherGetItems() || []

console.log({u, i})

// -------------------------------------------------------------
// 					Nested Array Destructuring
// -------------------------------------------------------------
function getProfile() {
	return [
		'John',
		'Doe',
		['Red', 'Green', 'Blue']
	]
}

let [
	firstName,
	lastName,
	[color1, color2, color3]
] = getProfile()

console.log({color1, color2, color3, firstName})

// ---------------------------------------------------------
// 			Swapping variables using destructuring
// ---------------------------------------------------------
let number1 = 10
let number2 = 20;

[number1, number2] = [number2, number1];

console.log(number1); // 20
console.log(number2); // 10

// -------------------------------------------------------------
// 			  Functions that return multiple values
// -------------------------------------------------------------
// In JavaScript, a function can return a value. However, you can return an 
//array that contains multiple values, for example:
function stat(a, b) {
	return [
		a + b,
		(a + b) / 2,
		a - b
	]
}

// And then you use the array destructuring assignment syntax to destructure the 
//elements of the return array into variables:
let [sum, average, difference] = stat(20, 15)
console.log({sum, average, difference})
