// An object is a collection of key/value pairs or properties. When the value is a funcion, the
//property becomes a method

let person = {
  firstName: 'John',
  greet: function () {
    console.log('Hello!!')
  }
}

person.greet()

// You can also asign a function to an object method like this
function sayBye() {
  console.log('Bye...')
}

person.bye = sayBye

person.bye()

// The `this` value
// Inside a method, the `this` value references the object that invokes the method. Therefore, you
//can access a property using the this value as follows:
let human = {
  firstName: 'Wellington',
  lastName: 'Damasio',
  greet: function () {
    console.log('Hello, mf\'s!!!')
  },
  getFullName: function() {
    console.log(this.firstName + ' ' + this.lastName)
  }
}

console.log(human.firstName)
human.greet()
human.getFullName()


