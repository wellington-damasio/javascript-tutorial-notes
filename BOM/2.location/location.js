// The Location object represents the current location (URL) of a document. You can 
//access the Location object by referencing the location property of the window or 
//document object.

// Both window.location and document.location link to the same Location object.

console.log(window.location)

// -------------------------------------------------
//                   Location.href
// -------------------------------------------------
// Is a string that contains the entire URL
// http://127.0.0.1:5500/BOM/2.location/location.html
console.log(window.location.href)

// -------------------------------------------------
//                Location.protocol
// -------------------------------------------------
// Represents the protocol scheme of the URL
// 'http:'
console.log(window.location.protocol)

// -------------------------------------------------
//                  Location.host
// -------------------------------------------------
// Represents the port number of the URL
// localhost:5500 (127.0.0.1:5500)
console.log(window.location.host)

// -------------------------------------------------
//                Location.pathname
// -------------------------------------------------
// /BOM/2.location/location.html
console.log(window.location.pathname)

//--------------------------------------------------
//                 Location.search
//--------------------------------------------------
// Represents the query string of an URL
console.log(window.location.search) // none

//--------------------------------------------------
//                 Location.hash
//--------------------------------------------------
// Contains a '#' followed by the fragment identifier of the URL
console.log(window.location.hash) // none

//--------------------------------------------------
//                Location.origin
//--------------------------------------------------
// Contains the canonical form of the origin of the specific location
console.log(window.location.origin)


//--------------------------------------------------
//            Manipulating the Location
//--------------------------------------------------

// assign()
// Accepts an URL, navigate to the URL immediately, and make an entry in the browser's
//history stack
let googleBtn = document.querySelector('#googleBtn')

googleBtn.addEventListener('click', () => {
  window.location.assign('http://google.com.br')
})

// When the window.location or location.href is set to a URL, the assign() method is 
//called implicitly:

// replace()
// Similar to the assign() method, but doesn't create a new entry in the browser's 
//history stack. Therefore you cannot click the back button to go the previous page

let dontGoBackBtn = document.querySelector('#dontGoBackBtn')

dontGoBackBtn.addEventListener('click', () => {
  window.location.replace('http://amazon.com.br')
})

// reload()
// Reloads the currently displayed page. When you call the reload() method with no 
//argument, the browser will reload the page in the most efficient way.

// To force a reload from the server, you pass true to the reload() method:
  // reload(true)

let reloadBtn = document.querySelector('#reloadBtn')

reloadBtn.addEventListener('click', () => {
  console.log('reloading...')
  setTimeout(() => {
    window.location.reload()
  }, 3 * 1000);
})

