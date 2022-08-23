// In this method, the newChild is the new node to replace the oldChild node which 
//is the old child node to be replaced.

// parentNode.replaceChild(newChild, oldChild)

// -----------------------------------------------------------
//          Replacing the first child of an element
// -----------------------------------------------------------
let menu = document.getElementById('menu')
let li = document.createElement('li')
li.textContent = 'Home'

console.log(menu.firstElementChild)
console.log(li)

menu.replaceChild(li, menu.firstElementChild)

