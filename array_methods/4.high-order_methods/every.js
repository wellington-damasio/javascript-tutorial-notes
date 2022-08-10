// JavaScript Array type provides the every() method that allows you to check if
//every element of an array pass a test in a shorter and cleaner way
let numbers = [23, 55, 66, 0, 12, 55]

// Without every()
let result = true

for(let number of numbers) {
	if(number <= 0) {
		result = false
		break
	}
}

console.log({result})

// With every()
let betterNumbers = [23, 99, 69, 89, 66, 12, 4543 ,666]

let betterResult = betterNumbers.every(number => number > 0)

console.log({betterResult})


// ------------------------------------------------------------
//     Check if all elements are even numbers with every()
// ------------------------------------------------------------
let evenNumbers = [2, 88, 98, 666, 34, 56]

let areTheyEven = evenNumbers.every(number => number % 2 == 0)

console.log({areTheyEven})

// ------------------------------------------------------------
//     Check if elements are in a range with every()
// ------------------------------------------------------------
let range = {min: 10, max: 1000}

let randomNumbers = [ 2, 5, 6, 234, 45, 6, 666, 1222, 53434, 1000, 23, 44, 23232, 2, 65]

let isInRange = randomNumbers.every(number => {
	return number >= this.min && number <= this.max
}, range)

let filteredNumbers = randomNumbers.filter(number => {
	return number >= this.min && number <= this.max
}, range)

console.log({isInRange})

function inRange(value) {
	return value >= this.min && value <= this.max
}

let anotherFilter = randomNumbers.filter(inRange, range)
let isNowInRange = anotherFilter.every(inRange, range)

console.log({anotherFilter})
console.log({isNowInRange})

// ------------------------------------------------------------
//     			CAUTION: Empty arrays return true
// ------------------------------------------------------------
let gtZero = [].every(e => e > 0) // true
let ltZero = [].every(e => e < 0) // true

console.log({gtZero, ltZero})