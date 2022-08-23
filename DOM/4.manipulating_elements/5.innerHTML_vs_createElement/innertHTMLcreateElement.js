// --------------------------------------------------------------
//             #1: create Element is more perfomant
// --------------------------------------------------------------
let div = document.querySelector('.container')
div.style = 'border: 2px solid orangered; padding: .6rem;'

let p = document.createElement('p')

p.textContent = 'JS DOM is Awesome!'
p.style = 'color: orangered; font-size: 1.8rem; font-family: monospace;'
div.appendChild(p)

// --------------------------------------------------------------
//                Manipulating element's innerHTML
// --------------------------------------------------------------
div.innerHTML += '<p>This was inserted by adding innerHTML to the &lt;div&gt;</p>'

// However, using the innerHTML causes the web browsers to reparse and recreate all 
//DOM nodes inside the div element. Therefore, it is less efficient than creating 
//a new element and appending to the div. 

// In other words, creating a new element and appending it to the DOM tree provides 
//better performance than the innerHTML.

// --------------------------------------------------------------
//                 #2: createElement is more secure
// --------------------------------------------------------------
// You should use innerHTML to create elements only when the data comes from a 
//trusted source like a database.

// If you set contents that you have no control over to the innerHTML, a
//malicious code may be injected and executed

// --------------------------------------------------------------
//       #3: Using DocumentFragment for Composing DOM Nodes
// --------------------------------------------------------------
let fragment = document.createDocumentFragment()

for(let i = 1; i <= 40; i++) {
  let p = document.createElement('p')
  p.style = 'color: darkblue; font-size: 1.04rem; font-family: monospace;'
  p.textContent = `Paragraph ${i}`
  fragment.appendChild(p)
}

div.appendChild(fragment)