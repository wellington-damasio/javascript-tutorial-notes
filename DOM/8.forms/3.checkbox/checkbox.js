// -------------------------------------------------------------
//              Checking if a checkbox is checked
// -------------------------------------------------------------
// A checkbox has two states: checked and unchecked

function isChecked(event) {
  if(this.checked) {
    console.log('Checkbox is checked!')
  } else {
    console.log('Checkbox is not checked.')
  }

  console.log(this.checked)
}

let cb = document.querySelector('#accept') 

cb.addEventListener('click', isChecked)

// -------------------------------------------------------------
//           Accepting only if a checkbox is checked
// -------------------------------------------------------------
// In this example, the selector #accept:checked selects the element with 
//the id #accept and has the attribute checked
  // let checked = document.querySelector('#accept:checked') !== null

// -------------------------------------------------------------
//       Getting values of multiple selected checkboxes
// -------------------------------------------------------------
const colorChecks = document.querySelectorAll('input[name="color"]')
const selectedColorsParagrapth = document.querySelector('#selectedColors')
const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
  let colorChecksArray = Array.from(colorChecks)
  console.log(colorChecksArray)
  let selectedColors = colorChecksArray
    .filter(check => check.checked)
    .map(selected => selected.value)
    .join(' ')

  selectedColorsParagrapth.textContent = `You selected: ${selectedColors}`
})

// -------------------------------------------------------------
//                  Check / Uncheck all checkboxes
// -------------------------------------------------------------
let btnAll = document.querySelector('#btnAll')

function check(checked = true) {
  const checkboxes = document.querySelectorAll('input[name="moreColor"]')

  checkboxes.forEach(checkbox => {
    checkbox.checked = checked
  })
}

let shouldCheck = true

btnAll.addEventListener('click', () => {

  if(shouldCheck) {
    check(shouldCheck)
    shouldCheck = false
  } else {
    check(shouldCheck)
    shouldCheck = true
  }
})

// -------------------------------------------------------------
//                  Creating checkboxes dynamically
// -------------------------------------------------------------
const root = document.querySelector('#root')
const people = ['Wellington', 'Marcelo', 'Amanda', 'Pascoal', 'Junior']

people.forEach(personName => {
  let label = document.createElement('label')
  let nameSpan = document.createElement('span')
  let idName = personName.toLowerCase()

  label.setAttribute('for', idName)

  nameSpan.textContent = personName
  nameSpan.style.marginLeft = '5px'
  nameSpan.style.marginRight = '10px'

  let checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('id', idName)
  checkbox.setAttribute('name', idName)
  checkbox.setAttribute('value', personName)

  label.appendChild(checkbox)
  label.appendChild(nameSpan) 

  root.appendChild(label)
})

// Another way to do this would be to use the innerHTML
const morePeople = ['Andressa', 'Jenifer', 'Larissa', 'Manoel']

morePeople.forEach(personName => {
  let lowerPName = personName.toLocaleLowerCase()
  let html = `<label for="person-${lowerPName}">
  <input type="checkbox" id="${lowerPName}" name="${lowerPName}" value="${personName}"> ${personName}
</label>
  `

  root.innerHTML += html
})


