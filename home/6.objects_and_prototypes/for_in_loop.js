// The for...in loop over the enumerable properties of an object.
let person = {
  firstName: 'Wellington',
  lastName: 'Damasio',
  age: 19,
  gender: 'male'
}

for(const property in person)  { // property is a string, so . notation don't work
  console.log(property + ': ' + person[property])
}

// for...in loop & inheritance
let decoration = {
  color: 'red',
  secondaryColor: 'purple',
  drawing: 'elephants'
}

let circle = Object.create(decoration)

circle.radius = 10
circle.shape = 'circle'
circle.nickname = 'Maboll'

for(const property in circle) {
  console.log(property + ': ' + circle[property])
}

for(const property in circle) {
  if(circle.hasOwnProperty(property)) {
    console.log(`Circle ${property}: ${circle[property]}`)
  } else {
    console.log(`Prototype ${property}: ${circle[property]}`)
  }
}

// The for...in loop and Array
// It's good practice to not use the for...in loop to iterate over an array, especially when the order
//of the array elements is important
const items = [10, 20, 30]
let totalItems = 0

for(const item in items) {
  totalItems += items[item]
}

console.log(totalItems)

Array.prototype.foo = 100

for(const item in items) {
  totalItems += items[item]
}

console.log(totalItems)

let arr = []
arr[2] = 3

for(let elem of arr) {
  console.log(elem)
}

for(let elem in arr) {
  console.log(arr[elem]) // the first 2 undefined elements are not considered and it returns the foo 
//value that's in the prototype
} 




