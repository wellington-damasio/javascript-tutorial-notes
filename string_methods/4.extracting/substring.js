// The JavaScript .prototype.substring() returns the part of the string between
//the start and end indexes

// If you omit the endIndex, the substring() returns the substring to the end of 
//the string.

// If startIndex equals endIndex, the substring() method returns an empty string.

// If startIndex is greater than the endIndex, the substring() swaps their roles: 
//the startIndex becomes the endIndex and vice versa.

// If either startIndex or endIndex is less than zero or greater than the 
//string.length, the substring() considers it as zero (0) or string.length 
//respectively.

// If any parameter is NaN, the substring() treats it as if it were zero (0).

// -------------------------------------------------------------------------
//      Extracting a substring from the beginning of the string example
// -------------------------------------------------------------------------
let jsStr = 'JavaScript substring'
let jsSubstring = jsStr.substring(0, 10)

console.log({jsSubstring})

// -------------------------------------------------------------------------
//           Extracting a substring to the end of the string example
// -------------------------------------------------------------------------
let pyStr = 'I like Python!'
let pySubstring = pyStr.substring(6)

console.log({pySubstring})

// -------------------------------------------------------------------------
//                 Extracting domain from the email example
// -------------------------------------------------------------------------
let email = "john.doe@gmail.com"
let domain = email.substring(email.indexOf('@') + 1)

console.log({domain})
