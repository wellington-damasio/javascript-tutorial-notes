// The change event occurs when the element has completed changing.
// element.addEventListener('change', () => {
//   //handle change...
// })

// ------------------------------------------------------------------
//        Using JavaScript Change Events for Input Elements
// ------------------------------------------------------------------
let input = document.querySelector('#message')
let result = document.querySelector('#result')

input.addEventListener('change', () => {
  result.textContent = input.value
})

// --------------------------------------------------------
//         Using change event for radio buttons
// --------------------------------------------------------
const radioButtons = document.querySelectorAll('input[name="status"]')
const radioResult = document.querySelector('#radioResult')

radioButtons.forEach(radioBtn => {
  radioBtn.addEventListener('change', () => {
    radioResult.textContent = radioBtn.value
  })
})

// -----------------------------------------------------------
//              Using change event for checkboxes
// -----------------------------------------------------------
const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const techResult = document.querySelector('#techResult')

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    techResult.textContent = `That's a ${checkbox.value} change`
  })
})

// -----------------------------------------------------------
//              Using change event for selects
// -----------------------------------------------------------
const langSelect = document.querySelector('#lang')
const langResult = document.querySelector('#selectResult')

langSelect.addEventListener('change', () => {
  langResult.textContent = `You selected: ${langSelect.value}`
})




