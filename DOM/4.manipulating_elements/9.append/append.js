// The parentNode.append() method inserts a set of Node objects or DOMString 
//objects after the last child of a parent node:

// The append() method will insert DOMString objects as Text nodes.

// -----------------------------------------------------------------
//         Using the append() method to append an element
// -----------------------------------------------------------------
let app = document.getElementById('app')

let langs = ['TypeScript', 'HTML', 'CSS']

let nodes = langs.map(lang => {
  let li = document.createElement('li')
  li.textContent = lang

  return li
})

app.append(...nodes)

console.log(nodes.map(node => node.innerHTML))

// -----------------------------------------------------------------
//      Using the append() method to append text to an element
// -----------------------------------------------------------------
app.append('append() can be used with text too!')

console.log(app.textContent)