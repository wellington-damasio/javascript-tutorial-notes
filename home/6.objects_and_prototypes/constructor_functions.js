// You often need to create many similar objects like the one below.
const person = {
  firstName: 'Ana',
  lastName: 'Janaina'
}

// To do that, you can use a constructor function to define a custom type and the new operator to
//create multiple objects from this type

// A constructor function follows these conventions
//  - The name of a constructor function starts with capital letter (Person, Animal, etc...)
//  - A constructor function should be called only with the new operator

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.gender = gender
}

// To create a new instance of the Person, use the `new` opeator
let john = new Person('John', 'Doe', 18, 'male')

// The `new` operator does the following:
// - Create a new empty object and assign it to the `this` variable
// - Assign the arguments the their respective properties in the object
// - Return the value of `this`

// Adding methods to constructor functions
function Animal(species, name, habitat) {
  this.species = species
  this.name = name
  this.habitat = habitat

  this.doTrick = function () {console.log('Doing a trick...')}
}

let slash = new Animal('Dog', 'Slash', 'my house')
console.log(slash)
slash.doTrick()

// The problem with constructor function is that when you create multiple instances of the Person or 
//Animal, their methods are duplicated in every instace, which is not memory efficient.

// To solve this, you can use the prototype so that all instances of a custom type can share the
//same methods

// RETURNING FROM CONSTRUCTOR FUNCTIONS
// Typically, a constructor function implicitly returns `this` that set to the newly created object.
// But if it has a return statement, then here's the rules
//  - If return is called with an object, the constructor returns that object instead of `this`
//  - If return is called with a value other tha an object, it is ignored

// CALLING A CONSTRUCTOR FUNCTION WITHOUT THE NEW KEYWORD
let isabela = Person('Isabela', 'Silva', 29, 'female') // this == globalThis
// console.log(isabela.firstName) // cannot read undefined

// To prevent a constructor function to be invoked without the new keyword, ES6  introduced the 
//`new.target` property

// If a constructor function is called with the new keyword, the new.target returns a reference of
//the function. Otherwise, it returns undefined

function Product(name, category, price) {
  console.log('new.target: ' + new.target)

  this.name = name
  this.category = category
  this.price = price

  this.getPriceWithDiscount = function(discount) {
    return this.price - ((discount / 100) * this.price)
  }
}

let cup = new Product('cup', 'home', 10)
let promotionCupPrice = cup.getPriceWithDiscount(20) // 20% of discount
console.log(promotionCupPrice)

let phone = Product('phone', 'tech', 999)

// You can use new.target to force callers of the constructor function to use the new keyword. 
//Otherwise throw an error on the console
function Computer(processor, memory, storage, motherboard) {
  if(!new.target) {
    throw Error("Cannot be called without the new keyword")
  }

  this.processor = processor
  this.memory = memory
  this.storage = storage
  this.motherboard
}

let myPC = new Computer('Intel i5', '16Gb DDR4', '500Gb SSD', 'ASUS')
console.log(myPC)

// let otherPC = Computer('AMD Ryzen 5', '32Gb DDR4', '1TB HD', 'ASUS') // ERROR

// You can also make syntax more flexible by creating  a new Person object if the users of the constructor
//function don't use the new keyword
function Room(furniture, doors, people) {
  if(!new.target) {
    return new Room(furniture, doors, people)
  }

  this.furniture = furniture
  this.doors = doors
  this.people = people
}

let showRoom = Room(['sofa', 'TV', 'bed', 'table'], 2, 'none')
console.log(showRoom)

