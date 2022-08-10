// The String.prototype.slice() method extracts a portion of a string and
//returns it as a substring.

// slice(start, end)

let str = 'Hello'
let substring = str.slice(3)// 'lo'
let reverseSubstring = str.slice(-3) //'llo'
let wholeSubstring = str.slice() // 'Hello'
let greaterThanLength = str.slice(9) // ''
let withEnd = str.slice(0, 2) // 'He' (stops before endIndex)
let negativeEnd = str.slice(0, -2) // 'Hel' // 5 + (-2) = 3 (0, 3)

console.log({substring, reverseSubstring, wholeSubstring, greaterThanLength, withEnd, negativeEnd})



