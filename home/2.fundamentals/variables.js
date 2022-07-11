// DECLARE A VARIABLE
var message;
// Variable names follow theses rules
//   - Variblae names are case-sensitive
//   - Variable names can  only contain letters, numbers, underscores or dollar signs and cannot 
//   contain spaces.
//   - Variable names must begin with a letter, underscore (_) or a dollar sign ($)
//   - Variable names cannot use the reserved words

// By convention, variable names use camelCase
// JavaScript is dinamically typed, which means you don't have to specify the type of the variable
//when declaring it.

// Is a good practice to use the `let` keyword to declare a variable.
// The let keyword has a scope of block that var doesnt have

// INITIALIZE A VARIABLE
// To initialize a variable, you specify the variable name, followed by an equals sign (=)
let message = 'Hello'
let name;
name = 'Wellington'

// JavaScript allows you to declare two or more variables using a single statement, just separte them
//with coma (,)
let age = 19,
    gender = 'm',
    parents = {
      mother: 'Aline Ap.',
      father: 'Wellington D.'
    }

// UNDEFINED VS UNDECLARED VARIABLES
let message
console.log(message) // message is undefined
// undefined == You declared the variable, but you didn't specify it's value

console.log(car) // car is not defined
// not defined == You didn't even declared the variable

// CONSTANTS
// A constant holds a value that doesn't change.
// When declaring a constant you need to initalize it with a value
const workday = 5
workday = 2 // error: Assignment to constant variable




