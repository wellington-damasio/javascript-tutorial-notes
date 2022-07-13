// Why use promises? (An example)
function getUsers() {
  return [
    {username: 'john', email: 'john@test.com'},
    {username: 'maria', email: 'maria@test.com'}
  ]
}

function findUser (username) {
  const users = getUsers()
  let user = users.find(user => user.username === username)

  return user
}

console.log(findUser('john'))
console.log(findUser('maria'))
console.log(findUser('joao')) // undefined

// The code in the findUser() function is synchronous and blocking. The findUser() functions executes 
//the getUsers() function to get an user array, calls the find() method on the users array to search
//for a user with a specific username, and returns the matched user.

// In practice, the getUsers() functions may access a databse or call an API to get the user list. 
//Therefore, the getUsers function will have a delay. Let's simulate that:

function getUsers2() {
  let users = []

  setTimeout(() => {
    users = [
      {username: 'mario', email: 'mario@test.com'},
      {username: 'amanda', email: 'amanda@test.com'}
    ]
  }, 1000);

  return users
}


function findUser2(username) {
  const users = getUsers2()
  const user = users.find(user => user.username === username)

  return user
}

console.log(findUser2('mario')) // undefined
console.log(findUser2('amanda')) // undefined

// Because the getUsers() returns an empty array, the users array is empty. When calling the find()
//method on the users array, the method returns undefined

// Using callbacks to deal with an asynchronous operation
function getUsers3(callback) {
  setTimeout(() => {
    callback([
      {username: 'john', email:'john@test.com'},
      {username: 'maria', email:'maria@test.com'}
    ])
  }, 1000);
}

function findUser3(username, callback = console.log) {
  getUsers3(users => {
    const user = users.find(user => user.username === username)
    callback(user)
  })
}

findUser3('john')

// In this example, the getUsers() function accepts a callback function as an argument and invokes it
//with the users array inside the setTimeout() function. Also, the findUser() function accepts a 
//callback function that processes the matched user.

// The callback approach works very well. However, it makes the code more difficult to follow. Also, it
//adds complexity to the functions with callback arguments

// To solve this problem of Callback Hell, JavaScript came up with the idea of Promises

// ------------------------------
//    Understanding Promises
// ------------------------------
// A promise is an object that encapsulates the result of an asynchronous operation
// A promise object has a state that can be one of the following:
//  1) Pending
//  2) Fulfilled with a value
//  3) Rejected for a reason

// ----------------------------------
//        Creating a Promise
// ----------------------------------
// To create a promise object, you use the Promise constructor
// const promise = new Promise((resolve, reject) => {
//   // contain operation
//   
//
//   //return state
//   if(success) {
//     resolve(value)
//   } else {
//     reject(error)
//   }
// })

// The promise constructor accpets a callback function that typically performs an asynchronous 
//operation.
//This function is often referred to as an executor

// If the asynchronous operation completes successfully, the executor will call the resolve() function 
//to change the state of the promise from pending to fulfilled with a value

// In case of an error, the executor will call the reject() function to change the state of the promise
//from pending to rejected with the error

// Once a promise reaches either fulfilled or rejected state, it stays in that state and can't go to 
//another state

// ---------------------------------------------
//  Consuming a Promise: then, catch, finally
// ---------------------------------------------

// 1) The then() method
// To get the value of a Promise when it is fulfilled, you call the then() method of the promise object

//   promise.then(onfulfilled, onRejected)   (both arguments are optional)

function getUsers4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {username: 'wellington', email: 'wellington@test.com'},
        {username: 'fabio', email: 'fabio@test.com'},
        {username: 'maria', email: 'maria@test.com'}
      ])
    }, 1000);
  })
}

function findWelly(users) {
  const welly = users.find(user => user.username === 'wellington')
  console.log(welly)
}

getUsers4()
  .then(findWelly)

getUsers4()
  .then(users => {
    const maria = users.find(user => user.username === 'maria')
    console.log(maria)
  })


// Simulating situations where `reject` is needed
let success = false

function getUsers5() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if(success) {
        resolve([
          {username: 'wellington', email: 'wellington@test.com'},
          {username: 'leonardo', email: 'leonardo@test.com'}
        ])
      } else {
        reject('Failed to load the user list...')
      }

    }, 1000);
  })
}

function onFulfilled(users) {
  console.log(users)
}

function onRejected(error) {
  console.log(error)
}

getUsers5()
  .then(onFulfilled, onRejected)


// 2) The catch() method
// If you want to get the error only when the state of the promise is rejected. you can use the catch()
//method
//          promise.catch(onRejected)

const promiseGetUsers = getUsers5()

promiseGetUsers.catch(error => console.log(error))

// 3) The finally method()
// Sometimes, you want to execute the same piece of code wheter the promise is fulfilled or rejected
const render = () => {//...}

getUsers()
  .then(users => {
    console.log(users)
    render()
  })
  .catch(error) {
    console.log(error)
    render()
  }

// To remove the duplicate and execute the render() method whether the promise is fulfilled or rejected
//you use the finally method

const render = () => {//...}

getUsers()
  .then(users => console.log(users))
  .catch(error => console.log(error))
  .finally(() => render())


