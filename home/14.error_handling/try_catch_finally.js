// Sometimes, you wnat to execute a block whether exceptions occur or not. In this case you use the
//try...catch...finally

try {
  // code my cause exceptions
} catch (error) {
  // code to handle exceptions
} finally {
  // code to execute whether exceptions occur or not
}


// ------------------------------------------------
//    try...catch...finally statement example
// ------------------------------------------------
let result = 0

try {
  result = add(20, 30)
} catch (e) {
  console.log(e.message)
} finally {
  console.log({result, add})
}

try {
  function add(x, y) {
    return x + y
  }

  result = add(20, 30)
} catch (e) {
  console.log(e.message)
} finally {
  console.log({result})
}

// ------------------------------------------------
//       try...catch...finally and return
// ------------------------------------------------
function fn() {
  try {
    return 1
  } catch {
    return 2
  } finally {
    return 3
  }
}

  console.log(fn()) // return don't prevent finally from executing

