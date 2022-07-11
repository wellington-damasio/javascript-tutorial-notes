// JavaScript `if` statement executes a block of code when a condition is true
let condition
if(condition) {
  // code to execute 
}
// The condition can be a value or an expression. The conditon evaluates to a Boolean value.
// If the condition is true, JavaScript executes the code inside the block, otherwise, we pass for
//the next statement in the code

// Examples of if usage:
let age = 17
function canIDrink(age) {
  if(age >= 18) {
    return 'You can drink!'
  }
  return 'You cannot drink'
}

console.log(canIDrink(age))
console.log(canIDrink(24))

// Nested if statement
function canIDrinkOnThisState(age, state) {
  if(state == 'CA') {
    if(age >= 17) 
      return 'Yes, you can drink'
  }

  if(state == 'KA') {
    if(age >= 21)
      return 'Yes you can drink'
  }
  
  if(state == 'PEN') {
    if(age >= 18) {
      return 'Yes you can drink'
    }
  }

  return 'You\'not allowed to drink'
}

console.log(canIDrinkOnThisState(17, 'CA'))
console.log(canIDrinkOnThisState(16, 'CA'))
console.log(canIDrinkOnThisState(21, 'KA'))
console.log(canIDrinkOnThisState(20, 'KA'))
console.log(canIDrinkOnThisState(17, 'PEN'))
console.log(canIDrinkOnThisState(18, 'PEN'))


