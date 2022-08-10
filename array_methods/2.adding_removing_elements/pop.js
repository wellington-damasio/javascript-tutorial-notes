// The Array.prototype.pop() method removes the last element from an array 
//and returns the removed element.

// The pop() method changes the length property of the array. If the array is 
//empty, the pop() method returns undefined

// --------------------------------------------------------------
//      Using pop() to remove the last element of an array
// --------------------------------------------------------------
let numbers = [30, 20, 50]
const last = numbers.pop()

console.log(last)
console.log(numbers.length)
console.log(numbers)

// --------------------------------------------------------------
//                 Using pop() with an empty array
// --------------------------------------------------------------
const numbers2 = []
const last2 = numbers2.pop()

console.log(last2)
console.log(numbers2.length)



