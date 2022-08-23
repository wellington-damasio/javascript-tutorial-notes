// To check an element has a specified attribute or not, you use the 
//hasAttribute() method:

  // let result = element.hasAttribute(name)

let button = document.querySelector('#btnSend')
let toggleAttribute = document.querySelector('#btnAttr')

toggleAttribute.addEventListener('click', () => {
  let isDisabled = button.hasAttribute('disabled')
  console.log(isDisabled)
  if(isDisabled) {
    button.removeAttribute('disabled')
    return
  }

   button.setAttribute('disabled', '')
   return
})

// toggleAttribute.setAttribute('disabled', '')
