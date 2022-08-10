// The forEach method allows you to run a function in every element of an
//array

let ranks = [12, 33, 44, 55, 11, 2, 3, 1, 5, 6, 7]

ranks.forEach(rank => {
	let newRank = rank + 2

	console.log('Rank : ' + newRank)
})

// ----------------------------------------------------------------
// 			 Using forEach() method with a contextObject
// ----------------------------------------------------------------
class Counter {
	constructor() {
		this.count = 0
	}

	increase() {
		return this.count++
	}

	current() {
		return this.count
	}

	reset() {
		return this.count = 0
	}
}

let counter = new Counter()
let numbers = [1, 2, 3]
let sum = 0

numbers.forEach(function(elem) {
	sum += elem
	this.increase()
}, counter)

console.log(sum)
console.log(counter.current())

