// The JavaScript event delegation adds a single event handler to the parent
// element instead of having to register multiple event handlers to the child
// elements.

// To handle the click event of each menu item, you may add the corresponding click
//event handlers:

  // let home = document.querySelector('#home');
  // home.addEventListener('home',(event) => {
  //     console.log('Home menu item was clicked');
  // });

  // let dashboard = document.querySelector('#dashboard');
  // dashboard.addEventListener('dashboard',(event) => {
  //     console.log('Dashboard menu item was clicked');
  // });

  // let report = document.querySelector('#report');
  // report.addEventListener('report',(event) => {
  //     console.log('Report menu item was clicked');
  // });

// In JavaScript, if you have a large number of event handlers on a page, these 
//event handlers will directly impact the performance because of the following
//reasons:

// - First, each event handler is a function which is also an object that takes up 
//memory. The more objects in the memory, the slower the performance.
// - Second, it takes time to assign all the event handlers, which causes a delay in
//the interactivity of the page.  

// Instead of having multiple event handlers, you can assign a single event handler
//to handle all the click events:

let menu = document.querySelector('#menu')

menu.addEventListener('click', event => {
  let target = event.target

  switch(target.id) {
    case 'home':
      console.log('Home menu item was clicked')
      break

    case 'dashboard':
      console.log('Dashboard menu item was clicked')
      break

    case 'report':
      console.log('Report menu item was clicked')
      break

    default:
      console.log('list was clicked...')
  }
})

// The event delegation refers to the technique of levering event bubbling to handle
//events at a higher level in the DOM than the element on which the event 
//originated.

// ----------------------------------------------------------------
//             JavaScript event delegation benefits
// ----------------------------------------------------------------
// When it is possible, you can have a single event handler on the document that
//will handle all the events of a particular type. By doing this, you gain the
//following benefits:

// - Less memory usage, better performance.
// - Less time required to set up event handlers on the page.
// - The document object is available immediately. As long as the element is rendered, 
//it can start functioning correctly without delay. You don’t need to wait for the
//DOMContentLoaded or load events.


