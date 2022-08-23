// ----------------------------------------------------------------------
//        Introduction to querySelector() and querySelectorAll() 
// ----------------------------------------------------------------------
// The querySelector() is a method of the Element interface. The 
//querySelector() method allows you to select the first element that 
//matches one or more CSS selectors.

  // let element = parentNode.querySelector(selector);

// You can use the querySelectorAll() method to select all elements that 
//match a CSS selector or a group of CSS selectors:

  // let elementList = parentNode.querySelectorAll(selector);

// The querySelectorAll() method returns a static NodeList of elements that 
//match the CSS selector. If no element matches, it returns an empty 
//NodeList.

// -----------------------------------------------------------
//              Converting a NodeList to an Array
// -----------------------------------------------------------
  // let nodeList = document.querySelectorAll(selector)
  // let elements = Array.from(nodeList)

// -----------------------------------------------------
//           Basic querySelector() selectors
// -----------------------------------------------------
// 1) Universal Selector (*)
let element = document.querySelector('*')
let elements = document.querySelectorAll('*') // nodeList(38)

console.log(element, elements)

// 2) Type Selector (elementName)
let firstHeading = document.querySelector('h1')
let headings = document.querySelectorAll('h1') // nodeList(2)

console.log(firstHeading, headings)

// 3) Class Selector (.className)
let note = document.querySelector('.menu-item')
let notes = document.querySelectorAll('.menu-item')

console.log(note, notes) // nodeList(4)

// 4) ID Selector (#id)
let logo = document.querySelector('#logo')

console.log(logo)

// 5) Attribute Selector
// To select all elements that have a given attribute, you use the 
//following attribute selector syntaxes:
// [attribute]
// [attribute=value]
// [attribute~=value]
// [attribute|=value]
// [attribute$=value]
// [attribute*$*=value]

let elementsWithClasses = document.querySelectorAll('[class]')
let elementWithSpecificClass = document.querySelector('[class=section-c')
console.log(elementsWithClasses, elementWithSpecificClass)


// -----------------------------------------------------
//                  Grouping Selectors
// -----------------------------------------------------
let blocks = document.querySelectorAll('div, section');

console.log(blocks)

// -----------------------------------------------------
//                     Combinators
// -----------------------------------------------------
// 1) Descendant (element element)
// To find descendants of a node, you use the space ( ) descendant 
//combinator syntax:
let links = document.querySelectorAll('p a')

console.log(links)

// 2) Child combinator (element > element)
let listItems = document.querySelectorAll('ul > li')
let currentListItem = document.querySelector('ul.nav > li.current')

console.log(listItems, currentListItem)

// 3) General Sibling Combinator (element ~ element)
let siblingsSections = document.querySelectorAll('section ~ section')

console.log(siblingsSections)

// -----------------------------------------------------
//                         Pseudo
// -----------------------------------------------------
// 1) Pseudo-classes (element:state)
let container = document.querySelector('.container')
let lastChild = container.querySelector(':last-child')

console.log(container)

console.log(lastChild)
