// Mouse events fire when you use the mouse to interact with the elements on the
//page. DOM Level 3 events define nine mouse events.

// ------------------------------------------------------------
//          Introduction to JavaScript Mouse Events
// ------------------------------------------------------------

// *** mousedown, mouseup, and click ***
// When you press an element, there are no less than three mouse events fire in the
//following sequence:
// 1. mousedown: fires when you depress the mouse button on the element
// 2. mouseup: fires when release the mouse button on element

// *** dblclick ***
// The dblclick event fires when you double click over an element.

// It takes two click events to cause a dblclick event to fire. The dblclick event 
//has four events fired in the following order:
// 1. mousedown
// 2. mouseup
// 3. click
// 4. mousedown
// 5. mouseup
// 6. click
// 7. dbclick


// *** mousemove ***
// The mousemove event fires repeatedly when you move the mouse cursor around an 
//element. Even when you move the mouse one pixel, the mousemove event still fires.

// It will cause the page slow, therefore, you only register mousemove event handler
//only when you need it and immediately remove the event handler as soon as it is
//no longer used

// *** mouseenter / mouseleave ***
// The mouseover fires when the mouse cursor is outside of the element and then
//move to inside the boundaries of the element.

// The mouseout fires when the mouse cursor is over an element and then moves 
//another element.

// *** mouseenter / mouseleave ***
// The mouseenter fires when the mouse cursor is outside of an element and then
//moves to inside the boundaries of the element.

// The mouseleave fires when the mouse cursor is over an element and then moves to
//the outside of the element’s boundaries.

// Both mouseenter and mouseleave does not bubble and does not fire when the mouse
//cursor moves over descendant elements.

// -----------------------------------------------------------------
//                 Registering mouse event handlers
// -----------------------------------------------------------------
  let btn = document.querySelector('#btn');

  btn.addEventListener('click',(event) => {
      console.log('clicked');
  });

// -----------------------------------------------------------------
//                      Detecting mouse buttons
// -----------------------------------------------------------------
// The event object passed to the mouse event handler has a property called button 
//that indicates which mouse button was pressed on the mouse to trigger the event.

// The mouse button is represented by a number:

// 0: the main mouse button is pressed, usually the left button.
// 1: the auxiliary button is pressed, usually the middle button or the wheel button.
// 2: the secondary button is pressed, usually the right button.
// 3: the fourth button is pressed, usually the Browser Back button.
// 4: the fifth button is pressed, usually the Browser Forward button.

let detectBtn = document.querySelector('#detectBtn')

// disable context menu when right-mouse clicked
detectBtn.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

detectBtn.addEventListener('mousedown', event => {
  let message = document.querySelector('#message')
  console.log(event.button)
  switch(event.button) {
    case 0: 
        message.textContent = 'Left button clicked'
      break
    
      case 1: 
        message.textContent = 'Middle button clicked'
      break

      case 2: 
        message.textContent = 'Right button clicked'
      break

      default:
        message.textContent = 'Unknown mouse button pressed'
  }
})

// ------------------------------------------
//               Modifier keys
// ------------------------------------------
// When you click an element, you may press one or more modifier keys: Shift, 
//Ctrl, Alt, and Meta.

// To detect if these modifier keys have been pressed, you can use the event object 
//passed to the mouse event handler.

// The event object has four Boolean properties, where each is set to true if the
//key is being held down or false if the key is not pressed.

let detectKeysBtn = document.querySelector('#detectKey')
let detectKeysMsg = document.querySelector('#messageKeys')

detectKeysBtn.addEventListener('click', event => {
  let keys = [];

  if(event.shiftKey) keys.push('shift')
  if(event.altKey) keys.push('alt') 
  if(event.ctrlKey) keys.push('ctrl') 
  if(event.metaKey) keys.push('meta') 

  detectKeysMsg.textContent = 'Keys: ' + keys.join(' + ')
});

// ------------------------------------------------------
//               Getting Screen Coordinates
// ------------------------------------------------------
// *** screenX and screenY ***
// The screenX and screenY properties of the event passed to the mouse event handler
//return the screen coordinates of the location of the mouse in relation to the
//entire screen.

// *** clientX and clientY ***
// On the other hand, the clientX and clientY properties provide the horizontal and 
//vertical coordinates within the application’s client area at which the mouse 
//event occurred:

let track = document.querySelector('#track')
let log = document.querySelector('#log')

track.addEventListener('mousemove', e => {
  log.textContent = `
  Screen X/Y: (${e.screenX}, ${e.screenY})
  Client X/Y: (${e.clientX}, ${e.clientY})
  `
})


