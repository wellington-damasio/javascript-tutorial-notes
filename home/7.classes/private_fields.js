// ES6 allows you to define private fields of a class.
class Circle {
  #radius
  constructor(value) {
    this.#radius = value
  }

  get area() {
    return Math.PI * Math.pow(this.#radius, 2)
  }
}

let circle = new Circle(10)
console.log(circle.area)

// Because the #radius is private field, you can only access it inside the Circle class. 

// Using getter and setter to access private fields
class diffCircle {
  #radius = 0
  constructor(radius) {
    this.radius = radius
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2)
  }

  set radius(value) {
    if(typeof value === 'number' && value > 0) {
      this.#radius = value
    } else {
      throw 'The radius must be a positive number above 0'
    }
  }

  get radius() {
    return this.#radius
  }
}

// Hot it works
//  - The radius setter validates the argument before assigning it to the #radius private field. If
//the argument is not a positive number, the radius setter throws an error
//  - The radius getter returns the value of the #radius private field
//  - The constructor calls the radius setter to assign the argument to the #radius private field

let circle2 = new diffCircle(2)
console.log(circle2)
console.log(circle2.radius)
// circle2.radius = 0 // returns the error

// let circle3 = new diffCircle(0)

// Private fields are only accessible inside the class where they're defined. Also they're not 
//accessible from the subclasses.
class Cylinder extends Circle {
  #height
  constructor(radius, height) {
    super(radius)
    this.#height = height
  }
  
  // cannot access the #radius of the Circle class here
  
  get height() {
    return this.#height
  }

  // set height(value) {
  //   this.#height = value
  // }
}

let cylinder = new Cylinder(3, 5)
console.log(cylinder.radius) // undefined
console.log(cylinder.height) // undefined (5, after including get method)


// Checkif an object has a private field inside a class using the `in` operator

class Circle2 {
  #radius = 0
  #color
  constructor(radius) {
    this.radius = radius
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2)
  }

  set radius(value) {
    if (typeof value === 'number' && value > 0)
      this.#radius = value
    else
      throw 'The radius must be a positive number above 0'
  }

  get radius() {
    return this.#radius
  }

  static hasRadius(circle) {
    return #radius in circle
  }

  static hasColor(circle) {
    return #color in circle
  }
}

let secondCircle = new Circle2(9)
console.log(secondCircle)
console.log(secondCircle.radius)
console.log(Circle2.hasRadius(secondCircle)) // true
console.log(Circle2.hasColor(secondCircle)) // true
// If a private field doesn't exist it will return an error

// Static Private Fields
class Circle3 {
  #radius = 0
  static #count = 0

  constructor(radius) {
    this.radius = radius
    Circle3.#count++
  }

  get area() {
    return Math.PI *  Math.pow(this.radius, 2)
  }

  set radius(value) {
    if(typeof value === 'number' && value > 0) 
      this.#radius = value
    else 
      throw 'The radius must be a positive number above 0'
  }

  get radius() {
    return this.#radius
  }
  
  static hasRadius(circle) {
    return #radius in circle
  }

  static getCount() {
    return Circle3.#count
  }
}


let circles = [new Circle3(10), new Circle3(22), new Circle3(2), new Circle3(4)]

console.log(circles)
console.log(circles[2].radius)
console.log(circles[1].area)
console.log(Circle3.getCount())
console.log(Circle3.hasRadius(circles[3])) // true
