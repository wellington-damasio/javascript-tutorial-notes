// ES6 introduced a new type named Set that stores a collection of unique values of any type

// To create a new Set, use the following syntax:
let setObject = new Set()

// The Set constructor also accepts an option iterable object. If you pass an iterable object to the 
//Set constructor, all the elements of the iterable object will be added to the new Set

// -------------------------------------
//         Useful Set methods
// -------------------------------------
// The Set object provides the following useful methods:
// add(value) – appends a new element with a specified value to the set. It returns the Set object, 
//therefore, you can chain this method with another Set method.
//
// clear()  – removes all elements from the Set object.
//
// delete(value) – deletes an element specified by the value.
//
// entries()– returns a new Iterator that contains an array of  [value, value] .
//
// forEach(callback [, thisArg]) – invokes a callback on each element of the Set with the this value 
//sets to thisArg in each call.
//
// has(value) – returns true if an element with a given value is in the set, or false if it is not.
//
// keys() – is the same as values() function.
//
// [@@iterator] – returns a new Iterator object that contains values of all elements stored in the 
//insertion order.

// --------------------------------------
//    Create a New Set from an Array
// --------------------------------------
let chars =  new Set(['a', 'b', 'c', 'd', 'd', 'c', 'b', 'a'])
console.log(chars) // The set doesn't repéat elements

// --------------------------------------
//       Get the size of a Set
// --------------------------------------
let size = chars.size
console.log(size) // 4

// --------------------------------------
//       Add elements to a Set
// --------------------------------------
chars.add('e')
chars.add('z')

console.log(chars)

// The add() method is chainable
chars.add('r')
  .add('y')
  .add('u')

console.log(chars)

// --------------------------------------
//    Check if a value is in the Set
// --------------------------------------


