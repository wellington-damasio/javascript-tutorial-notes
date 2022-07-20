// In computer programming, reflection is the ability of a program to manipulate variables, properties,
//and methods of objects at runtime

// ES6 introduced a new global object called Reflect that allows you to call methods, construct 
//objects, get and set properties, manipulate and extend properties.


// ----------------------------------------
//               Reflect API
// ----------------------------------------
// - Reflect.apply(): call a function with specified arguments
//
// - Reflect.construct(): act like the new operator, but as a function.
//
// - Reflect.defineProperty(): is similar to Object.defineProperty(), but return a boolean value 
// indicating whether the property was successfully defined
//
// - Reflect.deleteProperty(): behave like the delete operator, but as a function.
//
// - Reflect.get(): return the value of the property specified
//
// - Reflect.getOwnPropertyDescriptor(): returns a property descriptor of a property if the porperty
// exists, returns undefined otherwise
//
// - Reflect.getPrototypeOf(): work like the in operator, but as a function. It returns a boolean 
// indicating whether an property exists
//
// - Reflect.isExtensible(): is the same as Object.isExtensible()
//
// - Reflect.ownKeys(): return an array of the owned property keys of an object
//
// - Reflect.preventExtensions(): is similar to Object.preventExtensions()
//
// - Reflect.set(): assign a value to a property and return a Boolean value which is true if the 
// property is set successfully
//
// - Reflect.setPrototypeOf(): set the prototype of an object

// ------------------------------------------------------
//       Creating objects: Reflect.construct()
// ------------------------------------------------------
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

let args = ['John', 'Doe']

let john = Reflect.construct(Person, args)

console.log(john instanceof Person)
console.log(john.fullName)

// ------------------------------------------------------
//         Calling a function: Reflect.apply()
// ------------------------------------------------------
// The Reflect.apply() method provides the same features as the Function.prototype.apply() but less
//verbose
let result = Reflect.apply(Math.max, Math, [10, 20, 30])
console.log(result)

// ------------------------------------------------------
//     Define a property: Reflect.defineProperty()
// ------------------------------------------------------
let person2 = {
  name: 'Joe Massive'
}

if(Reflect.defineProperty(person2, 'age', {
  writable: true,
  configurable: false,
  enumerable: false,
  value: 25
})) {
  console.log(person2.age)
} else {
  console.log('Cannot define the age property of the person2 object')
}

if(Reflect.defineProperty(person2, 'age', {
  writable: false,
  configurable: false,
  enumerable: true,
  value: 22
})) {
  console.log(person2.age)
} else {
  console.log('Cannot define the age property of the person2 object')
}

