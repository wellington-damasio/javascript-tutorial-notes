// JavaScript classes are syntatic sugar over the prototypal inheritance. In other words, ES6 classes
//are just special functions
function Person(name) {
  this.name = name
}

Person.prototype.getName = function () {
  return this.name
}

let john = new Person('John Doe')
console.log(john.getName())

// The following statements use the instanceof operator to check if john is an instance of the Person
//and Object:
console.log(john instanceof Person) // true
console.log(john instanceof Object) // true

// ES6 Class declaration
  class Car {
  constructor(name, brand, engine, gearboxType) {
    this.name = name
    this.brand = brand
    this.engine = engine
    this.gearboxType = gearboxType
  }

  getName() {
    return this.name
  }

  getBrand() {
    return this.brand
  }

  getEngine() {
    return this.engine
  }

  getGearboxType() {
    return this.gearboxType
  }
}

let lambo = new Car('Aventador', 'Lamborghini', 'V10', 'Automatic')
console.log(lambo)
console.log(lambo.getName())
console.log(lambo.getEngine())

// Class vs Constructor Functions 
//  1) class declarations are not hoisted like function declarations
//  2) all code inside a class automatically executes on strict mode. And you cannot change this 
//behavior
//  3) class methods are non-enumerable.
//  4) calling an class constructor without the new operator will result in an error
