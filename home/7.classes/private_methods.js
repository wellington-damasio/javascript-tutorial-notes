/*
class MyClass {
  #privateMethod() {
    //...
  }
 }
*/

// In this syntax, the privateMethod() can only be called inside the MyClass. Like this:
// this.#privateMethod()

// The following illustrates the syntax of defining a private static method

// class MyClass {
//   static #privateMethod() {
//     //...
//   }
// }


// The follwoing shows the syntax for the private getters/setters

// class MyClass {
//   #field
//
//   get #myField)() {
//     return #field
//   }
//
//   set #myField(value) {
//     #field = value
//   }
// }

// In practice, you use private methods to minimize the number of methods that the object exposes

// As a rule of thumb, you should make all class methods private by default first. And then you make a
//method public whenever the object need to use that method to interact with other objects

// 1) Private instace method example
class Person {
  #firstName
  #lastName

  constructor(firstName, lastName) {
    this.#firstName = Person.#validate(firstName)
    this.#lastName = Person.#validate(lastName)
  }

  getFullName(format = true) {
    return format ? this.#firstLast() : this.#lastFirst()
  }
  
  #firstLast() {
    return `${this.#firstName} ${this.#lastName}`
  }

  #lastFirst() {
    return `${this.#lastName}, ${this.#firstName}`
  }

  // 2) Private static method
  static #validate(name) {
    if(typeof name === 'string') {
      let str = name.trim()

      if(str.length >= 3) 
        return str
    } else {
      throw 'The name must be a string with at least 3 characters'
    }
  }
}

let person = new Person('Wellington', 'Damasio')

console.log(person)
console.log(person.getFullName())
console.log(person.getFullName(false))
console.log(person.firstName) // undefined (cannot access that property)
// console.log(person.lastFirst()) // Error: not a function

let secondPerson = new Person('Al' , 'Abuambi')
console.log(secondPerson)
console.log(secondPerson.getFullName()) // fisrt name is undefined because of the #validate method
