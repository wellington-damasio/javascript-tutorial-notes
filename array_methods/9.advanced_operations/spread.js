// ES6 provides a new operator called spread operator that consists of three dots (...). The spread
//operator allows you to spread out elements of an iterable object such as array, map or set.

const odd = [1, 3, 5]
const combined = [2, 4, 6, ...odd]

console.log({combined})

function printArgs(a, b, c, ...args) {
    console.log(args)
}

printArgs(12, 33, 4, 12, 444, 55, 6, 7, 12, 43)

// ------------------------------------------------------------------------------
//                 JavaScript Spread Operator and apply() method
// ------------------------------------------------------------------------------
function compare(a, b) {
    return a - b
}

// In ES5, to pass an array of two numbers to the compare() function, you often use the apply() method
//as follows:
let result = compare.apply(null, [1, 2]);
console.log(result); // -1

// However, by using the spread operator, you can pass an array of two numbers to the compare() function:
result = compare(...[1, 2])

console.log({result})

// ------------------------------------------------------------------------------
//           A better way to use the Array’s push() method example
// ------------------------------------------------------------------------------
let rivers = ['Nile', 'Ganges', 'Yangte']
let moreRivers = ['Danube', 'Amazon']

// Array.prototype.push.apply(rivers, moreRivers)
rivers.push(...moreRivers)

console.log({rivers})

// ------------------------------------------------------------------------------
//                      JavaScript spread operator and strings
// ------------------------------------------------------------------------------
// When we applied the spread operator to the `BC` string, it spreads out each individual character of
//the string 'BC' into individual characters.
let chars = ['A', ...'BCD', 'E','F']
console.log({chars})

