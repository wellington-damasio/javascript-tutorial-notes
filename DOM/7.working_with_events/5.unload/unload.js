// The unload event fires when a document has completely unloaded. Typically, the 
//unload event fires when you navigate from one page to another. You can use the 
//unload event to clean up the references to avoid memory leaks.

// ---------------------------------------------------
//       Handling the JavaScript unload event
// ---------------------------------------------------
window.addEventListener('unload', event => {
  console.log('The page is unloaded')
})