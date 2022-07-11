// JavaScript specifies the characteristics of properties of objects via internal attributes such as
//configurable, enumerable, writable, get, set, and value.
// ex: [[Enumerable]]

// Objects have two types of properties: data || accesor 

// 1) Data Properties
// A data property contains a single location for a data value: A data property has 4 attributes
//  1. [[Configurable]: determines whether a property can be redefined or removed via delete operator
//  2. [[Enumerable]]: indicates if a property can be returned in the for...in loop
//  3. [[Writable]]: specifies that the value of a property can be changed
//  4. [[Value]]: contains the actual value of a property

// By default the [[Configurable]], [[Enumerable]] and [[Writable]] attributes set to true for all
//properties defined directly in the object. The default value of [[Value]] is undefined

let person = {}
person.age = 25
console.log(person)

delete person.age 
console.log(person)

Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'Wellington'
})

console.log(person.name)
console.log('person: ' + Object(person))
console.log('person.prototype: ' + Object(person.prototype))
delete person.name

console.log(person.name) // didn't delete the name property since it is configurable false

person.age = 25
person.lastName = 'Damasio'
person.gender = 'male'
Object.defineProperty(person, 'bankAccount', {
  enumerable: false,
  value: 'R$4.000.000,00'
})

console.log(person)
console.log(person.bankAccount)

for(let prop in person) {
  console.log(prop)
}

Object.defineProperty(person, 'favF1DRiver', {
  writable: false,
  value: 'Verstappen'
})

console.log(person)
person.favF1DRiver = 'Hamilton'
console.log(person.favF1DRiver)
console.log(person.bankAccount)

// 2) Accessor Properties
// Accessor properties also have [[Configurable]] and [[Enumerable]] attributes
// But the accessor properties have the [[Get]] and [[Set]] attributes instead of [[Value]] and
//[[Writable]]

let human = {
  firstName: 'Leonardo',
  lastName: 'DaVinci'
}


Object.defineProperty(human, 'fullName', {
  get: function() {
    return this.firstName + ' ' + this.lastName
  },
  set: function(value) {
    let parts = value.split(' ')
    if(parts.length === 2) {
      this.firstName = parts[0]
      this.lastName = parts[1]
    } else {
      throw 'Invalid name format... insert: [firstName lastName]'
    }
  }
})

console.log(human.fullName)

// In the case above, we're using the set function to check if the name is in the correct format

// DEFINE MULTIPLE PROPERTIES
let product = {}

Object.defineProperties(product, {
  name: {
    value: 'Smartphone',
    configurable: false
  },
  price: {
    value: 999,
    enumerable: false
  },
  tax: {
    value: 0.1 // (10%)
  },
  netPrice: {
    get: function() {
      return this.price * (1 + this.tax)
    }
  }
})

delete product.name // didnt delete
console.log('The net price of a ' + product.name + ' is U$' + product.netPrice) 

for(let props in product) {
  console.log(props)
}

// JAVASCRIPT OBJECT PROPERTY DESCRIPTOR
// The Object.getOwnPropertyDescriptor() method allows you to get the descriptor object of property.
let descriptor = Object.getOwnPropertyDescriptor(human, 'firstName')
console.log(descriptor)


// SUMMARY
// - JavaScript objects have two types of properties: data properties and acccessor properties
// - JavaScript uses internal attributes denoted by [[...]] to describe the characteristics of 
// properties such as [[Configurable]], [[Enumerable]], [[Writable]], [[Value]], [[Get]], [[Set]]
// - The method Object.getOwnPropertyDescriptor() return a property descriptor of a property in an
// object
// - A property can be defined directly or indirectly via the Object.defineProperty() or 
// Object.defineProperties() methods. 





