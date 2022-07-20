// When you call a method on a primitive string variable or a literal string, it is converted to an 
//instance of the String type

// ----------------------------------------------------
//                 String Manipulation
// ----------------------------------------------------
// 1) Concatenating Strings
let firstName = 'Wellington'
let fullName =  firstName.concat(' ', 'Damasio')

console.log(fullName)

// 2) Extracting Strings
// The substr() methods takes 2 arguments
//   1. startIndex: is the location at which the characters are being extracted
//   2. length: specifies the number of characters to extract
let str = 'JavaScript Engine'
console.log(str.substr(0, 10))
console.log(str.substr(11))

// 3) Locating substrings
let str2 = 'Caminhoneiro é Passivo'
console.log(str2.indexOf('é')) // 13
console.log(str.lastIndexOf('é')) // -1 (procura de tras para frente)

// 4) Removing whitespace characters
let rawString = '   Hi there!!!    '
let strippedString = rawString.trim() // Remove sorrounding whitespaces
console.log(strippedString)

console.log(rawString.trimStart()) // Removes whitespaces only at the start
console.log(rawString.trimEnd()) // Removes whitespaces only at the end

// 5) Changing Cases
let greeting = 'hello'
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// 6) Comparing Strings
// The localeCompare() returns three values: -1, 0, 1
//   - If the first string comes before the second string alphabetically, the return is -1
//   - If the first string comes after the second string, it returns 1
//   - If two strings are equal, it returns 0
console.log('A'.localeCompare('B')) // -1
console.log('C'.localeCompare('B')) // 1
console.log('D'.localeCompare('D')) // 0

// 7) Matching Patterns
let expression = '1 + 2 = 3'
let matches = expression.match(/\d+/g)
console.log(matches)

// 8) Replacing substrings
let phrase = 'the baby kicks the ball'
let newPhrase = phrase.replace(/the/g, 'a')

console.log(newPhrase)
console.log(phrase)

