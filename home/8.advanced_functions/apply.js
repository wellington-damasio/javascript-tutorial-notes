// The Function.prototype.apply() allwos you to call a function with a given `this` value and arguments
//provided as an array. 
//            fn.apply(thisArg, [args])

// The apply() method accepts two arguments
//  - The thisArg is the value of `this` provided for the call to the function fn
//  - The args argument is an array that specifies the arguments of the function fn.

// The apply() method is similar to the call() method except that it takes the arguments of the 
//function as an array

const person = {
  firstName: 'Wellington',
  lastName: 'Damasio',

  action() {
    console.log(this.firstName + ' is typing the keyboard the desk...')
  }
}

function greet() {
  return `Hi!!! My name is ${this.firstName}`
}

function fullName(thirdName, fourthName) {
  return `My full name is ${this.firstName} ${this.lastName} ${thirdName} ${fourthName}`
}

// Function Borrowing

console.log(greet.apply(person))
console.log(fullName.apply(person, ['Pascoa', 'Junior']))

let human = {
  firstName: 'Larissa',
  lastName: 'Mendonça'
}

person.action()
person.action.apply(human)

// Using the apply() method to append an array to another
let arr = [23, 22, 11]
let numbers = [2, 32, 11, 256]

console.log(arr)

arr.push.apply(arr, numbers)

console.log(arr)

// Array.prototype.concat() provides the same result but it doesn't modify the array, it returns a 
//new one
