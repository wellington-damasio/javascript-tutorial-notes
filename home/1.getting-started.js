// JavaScript is a programming language designed to interact with element of the web page.

// JavaScript has 3 main parts in the web:
//   1. ECMAScript, the core functionality
//   2. Document Object Model (DOM), interface for  interacting with elements on the web
//   3. Browser Object Model (BOM), browser API for interacting with the web browser
// JavaScript is tipically used with HTML and CSS to enhance web page's functionality, 
//such as validating forms, creating interactive maps, and displaying animated charts

// Client-side vs. Server-side JavaScript
// JavaScript can run both web browsers and servers. A popular server-side environment is Node.js.
// Unlike client-side JavaScript executes on the server that allows you to access databases, file
//systems, etc.

// OVERVIEW
// Defining variables
let x = 10
let y = 'string'
// We dont define variable types in JavaScript

// FUNCTIONS
// Declaring functions
function add(a,b) {
  return a + b
}

// Calling functions
add(23, 22)
let result = add(33, 44)
// We can call functions directly or in variables

// CONDITIONALS
// if-else
let a = 20
let b = 30

function divide(a, b) {
  if(a == 0 || b == 0) {
    throw 'Division by 0 is not possible'
  } else {
    return a / b
  }
}

// ARRAYS
// Declaring arrays
let items = []

// Declaring arrays with items already in there
let numbers = [2, 3, 4, 5]

// LOOPS
// for-loop
for(let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

// for-of
const names = ['Wellington', 'Carla', 'Patricia', 'Mario', 'Leticia']
for(let name of names) {
  console.log(name)
}

