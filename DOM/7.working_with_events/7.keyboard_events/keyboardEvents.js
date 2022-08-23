// ---------------------------------------------------------------------
//             Introduction to JavaScript keyboard events
// ---------------------------------------------------------------------

// When you interact with the keyboard, the keyboard events are fired. There are
//three main keyboard events:

// keydown – fires when you press a key on the keyboard and fires repeatedly while
//you’re holding down the key.

// keyup – fires when you release a key on the keyboard.

// keypress – fires when you press a character keyboard like a,b, or c, not the 
//left arrow key, home, or end keyboard, … The keypress also fires repeatedly while
//you hold down the key on the keyboard.

// The keyboard events typically fire on the text box, though all elements support 
//them.

// When you press a character key once on the keyboard, three kayboard events are
//fired in the following order:
// 1. keydown
// 2. keypress
// 3. keyup

// ----------------------------------------------------------
//                   Handling keyboard events
// ----------------------------------------------------------
let msgInput = document.querySelector('#message')

msgInput.addEventListener('keydown', () => {
  console.log('keydown')
})

msgInput.addEventListener('keypress', () => {
  console.log('keypress')
})

msgInput.addEventListener('keyup', () => {
  console.log('keyup')
})

// -------------------------------------------------------------
//                 The keyboard event properties
// -------------------------------------------------------------
// The keyboard event has two important properties: key and code. The key property
//returns the character that has been pressed whereas the code property returns 
//the physical key code.
let textBox = document.querySelector('#textBox')
let string = ''
textBox.addEventListener('keydown', event => {
  string += event.key
  console.log(string)
})
