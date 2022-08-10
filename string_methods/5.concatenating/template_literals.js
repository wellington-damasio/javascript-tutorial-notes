// In ES6, you create a template literal by wrapping your text in backticks 
//(`) as follows:

// let simple = `This is a template literal`

// and you get the following features:

// - A multiline string: a string that can span multiple lines.

// - String formatting: the ability to substitute part of the string for the 
//values of variables or expressions. This feature is also called string 
//interpolation.

// - HTML escaping: the ability to transform a string so that it is safe to 
// include in HTML.

// -----------------------------------------------------------------------
//            The basic syntax of JavaScript template literals
// -----------------------------------------------------------------------
let str = `Template literal in ES6`
console.log(str)
console.log(str.length)
console.log(typeof str)

let strWithBackticks = `Template literals use \` instead of quotes`

console.log({strWithBackticks})

// -----------------------------------------------------------------------
//               Multiline strings using template literals
// -----------------------------------------------------------------------
let multilineStr = `This is
a multiline
fucking string...`

console.log(multilineStr)

// -----------------------------------------------------------------------
//               Template Literals and Writing HTML Templates
// -----------------------------------------------------------------------
let post = {
    title: 'JavaScript Template Literals',
    excerpt: 'Introduction to JavaScript template literals in ES6',
    body: 'Content of the post will be here...',
    tags: ['es6', 'template literals', 'javascript']
};

let {title, excerpt, body, tags} = post

let postHtml = `<article>
<header>
	<h1>${title}</h1>
</header>
<section>
	<div>${excerpt}</div>
	<div>${body}</div>
</section>
<footer>
	<ul>
		${tags.map(tag => `<li>${tag}</li>`).join('\n                ')}
	</ul>
</footer>
</article>`

console.log(postHtml)

// -----------------------------------------------------------------------
//                 Using Template Literal Substitutions
// -----------------------------------------------------------------------
let price = 8.99,
	tax = 0.1 // (10%)

let netPrice = `Net Price: $${(price * (1 + tax)).toFixed(2)}`

console.log({netPrice})