// --------------------------------------------
//         Get the first child element
// --------------------------------------------
  // let firstChild = parentElement.firstChild
let menu = document.querySelector('#menu')
let firstChild = menu.firstChild.nodeName

console.log(firstChild) // #text

// The console window will show #text because a text node is inserted to 
//maintain the whitespace between the opening <ul> and <li> tags.

// To get the first element child of a node use the following:
let realFirstChild = menu.firstElementChild
console.log(realFirstChild)

// ------------------------------------------------------
//               Get the last child element
// ------------------------------------------------------
let lastchild = menu.lastElementChild
console.log(lastchild)

// ------------------------------------------------------
//                  Get all child element
// ------------------------------------------------------
// To get a live NodeList of child elements of a specified element, use the
//childNodes property
let children = menu.childNodes
console.log(children)