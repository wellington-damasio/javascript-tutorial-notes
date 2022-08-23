// JavaScript DOM provides the insertBefore() method that allows you to insert a 
//new node after an existing node as a child node. However, it hasn’t supported 
//the insertAfter() method yet.

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling)
}

const menu = document.getElementById('menu')
let li = document.createElement('li')
const lastChild = menu.lastElementChild

li.textContent = 'Software Development'
li.style = 'color: orangered; font-size: 1.1rem; font-family: monospace;'

console.log(menu)
console.log(li)
console.log(lastChild)

insertAfter(li, lastChild)

const secondItem = menu.childNodes[3]
console.log(menu.childNodes[2]) // text (space between the tags)

li = document.createElement('li')
li.style = 'color: orangered; font-size: 1.1rem; font-family: monospace;'
li.textContent = 'Laravel'

insertAfter(li, secondItem)