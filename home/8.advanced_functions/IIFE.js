// A Immediately Invoked Function Expression is a function defined as an expression and executed 
//immediately after creation.

// (function(){
//
// }())


// When you define an IIFE, the JavaScript engine adds the function to the global object.

// function add(a,b) {
//   return a  + b
// } // This function would be on the window object of the browser

// If you have many global variables and functions, the JavaScript engine will only release the memory
//allocated for them until the global object loses its scope
// As a result, the script may use the memory inefficiently. On top of that, global variables and
//functions will likely cause name collisions

// In JavaScript, a function can be declared as an expression.
let sum = function(a, b) {
  return a + b
}

console.log(sum(30, 90))

// You can invoke the function assigned immediately
let subtract = (function(a , b) {
  return a - b
})(20, 8)

console.log(subtract)

// The following expression is called na immediately invoked function expression (IIFE) because the 
//function is created as an expression and executed immediately

// An IIFE can have a name, but it cannot be invoked again after execution
// (function name(params) {
//   
// })()
