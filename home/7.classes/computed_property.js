// ES6 allows you to use an expression in brackets []. It'll then use the result of the expresssion as
//the property name of an object.

let propName = 'c'
const rank = {
  a: 1,
  b: 2,
  [propName]: 3
}

console.log(rank)

let name = 'fullName'

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get [name]() {
    return `${this.firstName} ${this.lastName}`
  }
}

let person = new Person('Wellington', 'Damasio')
console.log(person)
console.log(person.fullName)
