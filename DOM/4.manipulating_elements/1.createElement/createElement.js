// To create an HTML element, you use the document.createElement() method:
  // let element = document.createElement(htmlTag)

// The document.createElement accepts an HTML tag name and returns a new Node with
//the Element type

// 1) Creating a new div example
let div = document.createElement('div')
div.innerHTML = '<p>CreateElement Example</p>'

// Appending the div to the body node of the document 
document.body.appendChild(div)

// 2) Adding an id to an element
div.id = 'content'
console.log(div) // div#content

// 3) Adding a class to the div
div.className = 'gruvbox'

// 4) Adding text to a div
let text = document.createTextNode('CreateTextNode Example')
div.appendChild(text)

// 5) Adding an element to a div
let h2 = document.createElement('h2')
h2.innerText = 'Adding and h2 to this box...'
div.appendChild(h2)

// ---------------------------------------------------------------
//             Creating new list items (li) example
// ---------------------------------------------------------------
let menu = document.querySelector('#menu')
let li = document.createElement('li')
let texts = [
  'Software Development',
  'Web Design',
  'Database Design',
  'Software Architecture',
  'Stylesheets'
]

texts.forEach(text => {
  li = document.createElement('li')
  li.innerText = text
  menu.appendChild(li)
})

// ---------------------------------------------------------------
//                     Creating script elements
// ---------------------------------------------------------------
// Sometimes, you may want to load a JavaScript file dinamically. To do this, you
//can use the document.createElement to create the script element and add it to
//the document

let script = document.createElement('script')
script.src = './lib.js'
// document.body.appendChild(script)

// Create a helper function that loads the JavaScript file from a URL
function loadJS(url) {
  let script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
}

// loadJS('./lib.js')

// To load a JavaScript file asynchronously, you set the async attribute of the 
//script element to true

function loadJSAsync(url) {
  let script = document.createElement('script');
  script.src = url;
  script.async = true
  document.body.appendChild(script);
}

loadJSAsync('./lib.js')



