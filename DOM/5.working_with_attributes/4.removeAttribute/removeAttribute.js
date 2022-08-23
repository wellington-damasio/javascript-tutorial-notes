// The removeAttribute() removes an attribute with a specified name from an element:

// --------------------------------------------
//                 Usage notes
// --------------------------------------------
// HTML elements have some attributes which are Boolean attributes. To set false to 
//the Boolean attributes, you cannot simply use the setAttribute() method, but you 
//have to remove the attribute entirely using the removeAttribute() method.

// 'readonly' and 'disabled' attributes are set to true when declared in the HTML 
//document, but to disable them you cannot set them to false. You need to remove
//them

let checkbox = document.querySelector('#checkbox')

console.log(checkbox.checked) // true
checkbox.setAttribute('checked', false) // didn't work

checkbox.removeAttribute('checked')
console.log(checkbox.checked) // false