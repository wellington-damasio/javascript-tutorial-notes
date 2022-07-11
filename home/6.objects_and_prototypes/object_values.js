// ES2017 introduced a new method called Object.values() that allows you to return an array of own
//enumerable property's values of an object

// Object.values() vs. for...in
const person = {
  firstName: 'Wellington',
  lastName: 'Damasio',
  age: 19
}

let properties = []

// Accessing the properties via for...in
for(const property in person) {
  if(person.hasOwnProperty(property)) {
    properties.push(person[property])
  }
}

console.log(properties)

// Accessing properties via Object.values
console.log(Object.values(person))

// The Object.values() returns own enumerable properties while the for...in loop iterates properties
// in the prototype chain.

// If you use the for...in loop with the Object.hasOwnProperty() method, you will get the same set of
// values as the Object.values()


