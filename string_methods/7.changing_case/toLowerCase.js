// The toLowerCase() method returns a new string with all characters converted 
//to lowercase.

const message = 'Hi'
console.log(message.toLowerCase())

// -----------------------------------------------------------------------
//     Calling JavaScript toLowerCase() method on null or undefined
// -----------------------------------------------------------------------
const findUserById = id => {
	if(id > 0) {
		return 'Wellington Damasio (CEO)'
	}

	return null
}

console.log(findUserById(9).toLowerCase())
// console.log(findUserById(-1).toLowerCase()) // TypeError
console.log(findUserById(-1)?.toLowerCase()) // undefined
