// A rest parameter allows you to represent an indefinite number of arguments as an array

// function fn(a, b, ...args) {
//
// }

// All the arguments you pass to the function will map to the parameters list. In this syntax above, 
//the first argument maps to a, the second maps to b, and the third, fourth, ect... will be stored 
//in the rest parameter

// fn(1, 2, 3, 'A', 'B', 'C')

// The args array stores the following values:  
// [3, 'A', 'B', 'C'] 

// The rest parameters must appear at the end of the arguments list. 
// function fn(a, b ...rest, d) {
//  // error
// }

// More JavaScript rest parameters examples
function sum(...args) {
  let total = 0

  for(let value of args) {
    total += value
  }

  return total
}

console.log(sum(23, 22, 12, 23))

// Building a function the filter elements by type
function filterBy(type, ...args) {
  return args.filter(e => typeof e === type)
}

console.log(filterBy('boolean', 23, false, true, 23 , 11, false))
console.log(filterBy('number', 23, false, 'Striong', 33, 98))

// Rest parameters and arrow functions
// If you want to pass some arguments to the arrow function, you must use the rest parameter

const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + ' ' + curr
  })
}

let message = combine('JavaScript', 'is', 'an', 'awesome', 'language')
console.log(message)

// Rest parameters in a dynamic function
let showNumbers = new Function('...numbers', 'console.log(numbers)')
showNumbers(23, 11, 232, 42652)

