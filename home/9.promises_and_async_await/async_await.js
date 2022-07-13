// Suppose that you need to perform three asynchronous operations in the following sequence:
//  1. Select user from the database
//  2. Get services of the user from an API
//  3. Calculate the service cost based on the services from the server

function getUser(userId, callback) {
  console.log('Get user from the database')
  setTimeout(() => {
    callback({
      userId,
      username: 'Wellington'
    })
  }, 1000);
}

function getServices(user, callback) {
  console.log(`Get services of ${user.username} from the API.`)
  setTimeout(() => {
    callback(['Email', 'VPN', 'CDN'])
  }, 2 * 1000);
}

function getServicesCost(services, callback) {
  console.log(`Calculate service costs of ${services}`)
  setTimeout(() => {
    callback(services.length * 100)
  }, 3 * 1000);
}

// The following shows the nested callback functions
getUser(103, (user) => {
  getServices(user, (services) => {
    getServicesCost(services, (cost) => {
      console.log(`This service cost is $${cost}`)
    })
  })
})

// To avoid this issue of callback hell, ES6 introduced the promises that allow you to write 
//asynchronous code in more namageable ways

function betterGetUser(userId) {
  return new Promise((resolve, reject) => {
    console.log('Getting user from the database...')
    setTimeout(() => {
      resolve({
        userId,
        username: 'Wellington Damasio'
      })
    }, 1000);
  })
}

function betterGetServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Getting services of ${user.username} from the API...`)
    setTimeout(() => {
      resolve(['Email', 'CDN', 'VPS', 'VPN', 'Lambda', 'AWS'])
    }, 2 * 1000);
  })
}

function betterGetServicesCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculating service costs of ${services}...`)
    setTimeout(() => {
      resolve(services.length * 300)
    }, 3 * 1000);
  })
}

betterGetUser(103)
  .then(user => betterGetServices(user))
  .then(services => betterGetServicesCost(services))
  .then(cost => console.log(`The cost of the services will be R$${cost}`))


// ES7 introduced to async/await keywords that build on top of Promises, allowing you to write 
//asynchronous code that looks more like synchronous code and more readable.

// The following defines an async function that calls three asynchronous operations in sequence:
async function showServiceCost() {
  let user = await betterGetUser(201)
  let services = await betterGetServices(user)
  let cost = await betterGetServicesCost(services)

  console.log(`Hi, ${user.username}! The service will cost R$${cost}`)
}

showServiceCost()

// The await will wait for the Promise returned from the f() to settle. The await keyword can only
//be used inside async functions

// The async keyword
async function sayHi() {
  return 'Hi'
}

// The sayHi() function returns a Promise that you can consume this way:
sayHi().then(console.log)

let sayHello = async () => 'Hello, Wellington!'

sayHello().then(console.log)

class Greeter {
  async sayHey() {
    return 'Hey, my man!'
  }
}

const greeter = new Greeter

greeter.sayHey().then(console.log)

// Error Handling
async function getPerson(personId) {
  throw new Error('Invalid User ID')
  // await Promise.reject(new Error('Invalid user ID'))
}
// getPerson(32) // Thrown error


// You can catch the error by using the try...catch statement, the same way as a regular throw
async function getHuman(id) {
  try {
    const user = await Promise.reject(new Error('Invalid user Id'))
  } catch (error) {
    console.log('By try/catch' + error)
  }
}

getHuman(10)




