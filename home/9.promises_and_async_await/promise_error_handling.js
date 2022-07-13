function getUserById(id) {
  return new Promise((resolve, reject) => {
    resolve({
      id,
      username: 'admin'
    })
  })
}

console.log(getUserById(17))

// Normal Error
function getUserById2(id) {
  if(typeof id !== 'number' || id <= 0) {
    throw new Error('Invalid id argument')
  }

  return new Promise((resolve, reject) => {
    resolve({
      id,
      username: 'Wellington'
    })
  })
}

console.log(getUserById2(103))
// console.log(getUserById2(0)) // thrown error

// getUserById2('a')
//   .then(user => console.log(user))
//   .catch(err => console.log(err))

try { //  Did not terminate the program
  getUserById2('a')
    .then(user => console.log(user))
    .catch(err => console.log(err))
} catch(error) {
  console.log(`Caught by try/catch ${error}`)
}

// Errors inside the Promise
let authorized = false

function getUserById3(id) {
  return new Promise((resolve, reject) => {
    if(!authorized) {
      throw new Error('Unauthorized access to the user data')
    }

    resolve({
      id,
      username: 'Wellington',
      email: 'wellingtondam@gmail.com'
    })
  })
}

// try {
//   getUserById3(10)
//     .then(user => console.log(user))
//     .catch(err => console.log(err))
// } catch(error) {
//   console.log(`Caught by try/catch ${error}`)
// }

// If you throw an error inside the promise, the catch() method will catch it, not the try/catch


// Calling reject() function
// Throwing an error has the same effect as calling the reject() as illustrated in the following:

function getUserById4(id) {
  return new Promise((resolve, reject) => {
    if(!authorized) {
      reject('Unauthorized access to the user data')
    }

    resolve({
      id,
      username: 'admin'
    })
  })
}

try{
  getUserById4(10)
    .then(user => console.log(user.username))
    .catch(err => console.log(err)) // Did not terminate the program
} catch (error) {
  console.log(`Caught by try/catch  ${error}`)
}

