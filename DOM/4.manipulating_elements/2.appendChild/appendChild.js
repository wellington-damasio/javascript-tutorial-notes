// The appendChild() is a method of the Node interface. The appendChild() method 
//allows you to add a node to the end of the list of child nodes of a specified 
//parent node.

  // parentNode.appendChild(childNode)

// The appendChild() method returns the appended child
// If the childNode is a reference to an existing node in the document,  The 
//appendChild() method moves the childNode from it's current position to the
//new position

// ----------------------------------------------
//         Simple appendChild() example
// ----------------------------------------------
function createMenuItem(name) {
  let li = document.createElement('li')
  li.textContent = name

  return li
}

const menu = document.querySelector('#menu')

menu.appendChild(createMenuItem('Home'))
menu.appendChild(createMenuItem('Services'))
menu.appendChild(createMenuItem('About Us'))

// ---------------------------------------------------------------
//         Moving a Node Within the Document Example
// ---------------------------------------------------------------
const firstList = document.querySelector('#first-list')
const secondList = document.querySelector('#second-list')
const everest = firstList.firstElementChild

secondList.appendChild(everest)