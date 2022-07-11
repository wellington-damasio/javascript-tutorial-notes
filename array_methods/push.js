// The Array.prototype.push() method adds one or more elements to the end of an array and returns the
//new array length

// 1) Using the array.push() to append one element to an array
let numbers = [10, 40, 55]
const length = numbers.push(47)
console.log(numbers)
console.log(length)

// 2) Using the array push() to add multiple elements to the end of an array
const secondLength = numbers.push(66, 43, 22)
console.log(numbers)
console.log(secondLength)

// 3) Using the push() to append elements of an array to another array
let colors = ['red', 'blue', 'yellow', 'orange']
let cmbw = ['cyan', 'magenta', 'black', 'white']

console.log(colors)
console.log(cmbw)

for(let color of cmbw) {
  colors.push(color)
}

console.log(colors)

// Starting from ES6, you can use the spread operator to spred the elements of cmbw 
colors.length = 4
console.log(colors)

colors.push(...cmbw)

console.log(colors)

// Using JavaScript Array.push() method with array-like objects
// Under the hood, the push() method uses the length property to determine the position for inserting
//elements. If the push() method cannot convert the length property into a number, it'll use 0 as
//the value of the index

let greetings = {
  0: 'Hi',
  1: 'Hello',
  length: 2,
  append(message) {
    [].push.call(this, message)
  } 
}

greetings.append('Howdy')
greetings.append('Bonjour')

console.log(greetings)

// In each call, the push() uses length property of the greetings object to determine the position
//where it appends the new element and increases the length property by one

// As a result, the greetings object has two more elements at index 2 and 3. And the length property is
//4 after the calls.

