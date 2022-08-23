// The getElementsByClassName() method returns an array-like of objects of 
//the child elements with a specified class name

// When calling the method on the document element, it searches the entire 
//document and returns the child elements of the document:
  // let elements = document.getElementsByClassName(names)

// However, when calling the method on a specific element, it returns the 
//descendants of that specific element with the given class name:
  // let elements = rootElement.getElementsByClassName(names)

// The method returns the elements which is a live HTMLCollection of the 
//matches elements.

// -----------------------------------------------------------------------
//       Calling JavaScript getElementsByClassName() on an element 
// -----------------------------------------------------------------------
let menu = document.querySelector('.menu')
let items = menu.getElementsByClassName('menu__item')

let data = [].map.call(items, item => item.textContent)

console.log(data)

// -----------------------------------------------------------------------
//       Calling JavaScript getElementsByClassName() on the document 
// -----------------------------------------------------------------------
let headings = document.getElementsByClassName('secondary')

let headingsData = [].map.call(headings, heading => heading.textContent)

console.log(headingsData)




