// When you read the innerHTML of an element, the web browser has to serialize 
//the HTML fragment of the element’s descendants.

// -----------------------------------------------------------------
//        innerHTML to get the content of the <ul> element
// -----------------------------------------------------------------
let menu = document.querySelector('#menu')
console.log(menu.innerHTML)

// -------------------------------------------------------------------
//                 Examining the current HTML source
// -------------------------------------------------------------------
let li = document.createElement('li')
li.textContent = 'About Us'
menu.appendChild(li)

console.log(menu.innerHTML)

// --------------------------------------------------------------------
//            Setting the innerHTML property of an element
// --------------------------------------------------------------------
  // element.innerHTML = newHTML

// You can remove the entire content of the page with:
  // document.body.innerHTML = ''


  
