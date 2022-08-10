// ES2021 introduced the String replaceAll() method that returns a new string 
//with all matches of a pattern replaced by a replacement:

// String.prototype.replaceAll(pattern, replacement)

// The pattern can be a string or a regular expression. When the pattern is a 
//regular expression, it needs to include the global flag (g); otherwise, the 
//replaceAll() will throw an exception.

// The replacement argument can be a string or a callback function that will 
//be invoked for each match.

// -----------------------------------------------------------------------
//             Simple JavaScriptString replaceAll() example
// -----------------------------------------------------------------------
let jsStr = 'JS will, JS will, JS will rock you!'
let newJsStr = jsStr.replaceAll('JS', 'JavaScript')

console.log({newJsStr})

// -----------------------------------------------------------------------
//    JavaScript String replaceAll() with a callback function example
// -----------------------------------------------------------------------
let jsStrCase = 'Js will, JS will, js will rock you!'
let pattern = /js/gi

let newStr = jsStrCase.replaceAll(pattern, (match) => {
	if(match === 'JS') return 'JavaScript'
	if(match === 'Js') return 'Javascript'
	if(match === 'js') return 'javascript'
})

console.log({newStr})




