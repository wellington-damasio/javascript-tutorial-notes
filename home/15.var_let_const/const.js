// The const keyword create a read-only reference to a value.
// By convention, constant identifiers are in uppercase

  // const CONSTANT_NAME = value

const RATE = 0.1
console.log(RATE)

// RATE = 0.2 // error (assignment to a constant variable)

// You need to initialize a value to a const otherwise it will result in an error

// const RED // error: Missing initializer of const declaration

// -----------------------------------------------
//         JavaScript const and Objects
// -----------------------------------------------
// The const keyword ensures that the variable it creates is read-only. However, it doesn't mean that 
//the actual value to which the const variable reference is immutable

const person = {age: 20}
person.age = 30
console.log(person.age) // 30

// If you wnat the value of person object to be immutable, you have to freeze it by using the 
//Object.freeze() method
const company = Object.freeze({
  name: 'ABC Corporation',
  address: {
    street: 'North 1st stree',
    city: 'San Maria',
    state: 'KA',
    zipcode: 98662
  }
})

company.name = 'DEF Corporation' // Did not change the name of the object
console.log(company)

company.address.city = 'Kalikula' // The adress object inside the company object is not frozen
console.log(company)
