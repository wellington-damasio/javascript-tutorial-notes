// The endsWith() returns true if a string ends with the characters of a specified 
//string; otherwise false.

// String.endsWith(searchString [,length])

const title = 'Jack and Jill Went Up the Hill'
console.log(title.endsWith('Hill')) // true

console.log(title.endsWith('hill')) // false (case-sensitive)

console.log(title.endsWith('Up', 21))


