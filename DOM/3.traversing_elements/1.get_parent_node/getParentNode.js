// To get the parent node of a specified node in the DOM tree, you use
//the parentNode property:

// The Document and DocumentFragment nodes do not have a parent. 
//Therefore, the parentNode will always be null.

let note = document.querySelector('.note')

console.log(note.parentNode) // main