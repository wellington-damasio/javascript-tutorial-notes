// Prior to ES6, when you want to assign properties of the person object to variables, you tipically
//would do this
let person = {
  firstName: 'Wellington',
  lastName: 'Damasio'
}

let firstName = person.firstName
let secondName = person.lastName

console.log(firstName)
console.log(secondName)

// ES6 introduced the object destructuring syntax that provides an alternative way to assign properties
//of an object to variables
let car = {
  engine: 'V12',
  brand: 'Ferrari',
  name: '812'
}

const {name, brand, engine} = car
console.log(name, brand, engine)

let product = {
  prodName: 'Towel',
  prodPrice: 'R$55,00',
  prodSection: 'Bathroom'
}

const {prodName, prodPrice, prodSection} = product 

console.log(prodName, prodPrice, prodSection)

// Setting default values
let animal = {
  numOfLegs: 4,
  animalName: 'Suricato',
  food: 'Banana, apple'
}

const {numOfLegs, animalName, food, species = 'somethings I don\'t know'} = animal

console.log(numOfLegs)
console.log(animalName)

// Nested Objects Destructuring
let employee = {
  id: 1001,
  name: {
    empFirstName: 'John',
    empLastName: 'Doe'
  }
}

const {name: {empFirstName, empLastName}} =  employee

console.log(empFirstName)
console.log(empLastName)

// Destructuring function arguments
let display = person => console.log(`${person.firstName} ${person.lastName}`)

display(person)

let betterDisplay = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`)

betterDisplay(person)

// It looks less verbose especially when you use many properties of the argument object. This technique
//is often used in React



