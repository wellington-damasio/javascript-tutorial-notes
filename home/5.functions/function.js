// To avoid repeating the same code all over places, you can use a function to wrap that code and
//reuse it.

// Declare a function
function functionName(parameters) {
  //function body
  //...
}

// The function name must be a valid JavaScript identifier. By convention, the function names are
//in camelCase and start with verbs like: getData(), fetchContents(), isValid()
// Functions can have zero or multiple parameters
function say() {
  console.log('Hello')
}

function printMessage(msg) {
  console.log(msg)
}

function subtract(a, b) {
  console.log(a - b)
}

// Calling functions
say()
printMessage('Hi there!')
subtract(12, 3)

// Parameters vs Arguments
// The terms 'parameters' and 'arguments' are often used interchangeably. However, they are essentialy
//different
// When declaring a function, you specify parameters. When calling a function, you pass the arguments
//that are corresponding to the parameters.

// Returning a value 
// Every function in JavaScript returns undefined unless you specify a return value
function sayHi(message) {
  console.log(message)
}

let hi = sayHi('Hi, mf!')
console.log('Message: ' + hi)

function add(a, b) {
  return a + b
}

let sum = add(23, 22)
console.log('Sum: ' + sum)

// The following example uses multiple return statements  in a function to return different values 
//based on conditions
function compare(a, b) {
  if(a > b) {
    return -1
  } else if(a < b) {
    return 1
  } else {
    return 0
  }
}

console.log(compare(1, 0)) // -1
console.log(compare(2, 3)) // 1
console.log(compare(2, 2)) // 0

// The function immediatyle  stops executing when it reaches the return statement. Therefore, you can
//use the return statement without a value to exit the functin prematurely.
function saySomething(message) {
  if(!message) { // If there's not message
    return 'There\'s no message, baby!'
  }

  return message
}

console.log(saySomething('something...'))
console.log(saySomething())

// The arguments object
// Inside a function, you can access an object called 'arguments' that represent the named arguments
//of a function
// The 'arguments' object behaves like an array though it is not an instace of the Array type.

// You can use the square bracket '[]' to access the arguments (arguments[2])
// Also, you can use the length property of the arguments object to determine the number of arguments

function add() {
  let sum = 0
  for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }

  return sum
}

let sumThis = add(23, 4, 22, 42, 11 ,2 , 3, 22)
console.log(sumThis)

// Function hoisting
// In JavaScript you can use function before declaring it. It is called hoisting
showMe()
hoisting('It accepts parameters too...')

function showMe() {
  console.log('This is a hoisting function')
}

function hoisting(msg) {
  console.log(msg)
}

