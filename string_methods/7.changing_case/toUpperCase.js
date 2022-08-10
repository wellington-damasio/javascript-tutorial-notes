// The toUpperCase() method returns a new string with all characters converted 
//to uppercase.

// str.toUpperCase()

const message = 'Hello, Wellington'
const MESSAGE = message.toUpperCase()

console.log({message, MESSAGE})

// ---------------------------------------------------------------------
//            Calling toUpperCase method on undefined or null
// ---------------------------------------------------------------------
const getUserRanking = (id) => {
	if(id > 0) return 'Standard'
}

console.log(getUserRanking(1).toUpperCase())
// console.log(getUserRanking(-1).toUpperCase()) // TypeERROR

// Avoiding typeErrors that stop executing the script
console.log(getUserRanking(-1)?.toUpperCase()) // undefined

// ---------------------------------------------------------------------
//                Converting a non-string to a string
// ---------------------------------------------------------------------
const completed = true
const result = String(completed).toUpperCase() 
// String.prototype.toUpperCase.call (would work too)

console.log({result})