// The prepend() method inserts a set of Node objects or DOMString objects after 
//the first child of a parent node:

// -------------------------------------------------------------------
//         Using the prepend() method to prepend an element
// -------------------------------------------------------------------
let menu = document.getElementById('app')

let langs = ['CSS', 'HTML', 'JavaScript', 'PHP', 'TypeScript']

let nodes = langs.map(lang => {
  let li = document.createElement('li')
  li.textContent = lang
  li.style = 'color: darkblue; font-size: 1.1rem; font-family: monospace; margin-bottom: .2rem'

  return li
})

menu.prepend(...nodes)