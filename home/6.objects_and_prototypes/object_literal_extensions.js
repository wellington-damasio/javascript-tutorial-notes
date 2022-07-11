// The object literal is one of the most popular patterns for creating objects in JavaScript because of
//it's simplicity. ES6 makes object literal more succint  and powerful by extending the syntax in 
//some ways

// Object property initializer shorthand
// ES6 allows you to eliminate the duplication when a property is the same as the local variable name
//by including the name without a colon and value
function createMachine(name, status) {
  return {
    name: name,
    status: status
  }
}

function createPerson(name, gender, hobbie) {
  return {
    name,
    gender,
    hobbie
  }
} 

let welly = createPerson('Wellington', 'male', 'F1')
console.log(welly)

// Computed property name
// The square brackets allow you to use the string literals as the property names
let name = 'machine name'
let machine = {
  [name]: 'server',
  'machine hours': 10000
}

console.log(machine)
console.log(machine[name])
console.log(machine['machine hours'])

// In ES6, the computed property name is a part of the object literal syntax, and it uses the square
//bracket notation
let prefix = 'person'
let person = {
  [prefix + ' name']: 'Wellington',
  [prefix + ' last name']: 'Damasio',
  [prefix + ' age']: 19,
  [prefix + ' gender']: 'male'
}

console.log(person['person name'])
console.log(person['person last name'])
console.log(person['person age'])
console.log(person)

// Concise method syntax
let server = {
  name: 'Server',
  restart: function () {
    console.log(`The ${this.name} is restarting...`)
  }
}
console.log(server)

// ES6 makes the syntax much simpler by removing the function keyword
let betterServer = {
  name: 'Server 2',
  restart() {
    console.log(`The ${this.name} is restarting...`)
  }
}
console.log(betterServer)



