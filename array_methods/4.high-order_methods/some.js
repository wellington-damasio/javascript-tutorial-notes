// The Array type provides you with  an instance method called some() that
//allows you to test if an array has at least one element that meets a condition

let marks = [4, 5, 7, 9, 10, 3]

// Without some()
let lessThanFive = false

for(let i = 0; i < marks.length; i++) {
	if(marks[i] < 5) {
		lessThanFive = true
		break
	}
}

console.log({lessThanFive})

// With some()
let betterLessThanFive = marks.some(mark => mark > 5)

console.log({betterLessThanFive})

// ------------------------------------------------------------
// 		 Using some() to check if element exists in array
// ------------------------------------------------------------
function exists(value, array) {
	return array.some(element => element === value)
}

console.log(exists(9, marks))

// -----------------------------------------------------------------
// 		 Checking if array has at least one element on the range
// -----------------------------------------------------------------
let range = {min: 1, max: 5}

let inTheRange = marks.some(function(mark) {
	return mark >= this.min && mark <= this.max
}, range)

console.log({inTheRange})

// ---------------------------------------------------------------
//            CAUTION: Empty arrays always return false
// ---------------------------------------------------------------
console.log([].some(e => e > 0))
console.log([].some(e => e < 0))