// A factory function is a function that returns a new object.
// With factory function you avoid duplicating your code
let person = {
  firstName: 'Wellington',
  lastName: 'Damasio',
  gender: 'male'
}

let person2 = {
  firstName: 'Amanda',
  lastName: 'Silva',
  gender: 'female'
}

function createPerson(firstName, lastName, gender) {
  return {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    getFullName: function() {
      return firstName + ' ' + lastName
    }
  }
}

let person3 = createPerson('Janaina', 'Carvalho', 'female')
let person4 = createPerson('Jander', 'Marcelo', 'male')

console.log(person, person2, person3, person4)
console.log(person3.getFullName())
console.log(person4.getFullName())

// To avoid inefficient memory management you can create the methods of what would be a Class in 
//another factory function to latter bind the methods with the attribuest object
let personActions = {
  getFullName() {
    return this.firstName + ' ' + this.lastName
  },
  greeting() {
    return 'Hello, I\'m ' + this.firstName
  },
  sayBye() {
    return 'Bye guys!'
  }
}

person.getFullName = personActions.getFullName
person2.getFullName = personActions.getFullName

console.log(person.getFullName())
console.log(person2.getFullName())

// The Object.create() method
// This method creates a new object using an existing object as the prototype of the new object 

function betterCreatePerson(firstName, lastName) {
  let person = Object.create(personActions)
  person.firstName = firstName
  person.lastName = lastName

  return person
}

let person5 = betterCreatePerson('Hugo', 'Chaves')
let person6 = betterCreatePerson('Aline', 'Damasio')

console.log(person5)
console.log(person6)
console.log(person5.greeting())
console.log(person6.sayBye())

// This codev works perfectly fine. However, in practicem you will rarely use factory functions. 
//Instead, you use classes or constructor/prototype patterns
