// JavaScript Array type provides the filter() method that allows you to 
//make an subset of an array with conditions

let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

// Without filter()
let bigCities = []
for(let city of cities) {
	if(city.population > 3000000) {
		bigCities.push(city)
	}
}

console.log({bigCities})

// Using filter()
let mostPopulatedCities = cities.filter(city => city.population > 3000000)

console.log({mostPopulatedCities})

// The filter() method includes the only elements in the result array if they 
//satisfy the test in the callback function (return true)

// ----------------------------------------------------------
// 			Using filter() along with ohter methods
// ----------------------------------------------------------
// Because filter() returns a new array, you can chain other array methods such
//as sort() and map()

let orderedPopulatedCities = cities
	.filter(city => city.population > 2500000)
	.sort((cityA, cityB) => cityA.population - cityB.population)
	.map(city => `${city.name}: ${city.population}`)

console.log({orderedPopulatedCities})

// ------------------------------------------------------------------------
// 	  Using the contextObject with filter() to get a number in a range
// ------------------------------------------------------------------------
function isInRange(value) {
	if(typeof value !== 'number') {
		return false
	}

	return value >= this.lower && value <= this.upper
}

let data = [10, 20, "30", 1, 5, 'JavaScript', undefined, 'example',9, 87]

let range = { lower: 1, upper: 10 }

let numbersInRange = data.filter(isInRange, range)

console.log({numbersInRange})