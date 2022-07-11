// If you want to execute a statement if the condition is false, you can use an if..else statement
let condition;

if(condition) {
  //...
} else {
  //...
}

// Example:
let age = 18

if(age >= 18) {
  console.log('You can sign up!')
} else {
  console.log('You must be at least 18 to sign up')
}

// Nested if else 


const canIBeAnEnginner = (talent, hardWork) => {
  if(talent) {
    console.log('Yes, you can be an engineer')
  } else if (hardWork) {
    console.log('Yes, you can shurely become an engineer')
  } else {
    console.log('Have you considered trying another carrer?')
  }
}

canIBeAnEnginner(true, false)
canIBeAnEnginner(false, true)
canIBeAnEnginner(false, false)
