// The Promise.race() static method accepts a list of promises as an iterable object and return a new
//promise that fulfills or rejects as soon as there is one promise that fulfills or rejects, with the
//value or reason from that promise

// The name of the Promise.race() implies that all the promises race against each other with a single
//winner, either resolved or rejected

// Some examples 
// 1) promise1 fulfills at t1 and promise2 rejects at t2
//
//  - The promise1 is fulfilled with the value v1 at t1
//  - The promise2 is rejected with the erro at t2
//  - Because the promise1 is resolved earlier than the promise2, the promise1 wins the race. 
//  Therefore, it returns a new promise that is fulfilled with the value v1

// 2) The promise2 rejects at t1 and the promise1 is fulfilled at t2
//  
//  - The promise1 is fulfilled with v1 at t2
//  - The promise2 is rejected with error at t1
//  - Because the promise2 is resolved earlier than the promise1, the promise 2 wins the race. 
//  Therefore it returns a new promise that is rejected with the error at t1

// ----------------------------------
//  1) Simple Promise.race() Example
// -----------------------------------

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved')
    resolve(30)
  }, 1 * 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved')
    resolve(20)
  }, 2 * 1000);
})

Promise.race([p1, p2])
  .then(value => console.log(`Resolved: ${value}`))

const p3 =  new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved')
    resolve(33)
  }, 1.5 * 1000);
})

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The fourth promise has rejected')
    reject('Wow.. An error...')
  }, 3 * 1000);
})

Promise.race([p3, p4])
  .then(value => console.log(`Value: ${value}`))
 

