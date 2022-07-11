// Arrow functions present a shorter syntax for writing functions
let add = function (x, y) {
  return x + y
}

let betterAdd = (x, y) => x + y

console.log(add(2, 3))
console.log(betterAdd(2, 3))

// Arrow functions with a single parameter
let names = ['John', 'Mackenzie', 'Wellington', 'Jamilton']
let lengths = names.map(name => 'Name: ' + name + ' ; Length: ' + name.length)

console.log(names)
console.log(lengths)

// Arrow functions with no parameter

let sayHi = () => 'Hi, guys!!!'

console.log(sayHi())

// JavaScript arrow functions and object literal
// The following code causes an error
let setColor = color => {value: color}

console.log(setColor('blue')) // undefined

// To make return object literals work in arrow function you'll need to do this:
let setName = name => { return {name: name}}

let anaMari = setName('Ana Maria Lucia')
console.log(anaMari.name)

// Arrow function vs regular function
// In JavaScript, a new function defines its own this value. However, thats not the cas for the arrow
//functions

// There are 2 main differences between an arrow function and a regular function
//  1) First, in the arrow function, the this, arguments, super, new.target are lexical. It means 
//that the arrow function uses these variables from the enclosing lexical scope
//  2) Second, the arrow function cannot be used as a function constructor. If you user the new
//keyword to create a new object from an arrow function, you will get an error

function Car() {
  this.speed = 0

  this.speedUp = function (speed) {
    this.speed = speed
    setTimeout(function () {
      console.log(this.speed)
    }, 1000);
  }
}

let car = new Car()
car.speedUp(50) // undefined, the this of the setTimeout shadowed the this of the speedUp method

function Car2() {
  this.speed = 0

  this.speedUp = function(speed) {
    this.speed = speed
    let self = this
    setTimeout(function () {
      console.log(self.speed)
    }, 1000);
  }
}

let car2 =  new Car2() 
car2.speedUp(90) // 90, the this of the speedUp function was saved on the self variable

// Unlike an anonymous function, an arrow function captures the `this` value of the encolosing context
//instead of creating its own `this` context.

function Car3() {
  this.speed = 0

  this.speedUp = function(speed) {
    this.speed = speed
    setTimeout(() => {
      console.log(this.speed)
    }, 1000);
  }
}

let car3 = new Car3()
car3.speedUp(110) // 110, the arrow function used the `this` of the speedUp function (enclosing context)

// JavaScript arrow functions and the arguments object
function show() {
  return x => x + arguments[0]
}

let display = show(10, 20) // Show provides the arguments and returns a function that uses arguments
console.log(display)
let result = display(5) // Invoking the arrow function that returns from the show() function
console.log(result)

// Obs: Note that the arguments the arrow function is using is the arguments of the show() function

// JavaScript arrow functions and the prototype property
function dump(message)  {
  console.log(message)
}

console.log(dump.hasOwnProperty('prototype')) // true

// Arrow functions don't have the prototype property
let dump2 = message => console.log(message)
console.log(dump2.hasOwnProperty('prototype')) // false

// It's a good practice to use arrow functions for callbacks and closures because the syntax is cleaner

