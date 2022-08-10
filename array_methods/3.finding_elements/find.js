// The find() method returns the first element in an array that specifies a
//provided function

// find(callback(element[, index[, array]])[, thisArg])

// The find() element executes the callback for each element in an array until
//the callback returns a truthy value. 

// If the callback returns true, the find() immediately returns the element 
//and stop searching. Otherwise, it returns undefined.

// ------------------------------------------------------------------------
//       Using find() to return the first even number in an array
// ------------------------------------------------------------------------
let numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers.find(number => number % 2 === 0)) // 2

// ------------------------------------------------------------------------
//                Using find() to return a specific customer
// ------------------------------------------------------------------------
let customers = [
	{name: 'ABC Inc', credit: 100},
	{name: 'Amelia Industries', credit: 950},
	{name: 'Honeybee LTDA', credit: 250}
]

let amelia = customers.find(customer => customer.credit > 150)

console.log(amelia)
console.log(amelia.name)
