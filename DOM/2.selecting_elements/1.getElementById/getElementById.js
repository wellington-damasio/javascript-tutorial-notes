// The document.getElementById() method returns an Element object that 
//represents an HTML element with an id that matches a specified string.

// Because the id of an element is unique within an HTML document, the 
//document.getElementById() is a quick way to access an element.


// ---------------------------------------------------
//          NodeList vs Object with Elements
// ---------------------------------------------------
// Note that the getElementById() and querySelector() returns an object 
//with the Element type while getElementsByTagName() or querySelectorAll() 
//returns NodeList which is a collection of nodes. 

// - querySelectorAll() & getElementsByTagName() === 'NodeList'
// - getElementById(), querySelector() == 'Object with elements'

// If the HTML document has multiple elements with the same id, the 
//document.getElementById() method returns the first element it encounters

const p = document.getElementById('text')
console.log(p)
