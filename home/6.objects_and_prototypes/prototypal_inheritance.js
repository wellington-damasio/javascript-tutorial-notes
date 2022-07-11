// In OOP, a class is a blueprint for creating objects. If you want a new class to reuse the 
//functionality of an existing class, you can create a new class that extends the existing class.
// This is called CLASSICAL INHERITANCE

// In prototypal inheritance, an object "inherits" properties from another object via prototype linkage

let person = {
  firstName: 'Wellington',
  lastName: 'Damasio',
  greet: function () {
    console.log('Hello!!!')
  }
}

console.log(Object.getPrototypeOf(person))
console.log(person.toString()) 
// Since JavaScript engine cant find the toString() method in the person object, it looks at it's 
//prototype (Object.prototype) where it finds it.

// Setting the .__proto__ of object
let teacher = {
  teach: function (subject) {
    return 'I can teach ' + subject 
  }
}

teacher.__proto__ = person

console.log(teacher.firstName)
console.log(teacher.teach('PHP'))
console.log(teacher.greet())

// A STANDARD WAY TO IMPLEMENT PROTOTYPAL INHERITANCE IN ES5
// The Object.create() method creates a new object and uses the existing object as prototype of the 
//new object

// Object.create(proto, [propertiesObject])

let animal = {
  legCount: 4,
  gender: 'female',
  habitat: 'Brazil'
}

let arara = Object.create(animal, {
  flies: {value: true},
  color: {value: 'blue'},
  food: {value: 'seeds'}
})

console.log(arara)

console.log(arara.flies)
console.log(arara.color)



