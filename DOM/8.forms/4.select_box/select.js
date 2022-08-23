// ----------------------------------------------------------
//                The HTMLSelectElement type
// ----------------------------------------------------------
// To interact with <select> element in JavaScript, you use the 
//HTMLSelectElement type

// The HTMLSelectElement type has the following useful properties:

// - selectedIndex: returns a zero-based index of the select option.
//  The selectIndex is -1 if no option is selected.
//  If the <select> allows multiple selections, the selectedIndex returns 
//the value of the first option.

// - value: returns the value of the first selected option element.
//  If there's no selected options it returns a empty string ''

// - multiple: returns true if the <select> allows mutiple selections.

// -------------------------------------------------------------
//                   The selectedIndex property
// -------------------------------------------------------------
let langBtn = document.querySelector('#langBtn')
let language = document.querySelector('#lang')
let langOutup = document.querySelector('#langOutput')

langBtn.addEventListener('click', event => {
  event.preventDefault() // stop submition of the form

  alert(`Selected Index: ${language.selectedIndex} | Selected Language: ${language.value}`)
})

// ---------------------------------------------------------
//                     The value property
// ---------------------------------------------------------
// The value property of the <select> element depends on the <option> and 
//the multiple attribute:
// - If no option is selected, the value property is an empty string

// - If an option is selected and has a value, the value property is the
//value of the selected option

// - If an option is selected and has no value, the value property of the
//select box is the text of the selected option

// - If multiple options are selected, the value proprety of the select
//box is derived from the first selected option 

// ---------------------------------------------------------
//                  The HTMLOptionElement type
// ---------------------------------------------------------
// The HTMLOptionElement represents the <option> element
// The HTMLOptionElement type has the following handy properties:

// - index: the index of the collection of options
// - selected: returns true when the option is selected.
// - text: returns the option's text
// - value: returns the HTML value attribute

// The <select> element has the options property that allows you to access
//the collection options:
  // selectBox.options

// *** Accessing the properties of the second option: ***
  // selectBox.options[1].text
  // selectBox.options[1].value

// *** To get the selected option of a <select> with a single select: ***
  // let selectedOption = selectBox.options[selectBox.selectedIndex]

// ---------------------------------------------------------------------
//      Using 'selected' to determine which options are selected
// ---------------------------------------------------------------------
let girlsForm = document.querySelector('#girls')
let girlsBtn = document.querySelector('#girlsBtn')

girlsBtn.addEventListener('click', event => {
  event.preventDefault()

  const selectedValues = [].filter
    .call(girlsForm.options, option => option.selected)
    .map(option => option.text)
    .join(' | ')
  
  alert(selectedValues)
})

// In this example, the sb.options is an array-like object, so it doesn’t 
//have the filter() methods like an Array object.
