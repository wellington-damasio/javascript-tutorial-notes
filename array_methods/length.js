// By definition, the length property of an array is an unsigned, 32-bit integer that is always
//numerically greater than the highest index in the array
// An array can hold up to  4294967296 (2^32) elements

// 1) Dense Arrays
// A dense array is an array where its elements have contiguous indexes starting at zero
let colors = ['red', 'green', 'blue']
console.log(colors.length) // 3

colors.push('yellow')
console.log(colors.length) // 4

colors = []
console.log(colors.length) // 0

// 2) Sparse arrays
// A sparse array is an array whose elements don't have contiguous indexes starting at zero
let numbers = [10, ,20, 30]
console.log(numbers.length) // 4

numbers[10] = 100
console.log(numbers.length) // 11

// Modifying JavaScript Array length Property 
// 1) Empty array
let fruits = ['Apple', 'Orange', 'Banana']
console.log(fruits.length) // 3

fruits.length = 0
console.log(fruits.length) // 0 (it actually modified the length of the array)

// 2) Remove elements
// If you set the length of the array to a value that is lower than the highest index, all the
//elements whose index is greater than or equal to the new length are removed
fruits.length = 2
console.log(fruits) // UNDEFINED BECAUSE WE DELETED THE FRUITS BEFORE WITH LENGTH = 0

fruits = ['Banana', 'Pineapple', 'Strawberry']
console.log(fruits, fruits.length)

fruits.length = 2
console.log(fruits, fruits.length) // Last fruit was removed





