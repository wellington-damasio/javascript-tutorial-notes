// ES6 introduced a new statement for...of statement to iterate over iterable objects
//  - Built-in Array, String, Map, Set...
//  - Array-like objects such as arguments or NodeList
//  - User-defined objects that implement to iterator protocol

// Iterating over arrays
let scores = [80, 90, 11]

for(let score of scores) {
  score += 5
  console.log(score)
}

// To access the index of the array elements inside the loop, you can use the for...of statement with
//the entries() method of the array
let colors = ['Red', 'Blue', 'Yellow', 'Brown', 'Orange']

for(let [index, color] of colors.entries()) { // Using destructuring here
  console.log(`${color} is at index ${index}`)
}

// In-place object destructuring with for...of
const ratings = [
  {user: 'John', score: 3},
  {user: 'Maria', score: 4},
  {user: 'Camila', score: 7},
  {user: 'Peter', score: 10}
]

let sum = 0
for(const {score} of ratings) {
  sum += score
}

console.log(`Total scores: ${sum}`)

// The expression `const {score} of ratings` uses object destructuring to assign the score property of
//the current iterated element to the score variable

// Iterating over strings
let str = 'abcdefg'
for(let c of str) {
    console.log(c, c.toUpperCase())
}

// Iterating over Map objects
let hexColors = new Map()

hexColors.set('red', '#ff0000')
hexColors.set('green', '#00ff00')
hexColors.set('blue', '#0000ff')

for(let color of hexColors) {
  console.log(color)
}

// Iterating over Set objects
let nums = new Set([23, 22, 12, 42, 12, 223])
for(let num of nums) {
  console.log(num)
}


