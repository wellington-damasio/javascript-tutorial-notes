// To merge two arrays, you use the concat() method of an Array object. The
//concat() method returns a new array and doesn't change the original arrays

let odds = [1, 3, 5]
let evens = [2, 4, 6]

let combined = odds.concat(evens)

console.log('Result: ', combined)
console.log('Odds: ', odds)

// The concat() method allows you to merge more than two arrays as shown in the 
//following example:

let upper = ['A', 'B', 'C', 'D']
let lower = ['a', 'b', 'c', 'd']
let digits = [1, 2, 3]
let alphanumerics = upper.concat(lower, digits)

console.log({alphanumerics})

// -----------------------------------------------------
//      Using spread operator instead of concat()
// -----------------------------------------------------
let names = ['Wellington', 'Ana', 'Yago', 'Leonardo', 'Isabela']
let numbers = [10, 3, 4, 9, 8]
let randomArray = [...names, ...numbers]

console.log({randomArray})

