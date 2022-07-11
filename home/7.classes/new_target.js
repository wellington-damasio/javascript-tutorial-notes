// ES6 provides a metaproperty named new.target that allows you to detect whether a function or 
//constructor was called using the new operator

// In arrow functions, the new.target is the one that belongs to  the surrounding function

// The new.target is very useful to inspect at runtime whether a function is being executed as function
//or as a constructor. It is also handy to determine a specific derived class that was called by 
//using the new operator from within a parent class

function Person(name) {
  this.name = name
}

let john = new Person('John Doe')
console.log(john.name)

let lily = Person('Lily') // called without new goes to the globalThis
console.log(globalThis.name) // globalThis ==  module.exports on Node.js and window on browsers

function Car(name, brand) {
  if(!new.target) {
    throw "Must use new operator to call the Car constructor function"
  }
  this.name = name
}

let ferrari = new Car('812', 'Ferrari')
console.log(ferrari)

// let lamborghini = Car('Aventador', 'lamborghini') // Error

// new.targert in constructors
// In class constructor, the new.target refers to the constructor that was invoked directly by the new
//operator. It is true if the constructor is in the parent class and was delegated from the constructor
//of the child class

class Human {
  constructor(name) {
    this.name = name
    console.log(new.target.name)
  }

  getNewTarget() {
    console.log(new.target)
  }
}

class Employee extends Human {
  constructor(name, title) {
    super(name)
    this.title = title
  }
}

let welly = new Person('Wellington Damasio')
let leti = new Employee('Leticia Araujo', 'Cozinheira')
let carlos = new Person('Carlos Sainz')
console.log(welly)
console.log(leti)
leti.getNewTarget()
console.log(carlos)




