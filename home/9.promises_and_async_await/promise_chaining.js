// Sometimes, you want to execute two or more related asynchronous operations, where the next operation
//starts with the result from the previous step
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 1000);
})

p.then(result => {
  console.log(result) // 10
  return result * 3
})
  .then(result => {
    console.log(result) // 30
    return result * 3
  })
  .then(result => {
    console.log(result) // 90
    return result * 3
  })

// Because the then() method returns a new Promise with a value resolved to a value, you can call the
//then() method on the return Promise

// Multiple handlers for a promise
let c =  new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33)
  }, 1000);
})

c.then(result => {
  console.log(result) // 33
  return result * 2
})

c.then(result => {
  console.log(result) // 33
  return result * 3
})

c.then(result => {
  console.log(result) // 33
  return result * 11
})

// We have multiple handlers for one promise, These handlers have no relationships. Also, they execute
//independently and don't pass the result from one to another like the promise chain

// Returning a Promise
// When you return a value in the then() method, the then() method returns a new Promise that
//immediately resolves to the return value

let d = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 1.5 * 1000);
})

d.then(result => {
  console.log(result) // 10
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 2)
    }, 1.5 * 1000);
  })
})
  .then(result => {
    console.log(result) // 20
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 3)
      }, 1.5 * 1000);
    })
  })
  .then(result => console.log(result)) // 30

// Refactoring the above function to make it more clean
function generateNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num)
    }, 1.5 * 1000);
  })
}

generateNumber(11)
  .then(result => {
    console.log(result)
    return generateNumber(result * 2)
  })
  .then(result => {
    console.log(result)
    return generateNumber(result * 3)
  })
  .then(result => {
    console.log(result)
    return generateNumber(result * 4)
  })

// Promises with a practical use
// Suppose that you want to perform the following asynchronous operations in sequence:
//   1) Get the uer from the database
//   2) Get the services of the selected user
//   3) Calculate the service cost from the user's services

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log(`Getting the user from the database...`)
    setTimeout(() => {
      resolve({
        userId: userId,
        username: 'welly',
        email: 'welly103@test.com'
      })
    }, 1000);
  })
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Getting the services of the ${user.username} from the API...`)
    setTimeout(() => {
      resolve(['Email', 'VPN', 'CDN'])
    }, 3 * 1000);
  })
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculating the service cost of ${services}...`)
    setTimeout(() => {
      resolve(services.length * 100)
    }, 2 * 1000);
  })
}
//
// getUser(20)
// getServices(getUser(20))
// getServiceCost(['cortar cabelo', 'abrir CNPJ', 'cortar grama', 'lavar casa'])

// getUser(103)
//   .then(getServices)
//   .then(getServiceCost)
//   .then(console.log)

getUser(103)
  .then(user => getServices(user))
  .then(services => getServiceCost(services))
    .then(price => console.log('R$' + price))

