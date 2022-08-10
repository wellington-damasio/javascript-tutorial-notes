// The String.prototype.concat() method accepts a list of strings and returns a 
//new string that contains the combined strings:

// string.concat(str1, [...strN])

// If the arguments are not strings, the concat() converts them to strings 
//before carrying the concatenation.

// ****
// It’s recommended that you use the + or += operator for string concatenation to
//get better performance.
// ****

let greeting = 'Hi'
let name = 'Wellington'
let message = greeting.concat(', ', name)

console.log({message})

// ************************************************************************
//                   Concatenating an array of strings
// ************************************************************************
let colors = ['Blue', ' ', 'Orange', ' ','Purple']
let result = ''.concat(...colors)

console.log(result)

// ************************************************************************
//                   Concatenating non-string arguments
// ************************************************************************
let age = 21
let prediction = 'I was travelling the world with my Macbook at age '
let attraction = prediction.concat(age)

console.log(attraction)


