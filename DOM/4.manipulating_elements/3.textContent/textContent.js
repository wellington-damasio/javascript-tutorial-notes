// To get the text content of a node and its descendants, you use the textContent
//property:
  // let text = node.textContent

// -----------------------------------------------------------------------
//       textContent property to get the text of the <div> element:
// -----------------------------------------------------------------------
let note = document.getElementById('note')
console.log(note)
console.log(note.textContent)

// -----------------------------------------------
//           textContent vs. innerText
// -----------------------------------------------
console.log(note.innerText) // Does not get display hidden text

// Since the innerText property uses the up-to-date CSS to compute the text, 
//accessing it will trigger a reflow, which is computationally expensive.

// ------------------------------------------------
//         Setting textContent for a node
// ------------------------------------------------
  // node.textContent = newText
let newNote = document.createElement('p')
newNote.textContent = 'This is a note!'
newNote.style = 'color: orangered; font-size: 2rem; font-family: monospace; letter-spacing: -1px;'

document.body.appendChild(newNote)