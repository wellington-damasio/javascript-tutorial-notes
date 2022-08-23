// To remove a child element of a node, you use the removeChild() method:
  // let childNode = parentNode.removeChild(childNode)

// The childNode is the child node of the parentNode that you want to remove.
let menu = document.getElementById('menu')

let removedChild = menu.removeChild(menu.firstElementChild)

console.log(menu, removedChild)

// ---------------------------------------------------------
//           Remove All Child Nodes of an Element
// ---------------------------------------------------------
// In this case we're not going to use the ElementChild because it would leave the
//whitespaces of the tag inside the parentNode
while(menu.firstChild) {
  let remove = menu.removeChild(menu.firstChild)
  console.log('Removed', remove)
}

console.log('menu.innerHTML is empty: ' + '\'' + menu.innerHTML + '\'')