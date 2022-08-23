// The MutationObserver API allows you to monitor for changes being made to the
//DOM tree. When the DOM nodes change, you can invoke a callback function to react
//to the changes.

// First, define the callback function that will execute when the DOM changes:
  // function callback(mutations) {

  // }

// Second, create a MutationObserver object and pass the callback into the 
//MutationObserver() constructor:
  // let observer = new MutationObserver(callback)

// Third, call the observe() method to start observing the DOM changes.
  // observer.observe(targetNode, observerOptions)

// --------------------------------------------------------
//               The MutationObserver options
// --------------------------------------------------------
let options = {
  childList: true,
  attributes: true,
  characterData: false,
  subtree: false,
  attributeFilter: ['attr1', 'attr2'],
  attributeOldValue: false,
  characterDataOldValue: false
}

// You don’t need to use all the options.

// ----------------------------------------------------------
//           Observing changes to child elements
// ----------------------------------------------------------
// The following example illustrates how to use the childList property of the
//mutation options object to monitor for the child node changes.

let list = document.querySelector('#language')

let btnStart = document.querySelector('#btnStart')
let btnStop = document.querySelector('#btnStop')
let btnAdd = document.querySelector('#btnAdd')
let btnRemove = document.querySelector('#btnRemove')

btnStop.disabled = true

// Declare the log() function that will be used as a callback for the MutationObserver
function log(mutations) {
  for(let mutation of mutations) {
    if(mutation.type === 'childList') {
      console.log(mutation)
    }
  }
}

// Create a new MutationObserver object:
let anotherObserver = new MutationObserver(log)

// Start observing the DOM changes to the child nodes of the list element when the
//Start Observing button is clicked by calling the observe() method with the
//childList of the options object is set to true

btnStart.addEventListener('click', () => {
  anotherObserver.observe(list, {
    childList: true
  });

  btnStart.disabled = true
  btnStop.disabled = false
})

// Add a new list item when the add button is clicked:
let counter = 1
btnAdd.addEventListener('click', () => {
  let newItem = document.createElement('li')
  newItem.textContent = `Item no. ${counter}`

  counter++
  list.appendChild(newItem)
})

btnRemove.addEventListener('click', () => {
  if(list.lastElementChild)
    list.removeChild(list.lastElementChild) 

  if(counter > 1) {
    counter--
  }
})

// Stop observing DOM changes when the Stop Observing button is clicked by calling 
//the disconnect() method of the MutationObserver object
btnStop.addEventListener('click', () => {
  anotherObserver.disconnect()

  btnStart.disabled = false
  btnStop.disabled  = true
})