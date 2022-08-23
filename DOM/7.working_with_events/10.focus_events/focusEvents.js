// The focus events fire when an element receives or loses focus. These are the two
//main focus events:
// - focus fires when an element has received focus.
// - blur fires when an element has lost focus.

// The focusin and focusout fire at the same time as focus and blur, however, they
//bubble while the focus and blur do not.

// The window gains focus when you bring it forward by using Alt+Tab or clicking on
//it and loses focus when you send it back.

// Links when you use a mouse or a keyboard.

// Form fields like input text when you use a keyboard or a mouse.

// Elements with tabindex, also when you use a keyboard or a mouse.

// ------------------------------------------------------------
//               JavaScript focus event examples
// ------------------------------------------------------------
// The following example shows how to handle the focus and blur events. When you 
//move focus to the password field, the background changes to yellow. If you move
//the mouse to the username field, the background changes to white.

const pwd = document.querySelector('input[type=password]')

pwd.addEventListener('focus', event => {
  event.target.style.backgroundColor = 'yellow'
})

pwd.addEventListener('blur', event => {
  event.target.style.backgroundColor = ''
})
