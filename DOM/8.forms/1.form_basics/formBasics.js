// JavaScript uses the HTMLFormElement object to represent a form. The 
//HTMLFormElement has the following properties that correspond to the HTML 
//attributes:
// - action: is the URL that processes the form data.
// - method: is the HTTP method which is equivalent to the method attribute

// The HTMLFormELement also provides the following useful methods:
// - submit(): submit the form
// - reset(): reset the form (the data in it)

// ----------------------------------------------------
//                    Referencing forms
// ----------------------------------------------------
  // const form = document.getElementById('subscribe')

// An HTML document can have multiple forms. The document.forms property
//returns a collection of forms (HTMLFormControlsCollection):
  // document.forms

// ----------------------------------------------------
//                   Submitting a form
// ----------------------------------------------------
// Typically, a form has a submit button. When you click it, the browser sends
//the form data to the server
  // <input type="submit" value="Subscribe">
  // <button type="submit">Subscribe</button>

// When you submit the form, the submit event is fired before the request is 
//sent to the server. This gives you a chance to validate the form data. If 
//the form data is invalid, you can stop submitting the form.

// ----------------------------------------------------
//                   Stop Form Submition
// ----------------------------------------------------
let form = document.querySelector('#signup') 

form.addEventListener('submit', event => {
  event.preventDefault()

  // To submit the form call the submit() method

  // if(valideTheForm) {
  //   form.submit
  // }
})

// -----------------------------------------------------
//                 Accessing Form Fields
// -----------------------------------------------------
// The form.elements property stores a collection of the form elements

// JavaScript allows you to aceess an element by index, id or name.
console.log(form.elements)
console.log(form.elements[0]) // input#name (by index)
console.log(form.elements['email']) // input#email (by name)
console.log(form.elements['submit']) // button#submit (by id)

// After accessing a form field, you can use the value property to access 
//it's value:

// You have 3 seconds to type something in the email form before 
//console.log what you've typed
setTimeout(() => {
  console.log(form.elements['email'].value)
}, 3000)

// --------------------------------------------------------------------
//              Developing Forms with JavaScript Example
// --------------------------------------------------------------------
function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small')
  msg.textContent = message

  input.className = type ? "sucess" : "error"
  msg.className = type ? "" : "msg--error"

  return type
}

function showError(input, message) {
  return showMessage(input, message, false)
}

function showSuccess(input) {
  return showMessage(input, "", true)
}

function hasValue(input, message) {
  if (input.value.trim() === "") {
    return showError(input, message)
  }
  
  return showSuccess(input)
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if(!hasValue(input, requiredMsg)) {
    return false
  }

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const email = input.value.trim()

  if(!emailRegex.test(email)) {
    return showError(input, invalidMsg)
  }

  return true
}

const NAME_REQUIRED = 'Please enter your name'
const EMAIL_REQUIRED = 'Please enter your email'
const EMAIL_INVALID = 'Please enter a correct email address format'

form.addEventListener('submit', event => {
  event.preventDefault()

  let nameValid = hasValue(form.elements['name'], NAME_REQUIRED)
  let emailValid = validateEmail(form.elements['email'], EMAIL_REQUIRED, EMAIL_INVALID)

  if(nameValid && emailValid) {
    alert("Demo only. No form was posted.")

    // form.submit()
  }
})
