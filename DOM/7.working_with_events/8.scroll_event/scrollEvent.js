// When you scroll a document or an element, the scroll events fire.

// You can trigger the scroll events in the following ways, for example:
// - Using the scrollbar manually
// - Using the mouse wheel
// - Clicking an ID link
// - Calling functions in JavaScript

// targetElement.addEventListener('scroll', (event) => {
//   // handle the scroll event 
// });

// ---------------------------------------------------
//               Scrolling the document
// ---------------------------------------------------
// Typically, you handle the scroll events on the window object to handle the
//scroll of the whole webpage.

window.addEventListener('scroll', event => {
  console.log('scrolling...')
  console.log('Scroll X: ' + window.scrollX)
  console.log('Scroll Y: ' + window.scrollY)
})

// ------------------------------------------
//               Scroll offsets
// ------------------------------------------
// The window object has two properties related to the scroll events: scrollX and
//scrollY.

// The scrollX and scrollY properties return the number of pixels that the document is currently
//scrolled horizontally and vertically. The scrollX and scrollY are double-precision floating-point
//values so if you need integer values, you can use the Math.round() to round them off.

// The scrollX and scrollY are 0 if the document hasn’t been scrolled at all.

// The pageXOffset and pageYOffset are aliases of the scrollX and scrollY properties.

// ---------------------------------------------------------------------
//               JavaScript Scroll Event Demonstration
// ---------------------------------------------------------------------

let control = document.querySelector('#control')

control.addEventListener('click', e => {
  let div = document.getElementById('scrollDemo')

  let target = e.target

  console.log(target.id)

  switch(target.id) {
    case 'btnScrollLeft':
      div.scrollLeft -= 20
      break

    case 'btnScrollTop':
      div.scrollTop -= 20
      break

    case 'btnScrollRight':
      div.scrollLeft += 20
      break

    case 'btnScrollBottom':
      div.scrollTop += 20
      break
  }
})

// -------------------------------------------------------------------
//            The better ways to handle the scroll events
// -------------------------------------------------------------------
// It is much better to keep the scroll event handler lightweight and execute it every N milliseconds 
//by using a timer. So instead of using the following code (and you should never use it):

  // window.scroll = () => {
  //     // place the scroll handling logic here
  // };

// You should use the following code:
let scrolling = false

window.scroll (() => {
  scrolling = true
})

setInterval(() => {
  if(scrolling)
    scrolling = false

  console.log(scrolling)
}, 300)

// *** Event Throttling (slowing down event handler execution) ***
// This way of handling the scroll event is called the event throttling that throttles an onscroll‘s
//underlying operation every 300 milliseconds. The throttling slows down the rate of execution of the
//scroll event handler.

// --------------------------------------------------------
//                      Passive events
// --------------------------------------------------------
// Recently, modern web browsers support passive events for the input events like scroll, touchstart,
//wheel, etc. It allows the UI thread to handle the event immediately before passing over control to
//your custom event handler.

// In the web browsers which support the passive events, you need to add the passive flag to any event
//listener that does not call preventDefault(), like this:

document.addEventListener(
    'scroll',
    (event) => {
        // handle scroll event
    }, 
    { passive: true }
);

// Without the passive option, the code in the event handler will always be invoked before the UI
//thread carries out the scrolling.



