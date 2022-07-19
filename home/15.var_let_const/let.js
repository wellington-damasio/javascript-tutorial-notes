// In ES5, when you declare a variable using the var keyword, the scope of the varible is either global
//or local. If you declare a variable outside of a function, the scope of the variable is global.
//When you declare a variable inside a function, the scope is local

// The let keyword, introduced in ES6, is similar to the var keyword, except  that these variables are
//scope-blocked

// Example of block-scope with var and let

let x = 10 

if(x == 10) {
   let x = 20
  console.log(x) // references the local x
}

console.log(x) // references the global x

var y = 10 

if(y == 10) {
  var y = 20
  console.log(y) // 20
}

console.log(y) // 20 (references the second declaration of the var because var is only scoped by 
//functions)

// -----------------------------------------------
//      JavaScript let and the global object
// -----------------------------------------------
// When you declare a global variable using the var keyword, you add that variable to the property 
//list of the global object. 

  // On the browser...
  // var a = 10
  // console.log(window.a) // 10

// However the let keyword is not attached to the global object as a property

  // let b = 20
  // console.log(window.b) // undefined


// --------------------------------------------------
//      JavaScript let variables and hoisting
// --------------------------------------------------
try {
  console.log(counter)
  let counter = 10
} catch (e) {
  console.log(e.name + ': ' + e.message) // Reference error, 
}

// JavaScript engine will hoist the let variable, but it does not initialize it. Therefore you get
//a ReferenceError

// --------------------------------------------------
//            Temporal Death Zone (TDZ)  
// --------------------------------------------------
{ // enter new scope, TDZ starts
  let log = function() {
    console.log(message)
  }

  // This is the TDZ and accessing log would cause a ReferenceError
  
  try {
    console.log(typeof message)
  } catch (e) {
    console.log({Name: e.name, Message: e.message})
  }
  
  let message = 'Hello'
  log()
}

// Summary 
// - Variables declared using the let keyword are block-scoped, are not initialized to any value, and
//are not attached to the global object.
// - Redeclaring a variable using the let keyword will cause an error
// - A TDZ of a variable declared using let stars from the block until the initialize is evaluated




