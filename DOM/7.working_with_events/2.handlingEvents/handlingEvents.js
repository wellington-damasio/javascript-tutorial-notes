// When an event occurs, you can create an event handler which is a piece of code 
//that will execute to respond to that event. An event handler is also known as 
//an event listener

// An event can be handled by one or multiple event handlers.

// ------------------------------------------------
//          HTML event handler attributes
// ------------------------------------------------
// Event handlers typically have names that begin with on, for example, the 
//event handler for the click event is onclick.
// <input type="button" value="Save" onclick="alert('Clicked!')">

function langPrompt() {
  let favLang = window.prompt('What is your favorite programming language?')  

  alert(`Cool, so you like ${favLang} too!`)
}

// *** Advantages of using event handlers in the HTML document: ***
// First, the code in the event handler can access the event object without 
//explicitly defining it:
  // <input type="button" value="Save" onclick="alert(event.type)">

// Second, the this value inside the event handler is equivalent to the 
//event’s target element:
  // </input><input type="button" value="Save" onclick="alert(this.value)">

// Third, the event handler can access the element’s properties, for example:
  // <input type="button" value="Save" onclick="alert(value)"></input> 


// *** Disadvantages of using HTML event handler attributes: ***
// First, the event handler code is mixed with the HTML code, which will make the 
//code more difficult to maintain and extend.

// Second, it is a timing issue. If the element is loaded fully before the 
//JavaScript code, users can start interacting with the element on the webpage 
//which will cause an error.

// ------------------------------------------------
//            DOM Level 0 event handlers
// ------------------------------------------------
let randomBtn = document.querySelector('#randomBtn')

randomBtn.onclick = () => alert('Random Button Clicked!')

// -------------------------------------------------
//            DOM Level 2 event handlers
// -------------------------------------------------
// DOM Level 2 Event Handlers provide two main methods for dealing with the 
//registering/deregistering event listeners:
// - addEventListener() – register an event handler
// - removeEventListener() – remove an event handler

// The removeEventListener() removes an event listener that was added via the 
//addEventListener(). However, you need to pass the same arguments as were passed 
//to the addEventListener(). For example:

let btn = document.querySelector('#noInteraction')
let showAlert = () => {
  alert('Wow... You did interact with me. I appreciate your boldness')
}

btn.addEventListener('click', showAlert)
btn.addEventListener('click', () => {
  console.log('You\'re trying to interact with the forsaken button...')
})

btn.removeEventListener('click', showAlert)
