// An event is an action that occurs in the web browser, which the browser 
//feedbacks to you so that you can respond to it.

// For example, when users click a button on a webpage

// Each event may have an event handler which is a block of code that will 
//execute when the event occurs

// An event handler is also known as an event listener.

let button = document.querySelector('#btn')

button.addEventListener('click', () => {
  alert('It was clicked... That\'s JavaScript, baby!')
})

// -----------------------------------------
//                 Event flow
// -----------------------------------------
// When you click the button, you’re clicking not only the button but also the 
//button’s container, the div, and the whole webpage.

// Event flow explains the order in which events are received on the page from the 
//element where the event occurs and propagated through the DOM tree.

// There are two main event models: event bubbling and event capturing.

// *** Event bubbling ***
// In the event bubbling model, an event starts at the most specific element and 
//then flows upward toward the least specific element (the document or even window)

// When you click the button, the click event occurs in the following order:
// 1. button
// 2. div with id container
// 3. body
// 4. html
// 5. document
// 6. window (browser)

// *** Event capturing ***
// In the event capturing model, an event starts at the least specific element and 
//flows downward toward the most specific element.

// When you click the button, the click event occurs in the following order:
// 0. window (browser)
// 1. document
// 2. html
// 3. body
// 4. div with the id container
// 5. button

// *** DOM Level 2 Event Flow ***
// DOM level 2 events specify that event flow has three phases:
// 1. Event capturing occurs, which provides the opportunity to intercept the event
// 2. Actual target receives the event
// 3. Event bubbling occurs, which allows a final response to the event

// Translating:
// 1. Event capturing occurs when searching for events on the page
// 2. The events found will be handled
// 3. This event handling is done by event bubbling

// -----------------------------------------------
//                   Event Object
// -----------------------------------------------
// bubbles	          |  true if the event bubbles
// cancelable	        |  true if the default behavior of the event can be canceled
// currentTarget	    |  the current element on which the event is firing
// defaultPrevented	  |  return true if the preventDefault() has been called.
// detail	            |  more information about the event
// eventPhase	        |  1 for capturing phase, 2 for target, 3 for bubbling
// preventDefault()	  |  cancel the default behavior for the event. This method is only effective if the cancelable property is true
// stopPropagation()	|  cancel any further event capturing or bubbling. This method only can be used if the bubbles property is true.
// target	            |  the target element of the event
// type	              |  the type of event that was fired

let eventBtn = document.querySelector('#eventBtn')
let fragment = new DocumentFragment()
let list = document.querySelector('#list')
let propertiesAndMethods = ['bubbles', 'cancelable', 'currentTarget', 'defaultPrevented', 'detail', 'eventPhrase', 'preventDefault', 'stopPropagation', 'target', 'type']



eventBtn.addEventListener('click', event => {
  for(let property of propertiesAndMethods) {
    let li = document.createElement('li')
    li.style = 'color: orangered; font-size: 1rem; font-family: monospace;'

    if(property === 'preventDefault') {
      li.textContent = property + ': ' + event.preventDefault()
    } else if(property === 'stopPropagation') {
      li.textContent = property + ': ' + event.stopPropagation()
    } else {
      li.textContent = property + ': ' + event[property]
    }

    fragment.appendChild(li)
  }

  list.appendChild(fragment)
})

// ---------------------------------------------
//               stopPropagation()
// ---------------------------------------------
// The stopPropagation() method immediately stops the flow of an event through the 
//DOM tree. However, it does not stop the browers default behavior.
let stopButton = document.querySelector('#stopBtn')

stopButton.addEventListener('click', event => {
  console.log('The button was clicked, event counters reseted!')
  event.stopPropagation()
})

document.body.addEventListener('click', event => {
  console.log('The body was clicked')
})






