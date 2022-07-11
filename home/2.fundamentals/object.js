// In JavaScript, and object is an unordered collection of key-value pairs. Each key-value pair is 
//called a property.

// Creating an object
const person = {
  firstName: 'John',
  lastName: 'Doe'
}
console.log(person)

// Accessing properties
person.firstName
person['lastName']

// Modifying the value of property
person.firstName = 'Michael'
console.log(person)

// Adding a new property to an object
person.age = 25
person.gender = 'male'
console.log(person)

// Deleting a property of an object
delete person.gender
console.log(person)

// Checking if a property exists ('propertyName' in objectName)
console.log('age' in person)



