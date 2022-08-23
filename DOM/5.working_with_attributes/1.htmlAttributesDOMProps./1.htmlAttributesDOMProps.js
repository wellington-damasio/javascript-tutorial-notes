// --------------------------------------------------------
//                     Attribute methods
// --------------------------------------------------------
// To access both standard and non-standard attributes, you use the following 
//methods:
  // element.getAttribute(name)
  // element.setAttribute(name, value)
  // element.hasAttribute(name)
  // element.removeAttribute(name)

// --------------------------------------------------------
//                     element.attributes
// --------------------------------------------------------
// The element.attributes property provides a live collection of attributes on a 
//specific element
let input = document.querySelector('#username')

for(let attr of input.attributes) {
  console.log(`${attr.name}: ${attr.value}`)
}

// Note that element.attributes is a NamedNodeMap, not an Array, therefore, it 
//has no Array’s methods.

console.log(input.name)
console.log(input.id)
console.log(input.secured) // undefined, beacause it is not an html attribute

// --------------------------------------------------------
//          Using setAttribute and getAttribute
// --------------------------------------------------------
input.setAttribute('tabindex', 2)
console.log(input.getAttribute('tabindex')) // 2

input.tabIndex = 3
console.log(input.getAttribute('tabIndex')) // 3

console.log(input.attributes)

// -------------------------------------------------------------------
//      Sometimes attributes don't change without setAttribute()
// -------------------------------------------------------------------
input.setAttribute('value', 'guest')

input.value = 'admin'
console.log(input.getAttribute('value'))

// -------------------------------------------------------------------
//                       DOM properties are typed
// -------------------------------------------------------------------
// The value of an attribute is always a string. However, when the attribute is 
//converted to the property of a DOM object, the property value can be a string, 
//a boolean, an object, etc.

let checkbox = document.querySelector ('#checkAccept')
console.log(checkbox.checked)

// -------------------------------------------------------------------
//                         The data-* attributes
// -------------------------------------------------------------------
// If you want to add a custom attribute to an element, you should prefix it with 
//the data- e.g., data-secured because all attributes start with data- are 
//reserved for the developer’s uses.

// To access data-* attributes, you can use the dataset property. For example, 
//we have the following div element with custom attributes:
let bar = document.querySelector('#main')
console.log(bar.dataset)