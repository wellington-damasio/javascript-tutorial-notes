// To insert a node before another node as a child node of a parent node, you use 
//the parentNode.insertBefore() method:

  // parentNode.insertBefore(newNode, existingNode)

// -------------------------------------------------------------------
//           JavaScript insertBefore() helper function
// -------------------------------------------------------------------
function insertBefore(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode)
}

let menu = document.getElementById('menu')
let li = document.createElement('li')
li.textContent = 'About Us'

menu.insertBefore(li, menu.lastElementChild) // fica em penultimo

let anotherLi = document.createElement('li')
anotherLi.textContent = 'Another Thing'

let about = menu.childNodes[3]

insertBefore(anotherLi, about) // worked