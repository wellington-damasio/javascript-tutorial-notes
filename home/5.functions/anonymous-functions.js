// Anonymous functions functions are functions without a name
// (function () {
//   //...
// })

(function() {
  console.log('IIFE - Immediately Invoked Function Expression')
})()

// If you don't place the anonymous function inside the (), you'll get a syntax error. The () makes
//the anonymous function an expression that returns a function object

// Anonymous functions as variables
let show = function () {
  console.log('Anonymous function inside a variable. Call it by the variable name')
}

show()

// Arrow Functions
// Provides a shorthand for declaring anonymous functions
let sayHi = () => 'Hi, this is an arrow function'
console.log(sayHi())

const add = (a , b) => a + b
console.log(add(23, 22))
