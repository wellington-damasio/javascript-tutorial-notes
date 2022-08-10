// The String.prototype.indexOf() returns the index of the first occurrence of 
//substring (substr) in a string (str):

// let index = str.indexOf(substr [, fromIndex])

// It returns -1 if the str does not contain the substr.

// The indexOf() always perform a case-sensitive search.

// To find the index of the last occurrence of a substring in a string, you use 
//the lastIndexOf() method.

// -------------------------------------------------------------------
// 	  Get the index of the first occurrence of the substring 'str'
// -------------------------------------------------------------------
let str = 'finding substring in string'
let strIndex = str.indexOf('str')

console.log(strIndex)

// -------------------------------------------------------------------
//             Count occurrences of a substring in a string
// ------------------------------------------------------------------
let bigStr = 'You not know what you do know until you know'
let substr = 'know'
let count = 0
let index = bigStr.indexOf(substr)
let indexes = []

while(index != -1) {
	indexes.push(index)

	index = bigStr.indexOf(substr, index + 1)
	count++
}

console.log({count, indexes})

// ------------------------------------------------------------------
//                  The indexOf() and case-sensitivity
// ------------------------------------------------------------------
let jsStr = 'JS indexof'
let substrJS = 'js'
let indexJS = jsStr.indexOf(substrJS)
let trueIndexJS = jsStr.indexOf('JS')

console.log({indexJS, trueIndexJS}) // 1 (because it is case-sensitive)