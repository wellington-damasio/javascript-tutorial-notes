// To manipulate the history stack, you use the history object which is a property of 
//the window object:

// window.history

// For the security reason, it’s not possible to query the pages that a user have 
//visited. However, you can use the history object to navigate back and forth without 
//knowing the exact URL.

// --------------------------------------------
//         Move backwards with back()
// --------------------------------------------
let getBackBtn = document.querySelector('#backBtn')

getBackBtn.addEventListener('click', () => {
    window.history.back()
})

// --------------------------------------------
//         Move forward with forward()
// --------------------------------------------
let forwardBtn = document.querySelector('#forwardBtn')
console.log(forwardBtn)

forwardBtn.addEventListener('click', () => {
  window.history.forward()
})