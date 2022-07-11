// Similar to functions, classes have expression forms. A class expression provides you with an
//alternative way to define a new class

// A class expression doesn't require an identifier aftert the class keyword. And you can use a class 
//expression in a variable declaration and pass it into a function as an argument

let Person = class {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

let person = new Person('Samantha')
console.log(person.getName())

// Singleton
// Singleton is a design pattern that limits the instantiation of a class to a single instance. It 
//ensures that only one instance of a class can be created throughout the system.

// Class expressions can be used to create a singleton by calling the class constructor immediately

// To do that, use the new operator with a class expressions and include parenthesis at the end of a
//class declaration as shown in the following example:

let app = new class {
  constructor(name) {
    this.name = name
  }
  start() {
    console.log(`Starting the ${this.name}`)
  }
}('Awesome App')

app.start()

const car = new class {
  constructor(name, brand, engine) {
    this.name = name
    this.brand = brand
    this.engine = engine
  }

  start() {
    console.log('VRUMM...')
  }

  getSpecs() {
    console.log(`Name: ${this.name}; Brand: ${this.brand}; Engine: ${this.engine}`)
  }
}('Senna', 'McLaren', 'V10')

car.start()
car.getSpecs()

