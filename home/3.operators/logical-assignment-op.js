// ES2021 introduces three logical assignment operators including:
//   - Logical OR assignment operator (||=)
//   - Logical AND assignment operator (&&=)
//   - Nullish coalesing assignment operator (??=)

// Logical OR assignment operator (||=)
// It accepts two operands and assigns the right operand to the left operand if the left operand is 
//falsy
let x, y
x ||= y
// assigns y to x only if  x is falsy

let title 
title ||= 'undefined'
console.log(title)
// title is falsy (undefined), so console.log() the string 'undefined'

title = 'some title'
console.log(title)

let jsTitle = 'JavaScript'
jsTitle ||= 'untitiled'

console.log(jsTitle)

// x ||= y   ===   x || (x = y) [If x not true, x = y]

// The following example uses the logicl assignment operator to display a defaulty message if the 
//search if the search element is empty

// document.querySelector('.search-result').textContent ||= 'Sorry! No result found'


// ------------
// The Logical AND assignment operator
// This operator only assigns y to x if x is truthy
x &&= y // x && (x = y)

// The following example usese the logical AND assignment operator to change the last  name of a 
// person object if the last name is truthy
let person = {
  firstName: 'Jane',
  lastName: 'Smith',
}

person.lastName &&= 'Doe'
person.nickname &&= 'Jay'
person.nickname ||= 'Doejohn'
console.log(person)
console.log(person.lastName)
console.log(person.nickname)
console.log(person)


// --------
// Nullish coalesing assignment operator
// Only assigns y to x if x is null or undefined
x ??= y // x ?? (x = y)

let user = {
  username: 'Satoshi'
}

user.age ??= 'User age is undefined'

console.log(user)


