// By definition, static methods are bound to a class, not the instance of them. Therefore, static 
//methods are useful for defining helper or utility methods

// Before ES6:
function Person(name) {
  this.name = name
}

Person.prototype.getName = function() {
  return this.name
}

Person.createAnonymous = function (gender) {
  let name = gender == 'male' ? 'Joe Mafia' : 'Mariana Becker'
  return new Person(name)
}

let joe = Person.createAnonymous('male')
let mari = Person.createAnonymous('female')

console.log(joe)
console.log(mari)

// The createAnonymous() method is considered a static method because it doesn't depend on any instance
//of Person for its property values

// Static Methods in ES6
class Car {
  constructor(name, brand) {
    this.name = name
    this.brand = brand
  }
  getName() {
    return this.name
  }

  static createAnonymous(brand) {
    switch(brand) {
      case 'honda':
        return new Car('Civic', 'Honda')
      case 'fiat':
        return new Car('Argo', 'Fiat')
      case 'ford':
        return new Car('Fusion', 'Ford')
      case 'chevrolet':
        return new Car('Onix', 'Chevrolet')
      default:
        return new Car('Mobi', 'Fiat')
    }
  }
}

let accura = new Car('Accura', 'Honda')
console.log(accura.getName())

let fusion = Car.createAnonymous('ford')
console.log(fusion)

let mobi = accura.constructor.createAnonymous()
console.log(mobi)
