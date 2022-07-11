// The ternary operator is a simplified way to use if... else statements in your code
let age = 18
let message

if(age >= 16) {
  message = 'You can drive'  
} else {
  message = 'You cannot drive'
}

console.log(message)

// For simple if... else statements like this we can use the ternary operator

age = 15
message = age >= 16 ? 'You can drive' : 'You cannot drive'
console.log(message)

// Using the JavaScript ternary operator to perform multiple statements
let authenticated = true
let nextURL = authenticated 
  ? console.log('You will be redirected to the admin area')
  : console.log('Acess denied (403)')

// Simplifying the ternary operator
let locked = 1
let canChange = locked != 1 ? true : false
console.log(canChange)

locked = 2
canChange = locked != 1 // JavaScript will evaluate logical operations to boolean by default
console.log(canChange)

// Using multiple ternary operators
let speed = 90
let driverMessage = speed >= 120
  ? console.log('Too fast') 
  : speed >= 80 ? console.log('Fast')
  : console.log('OK')

console.log(driverMessage)

