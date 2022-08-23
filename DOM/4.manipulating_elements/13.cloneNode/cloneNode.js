// The cloneNode() is a method of the Node interface that allows you to clone an 
//element:
  // let clonedNode = originalNode.cloneNode(deep)

// deep:
// - If true, then the original node and all of it's descendants are cloned;
// - If false, only the original node will be clone.

// The deep parameter defaults to false if you omit it.


// ----------------------------------
//             Side effects
// ----------------------------------
// Besides the DOM structure, the cloneNode() copies all attributes and inline 
//listeners of the original node. However, it doesn’t copy the event listeners 
//added via addEventListener() or assignment to element’s properties such as 
//originalNode.onclick = eventHandler()


// ----------------------------------
//            About the Id
// ----------------------------------
// If you clone a node with an id attribute and place the cloned node in the same 
//document, the id will be duplicate. In this case, you need to change the id 
//before adding it to the DOM tree.


// ----------------------------------
//           Cloning a list
// ----------------------------------
let menu = document.getElementById('menu')

let shallowClonedMenu = menu.cloneNode()
shallowClonedMenu.id = 'shallow-menu'
shallowClonedMenu.textContent = 'This is an <ul> but, because it is shallow clone, we don\'t get the list-items inside it. '

document.body.appendChild(shallowClonedMenu)

let deepCloneMenu = menu.cloneNode(true)
deepCloneMenu.id = 'deep-menu'

let h2 = document.createElement('h2')
h2.textContent = 'This is a deep cloned element'

document.body.append(h2)
document.body.appendChild(deepCloneMenu)
