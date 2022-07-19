// -----------------------------------------------------------------------
//       Using throw statement to throw a user-defined exception
// -----------------------------------------------------------------------
class NumberError extends Error {
  constructor(value) {
    super(`${value} is not a valid number`)
    this.name = "InvalidNumber"
  }
}
 
// The constructor() of the NumberError class accepts a value that you'll pass into it when creating a
//new instance of the class

// In the constructor() of the NumberError class, we call the constructor of the Error class via the
//`super` and pass a string to it. Also, we override the name of the error to the literal string
//NumberError.

function add3(x, y) {
  if(typeof x !== 'number') {
    throw new NumberError(x)
  }

  if(typeof y !== 'number') {
    throw new NumberError(y)
  }

  return x + y
}

try {
  const result = add3('a', 32)
  console.log(result)
} catch(e) {
  console.log({name: e.name, message: e.message})
}
