// The sort() method allows you to sort elements of an array in place. Besides
//returning the sorted array, the sort() method changes the positions of the
//elements in the original array.

// By default, the sort() method sorts the array elements in ascending order
//with the smallest value first and lasgest value last?

let numbers = [90, 55, 32, 44, 12, 5, 1]
numbers.sort()

console.log({numbers}) // its kinda sorted...

// The sort() converts everything inside the array as a string and compare it, 
//that is why we can have this strange sortings

// To fix this you need to pass a function to sort(). The short() will use the
//compare function to determine the order of the elements

// function compare(a, b) {

// }

// 1. If compare(a, b) is less than zero, the sort() method sorts a to a lower index
// then b. ( a comes first)
// 2. If compare(a, b) is greater than zero, the sort() method sorts b to a lower 
// index than a. (b comes first)
// 3. If compare(a, b) returns zero, the sort() method leaves positions unchanged

function desc(a, b) {
	if(a > b) return 1 // (b comes first)
	if(a < b) return -1 // a comes first)

	return 0 // (do not change positions)
}

numbers.sort(desc)

console.log({numbers})


// ------------------------------------------------------------------
//               Sorting an array of strings with sort()
// ------------------------------------------------------------------
let animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant'
];

animals.sort()

console.log({animals})

// To sort the animals array in descending order, you need to change the logic
// of the compare() function

function asc(a, b) {
	if(a > b) return -1
	if(a < b) return 1

	return 0
}

animals.sort(asc)

console.log({animals})

// --------------------------------------------------------------
//       Sorting an randomCased array of words with sort()
// --------------------------------------------------------------
let mixedCaseAnimals = [
    'Cat', 'dog', 'Elephant', 'bee', 'ant'
];

function putInOrder(a, b) {
	let x = a.toUpperCase();
	let y = b.toUpperCase();

	return x == y ? 0 : x > y ? 1 : -1
}

mixedCaseAnimals.sort(putInOrder)

console.log({mixedCaseAnimals})

// ------------------------------------------------------------------
//       Sorting an array of strings with non-ASCII characters
// ------------------------------------------------------------------
// As this array have some "é, è... etc", we will need a different compare
//function to deal with this

let animaux = ['zèbre', 'abeille', 'écureuil', 'chat'];

animaux.sort((a, b) => a.localeCompare(b))

console.log({animaux})

// ------------------------------------------------------------------
//       		Sorting an array of numbers with sort()
// ------------------------------------------------------------------
let scores = [30, 6464, 11, 22 , 4524, 565 ,1232]

scores.sort((a, b) => a - b)

console.log({scores})

// In descending order...
let descScores = scores.sort((a ,b) => b - a)

console.log({descScores})

// ------------------------------------------------------------------
//       Sorting an array of objects by a specified property
// ------------------------------------------------------------------
let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
]

// By numeric property
employees.sort((a, b) => a.salary - b.salary)

console.table({employees})

// By string property
employees.sort((a, b) => {
	let x = a.name.toUpperCase()
	let y = b.name.toUpperCase()

	return x == y ? 0 : x > y ? 1 : -1
})

console.table(employees)

// By date property

// You have to create a valid Date ojbet from the date string and compare the
// two dates, which is the same as comparing numbers

employees.sort((a, b) => {
	let x = new Date(a.hireDate)
	let y = new Date(b.hireDate)

	return x - y
})

console.table(employees)


// ------------------------------------------------------------------
//                        Optmizing sort() method
// ------------------------------------------------------------------
let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];

rivers.sort(function (a, b) {
    console.log(a, b);
    return a.length - b.length;
});

console.log(rivers)

// As shown in the output above, each element has been evaluated multiple times 
//e.g., Amazon 4 times, Congo 2 times, etc.

// If the number of array elements is increasing, it will potentially 
//decrease the performance.

// You cannot reduce the number of times that comparison function is executed. 
//However, you can reduce the work that the comparison has to do. This technique 
//is called Schwartzian Transform.

// To implement this, you follow these steps:

// First, extract the actual values into a temporary array using the map() 
//method.
// Second, sort the temporary array with the elements that are already 
//evaluated (or transformed).
// Third, walk the temporary array to get an array with the right order.

let lengths = rivers.map((element, index) =>{
	return {index, value: element.length}
})

console.log({lengths})

lengths.sort((a, b) => {
	return +(a.value > b.value) || +(a.value === b.value) - 1
})

console.log({lengths})

let sortedRivers = lengths.map(elem => rivers[elem.index])

console.log(sortedRivers)

