// JavaScript has the built-in Object() function. The typeof operator returns function.
console.log(typeof Object)

// Also, JavaScrip provides an anonymous object that can be referenced via the prototype property
//of the Object() function
console.log(Object.prototype)
console.log(Object.prototype.constructor === Object) // true

// Defining methods in the JavaScript prototype object
function Person(name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender
}

Person.prototype.greet = function () {console.log('Hello guys')}

let junin = new Person('junin', 12, 'male')
console.log(junin)
junin.greet()
console.log(Person.prototype) // shows the greet function
console.log(junin.prototype) // undefined
console.log(junin.__proto__ === Person.prototype) // the antecessor of junin is Person.prototype
console.log(Object.getPrototypeOf(junin))
console.log(junin.__proto__ === Object.getPrototypeOf(junin)) // getPrototypeOf > .__proto__

// Summary
//  1. The Object() function has a property called `prototype` that references a Object.prototype
//  2. The Object.prototype object has all properties and methods which are available in all 
//objects such as toString() and valueOf()
//  3. The Object.prototype object has the constructor property which references the Object function
//  4. Every function has a prototype object. This prototype object references the Object.prototype
//object via linkage or __proto__ property
//  5. The prototype chain allows one object to use the methods and properties of it's prototype
//object via [[prototype]]
//  6. The Object.getPrototypeOf() method retuns the prototype object of a given object. It is
//preferable than .__proto__

