// The throw statement allows you to throw an exception.

// When encountering throw statement, the JavaScript engine stops executing and passes the control to 
//the first catch block in the call stack. If no catch block exists, the JavaScript engine terminates
//the script.

// -------------------------------------------------------------
//    Using JavaScript throw statement to throw an exception
// -------------------------------------------------------------
function add(x, y) {
  if(typeof x !== 'number') {
    throw 'First argument must be a number'
  }

  if(typeof y !== 'number') {
    throw 'First argument must be a number'
  }

  return x + y
}

let result = add(3, 2)
console.log(result)

try {
  const result = add(3, 'a')
  console.log(result)
} catch(e) {
  console.log(e)
}


result = add('a', 3)
console.log(result)

// -----------------------------------------------------------------------
//     Using throw statement to throw an instance of the Error class
// -----------------------------------------------------------------------
function add2(x, y) {
  if(typeof x !== 'number') {
    throw new Error('The first argument must be a number')
  }

  if(typeof y !== 'number') {
    throw new Error('The second argument must be a number')
  }

  return x + y
}

try {
  const result = add2(2, 10)
  console.log(result)
} catch(e) {
  console.log(`${e.name}: ${e.message}`) 
}