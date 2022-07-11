// The Function.prototype has the call() method with the following syntax:
//        functionName.call(thisArg, arg1, arg2, arg3, ...)
//
//  - The thisArg is the object that the `this` object references inside the function functionName
//  - The arg1, arg2... are the function arguments passed into the functionName

function add() {
  let result = 0
  for(let arg of arguments) {
    result += arg
  }

  return result
}

console.log(add(23, 455 , 22))

let result = add.call(this, 10 , 20, 33) // In this case, this is the global object

console.log(result)

class Product {
  #name
  #category
  constructor(name, price, category) {
    this.#name = name
    this.price = price
    this.#category = category
  }
  get name() {
    return this.#name
  }

  get category() {
    return this.#category
  }

  priceWithDiscount(discount) {
    return this.price - (this.price * (discount / 100))
  }
}

let cup = new Product('cup', 5.45, 'cozinha')
console.log(cup)
console.log(cup.category)
console.log(cup.name)
console.log(cup.price)
console.log(cup.priceWithDiscount(20))

let car = {
  name: 'Civic',
  brand: 'Honda',
  price: 120000
}

let carWithDiscount = cup.priceWithDiscount.bind(car)
console.log(carWithDiscount(20))

console.log(cup.priceWithDiscount.call(car, 39))

// Using the call() method for chaining constructors of an object.
function Box(height, width) {
  this.height = height
  this.width = width
}

function Widget(height, width, color) {
  Box.call(this,height, width)
  this.color = color
}

let widget = new Widget('red', 100, 200)
console.log(widget)

// Using the JavaScript call() method for function borrowing
const superCar = {
  name: 'superCar',
  start() {
    console.log(`Start the ${this.name}`)
  },
  speedUp() {
    console.log(`Speed up the ${this.name}`)
  },
  stop() {
    console.log(`Stop the ${this.name}`)
  }
}

const aircraft = {
  name: 'aircraft',
  fly() {
    console.log(`Flying the ${this.name}`)
  }
}

superCar.speedUp()
superCar.speedUp.call(aircraft)
superCar.stop.call(aircraft)
aircraft.fly()

// Technically, the `aircraft` object borrows the start() and speeUp() method of the car object. And
//function borrowing refers to an object that uses a method of another object

// The following illustrates how to `arguments` object borrows the filter() method of the 
// Array.prototype via call method

function isOdd(number) {
  return number % 2 
} 

function getOddNumbers() {
  console.log(arguments) // arguments is an array-like object
  return Array.prototype.filter.call(arguments, isOdd)
} 

console.log(getOddNumbers(20 , 33, 12, 22 , 31 , 22 , 42, 12 , 44 , 56 , 667 , 313 ,145643))

let testObj = {
  '0': 22,
  '1': 31,
  '2': 21,
  '3': 55,
  '4': 44
}

function isEven() {
  return number % 2 == 0
}

function getEvenNumbers(array) {
  return Array.prototype.filter.call(array, isEven)
}

console.log(getEvenNumbers(testObj)) // [ ]

