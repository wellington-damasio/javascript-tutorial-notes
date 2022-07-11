// Returning multiple values from a function using an array
// Suppose the following getNames() function retrieves the first name and last name from a database
//in the backend or from the result of a third-party API call and returns them as elements of an array

function getNames(){
  let firstName = 'John'
  let lastName = 'Doe'

  return [firstName, lastName]
}

let names = getNames()
let firstName = names[0]
let lastName = names[1]

console.log(names)
console.log(firstName)
console.log(lastName)

// In ES6 you can destructure arrays to unpack values
const [name, secondName] = getNames()

console.log(name)
console.log(secondName)

// Returning multiple values from a function using an object
function getHobbies() {
  let hobbie1 = 'dancing'
  let hobbie2 = 'singing'

  return {
    hobbie1,
    hobbie2
  }
}

const {hobbie1, hobbie2} = getHobbies()

console.log(hobbie1)
console.log(hobbie2)


