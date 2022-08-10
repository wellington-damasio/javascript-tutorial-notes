// The at() method accepts an index and returns an element at that index.

// arr.at(index)

// if you use a negative index, the method returns an element from the end of the 
//array. For example, the arr.at(-1) returns the last element, arr.at(-2) 
//returns the second last element, and so on.

// -------------------------------------------------
//                      Example
// ------------------------------------------------
const scores = [5, 6, 7, 8]

console.log(scores.at(1))// 6

console.log(scores.at(-1)) // 8

console.log(scores.at(-2)) // 7

console.log(scores.at(-1) === scores[scores.length - 1]) // true