// The String.prototype.split() divides a string into an array of substrings:

// split([separator, [,limit]])

// --------------------------------------------------------------
//              Splitting the strings into words 
// --------------------------------------------------------------		
let sentence = 'JavaScript is an awsome language'
let words = sentence.split(' ')

console.log({words})
// --------------------------------------------------------------		
//       Returning a limited number of substrings example
// --------------------------------------------------------------
let substring = sentence.split(' ', 2)

console.log({substring})

// --------------------------------------------------------------
//    Splitting a string using a regular expression example
// --------------------------------------------------------------
let paragraph = 'Good Morning! How are you? This is John. John is my friend.'
let splittedParagraph = paragraph.split(/[!,?,.]/)

console.log({splittedParagraph})

// If the regular expression contains capturing parentheses (), the split() 
//method also includes the matched results in the array:

let withPonctuation = paragraph.split(/([!,?,.])/)

console.log({withPonctuation})


