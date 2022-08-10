// The search() method accepts a regular expression and returns the index of the 
//first match in a string:

// let index = str.serach(regexp)

// In this syntax, the regexp is a regular expression. If you pass a non-RegExp 
//into the method, it will convert that value to a RegExp.

// If the search() doesn’t find any match, it returns -1.

// ------------------------------------------------------------------------
// 	    Returning first occurrence of any capital letter with search()
// ------------------------------------------------------------------------
let capitalRegex = /[A-Z]/
let maybeCapitalStr = 'hi There! How are you?'
let indexOfCapital = maybeCapitalStr.search(capitalRegex)

console.log({indexOfCapital}) // 3

// The following example returns -1 because there is no number in the string:
let numberRegex = /[0-9]/
let str = 'Hello, JavaScript'
let index = str.search(numberRegex)

console.log({index})

