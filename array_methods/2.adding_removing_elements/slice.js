// The slice() method allows you to extract subset of elements of an array
//and add them to the new array.

// The slice() returns a new array that contains the elements of the original 
//array. It's important to keep in mind that the splice() method performs the
//shallow copy of elements to the new array only. It doesn't change the original
//array

// -----------------------------------------------------------
//             Cloning an array using slice()
// -----------------------------------------------------------
let numbers = [1, 2, 3, 4, 5, 6, 7]
let newNumbers = numbers.slice()

console.log({numbers})
console.log({newNumbers})

// -----------------------------------------------------------
//        Copying a portion of the array using slice()
// -----------------------------------------------------------
let colors = ['red', 'green', 'blue', 'yellow', 'orange']
let rgb = colors.slice(0, 3)

console.log({colors})
console.log({rgb})

// -----------------------------------------------------------
//          Converting array-like objects in arrays 
// -----------------------------------------------------------
function toArray() {
	return Array.prototype.slice.call(arguments)
}

let classification = toArray('A', 'B', 'C', 'D', 'E', 'F')

console.log({classification})

// You often see this type of function to convert NodeLists in arrays

// let p = document.querySelectorAll('p')
// let list = Array.prototype.slice.call(p)

