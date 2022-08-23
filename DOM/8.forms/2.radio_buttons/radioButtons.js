// Radio buttons allow you to select only one predefined set of mutually 
//exclusive options. To create a radio button, you use type radio input.

// A group of radio buttons is called radio group
const btn = document.querySelector('#btn')
const radioButtons = document.querySelectorAll('input[name="size"]')
const output = document.querySelector('#output')

let selectedSize = ''

btn.addEventListener('click', () => {
  radioButtons.forEach(radioBtn => {
    if(radioBtn.checked) {
      selectedSize = radioBtn.value
      return
    }
  })

  output.textContent = selectedSize ? `Selected Size: ${selectedSize}`
    : 'You haven\'t selected a size yet.' 
})

// ------------------------------------------------------------
//                 Radio button’s change event
// ------------------------------------------------------------
// When you check or uncheck a radio button, it fires the change event. To 
//listen to the change event, you do:
  // radioButton.addEventListener('change', () => {})

// Inside the change event handler, you can access the this keyword to 
//access the radio button.
  // if(this.checked) {

  // }

// To get the value of the checked button, you use the value property:
  // if (this.checked) {
  //   console.log(this.value)
  // }

// -------------------------------------------------------------------------
//              Show selected value when radio button is checked
// -------------------------------------------------------------------------
const sizes = ['Too Big', 'Big', 'Normal', 'Small', 'Too Small']
const group = document.querySelector('#sizesGroup')
const sizesOutput = document.querySelector('#sizesOutput')

group.innerHTML = sizes.map(size => {
  let camelCaseSize = size.toLocaleLowerCase()

  if(size.split(' ').length > 1) {
    let firstLetterLowerCase = size[0].toLowerCase()
    let restWithoutFirstLetter = size.slice(1).split(' ').join('')

    camelCaseSize =  `${firstLetterLowerCase}${restWithoutFirstLetter}`
  }

  return `
  <div>
    <input type="radio" name="otherSizes" id="${camelCaseSize}" value="${size}">
    <label for="${camelCaseSize}">${size}</label>
  </div>
  `
}).join('')

const sizeButtons = document.querySelectorAll('input[name="otherSizes"]')

sizeButtons.forEach(sizeBtn => {
  sizeBtn.addEventListener('change', showSelected)
})

function showSelected (event) {
  if(this.checked) {
    sizesOutput.textContent = `Selected size: ${this.value}`
  }
}
