function highlight(elem, callback) {
  const bgColor = 'lightyellow'
  elem.style.backgroundColor = bgColor
  elem.style.padding = '3px'

  if(callback && typeof callback == 'function') {
    callback(elem)
  }
}

let note = document.querySelector('#note')

function addBorder(elem) {
  elem.style.border = '2px solid #272727'
}

highlight(note, addBorder)

// To make the code more flexible, you can use the custom event.
  // let event = new CustomEvent(eventType, options)

// - The eventType is a string that represents the name of the event
// - options is an object that has the detail property that contains any custom
// iformation about the event

let event = new CustomEvent('highlightElement', {
  detail: {backgroundColor: 'orangered', border: '2px solid darkblue'}
})

// ------------------------------------------------------------
//            Dispatching JavaScript custom events
// ------------------------------------------------------------
  // docElement.dispatchEvent(event)

// ------------------------------------------------------------------
//            Creating a Custom Event and Dispatching It
// ------------------------------------------------------------------
let anotherNote = document.querySelector('#anotherNote')

function highlightElement(elem) {
  let bgColor = 'orangered'
  elem.style.backgroundColor = bgColor
  elem.style.padding = '3px'

  let event = new CustomEvent('highlightElement', {
    detail: {backgroundColor: 'orangered', createdBy: 'Wellington D.'}
  })

  elem.dispatchEvent(event)
}

anotherNote.addEventListener('highlightElement', function(e) {
  addBorder(this)

  console.log(e.detail)
})

highlightElement(anotherNote)

// -------------------------------------------------------------
//                    Why using custom events
// -------------------------------------------------------------
// The custom events allow you to decouple the code that you want to execute after
//another piece of code completes. For example, you can separate the event
//listeners in a separate script. In addition, you can have multiple event
//listeners to the same custom event.