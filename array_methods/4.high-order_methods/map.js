// Starting from ES5, JavaScript Array type provides the map() method that allows 
//you to transform the array elements in a cleaner way

// Before ES5
let circles = [10, 30, 50]
let areas = []

for(let i = 0; i < circles.length; i++) {
	let area = Math.floor(Math.PI * circles[i] * circles[i])

	areas.push(area)
}

console.log({areas})

// After ES5
let betterAreas = circles.map(circle => {
	return Math.floor(Math.PI * circle * circle)
})

console.log({betterAreas})

// ------------------------------------------------------------------
// 			Converting an array of numbers to their square roots
// ------------------------------------------------------------------
let numbers = [34, 55, 12, 3, 55]
let results = numbers.map(number => Number(Math.sqrt(number).toFixed(2)))

console.log({results})