// -----------------------------------------------------
//               String.prototype.padStart()
// -----------------------------------------------------
// String.prototype.padStart(padLength [,padString]);

// - The padLength is the length of the resulting string once it is padded. If 
// the padLength is less than the string’s length, the string is returned as-is without padding.

// - The padString is an optional argument which is used to pad the string. The 
//default value for this parameter is ‘ ‘. If the padString is greater than 
//padLength, the padString will be truncated and only the left-most part will be 
//padded.

let str = '1234'.padStart(8,'0') // 4 zeros on the left
console.log(str)

// -----------------------------------------------------
//                String.prototype.End()
// -----------------------------------------------------
 // The padEnd() method pads from the end of the string.
 let otherStr = 'abcd'.padEnd(7)
 console.log({otherStr})
