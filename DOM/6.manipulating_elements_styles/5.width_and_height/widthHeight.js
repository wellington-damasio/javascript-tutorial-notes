// To get the element’s width and height that include the padding and border, you 
//use the offsetWidth and offsetHeight properties of the element:

// styles is an object
function setStyles(element, styles) {
  if(element) {
    for(let property in styles) {
      element.style[property] = styles[property]
    }
  }
}

let box = document.querySelector('.box')
let boxStyles  = {
  'display': 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'background-color' : 'darkblue',
  'width': '400px',
  'height': '400px',
  'padding': '20px',
  'margin': '40px',
  'border': '5px solid orangered',
  'font-size': '3rem',
  'font-family': 'monospace',
  'color': '#f1f1f1'
}

setStyles(box, boxStyles)

// ------------------------------------------------------------------------
//          Getting Element's Size Including Padding and Border
// ------------------------------------------------------------------------
let offsetWidth = box.offsetWidth
let offsetHeight = box.offsetHeight

console.log(offsetWidth, offsetHeight) // 450px 4150px

// ------------------------------------------------------------------------
//             Getting Element's Size Including Only Padding
// ------------------------------------------------------------------------
// To get the element’s width and height that include padding but without the 
//border, you use the clientWidth and clientHeight properties:
let clientWidth = box.clientWidth
let clientHeight = box.clientHeight

console.log(clientWidth, clientHeight) // 440px 440px

// ------------------------------------------------------------------------
//       Getting the Margin of an Element Using getComputedStyle()
// ------------------------------------------------------------------------
let computedStyle = getComputedStyle(box)

let marginLeft = computedStyle.marginLeft
let marginRight = computedStyle.marginRight
let marginTop = computedStyle.marginTop
let marginBottom = computedStyle.marginBottom

console.log({marginLeft, marginRight, marginTop, marginBottom})

// ------------------------------------------------------------------------
//      Getting the Height and Width of the Window (with Fallbacks)
// ------------------------------------------------------------------------
let winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
let winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

console.log({winWidth, winHeight}) // 605, 923 || 1885, 930 (it depends on the size of the screen)