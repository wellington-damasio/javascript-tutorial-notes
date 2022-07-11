// Sometimes you don't want a property to be accessed directly like this:
//         person.name

// To do that, you may come up with a pair of methods that manipulate the name peroperty. Example:
class Person {
  constructor(name) {
    this.setName(name)
  }

  getName() {
    return this.name
  }

  setName(newName) {
    newName = newName.trim()
    if(newName === '') {
      throw 'The name cannot be empty'
    }
    this.name = newName
  }
}

let person = new Person('Jane Simmons')
console.log(person)

person.setName('Sammuel Sylver')
console.log(person.getName())
console.log(person)

// The getName() method returns the value of the name property
// The setName() method assigns an argument to the name property. The setName() removes the
//whitespaces from both ends of the newName argument and throws an exception if the newName is empty
// The constructor() calls the setName() method to initialize the name property

// ES6 provides specific syntax for defining the getter and setter using the get and set keywords.
class Product {
  constructor(name, price, category) {
    this.name = name
    this.price = price
    this.category = category
  }

  get price() {
    return this._price
  }

  set price(newPrice) {
    this._price = newPrice
  }
}

let soap = new Product('soap', 5, 'bathroom')
console.log(soap)
console.log(soap.price)
soap.price = 4.56
console.log(soap.price)

// If you assign only a getter to a class, you cannot change the value of a the variable outside it 
class Car {
  constructor(name, brand, engine, gearboxType) {
    this._name = name
    this.brand = brand
    this.engine = engine
    this.gearboxType = gearboxType
  }

  get name() {
    return this._name
  }
}

let x6 = new Car('X6', 'BMW', 'V8', 'Automatic')

console.log(x6)

x6.name = 'M1' // did not actually change (dont have a setter) (dont have a setter)
x6.gearboxType = 'Manual' // did change

console.log(x6)

// Using getter in an object literal
let meeting = {
  attendees: [],
  add(attendee) {
    console.log(`${attendee} joined the meeting.`)
    this.attendees.push(attendee)
    return this
  },
  remove(attendee) {
    let attendeeNumber = this.attendees.indexOf(attendee)
    if(attendeeNumber) {
      this.attendees.splice(attendeeNumber, 1)
    }
  },
  getAttendeeNumber(attendee) {
    let attendeeNumber = this.attendees.indexOf(attendee)
    return attendeeNumber <= 0 ? `There's no ${attendee} in the meeting` : attendeeNumber
  },
  get latest() {
    let count = this.attendees.length
    return count == 0 ? undefined : this.attendees[count - 1]
  }
}

meeting.add('Julio').add('Marcelo').add('Melissa').add('Carla')

console.log(meeting)
console.log(meeting.attendees)
console.log(`The lastest to attend the meeting was ${meeting.latest}`)

meeting.remove('Marcelo')
console.log(meeting.attendees)

console.log(meeting.getAttendeeNumber('Melissa'))
console.log(meeting.getAttendeeNumber('Marcela'))



