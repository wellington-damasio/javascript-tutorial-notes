// The Promise.any() method accepts a list of Promise objects as an iterable object

// If one of the promises in the iterable object (array) is fulfilled, the Promise.any() returns  a
//single promise that resolves to a value which is the result of the fulfilled promise

// EXAMPLE 1
//  - The promise1 resolves to a value v1 at t1
//  - The promise 2 resolves to a value v2 at t2
//  - The Promise.any() returns a promise that resolves to a value v1, which is the result of promise1

// EXAMPLE 2
// The Promise.any() returns a promise that is fulfilled with any first fulfilled promise even if some
//promises in the iterable object are reject
//  - The promise1 is rejected with an error at t1
//  - The promise2 is fulfilled to a value v2 ta t2
//  - The Promise.any() returns the promise that resolves to a value v2 which is the result of the 
// promise2. Notice that the method ignores the reject promise

// All Promises Fulfilled Example
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1 fulfilled')
    resolve(1)
  }, 1500);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2 fulfilled')
    resolve(2)
  }, 1000);
})

const p = Promise.any([p1, p2])
  .then(value => {
    console.log('Returned Promise: ' + value)
  })

// One Promise Rejected Example
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 3  rejected')
    reject('error')
  }, 1000);
})

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 4 fulfilled')
    resolve(4)
  }, 3000);
})
 
const d = Promise.any([p3, p4])
  .then(value => console.log('Returned Promise: ' + value))

// All Promises RejectedS
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 5 rejected')
    reject('error5')
  }, 2000);
})

const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 6 reject')
    reject('error6')
  }, 2500);
})

const b = Promise.any([p5, p6])
  .catch(e => {
    console.log(e) // Aggregate Error: All promises were rejected
    console.log(e.errors)
  })


