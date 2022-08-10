// The JavaScript String replace() method returns a new string with a substring 
//(substr) replaced by a new one (newSubstr).

// let newStr = str.replace(substr, newSubstr);

// Note that the replace() method doesn’t change the original string. It returns a 
//new string.

let jsStr = 'JS will, JS will rock you!'
let newStr = jsStr.replace('JS', 'JavaScript')

console.log({newStr})

// ----------------------------------------------------------------
//         Using regular expressions to get all occurrences
// ----------------------------------------------------------------
// let newStr = str.replace(regexp, newSubstr)

// The following example uses the global flag (g) to replace all occurrences of 
//the JS in the str by the JavaScript:
let allOcurrences = jsStr.replace(/JS/g, 'JavaScript')

console.log({allOcurrences})

// ----------------------------------------------------------------
//                 Using a replacement function
// ----------------------------------------------------------------
// let newStr = str.replace(substr | regexp, replacer)

let fruitsSentence = "I like to eat, eat, eat apples and bananas"
let regexp = /apples|bananas/gi

let replacer = fruitsSentence.replace(regexp, (match) => {
	console.log({match})
	return match.toUpperCase()
})

console.log({replacer})

