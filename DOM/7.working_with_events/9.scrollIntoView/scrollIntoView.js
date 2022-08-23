// Suppose you have a list of elements and you want a specific element to be
//highlighted and scrolled into view.

// To achieve this, you can use the element.scrollIntoView() method. The
//element.scrollIntoView() accepts a boolean value or an object:

// element.scrollIntoView(alignToTop)
// element.scrollIntoView(options)

// *** alignToTop  ***
// The alignToTop/options is a boolean value.
// - true: Will align the top of the element to the top of the viewport or the top
//of the visible area of the scrollable ancestor
// - false: Will align the bottom of the element to the bottom of the viewport

// *** options ***
// The options argument is an object that gives more control over of alignment of
//the element in the view. However, the web browser support may be slightly
//different.

// The options object has the following properties:
//  - behavior: defines the transition animation.
//    - auto (default)
//    - smooth
//  - block: defines the vertical alignment.
//    - start (default)
//    - center
//    - end
//    - nearest
//  - inline: defines the horizontal alignment
//    - start 
//    - center
//    - end
//    - nearest (default)

// ---------------------------------------------
//             scrollToView Example
// ---------------------------------------------
let btn = document.querySelector('.btn')
let js = document.querySelector('.special')

btn.addEventListener('click', () => {
  js.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})
})