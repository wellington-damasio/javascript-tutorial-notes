// The String.prototype.lastIndexOf() returns the last occurrence of a substring 
//(substr) in a string (str).

// str.lastIndexOf(substr, [, fromIndex]);

// It returns -1 if the str does not contain the substr.

// The lastIndexOf() method searches for the substring backward from the 
//fromIndex. The fromIndex is optional and defaults to +Infinity. It means that 
//if you omit the fromIndex, the search starts from the end of the string.

// If the fromIndex is greater or equal to str.length, the lastIndexOf() will 
//search for the substr in the whole string.

// ----------------------------------------------------------
//        Locate the last occurrence of the substring
// ----------------------------------------------------------
let str = 'JavaScript'
let index = str.lastIndexOf('a')

console.log({index})

let indexSecond = str.lastIndexOf('a', 2)

console.log({indexSecond})

// --------------------------------------------------------------
//             The lastIndexOf() and case-sensitivity
// --------------------------------------------------------------
let helloStr = 'Hello World'
let substr = 'L'
let indexL = helloStr.lastIndexOf(substr)
let trueIndexL = helloStr.lastIndexOf('l')

console.log({indexL}) // 1
console.log({trueIndexL})