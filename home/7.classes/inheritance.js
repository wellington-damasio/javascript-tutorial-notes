// Prior to ES6, implementing a proper inheritance required multiple steps. One of the most commonly 
//used strategies is prototypal inheritance
function Animal(legs) {
  this.legs = legs
}

Animal.prototype.walk = function() {
  console.log('Walking on ' + this.legs + ' legs')
}

function Bird(legs) {
  Animal.call(this, legs)
}

Bird.prototype = Object.create(Animal.prototype)
Bird.prototype.constructor = Animal

Bird.prototype.fly = function() {
  console.log('flying')
}

let pigeon = new Bird(2)
pigeon.walk()
pigeon.fly()

// ES6 simplified these steps with the extends and super keyword
class Animal2 {
  constructor(legs) {
    this.legs = legs
  }

  walk() {
    console.log(`Walking on ${this.legs} legs`)
  }
}

class Bird2 extends Animal2 {
  constructor(legs, color) {
    super(legs)
    this.color = color
  }

  fly() {
    console.log('flying...')
  }
}

let bird = new Bird2(2, 'blue')
bird.walk()
bird.fly()
console.log(bird.color)

// Because the super() initializes the this object, you need to call the super() before accessing 
// the this object. Trying to access this before calling super() results in an error

// Shadowing methods
// ES6 allows the child class and parent class to have methods with the same name. In this case, when
//you call the method of an object of the child class, the method in the child class will shadow the
//method in the parent class

// To call the method of the parent class in the child class, you use super.method(arguments)
class Dog extends Animal {
  constructor() {
    super(4)
  }

  walk() {
    super.walk()
    console.log('Dog walking...')
  }
}

let dogao = new Dog()
dogao.walk()

// Inheriting from built-in types (Array, String, Object, Map)
class Queue extends Array {
  enqueue(e) {
    super.push(e)
  }

  dequeue() {
    return super.shift()
  }
  
  peek() {
    return !this.empty() ? this[0] : undefined
  }

  empty() {
    return this.length === 0
  }
}

let customers = new Queue()

customers.enqueue('A')
customers.enqueue('B')
customers.enqueue('C')
customers.enqueue('D')

console.log(customers)

while(!customers.empty()) {
  // console.log(customers.dequeue())
  console.log(customers)
  customers.dequeue()
}
