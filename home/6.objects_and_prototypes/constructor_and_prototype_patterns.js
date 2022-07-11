// The combination of the constructor and prototype patterns is the most common way to define custom
//types in ES5. In this pattern:
//  1. The constructor pattern defines the object properties
//  2. The prototype pattern defines the object methodsA

// A non-Class way of writing (object-oriented) constructor functions:
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName
}

let p1 = new Person('Davi', 'Golias')
let p2 = new Person('Marques', 'Nogueira')

console.log(p1.getFullName())
console.log(p2.getFullName())

// Classses in ES6
// ES6 introduces the keyword that makes the constructor/prototype pattern easier to use.
class Computer {
  constructor(motherboard, memory, storage, processor) {
    this.motherboard = motherboard
    this.memory = memory
    this.storage = storage
    this.processor = processor
  }

  getSpecifications() {
    return {
      motherboard: this.motherboard,
      memory: this.memory,
      storage: this.storage,
      processor: this.processor
    }
  }

  turnOn() {
    console.log('PC is on')
  }

  turnOff() {
    console.log('Turning the system off...')
  }
}

let myPC = new Computer('ASUS', '16GB DDR4', '200Gb SSD', 'AMD Athlon')
console.log(myPC.getSpecifications())
console.log(myPC.turnOn())
console.log(myPC.turnOff())



