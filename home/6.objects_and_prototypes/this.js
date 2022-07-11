// What is the `this` keyword?
let counter =  {
  count: 0,
  next: function() {
    return ++this.count // this == property count of the counter object
  }
}

counter.next()
counter.next()
console.log(counter.count) // 2

// Global context
// In the global context, `this` references the global object, which is the window object on the 
//web browser or global object on Node.js
console.log(this)

let a = 2
let name = 'WELLINGTON'

console.log(this)

this.name = name // declarando variaveis no escopo global (global obj)
this.a = a

console.log(this)
// console.log(this === window) // window is not defined (only on browser)
console.log(this === global)
console.log(this === module.exports) // this === module.exports on Node.js

function show() {
  console.log(this === module.exports)
  console.log(this === Object.prototype)
}

show()

// Method invocation
// When you call a method of an object, JavaScript sets this to the object that owns the method. See
//the following car object.
let car = {
  brand: 'Honda',
  getBrand: function () {
    return this.brand
  }
}

console.log(car.getBrand())

let brand = car.getBrand.bind(car) // fazemos o this se referenciar ao object car
console.log(brand())

// You get undefined instead of 'Honda' because when you call a method without specifying its object,
//JavaScript sets this to the global object in non-strict mode and undefined in the strict mode

// To fix this issue, you use the bind() method of the Function.prototype object. The bind() method
//creates a new function whose the this keyword is set to a specified value

let bike = {
  brand: 'Shimano'
}

console.log(car.getBrand.bind(bike)())

// Indirect Functions
// The function type in JavaScript has two methods: call() and apply(). These methods allow you to set
//the this value when calling a function. For example:
function getName(prefix) {
  console.log(prefix + ' ' + this.name)
}

let well = {
  name: 'Wellington'
}

let leti = {
  name: 'Leticia'
}

getName.call(well, 'Hey')
getName.call(leti, 'Hi')

class Car {
  constructor(name, brand, price, engine) {
    this.name = name
    this.brand = brand
    this.price = price
    this.engine = engine
  }
}

let ferrari = new Car('LaFerrari', 'Ferrari', 2700000, 'V12')

function getDiscountedPrice(prefix, discount) {
  let price = this.price
  let discountedPrice =  price - (price * (discount / 100))
  return prefix + ' R$' + discountedPrice + ' with  a discount of ' + discount + '%'
}

console.log(getDiscountedPrice.apply(ferrari, ['The price of this car is...', 20]))

// Arrow functions
// In arrow functions, JavaScript sets `this` lexically.
// It means arrow the function does not create its own execution context but inherits the `this` from
//the outer function where the arrow function is defined.
let getArrowThis = () => this
let getThis = function() { this }

console.log(getArrowThis() === module.exports)
console.log(getThis() === module.exports)

// Since an arrow function does not create its own execution context, defining a method using a arrow
//function will cause an issue

function Car2() {
  this.speed = 120
}

Car.prototype.getSpeed = () => this.speed

let car2 = new Car2()
// console.log(car.getSpeed()) // not a function





