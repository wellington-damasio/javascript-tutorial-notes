// In JavaScript, all function arguments are always passed by value. It means JavaScript copies the
//values of the variables into the function arguments

// Any changes that you make to the arguments inside the function do not reflect the passing variables
//outside of the fuction. In other words, the changes to the arguments are not reflected outside of
//the function

// EXAMPLE
function times100(number) {
  return number * 100
}

let x = 23
let result = times100(x)
console.log(result)
console.log(x) // x variable didn't change

// Pass-by-value reference values
// It's not obvious to see thet reference values are also passed by values. Ex:
let person = {
  name: 'John',
  age: 24
}

function increaseAge(obj) {
  obj.age += 1
}

increaseAge(person) // 24 + 1 = 25

console.log(person) // 25

increaseAge(person)
increaseAge(person)
increaseAge(person)

console.log(person)

let bobby = {
  name: 'Bob',
  age: 35
}

console.log(bobby)

function decreaseAge(obj) {
  obj.age  -= 1

  obj = {name: 'Lorraine', age: 76}
  obj.age -= 1

  console.log(obj)
}

decreaseAge(bobby)
console.log(bobby)
