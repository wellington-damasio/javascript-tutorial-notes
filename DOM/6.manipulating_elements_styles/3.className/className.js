// The className is the property of an element. It returns a space-separated list 
//of CSS classes of the element:
  // element.className

// ----------------------------------------------------
//           Showing classes in the console
// ----------------------------------------------------
let menu = document.querySelector('#menu')
console.log(menu.className) // vertical, main

// ----------------------------------------------------
//          Setting the class of an element
// ----------------------------------------------------
menu.className += ' menu--main accent'
console.log(menu.className)