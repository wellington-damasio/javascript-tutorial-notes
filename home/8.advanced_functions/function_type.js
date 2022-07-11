// In JavaScript, all functions are objects. They are the instaces of the Function type. Because 
//functions are objects, they have properties and methods like other objects.

// Function properties
// Each function has two important properties length and prototype
//  - The length property determines the number of named arguments specified in the function
//  - The prototype property references the actual function object

function add() {
  let result = 0
  for(let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }

  return result
}

console.log(add.length)
console.log(add.prototype)
console.log(add(2, 5))
console.log(add(2, 5, 6, 22, 11 ,4))

let sumThis = add(2, 5, 6, 2, 33, 4)
console.log(sumThis)
console.log(sumThis.length)

// Function methods: apply(), call(), and bind() 

// The apply() and call() methods
// These methods call a function with a given `this` value and arguments
// The difference between apply() and call() is that you need tyo pass the arguments to the apply 
//method as an array-like object, whereas you pass the arguments to the call() function individually.

let cat = {type: 'Cat', sound: 'Meow', action: 'Licking himself'}
let dog = {type: 'Dog', sound: 'Woof', action: 'Barking at the neighbor'}

const say = function (message, action) {
  console.log(message)
  console.log(`${this.type} says ${this.sound}`)
  console.log(`What is the ${this.type} doing?`)
  console.log(action)
}

say.apply(cat, ['What does the cat say:?', cat.action])
say.call(dog, 'What does the dog say?', dog.action)

// The bind() method
// This method creates a new function instance whose `this` is bound to the object that you provide

let car = {
  speed: 5,
  start() {
    console.log(`Start with ${this.speed} km/h`)
  }
}

let aircraft = {
  speed: 10,
  fly() {
    console.log('I\'m flying...')
  }
}

car.start()
let aircraftSpeed = car.start.bind(aircraft) // binding the this.speed to the aircraft.speed
aircraftSpeed() 

// The following uses the apply() method on the aircraft object
car.start.apply(aircraft) // function start() of the car method initiated as if it was fom the
//aircraft object

// Technically, the aircraft object borrows the start() method from the car object via the  bind(),
//call() or apply()
// For that reason, the bind(),call() and apply() methods are also known as borrowing functions



