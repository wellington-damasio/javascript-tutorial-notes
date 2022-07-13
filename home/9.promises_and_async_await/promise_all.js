// The promise.all() static method takes an iterable of promises
//     promise.all(iterable)

// The promise.all() method returns a single promise that resolves when all the input promises have 
//been resolved. The returned promise resolves to an array of the results of the input promises

// If one of the input promise rejects, the Promise.all() method immediately returns a promise that
//rejects with an error of the first rejected promise

// In practice, the Promise.all() is useful to aggregate the results from multiple aynchronous 
//operations

// 1) Resolved promises example
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise resolved')
    resolve(10)
  }, 1 * 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise resolved')
    resolve(20)
  }, 2 * 1000);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise resolved')
    resolve(30)
  }, 3 * 1000);
})

Promise.all([p1, p2, p3])
  .then(results => {
    const total = results.reduce((p, c) => p + c)

    console.log(`Results ${results}`)
    console.log(`Total ${total}`)
  })

// 2) Rejected promises example
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The fourth promise has rejected')
    reject('Failed')
  }, 2 * 1000);
})

Promise.all([p1, p4, p2, p3])
  .then(results => {
    console.log(results)
  })
  .catch(error => console.log(error))



