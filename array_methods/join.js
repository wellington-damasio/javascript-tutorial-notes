// The join() method allows you to concatenate all elements of an array and 
//returns a new string:

// Array.prototype.join([separator])

// The separator defaults to a comma if you don’t pass it to the join() method.

// When the elements of the array aren’t strings, the join() method converts 
//them to strings before joining

// ----------------------------------------------------------
//         Using join() method to join CSS classes
// ----------------------------------------------------------

const cssClasses = ['btn', 'btn--primary', 'btn-active']
const btnClasses = cssClasses.join(' ')

console.log({btnClasses})

// -----------------------------------------------------------------
//     Using join() method to replace all occurrences of a string
// -----------------------------------------------------------------
const title = 'JavaScript Is An AWSOME Language. I Love It!'
const slug = title.split(' ')
	// Remove special characters and change to lower case
	.map(word => word.toLowerCase().replace(/[^\w\s]/gi, ''))
	.join('-')

console.log({title, slug})






