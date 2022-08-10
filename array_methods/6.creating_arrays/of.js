// In ES5, you pass a numbers to the Array constructor, JavaScript creates an
// array whose length equals to number


let numbers = new Array(10)
console.log(numbers.length)
console.log(numbers[0])

// However, when you pass to the Array constructor a value that is not a number, 
//JavaScript creates an array that contains one element with that value. For 
//example:
numbers = new Array("2")
console.log(numbers.length)
console.log(numbers[0])
// This behavior is sometimes confusing and error-prone because you may not 
//know the type of data that you pass to the Array constructor.

// The Array.of() does not treat a single numberic value special

// Array.of() method always creates an array that contais the values that you
//pass to it regardless of the types or the number of argumens

numbers = Array.of(3)
console.log(numbers.length) // 1
console.log(numbers[0]) // 3

let chars = Array.of('A', 'B', 'C')
console.log(chars.length) // 3
console.log({chars})

