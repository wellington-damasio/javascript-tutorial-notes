// When the JavaScript engine encounters an error, it issues that error and immediately terminates the 
//execution of the entire script.
// Sometimes you want to handle the error and continue the execution. To do that, you use the
//try...catch statement with the following syntax

  // try {
  //   // code may cause error
  // } catch(error) {
  //   // code the handles error
  // }

// If the error occurs in the try block, JavaScript executes the code in the catch block. Also, the
//JavaScript engine provides you with an error object that contains detailed information about the 
//error

// Basically, the error object has two properties:
// - name (specifies the error name)
// - message (explains the error in detail)

// ---------------------------------------------------
//     JavaScript try...catch statement examples
// ---------------------------------------------------
try {
  let result = add(10, 20)
  console.log(result)
} catch(error) {
  console.log({name: error.name, message: error.message})
}
console.log('Bye')

// ---------------------------------------------------
//            Ignoring the catch block
// ---------------------------------------------------
const add = (x, y) => x + y

try {
  let result = add(10, 20)
  console.log(result)
} catch (e) {
  console.log({name: e.name, message: e.message})
}
console.log('Bye')

// ---------------------------------------------------
//           The Exception Identifier
// ---------------------------------------------------
const isValidJSON = str => {
  try {
    JSON.parse(str)
    return true
  } catch {
    return false
  }
}

let valid = isValidJSON(`{"language": "JavaScript"}`)
console.log(valid) // true

let invalid = isValidJSON(`{language: "JavaScript"}`)
console.log(invalid) // false




