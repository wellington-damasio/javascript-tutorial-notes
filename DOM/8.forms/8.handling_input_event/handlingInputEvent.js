// The input event fires whenever the value of the <input>, <select> or
//<textarea> element changes

let input = document.querySelector('#message')
let result = document.querySelector('#result')

input.addEventListener('input', () => {
  result.textContent = input.value
  console.log(input.value)
})