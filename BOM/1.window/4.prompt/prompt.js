// The prompt() is a method of the window object. The prompt() method instructs 
//the web browser to display a dialog with a text, text input field, and two 
//buttons OK and Cancel.

// let result = window.prompt(message, default)

// - The message is a string to display. If you omit it, nothing will display on 
//the dialog.
// - The default is a string containing the default value of the text input field.

// Like alert() and confirm(), the prompt() is modal and synchronous

// ---------------------------------------------
//            Display a prompt dialog
// ---------------------------------------------
let langBtn = document.querySelector('#langBtn')

langBtn.addEventListener('click', () =>{
    let lang = prompt('What is your favorite programming language:?')

    let feedback = lang.toLowerCase() === 'javascript' ? 'I love JavaScript too!' 
        : `So it's ${lang}... Cool!`

    alert(feedback)
})

// ---------------------------------------------
//        Convert user input to number
// ---------------------------------------------
let ageBtn = document.querySelector('#ageBtn') 

ageBtn.addEventListener('click', () => {
    let getUserAge = prompt('How old are you?')
    let userAge = Number(getUserAge)
    let feedback = userAge >= 18 ? 'Ótimo, você é maior de idade.. 😏'
        : 'Eaí, bebezão? 😺'

    alert(feedback)
})