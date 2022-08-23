// To invoke a dialog with a question and two buttons OK and Cancel, you use the 
//confirm() method of the window object:

// let result = window.confirm(question)

// - The question is an optional string to display in the dialog.
// - The result is a Boolean value indicating whether the OK or Cancel button was 
//clicked. If the OK button is clicked, the result is true; otherwise, the 
//result is false.

// The confirmation dialog is modal and synchronous. It means that the code 
//execution stops when a dialog is displayed and resumes after it has been 
//dismissed.

let button = document.querySelector('button')

button.addEventListener('click', () => {
    let result = confirm('Are you sure you want to delete this data?')

    let message = result ? 'You deleted the data' : 'You canceled your action'

    alert(message)
})

