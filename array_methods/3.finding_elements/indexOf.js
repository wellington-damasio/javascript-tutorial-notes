// To find the position of an element in an array, you use the indexOf() method.
//This method returns the index of the first occurrence of the element, or -1
//if the element is not found

// Array.indexOf(searchElement, fromIndex)

// ----------------------------------------------------------------
//                     indexOf() Basic Examples
// ----------------------------------------------------------------
let scores = [10, 20, 30, 40, 50, 60, 70]

console.log(scores.indexOf(10))
console.log(scores.indexOf(30))
console.log(scores.indexOf(70))

let scores2 = [10, 20, 30, 10, 40, 20]
console.log(scores2.indexOf(20,-1)) // 5 (6 - 1 = 5)
console.log(scores2.indexOf(20,-5)) // 1 (6 - 5 = 1)

// ----------------------------------------------------------------
//    Getting the index of objects inside arrays with indexOf()
// ----------------------------------------------------------------
let guests = [
	{name: 'John Doe', age: 30},
	{name: 'Lily Bush', age: 20},
	{name: 'William Gate', age: 25}
]

console.log(guests.indexOf({ name: 'John Doe', age: 30}))

// The above doesn't work because you're creating a new object with the same key
//and values inside indexOf, but is not the same object

let john = {name: 'John Doe', age: 30},
	lily = {name: 'Lily Bush', age: 20},
	william = {name: 'William Gate', age: 25}

let secondGuests = [john, lily, william]

console.log({'Lily' : secondGuests.indexOf(lily)})

// -----------------------------------------------------------------------
//    Finding the indice of all occurrences of an element in an array
// -----------------------------------------------------------------------
function find(needle, haystack) {
	let results = []
	let idx = haystack.indexOf(needle)

	while(idx != -1) {
		results.push(idx)

		let nextIndex = idx + 1		
		idx = haystack.indexOf(needle, nextIndex)
	}

	return results
}

let numbers = [23, 22, 14, 55, 22, 5625, 66, 22, 1231 ,22]
console.log(find(22, numbers))

// -------------------------------------------------------------------
//      Finding last occurrence of an element with lastIndexOf()
// -------------------------------------------------------------------

// Array.lastIndexOf(searchElement[, fromIndex = Array.length -1])

console.log(numbers.indexOf(22))
console.log(numbers.lastIndexOf(22))


