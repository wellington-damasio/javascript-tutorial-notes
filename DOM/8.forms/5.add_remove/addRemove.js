// The HTMLSelectElement type represents the <select> element. It has the
//add() method that dynamically adds an option to the <select> element and 
//the remove() method that removes an option from the <select> element

// - add(option, existingOption): adds a new element to the <select> before
//an existing option
// - remove(index): removes an option specified by the index from a <select>

// -----------------------------------------------
//                 Adding options
// -----------------------------------------------
// 1) Using the Option constructor and add() method
let newOption = new Option('Option Text', 'OptionValue')

const select = document.querySelector('select')
select.add(newOption, undefined)

// The method will add the option to the end of the options list if the
//second argument is undefined

console.log(select.options)
console.log(select.options[0].value) // It worked

// 2) Using the DOM methods
let otherOption = document.createElement('option')
let optionText = document.createTextNode('More option text...')
otherOption.appendChild(optionText)
otherOption.setAttribute('value', 'otherOptionValue')

select.add(otherOption, 0) // This is above the previous

console.log(otherOption.value) // It worked

// ------------------------------------------------------
//                     Removing Options
// ------------------------------------------------------
// The first way to remove option is to use the method remove() of the
//HTMLSelectElement type.
  // select.remove(0)

// The second way is to reference the option by its index using the options 
//collection and set its value to null
  // select.options[0] = null

// The third way is to use the removeChild() method and remove a specified 
//option.
  // select.removeChild(select.options[0])

// To remove all options of a select element:
  // function removeAll(selectBox) {
  //   while(selectBox.options.length > 0) {
  //     select.remove(0)
  //   }
  // }

// ---------------------------------------------------------
//                 Putting it all together
// ---------------------------------------------------------
const frameworkOptions = document.querySelector('#framework-options')
const frameworkInput = document.querySelector('#framework-input')
const btnAdd = document.querySelector('#btnAdd')
const btnRemove = document.querySelector('#btnRemove')

function validateFrameworkInput(input) {
  if(input.trim() === '') {
    alert('Empty text not valid.')
    return false
  }

  return true
}

btnAdd.addEventListener('click', event => {
  event.preventDefault()

  if(validateFrameworkInput(frameworkInput.value)) {
    // Add to the select the framework user entered
    let newFramework = new Option(frameworkInput.value, frameworkInput.value)

    frameworkOptions.add(newFramework)
  }
})

function getSelectedOptions(optionsList) {
  return [].filter
    .call(optionsList, option => option.selected)
}

btnRemove.addEventListener('click',  event => {
  event.preventDefault()

  let selectedOptions = getSelectedOptions(frameworkOptions)
  console.log(selectedOptions)

  selectedOptions.forEach(option => {
    frameworkOptions.remove(option.index)
  })
})




