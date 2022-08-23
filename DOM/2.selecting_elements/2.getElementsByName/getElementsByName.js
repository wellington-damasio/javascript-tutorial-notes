// Every element on an HTML document may have a name attribute:

/* <input type="radio" name="radiocheck" value="Red Bull"> */

// To get all elements with a specified name, you use the 
//getElementsByName() method of the document object:

const radioButtons = document.getElementsByName('radiocheck')

console.log(radioButtons) // NodeList(4)

// -------------------------------------------------------
//             Manipulating the Ratings Form
// -------------------------------------------------------
const ratings = document.getElementsByName('ratings')
const rateBtn = document.getElementById('btnRate')
const output = document.getElementById('ratings-output')

console.log(ratings, rateBtn, output)

rateBtn.addEventListener('click', event => {
  event.preventDefault()
  
  ratings.forEach(rate => {
    if(rate.checked)
      output.innerText = `You selected: ${rate.value}`
  })
})