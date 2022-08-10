// ES2019 introduced to Array.prototype,flat() method that creates a new array 
//with all the elements of the subarrays concatenated to it recursively up to
//a specified depth

// let newArray = arrayObject.flat([depth]) 
// depth = amount of subarrays flat can go to. Defaults to 1

const numbers = [1, 2, [3, 4, 5]]
const flatNumbers = numbers.flat()

console.log({flatNumbers})

// Passing depth argument
let otherNumbers = [1, 2,[3, 4, 5, [6, 7, 8]]]
let flatenning = otherNumbers.flat(1)

console.log({flatenning}) 
// It goes in array in depth and the [6, 7, 8] continue to be in an subarray




