// A closure is a function that references variables in the outer scope from its inner scope
// The closure preserves the outer scope inside its inner scope

// Lexical scope
// Defines the scope of a variable by the position of that variable declared in the source code

let name =  'John'

function greeting() {
  let message = 'Hello'
  console.log(message + ' ' + name)
}

greeting()

// Basically, functions can access variables in their outer scope, but not in further scopes in their
//inner scope

function greeting2() {
  let message = 'Hi'

  function sayHi() {
    console.log(message)
  }

  sayHi()
}

greeting2()

function greeting3(message){
   return function(name) {
     return message + ' ' + name
   }
}

let sayHi = greeting3('Hi') // return of greeting3 function is the second function
let sayHello = greeting3('Hello')

console.log(sayHi('Wellington'))
console.log(sayHello('Camila'))

// JavaScript closures in a loop
for(let index = 1; index <= 3; index++) {
  setTimeout(() => {
    console.log('after ' + index + ' second(s): ' + index)
  }, index * 1000);
}

// Summary
//  - Lexical scoping describes how the JavaScript engine uses the location of the variable in the 
//code to determine where that variable is available
//  - A closure is a combination of a function and its ability to remember variables in the outer
//scope
