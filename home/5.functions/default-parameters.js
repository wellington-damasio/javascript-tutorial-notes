function say(msg='Hi, there!') {
  console.log(msg)
}

say()
say('Hey, mf!')

// Default parameters allow you to initialize named parameters with default values if no values or
//undefined is passed into the function

// function createDiv(height = '100px', width = '100px', border = 'solid 1px lightcoral') {
//   let div = document.createElement('div')
//   let divStyle = div.style
//
//   divStyle.height = height
//   divStyle.width = width
//   divStyle.border = border
//
//   document.body.appendChild(div)
//
//   return div
// }

// Evaluating default parameters
// JavaScript engine evaluates the default arguments at the time you call the function.

function put(toy, toyBox = []) {
  toyBox.push(toy)
  return toyBox
}

console.log(put('Race Car'))
console.log(put('Teddy Bear'))

const toyBox = []

function optPut(toy, box = toyBox) {
  box.push(toy)
  return box
}

console.log(optPut('Race Car'))
console.log(optPut('Teddy Bear'))
console.log(optPut('Barbie doll'))

// The parameter can take a default value which is a result of a function
function date(d = today()) {
  console.log(d)
}

function today() {
  return (new Date()).toLocaleDateString('pt-BR')
}

date()

// We can use this feature to make arguments mandatory. If the caller doesn't pass any argument, we throw
//an error as follows
function requiredArg() {
  throw new Error('This argument is required')
}

function add(x = requiredArg(), y = requiredArg()) {
  return x + y
}

console.log(add(23, 22))
// console.log(add(23))

// Using other parameters in default values
// You can assign a parameter a default value that references to other default paremeters as shown in 
//the following example

function subtract(x = 1, y = x, z = x + y) {
  console.log(x, y, z)
  return x - y - z
}

console.log(subtract())
console.log(subtract(2))
console.log(subtract(2, 10))
