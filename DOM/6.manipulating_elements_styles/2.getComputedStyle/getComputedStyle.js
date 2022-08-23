// The getComputedStyle() is a method of the window object, which returns an object 
//that contains the computed style an element:
  // let style = window.getComputedStyle(element, [,pseudoElement])

// If you want to get the computed value of all the CSS properties of a link with 
//the hover state, you pass the following arguments to the getComputedStyle() 
//method:
let link = document.querySelector('a')
let computedStyle = getComputedStyle(link, ':hover')
console.log(computedStyle)

// The getComputedStyle() method returns a live style object which is an instance 
//of the CSSStyleDeclaration object. The style is automatically updated when the 
//styles of the element are changed.

// --------------------------------------------------------------------
//               The getComputedStyle() for pseudo-elements 
// --------------------------------------------------------------------
let paragraph = document.querySelector('p')
let firstLetterComputedStyle = getComputedStyle(paragraph, '::first-letter')

console.log(paragraph)
console.log(firstLetterComputedStyle)
console.log(firstLetterComputedStyle.fontSize) // 48px (3rem)