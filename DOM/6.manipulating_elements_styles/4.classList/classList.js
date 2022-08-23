// The classList is a read-only property of an element that returns a live 
//collection of CSS classes:

// The classList is a DOMTokenList object that represents the contents of the 
//element’s class attribute.

// Even though the classList is read-only, but you can manipulate the classes it 
//contains using various methods.

// --------------------------------------------------------------
//             1) Get the CSS classes of an element
// --------------------------------------------------------------
let div = document.querySelector('#content')
console.log(div.classList)

for(let cssClass of div.classList) {
  console.log(cssClass)
}

// --------------------------------------------------------------
//   2) Add one or more classes to the class list of an element
// --------------------------------------------------------------
// To add one or more CSS classes to the class list of an element, you use the 
//add() method of the classList.
div.classList.add('info')
div.classList.add('$uicide')
div.classList.add('satin', 'black', 'jake', 'ghost')
console.log(div.classList)

// --------------------------------------------------------------
//                   3) Remove element’s classes
// --------------------------------------------------------------
div.classList.remove('black', 'info')
console.log(div.classList)

// --------------------------------------------------------------
//                4) Replace a class of an element
// --------------------------------------------------------------
div.classList.replace('ghost', 'warlord')
console.log(div.classList)

// ---------------------------------------------------------------
//         5) Check if an element has a specified class
// ---------------------------------------------------------------
console.log(div.classList.contains('warlord')) // true
console.log(div.classList.contains('ghost')) // false

// ---------------------------------------------------------------
//                       6) Toggle a class
// ---------------------------------------------------------------
let toggleStyle = document.querySelector('#toggleStyle')

toggleStyle.addEventListener('click', () => {
  div.classList.toggle('main-content')
})

