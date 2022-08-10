// To create an array from an array-like object in ES5, you iterate over all
//elements and add each of the to an intermediate array
function arrayFromArgs () {
	let results = []
	for(let arg of arguments) {
		results.push(arg)
	}

	return results
}

let fruits = arrayFromArgs('Apple', 'Orange', 'Banana')

console.log(fruits)

// ES6 introduces the Array.from() method that creates a new instance of the 
//Array from an array-like or iterable object. The following illustrates the 
//syntax of the Array.from() method:

// Array.from(target [, mapFn [, thisArg]])

// ----------------------------------------------------------------
// 	   Creating an array from an array-like object with from()
// ----------------------------------------------------------------
 function betterArrayFromArgs() {
 	return Array.from(arguments)
 }

 console.log(betterArrayFromArgs(90, 232, 'asa', 76, 'pãozinho', 'Wellington'))

// ---------------------------------------------------------------------
//         JavaScript Array Array.from() with a mapping function
// ---------------------------------------------------------------------
// Array.from() method accepts a callback function that allows you to execute
//the mapping function on every element of the array which is being created.

function addOne() {
	return Array.from(arguments, x => x + 3)
}

console.log(addOne(9, 8, 7, 5 , 2, 12))

// ----------------------------------------------------------------------
// 					JavaScript Array.from with this value
// ----------------------------------------------------------------------
// If the mapping function belongs to an object, you can optionally pass the 
//third argument to the Array.from() method

let doubler = {
	factor: 2,
	double(x) {
		return x * this.factor
	}
}

let scores = [5, 6, 7]
let newScores = Array.from(scores, doubler.double, doubler)
console.log({newScores})

// --------------------------------------------------------------
//            Create an Array fom an Iterable Object
// --------------------------------------------------------------
let even = {
	*[Symbol.iterator]() {
		for (let i = 0; i < 10; i += 2) {
			yield i
		}
	}
}

let evenNumbers = Array.from(even)
console.log({evenNumbers})
