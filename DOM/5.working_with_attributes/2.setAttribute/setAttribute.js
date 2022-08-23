// To set a value of an attribute on a specified element, you use the 
//setAttribute() method:
  // Element.setAttribute(name, value)

// The name parameter is automatically converted to lowercase if you the 
//setAttribute() on an HTMLElement

// Note that if the attribute already exists on the element, the setAttribute() 
//method updates the value; otherwise, it adds a new attribute with the specified 
//name and value.

let button = document.querySelector('#btnSend')

button.setAttribute('name', 'botaozinhoDoCapeta')
button.setAttribute('disabled', '')

console.log(button.attributes)