// Before the webpage and its resources are unloaded, the beforeunload event is 
//fired. At this time, the webpage is still visible and you have an opportunity to 
//cancel the event.

// To register for the beforeunload event, you use the window.addEventListener() 
//method:
  // window.addEventListener('beforeunload', event => {
  //   // do something here...
  // })

// If a webpage has a beforeunload event listener and you are about to leave the 
//page, the beforeunload event will trigger a confirmation dialog to confirm if 
//you really want to leave the page.

// If you confirm, the browser navigates you to the new page. Otherwise, it cancels 
//the navigation.

// According to the specification, you need to call the preventDefault() method 
//inside the beforeunload event handler in order to show the confirmation dialog. 
window.addEventListener('beforeunload', event => {
  event.preventDefault()
  event.returnValue = ''
})

// Based on the HTML specification, the calls to alert(), confirm(), and prompt() 
//are ignored in the beforeunload event handler.


